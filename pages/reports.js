import * as React from "react";
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { format } from "date-fns";
import { NextSeo } from "next-seo";

/** pagination setting **/
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function Reports({ reports: dataset, contact }) {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => b.order - a.order);

  /** (財務報表) filting dataset by report_category.name **/
  const report1 = dataset.filter(function (report) {
    return report.report_category.name == "財務報表";
  });
  //console.log(report1);
  /** (贊助明細) filting dataset by report_category.name **/
  const report2 = dataset.filter(function (report) {
    return report.report_category.name == "贊助明細";
  });
  /** (捐款明細) filting dataset by report_category.name **/
  const report3 = dataset.filter(function (report) {
    return report.report_category.name == "捐款明細";
  });
  /** (工作報告) filting dataset by report_category.name **/
  const report4 = dataset.filter(function (report) {
    return report.report_category.name == "工作報告";
  });

  const reportNames = dataset.map((reportName) => {
    let report = reportName.report_category.name;
    return report;
  });
  //console.log(reportNames);

  /** tabs **/
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTab = styled(Tab)(({ theme }) => ({
    color: "#000",
    fontSize: 17,
    alignItems: "start",
    padding: 0,
    borderBottom: "1px solid #C4C4C4",

    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
    },
    [theme.breakpoints.up("md")]: {
      width: "25%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "initial",
    },
    "&.Mui-selected": {
      color: "#000 !important",
      borderBottom: "5px solid #000",
    },
  }));

  const StyledTabList = styled(TabList)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      display: "grid",
    },
  }));
  /** /tabs **/

  /** tables **/
  const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    boxShadow: "unset",
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    color: "#B2B2B2",
    borderBottom: "1px solid black",
    [theme.breakpoints.up("md")]: {
      fontWeight: 600,
      fontSize: 17,
    },
    [theme.breakpoints.down("md")]: {
      fontWeight: 600,
      fontSize: 14,
    },
  }));

  const StyledTableCell2 = styled(TableCell)(({ theme }) => ({
    lineHeight: "unset",
    // vvv change cell height
    padding: 14,

    [theme.breakpoints.up("md")]: {
      padding: 18,
    },
    [theme.breakpoints.down("md")]: {
      padding: 14,
    },

    [theme.breakpoints.up("md")]: {
      fontWeight: 600,
      fontSize: 17,
    },
    [theme.breakpoints.down("md")]: {
      fontWeight: 600,
      fontSize: 14,
    },
  }));
  /** /tables **/

  /** stack Item setting **/
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textAlign: "left",
    color: "#000",
    background: "none",
    boxShadow: "none",
  }));

  /**  pagination setting **/
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sorted.length) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <NextSeo
        title="Hong Foundation 洪建全基金會 ｜ 公開資訊"
        description="Hong Foundation 洪建全基金會：財務報表、贊助明細、捐款明細、工作報告"
        canonical="https://hongfoundation.org.tw/publication"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          /*images: [
            {
              url: "/IMGs/frontPage_bg.png",
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],*/
          site_name: "Hong Foundation",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Nav contact={contact} />
      <Box id="myMenuInPage">
        <div className="active secName">
          <div className="secName_twInPage">公開資訊</div>
          <div className="secName_enInPage">resource</div>
        </div>
      </Box>

      <Box ml={{ xs: 8, md: 28 }} mr={{ xs: 2, md: 8 }} mt={13}>
        <Box sx={{ width: { xs: "74vw", md: "74vw" } }}>
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                //sx={{ display: { xs: "grid", md: "block" } }}
              >
                <StyledTab label="財務報表" value="1" />
                <StyledTab label="贊助明細" value="2" />
                <StyledTab label="捐款明細" value="3" />
                <StyledTab label="工作報告" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: 0, marginTop: 3 }}>
              <StyledTableContainer
                component={Paper}
                //below control the height of table
                sx={{ maxHeight: { xs: "58vw", md: "58vw" } }}
              >
                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>項目名稱</StyledTableCell>
                      <StyledTableCell
                        align="left"
                        sx={{ display: { xs: "none", md: "table-cell" } }}
                      >
                        類型
                      </StyledTableCell>
                      <StyledTableCell
                        align="left"
                        sx={{ display: { xs: "none", md: "table-cell" } }}
                      >
                        更新日期
                      </StyledTableCell>
                      <StyledTableCell align="left">下載</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? report1.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : report1
                    ).map((row) => (
                      <TableRow key={row.title}>
                        <StyledTableCell2 component="th" scope="row">
                          {row.title}
                        </StyledTableCell2>
                        <StyledTableCell2
                          align="left"
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          {row.file.ext}
                        </StyledTableCell2>
                        <StyledTableCell2
                          align="left"
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          {format(new Date(row.file.updated_at), "yyyy-MM-dd")}
                        </StyledTableCell2>
                        <StyledTableCell2 align="left">
                          <a href={row.file.url} target="_blank">
                            <Image
                              src="/IMGs/downloadReport_icon.png"
                              alt="download icon"
                              width={38}
                              height={38}
                            />
                          </a>
                        </StyledTableCell2>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5]}
                        colSpan={0}
                        count={report1.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                        sx={{ border: "none" }}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </StyledTableContainer>
            </TabPanel>
            <TabPanel value="2" sx={{ padding: 0, marginTop: 3 }}>
              <StyledTableContainer
                component={Paper}
                //below control the height of table
                sx={{ maxHeight: { xs: "58vw", md: "58vw" } }}
              >
                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>項目名稱</StyledTableCell>
                      <StyledTableCell
                        align="left"
                        sx={{ display: { xs: "none", md: "table-cell" } }}
                      >
                        類型
                      </StyledTableCell>
                      <StyledTableCell
                        align="left"
                        sx={{ display: { xs: "none", md: "table-cell" } }}
                      >
                        更新日期
                      </StyledTableCell>
                      <StyledTableCell align="left">下載</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? report2.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : report2
                    ).map((row) => (
                      <TableRow key={row.title}>
                        <StyledTableCell2 component="th" scope="row">
                          {row.title}
                        </StyledTableCell2>
                        <StyledTableCell2
                          align="left"
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          {row.file.ext}
                        </StyledTableCell2>
                        <StyledTableCell2
                          align="left"
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          {format(new Date(row.file.updated_at), "yyyy-MM-dd")}
                        </StyledTableCell2>
                        <StyledTableCell2 align="left">
                          <a href={row.file.url} target="_blank">
                            <Image
                              src="/IMGs/downloadReport_icon.png"
                              alt="download icon"
                              width={38}
                              height={38}
                            />
                          </a>
                        </StyledTableCell2>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5]}
                        colSpan={0}
                        count={report1.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                        sx={{ border: "none" }}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </StyledTableContainer>
            </TabPanel>
            <TabPanel value="3" sx={{ padding: 0, marginTop: 3 }}>
              <StyledTableContainer
                component={Paper}
                //below control the height of table
                sx={{ maxHeight: { xs: "58vw", md: "58vw" } }}
              >
                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>項目名稱</StyledTableCell>
                      <StyledTableCell
                        align="left"
                        sx={{ display: { xs: "none", md: "table-cell" } }}
                      >
                        類型
                      </StyledTableCell>
                      <StyledTableCell
                        align="left"
                        sx={{ display: { xs: "none", md: "table-cell" } }}
                      >
                        更新日期
                      </StyledTableCell>
                      <StyledTableCell align="left">下載</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? report3.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : report3
                    ).map((row) => (
                      <TableRow key={row.title}>
                        <StyledTableCell2 component="th" scope="row">
                          {row.title}
                        </StyledTableCell2>
                        <StyledTableCell2
                          align="left"
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          {row.file.ext}
                        </StyledTableCell2>
                        <StyledTableCell2
                          align="left"
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          {format(new Date(row.file.updated_at), "yyyy-MM-dd")}
                        </StyledTableCell2>
                        <StyledTableCell2 align="left">
                          <a href={row.file.url} target="_blank">
                            <Image
                              src="/IMGs/downloadReport_icon.png"
                              alt="download icon"
                              width={38}
                              height={38}
                            />
                          </a>
                        </StyledTableCell2>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5]}
                        colSpan={0}
                        count={report1.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                        sx={{ border: "none" }}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </StyledTableContainer>
            </TabPanel>
            <TabPanel value="4" sx={{ padding: 0, marginTop: 3 }}>
              <StyledTableContainer
                component={Paper}
                //below control the height of table
                sx={{ maxHeight: { xs: "58vw", md: "58vw" } }}
              >
                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>項目名稱</StyledTableCell>
                      <StyledTableCell
                        align="left"
                        sx={{ display: { xs: "none", md: "table-cell" } }}
                      >
                        類型
                      </StyledTableCell>
                      <StyledTableCell
                        align="left"
                        sx={{ display: { xs: "none", md: "table-cell" } }}
                      >
                        更新日期
                      </StyledTableCell>
                      <StyledTableCell align="left">下載</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? report4.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : report4
                    ).map((row) => (
                      <TableRow key={row.title}>
                        <StyledTableCell2 component="th" scope="row">
                          {row.title}
                        </StyledTableCell2>
                        <StyledTableCell2
                          align="left"
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          {row.file.ext}
                        </StyledTableCell2>
                        <StyledTableCell2
                          align="left"
                          sx={{ display: { xs: "none", md: "table-cell" } }}
                        >
                          {format(new Date(row.file.updated_at), "yyyy-MM-dd")}
                        </StyledTableCell2>
                        <StyledTableCell2 align="left">
                          <a href={row.file.url} target="_blank">
                            <Image
                              src="/IMGs/downloadReport_icon.png"
                              alt="download icon"
                              width={38}
                              height={38}
                            />
                          </a>
                        </StyledTableCell2>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5]}
                        colSpan={0}
                        count={report1.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                        sx={{ border: "none" }}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </StyledTableContainer>
            </TabPanel>
          </TabContext>
        </Box>
        <Box
          sx={{
            //lineHeight: 1.3,
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
            //width: { xs: "74vw", md: "74vw" },
          }}
        >
          <Link href="/main#facts">
            <Stack
              direction="row"
              spacing={0}
              sx={{ position: "fixed", bottom: { md: 28, xl: 68 } }}
              height={"38px"}
            >
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#000" }}
              />
              <Item>
                <Box
                  pl={1}
                  sx={{
                    lineHeight: "38px",
                    textTransform: "uppercase",
                    fontSize: { md: 12, xl: 15 },
                    fontWeight: 700,
                  }}
                >
                  返回 back
                </Box>
              </Item>
              <Item>
                <Box pr={1}>
                  <Image
                    src="/IMGs/back_icon.png"
                    alt="back icon"
                    width={38}
                    height={38}
                  />
                </Box>
              </Item>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#000" }}
              />
            </Stack>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [reports, contact] = await Promise.all([
    await fetchAPI("/reports"),
    await fetchAPI("/contact"),
  ]);

  return {
    props: { reports, contact },
    //revalidate: 1,
  };
}

export default Reports;

Reports.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
