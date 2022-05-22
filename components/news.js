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
    paddingBottom: 0,
    paddingLeft: 0,
  },
  /* gap between table rows */
  [`&.${tableCellClasses.root}`]: {
    borderBottom: "1px solid rgba(0, 0, 0, 1)",
  },
}));
const StyledTableRow = styled(TableRow)(() => ({
  borderTop: "1px solid rgba(0, 0, 0, 1)",
  height: "130px",
}));

/** react-slick setting **/
const settings = {
  infinite: false,
  //className: "center",
  centerMode: false,
  dots: true,
  //centerPadding: "500px",
  slidesToShow: 2,
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
  slidesToShow: 1.5,
  slidesToScroll: 1,
  speed: 700,
  swipeToSlide: true,
  //nextArrow: <SampleNextArrow />,
  //prevArrow: <SamplePrevArrow />,
  adaptiveHeight: true,
  //infinite: true,
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
export default function News({ news: dataset }) {
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
      <Box sx={{ display: { xs: "block", md: "block" } }}>
        <TableContainer
          component={Paper}
          sx={{ border: "none", boxShadow: "none" }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "77.5vw" },
              maxWidth: { xs: "100%", md: "1180px", lg: "1180px" },
              // maxWidth: { xs: "600px", md: "954px" },
            }}
            // ml={"auto"}
            // mr={"auto"}
            pt={{ xs: 0, sm: 5, md: 0 }}
            pb={{ xs: 3, sm: 5, md: 20 }}
            ml={{ xs: 4, sm: 4, md: 6, xl: 16 }}
            pr={{ xs: 7, sm: 7, md: 0 }}
          >
            <Table
              sx={{ minWidth: { xs: "100%", md: 500 } }}
              aria-label="custom pagination table"
            >
              <TableBody>
                {(rowsPerPage > 0
                  ? sorted.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : sorted
                ).map((news) => (
                  <StyledTableRow key={news.id}>
                    <StyledTableCell style={{ width: "20%" }} align="left">
                      <a href={news.link} target="_blank">
                        <Box
                          ml={0}
                          sx={{
                            fontSize: { xs: 14, md: 17, lg: 17 },
                            fontWeight: 600,
                          }}
                        >
                          <Box component="span">
                            {format(new Date(news.start_date), "yyyy.MM.dd")}
                          </Box>
                          <Box component="span">{news.end_date && `-`}</Box>
                          <Box>
                            {news.end_date &&
                              format(new Date(news.end_date), "yyyy.MM.dd")}
                          </Box>
                          <Box
                            sx={{
                              textAlign: "left",
                              fontSize: { xs: 14, md: 17, lg: 17 },
                            }}
                          >
                            {news.news_categories &&
                              news.news_categories.map((cat) => (
                                <Box key={cat.id}>{cat.name}</Box>
                              ))}
                          </Box>
                        </Box>
                      </a>
                    </StyledTableCell>

                    <StyledTableCell style={{ width: "60%" }} align="left">
                      <a href={news.link} target="_blank">
                        <Box
                          sx={{
                            fontSize: { xs: 14, md: 20, lg: 20 },
                            fontFamily: "Helvetica Neue",
                          }}
                          mt={{ xs: 2, md: 4 }}
                        >
                          <ReactMarkdown>{news.title}</ReactMarkdown>
                        </Box>
                      </a>
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
      {/*
      <Box sx={{ display: { xs: "block", md: "none" } }} mt={8} ml={9} pb={8}>
        <Slider {...settingsMobile}>
          {sorted &&
            sorted.map((news) => (
              <Box
                key={news.id}
                sx={{ width: "100vw" }}
                //className={styles.slideBg}
              >
                <Box
                  className={styles.slideBg}
                  sx={{ height: "100%", padding: 0.5 }}
                >
                  <Stack direction="column" spacing={0.5}>
                    <Item>
                      <Box sx={{ fontSize: 15, fontWeight: 700 }}>
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
                      <Box
                        sx={{
                          fontSize: 15,
                          marginTop: 0.5,
                          fontFamily: "Helvetica Neue",
                        }}
                      >
                        <ReactMarkdown>{news.title}</ReactMarkdown>
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: 12 }}>
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
      </Box>*/}
      {/* /mobile */}
    </>
  );
}
