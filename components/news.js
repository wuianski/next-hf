import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";
import ReactMarkdown from "react-markdown";
import Slider from "react-slick";
import Stack from "@mui/material/Stack";
import styles from "./news.module.css";

import { format } from "date-fns";

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

/** style table cell and table row **/
const StyledTableCell = styled(TableCell)(() => ({
  verticalAlign: "initial",
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    //verticalAlign: "top",
    //paddingTop: 0,
  },
  /* gap between table rows */
  [`&.${tableCellClasses.root}`]: {
    borderBottom: "8px solid rgba(255, 255, 255, 1)",
  },
}));
const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    background:
      "linear-gradient(270deg, rgba(176, 147, 54, 0) 1%, rgba(176, 147, 54, 0.8) 99%)",
  },
  "&:nth-of-type(even)": {
    background:
      "linear-gradient(270deg, rgba(187, 187, 187, 0) 1%, rgba(187, 187, 187, 0.8) 99%)",
  },
  /* hide last border */
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

/** react-slick setting **/
const settings = {
  infinite: false,
  //className: "center",
  centerMode: false,
  dots: true,
  //centerPadding: "500px",
  slidesToShow: 1.5,
  slidesToScroll: 1,
  speed: 700,
  swipeToSlide: true,
  //nextArrow: <SampleNextArrow />,
  //prevArrow: <SamplePrevArrow />,
};

/** react-slick setting for mobile **/
const settingsMobile = {
  infinite: false,
  //className: "center",
  centerMode: false,
  dots: true,
  //centerPadding: "500px",
  slidesToShow: 1.3,
  slidesToScroll: 1,
  speed: 700,
  swipeToSlide: true,
  //nextArrow: <SampleNextArrow />,
  //prevArrow: <SamplePrevArrow />,
};

/** stack Item setting **/
const Item = styled(Paper)(({ theme }) => ({
  //...theme.typography.body2,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  textAlign: "left",
  color: "#000",
  background: "none",
  boxShadow: "none",
}));

/**  main function **/
export default function News({ news: dataset, newsAnnounce: dataset2 }) {
  /** sorting dataset by start_date in the Object **/
  function sortByDate(a, b) {
    if (a.start_date < b.start_date) {
      return 1;
    }
    if (a.start_date > b.start_date) {
      return -1;
    }
    return 0;
  }
  const sorted = dataset.sort(sortByDate);
  //console.log(sorted);

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
    setRowsPerPage(parseInt(event.target.value, 2));
    setPage(0);
  };

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <TableContainer
          component={Paper}
          sx={{ border: "none", boxShadow: "none" }}
        >
          <Box ml={33} mr={13} mt={10}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableBody>
                {(rowsPerPage > 0
                  ? sorted.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : sorted
                ).map((news) => (
                  <StyledTableRow key={news.id}>
                    <StyledTableCell style={{ width: "30vw" }} align="left">
                      <Box
                        ml={13}
                        sx={{
                          fontSize: { md: 15, xl: 18 },
                          fontWeight: 600,
                        }}
                      >
                        <Box component="span">
                          {format(new Date(news.start_date), "yyyy.MM.dd")}
                        </Box>
                        <Box component="span">{news.end_date && ` - `}</Box>
                        <Box>
                          {news.end_date &&
                            format(new Date(news.end_date), "yyyy.MM.dd")}
                        </Box>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "50vw" }} align="left">
                      <Box
                        sx={{
                          fontSize: { md: 14, xl: 17 },
                          //marginTop: 0.5,
                        }}
                      >
                        <ReactMarkdown>{news.title}</ReactMarkdown>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20vw" }} align="right">
                      <Box sx={{ textAlign: "right" }}>
                        {news.news_categories &&
                          news.news_categories.map((cat) => (
                            <Box key={cat.id}>{cat.name}</Box>
                          ))}
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5]}
                    colSpan={3}
                    count={sorted.length}
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
          </Box>
        </TableContainer>
      </Box>

      {/* mobile */}
      <Box sx={{ display: { xs: "block", md: "none" } }} mt={2} ml={8} pb={6}>
        <Slider {...settingsMobile}>
          {sorted &&
            sorted.map((news) => (
              <Box
                key={news.id}
                sx={{ width: "100vw" }}
                //className={styles.slideBg}
              >
                <Box className={styles.slideBg} sx={{ height: "33vh" }}>
                  <Stack direction="column" spacing={1}>
                    <Item>
                      <Box sx={{ fontSize: 21, fontWeight: 700 }}>
                        <Box component="span">
                          {format(new Date(news.start_date), "yyyy.MM.dd")}
                        </Box>
                        <Box component="span">{news.end_date && ` - `}</Box>
                        <Box>
                          {news.end_date &&
                            format(new Date(news.end_date), "yyyy.MM.dd")}
                        </Box>
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: 18, marginTop: 0.5 }}>
                        <ReactMarkdown>{news.title}</ReactMarkdown>
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: 13 }}>
                        {news.news_categories &&
                          news.news_categories.map((cat) => (
                            <Box key={cat.id}>{cat.name}</Box>
                          ))}
                      </Box>
                    </Item>
                  </Stack>
                </Box>
              </Box>
            ))}
        </Slider>
      </Box>
      {/* /mobile */}

      <Box
        ml={{ xs: 8, md: 33 }}
        mr={{ xs: 2, md: 13 }}
        sx={{
          marginTop: { xs: "2vh", md: "3vh", xl: "8vh" },
          height: { xs: "20vh", md: "10vh" },
        }}
      >
        <Slider {...settings}>
          {dataset2 &&
            dataset2.map((announcement) => (
              <Box pr={1} key={announcement.id}>
                <Box
                  sx={{
                    border: "1px solid #000",
                    padding: 1,
                    minHeight: { xs: "140px", md: "68px" },
                  }}
                >
                  <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                    <Item>
                      <Box
                        sx={{
                          fontSize: { xs: 15, xl: 15 },
                          fontWeight: 700,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {announcement.title}
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: { xs: 12, xl: 13 } }}>
                        {announcement.content}
                      </Box>
                    </Item>
                  </Stack>
                </Box>
              </Box>
            ))}
        </Slider>
      </Box>
    </>
  );
}
