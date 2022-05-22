import * as React from "react";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
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
import { motion } from "framer-motion";

/** pagination setting **/
function TablePaginationActions1(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const handleBackButtonClick1 = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick1 = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick1}
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
        onClick={handleNextButtonClick1}
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

TablePaginationActions1.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function TablePaginationActions2(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const handleBackButtonClick2 = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick2 = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick2}
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
        onClick={handleNextButtonClick2}
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

TablePaginationActions2.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function TablePaginationActions3(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const handleBackButtonClick3 = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick3 = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick3}
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
        onClick={handleNextButtonClick3}
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

TablePaginationActions3.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function TablePaginationActions4(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const handleBackButtonClick4 = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick4 = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick4}
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
        onClick={handleNextButtonClick4}
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

TablePaginationActions4.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
/** /pagination setting **/

function Reports({ reports: dataset, contact, projects: datasetP }) {
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
    marginRight: "20px",
    borderBottom: "1px solid #C4C4C4",

    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
    },
    [theme.breakpoints.up("md")]: {
      width: "23.3%",
      padding: "0px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "initial",
    },
    "&.Mui-selected": {
      /*color: "#000 !important",*/
      borderBottom: "5px solid",
      borderImage:
        "linear-gradient(90deg, #B09336 27.08%, rgba(176, 147, 54, 0.5) 56.25%, rgba(176, 147, 54, 0.3) 80.28%, rgba(176, 147, 54, 0) 100%)",
      borderImageSlice: 1,
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
    paddingLeft: 0,
    [theme.breakpoints.up("md")]: {
      fontWeight: 500,
      fontSize: 17,
    },
    [theme.breakpoints.down("md")]: {
      fontWeight: 500,
      fontSize: 14,
    },
  }));

  const StyledTableCell2 = styled(TableCell)(({ theme }) => ({
    lineHeight: "unset",
    // vvv change cell height
    paddingLeft: 0,
    paddingRight: 0,

    [theme.breakpoints.up("md")]: {
      padding: 18,
    },
    [theme.breakpoints.down("md")]: {
      padding: 14,
    },

    [theme.breakpoints.up("md")]: {
      fontWeight: 500,
      fontSize: 17,
    },
    [theme.breakpoints.down("md")]: {
      fontWeight: 500,
      fontSize: 14,
    },
  }));
  /** /tables **/

  /** stack Item setting **/
  const Item = styled(Paper)(({ theme }) => ({
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textAlign: "left",
    color: "#000",
    background: "none",
    boxShadow: "none",
  }));

  /**  pagination setting **/
  const [page1, setPage1] = React.useState(0);
  const [rowsPerPage1, setRowsPerPage1] = React.useState(4);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows1 =
    page1 > 0 ? Math.max(0, (1 + page1) * rowsPerPage1 - report1.length) : 0;
  const handleChangePage1 = (event, newPage1) => {
    setPage1(newPage1);
  };
  const handleChangeRowsPerPage1 = (event) => {
    setRowsPerPage1(parseInt(event.target.value, 10));
    setPage1(0);
  };

  const [page2, setPage2] = React.useState(0);
  const [rowsPerPage2, setRowsPerPage2] = React.useState(4);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows2 =
    page2 > 0 ? Math.max(0, (1 + page2) * rowsPerPage2 - report2.length) : 0;
  const handleChangePage2 = (event, newPage2) => {
    setPage2(newPage2);
  };
  const handleChangeRowsPerPage2 = (event) => {
    setRowsPerPage2(parseInt(event.target.value, 10));
    setPage2(0);
  };

  const [page3, setPage3] = React.useState(0);
  const [rowsPerPage3, setRowsPerPage3] = React.useState(4);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows3 =
    page3 > 0 ? Math.max(0, (1 + page3) * rowsPerPage3 - report3.length) : 0;
  const handleChangePage3 = (event, newPage3) => {
    setPage3(newPage3);
  };
  const handleChangeRowsPerPage3 = (event) => {
    setRowsPerPage3(parseInt(event.target.value, 10));
    setPage3(0);
  };

  const [page4, setPage4] = React.useState(0);
  const [rowsPerPage4, setRowsPerPage4] = React.useState(4);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows4 =
    page4 > 0 ? Math.max(0, (1 + page4) * rowsPerPage4 - report4.length) : 0;
  const handleChangePage4 = (event, newPage4) => {
    setPage4(newPage4);
  };
  const handleChangeRowsPerPage4 = (event) => {
    setRowsPerPage4(parseInt(event.target.value, 10));
    setPage4(0);
  };

  /* CHANGE programs ARRAY SORTING BY ID*/
  !datasetP ? null : datasetP.sort((a, b) => a.id - b.id);
  const mydataset = datasetP.slice(0, 3);

  return (
    <>
      <NextSeo
        title="Hong Foundation 洪建全基金會 ｜ 報表"
        description="Hong Foundation 洪建全基金會：財務報表、贊助明細、捐款明細、工作報告"
        canonical="https://hongfoundation.org.tw/reports"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description:
            "Hong Foundation 洪建全基金會：財務報表、贊助明細、捐款明細、工作報告",
          site_name: "Hong Foundation 洪建全基金會",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Nav contact={contact} projects={datasetP} />
      {/* sub-menu */}
      <Box className="subMenuInAbooutPage">
        <ul className="subMenuInAbooutPage_ul">
          <li className="subMenuInAbooutPage_li">
            <Link href="/about">關於</Link>
          </li>
          <li className="subMenuInAbooutPage_li">
            <Link href="/about/members">成員</Link>
          </li>
          <li className="subMenuInAbooutPage_li">
            <a href="/about/resource">公開資訊</a>
          </li>
          <li className="subMenuInAbooutPage_li">
            <a href="/about/timeline">大事記</a>
          </li>
          <li className="subMenuInAbooutPage_li active">
            <a href="/about/reports">報表</a>
          </li>
        </ul>
        <Box
          mt={{ xs: -0.2, sm: 2.2, md: 3 }}
          ml={"auto"}
          mr={"auto"}
          sx={{
            width: { xs: "90vw", sm: "93vw", md: "80vw" },
            maxWidth: "954px",
            height: 2,
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 12.68%, #000000 87.11%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </Box>
      {/* reports content */}
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { delay: 0.3 },
          },
        }}
      > */}
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          maxWidth: { xs: "100%", sm: "100%", md: "954px" },
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 27, sm: 36, md: 36 }}
        pl={{ xs: 1, sm: 0, md: 0 }}
        pb={9}
      >
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
          <TabPanel value="1" sx={{ padding: 0, marginTop: 6 }}>
            <StyledTableContainer
              component={Paper}
              //below control the height of table
              sx={{ maxHeight: { xs: "unset", md: "58vw" } }}
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
                    <StyledTableCell align="right">下載</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage1 > 0
                    ? report1.slice(
                        page1 * rowsPerPage1,
                        page1 * rowsPerPage1 + rowsPerPage1
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
                      <StyledTableCell2 align="right">
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
                      rowsPerPageOptions={[4]}
                      colSpan={0}
                      count={report1.length}
                      rowsPerPage={rowsPerPage1}
                      page={page1}
                      onPageChange={handleChangePage1}
                      onRowsPerPageChange={handleChangeRowsPerPage1}
                      ActionsComponent={TablePaginationActions1}
                      sx={{ border: "none" }}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </StyledTableContainer>
          </TabPanel>
          <TabPanel value="2" sx={{ padding: 0, marginTop: 6 }}>
            <StyledTableContainer
              component={Paper}
              //below control the height of table
              sx={{ maxHeight: { xs: "unset", md: "58vw" } }}
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
                    <StyledTableCell align="right">下載</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage2 > 0
                    ? report2.slice(
                        page2 * rowsPerPage2,
                        page2 * rowsPerPage2 + rowsPerPage2
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
                      <StyledTableCell2 align="right">
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
                      rowsPerPageOptions={[4]}
                      colSpan={0}
                      count={report2.length}
                      rowsPerPage={rowsPerPage2}
                      page={page2}
                      onPageChange={handleChangePage2}
                      onRowsPerPageChange={handleChangeRowsPerPage2}
                      ActionsComponent={TablePaginationActions2}
                      sx={{ border: "none" }}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </StyledTableContainer>
          </TabPanel>
          <TabPanel value="3" sx={{ padding: 0, marginTop: 6 }}>
            <StyledTableContainer
              component={Paper}
              //below control the height of table
              sx={{ maxHeight: { xs: "unset", md: "58vw" } }}
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
                    <StyledTableCell align="right">下載</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage3 > 0
                    ? report3.slice(
                        page3 * rowsPerPage3,
                        page3 * rowsPerPage3 + rowsPerPage3
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
                      <StyledTableCell2 align="right">
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
                      rowsPerPageOptions={[4]}
                      colSpan={0}
                      count={report3.length}
                      rowsPerPage={rowsPerPage3}
                      page={page3}
                      onPageChange={handleChangePage3}
                      onRowsPerPageChange={handleChangeRowsPerPage3}
                      ActionsComponent={TablePaginationActions3}
                      sx={{ border: "none" }}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </StyledTableContainer>
          </TabPanel>
          <TabPanel value="4" sx={{ padding: 0, marginTop: 6 }}>
            <StyledTableContainer
              component={Paper}
              //below control the height of table
              sx={{ maxHeight: { xs: "unset", md: "58vw" } }}
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
                    <StyledTableCell align="right">下載</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage4 > 0
                    ? report4.slice(
                        page4 * rowsPerPage4,
                        page4 * rowsPerPage4 + rowsPerPage4
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
                      <StyledTableCell2 align="right">
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
                      rowsPerPageOptions={[4]}
                      colSpan={0}
                      count={report4.length}
                      rowsPerPage={rowsPerPage4}
                      page={page4}
                      onPageChange={handleChangePage4}
                      onRowsPerPageChange={handleChangeRowsPerPage4}
                      ActionsComponent={TablePaginationActions4}
                      sx={{ border: "none" }}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </StyledTableContainer>
          </TabPanel>
        </TabContext>
      </Box>
      {/* </motion.div> */}
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [reports, contact, projects] = await Promise.all([
    await fetchAPI("/reports"),
    await fetchAPI("/contact"),
    await fetchAPI("/projects"),
  ]);

  return {
    props: { reports, contact, projects },
    //revalidate: 1,
  };
}

export default Reports;

Reports.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
