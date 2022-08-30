import * as React from "react";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { VictoryPie, VictoryLabel } from "victory";
import { VictoryChart, VictoryBar, VictoryStack, VictoryAxis } from "victory";
import { NextSeo } from "next-seo";

import ps_logo from "../../public/IMGs/ps_logo.png";
import ml_logo from "../../public/IMGs/ml_logo.png";
import php_logo from "../../public/IMGs/php_logo.png";
import inR from "../../public/IMGs/inR.png";
import inL from "../../public/IMGs/inL.png";

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
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { format } from "date-fns";

/** report's pagination setting **/
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
/** /report's pagination setting **/

function Resource({
  sponsorships: datasetS,
  contact,
  projects: datasetP,
  reports: dataset,
}) {
  /** react-slick setting **/
  const settings = {
    infinite: false,
    dots: true,
    //className: "center",
    //centerMode: true,
    //centerPadding: "500px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipeToSlide: true,
  };

  /** stack Item setting **/
  const Item = styled(Paper)(({ theme }) => ({
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textAlign: "left",
    color: "#000",
    background: "none",
    boxShadow: "none",
  }));

  /** pie chart **/
  /* filter out only year 0, which is total founding from past untill now  */
  const y0Arr = datasetS.filter(function (sponsorship) {
    return sponsorship.year == 0;
  });
  /* redefine array for victory chart */
  const y0_educate = y0Arr[0].educate;
  const y0_art = y0Arr[0].art;
  const y0_scholarship = y0Arr[0].scholarship;
  const y0_other = y0Arr[0].other;
  const new_y0Arr = [
    { name: "教育", p: y0_educate },
    { name: "藝術", p: y0_art },
    { name: "助學", p: y0_scholarship },
    { name: "文哲", p: y0_other },
  ];
  /** /pie chart **/

  /** stack bar1 chart **/
  /* filter out only year 1971 */
  const y1971Arr = datasetS.filter(function (sponsorship) {
    return sponsorship.year == 1971;
  });
  const y1971_educate = y1971Arr[0].educate;
  const y1971_art = y1971Arr[0].art;
  const y1971_scholarship = y1971Arr[0].scholarship;
  const y1971_other = y1971Arr[0].other;
  /* filter out only year 1981 */
  const y1981Arr = datasetS.filter(function (sponsorship) {
    return sponsorship.year == 1981;
  });
  const y1981_educate = y1981Arr[0].educate;
  const y1981_art = y1981Arr[0].art;
  const y1981_scholarship = y1981Arr[0].scholarship;
  const y1981_other = y1981Arr[0].other;
  /* filter out only year 1991 */
  const y1991Arr = datasetS.filter(function (sponsorship) {
    return sponsorship.year == 1991;
  });
  const y1991_educate = y1991Arr[0].educate;
  const y1991_art = y1991Arr[0].art;
  const y1991_scholarship = y1991Arr[0].scholarship;
  const y1991_other = y1991Arr[0].other;
  /* filter out only year 2001 */
  const y2001Arr = datasetS.filter(function (sponsorship) {
    return sponsorship.year == 2001;
  });
  const y2001_educate = y2001Arr[0].educate;
  const y2001_art = y2001Arr[0].art;
  const y2001_scholarship = y2001Arr[0].scholarship;
  const y2001_other = y2001Arr[0].other;
  /* filter out only year 2011 */
  const y2011Arr = datasetS.filter(function (sponsorship) {
    return sponsorship.year == 2011;
  });
  const y2011_educate = y2011Arr[0].educate;
  const y2011_art = y2011Arr[0].art;
  const y2011_scholarship = y2011Arr[0].scholarship;
  const y2011_other = y2011Arr[0].other;
  const bar1Dataset = [
    [
      { x: "a", y: y1971_educate },
      { x: "b", y: y1981_educate },
      { x: "c", y: y1991_educate },
      { x: "d", y: y2001_educate },
      { x: "e", y: y2011_educate },
    ],
    [
      { x: "a", y: y1971_art },
      { x: "b", y: y1981_art },
      { x: "c", y: y1991_art },
      { x: "d", y: y2001_art },
      { x: "e", y: y2011_art },
    ],
    [
      { x: "a", y: y1971_scholarship },
      { x: "b", y: y1981_scholarship },
      { x: "c", y: y1991_scholarship },
      { x: "d", y: y2001_scholarship },
      { x: "e", y: y2011_scholarship },
    ],
    [
      { x: "a", y: y1971_other },
      { x: "b", y: y1981_other },
      { x: "c", y: y1991_other },
      { x: "d", y: y2001_other },
      { x: "e", y: y2011_other },
    ],
  ];

  class Bar1 extends React.Component {
    // This is an example of a function you might use to transform your data to make 100% data
    transformData(dataset) {
      const totals = dataset[0].map((data, i) => {
        return dataset.reduce((memo, curr) => {
          return memo + curr[i].y;
        }, 0);
      });
      return dataset.map((data) => {
        return data.map((datum, i) => {
          return { x: datum.x, y: (datum.y / totals[i]) * 100 };
        });
      });
    }

    render() {
      const dataset = this.transformData(bar1Dataset);
      //const dataset = this.transformData(myDataset);
      return (
        <div>
          <svg viewBox="0 60 600 500">
            <defs>
              <linearGradient
                id="myGradient1_bar1"
                x1="0%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#B09336" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient2_bar1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient3_bar1"
                x1="0%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#C4AD32" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient4_bar1"
                x1="20%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#BBBBBB" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <VictoryChart
              standalone={false}
              width={550}
              height={500}
              domainPadding={{ x: 0, y: 30 }}
            >
              <VictoryStack horizontal>
                {dataset.map((data, i) => {
                  return (
                    <VictoryBar
                      data={data}
                      key={i}
                      colorScale={[
                        "url(#myGradient1_bar1)",
                        "url(#myGradient2_bar1)",
                        "url(#myGradient3_bar1)",
                        "url(#myGradient4_bar1)",
                      ]}
                    />
                  );
                })}
              </VictoryStack>

              <VictoryAxis
                tickFormat={[
                  "1971-1980",
                  "1981-1980",
                  "1991-2000",
                  "2001-2010",
                  "2011-2020",
                ]}
                style={{
                  tickLabels: { fontSize: 18, fontWeight: 700, padding: 15 },
                  axis: { stroke: "none" },
                }}
                offsetX={600}
              />
            </VictoryChart>
          </svg>
        </div>
      );
    }
  }
  class Bar1m extends React.Component {
    // This is an example of a function you might use to transform your data to make 100% data
    transformData(dataset) {
      const totals = dataset[0].map((data, i) => {
        return dataset.reduce((memo, curr) => {
          return memo + curr[i].y;
        }, 0);
      });
      return dataset.map((data) => {
        return data.map((datum, i) => {
          return { x: datum.x, y: (datum.y / totals[i]) * 100 };
        });
      });
    }

    render() {
      const dataset = this.transformData(bar1Dataset);
      //const dataset = this.transformData(myDataset);
      return (
        <div>
          <svg viewBox="0 0 500 400">
            <defs>
              <linearGradient
                id="myGradient1_bar1m"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#B09336" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient2_bar1m"
                x1="0%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient3_bar1m"
                x1="0%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#C4AD32" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient4_bar1m"
                x1="20%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#BBBBBB" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <VictoryChart
              standalone={false}
              width={500}
              height={400}
              domainPadding={{ x: 0, y: 30 }}
            >
              <VictoryStack horizontal>
                {dataset.map((data, i) => {
                  return (
                    <VictoryBar
                      data={data}
                      key={i}
                      colorScale={[
                        "url(#myGradient1_bar1m)",
                        "url(#myGradient2_bar1m)",
                        "url(#myGradient3_bar1m)",
                        "url(#myGradient4_bar1m)",
                      ]}
                    />
                  );
                })}
              </VictoryStack>

              <VictoryAxis
                tickFormat={[
                  "1971-1980",
                  "1981-1980",
                  "1991-2000",
                  "2001-2010",
                  "2011-2020",
                ]}
                style={{
                  tickLabels: { fontSize: 13, fontWeight: 700, padding: 5 },
                  axis: { stroke: "none" },
                }}
                offsetX={500}
              />
            </VictoryChart>
          </svg>
        </div>
      );
    }
  }
  /** /stack bar1 chart **/

  /** stack bar2 chart **/
  /* filter out only year 2016 */
  const y2016Arr = datasetS.filter(function (sponsorship) {
    return sponsorship.year == 2016;
  });
  const y2016_educate = y2016Arr[0].educate;
  const y2016_art = y2016Arr[0].art;
  const y2016_scholarship = y2016Arr[0].scholarship;
  const y2016_other = y2016Arr[0].other;
  /* filter out only year 2017 */
  const y2017Arr = datasetS.filter(function (sponsorship) {
    return sponsorship.year == 2017;
  });
  const y2017_educate = y2017Arr[0].educate;
  const y2017_art = y2017Arr[0].art;
  const y2017_scholarship = y2017Arr[0].scholarship;
  const y2017_other = y2017Arr[0].other;
  /* filter out only year 2018 */
  const y2018Arr = datasetS.filter(function (sponsorship) {
    return sponsorship.year == 2018;
  });
  const y2018_educate = y2018Arr[0].educate;
  const y2018_art = y2018Arr[0].art;
  const y2018_scholarship = y2018Arr[0].scholarship;
  const y2018_other = y2018Arr[0].other;
  /* filter out only year 2019 */
  const y2019Arr = datasetS.filter(function (sponsorship) {
    return sponsorship.year == 2019;
  });
  const y2019_educate = y2019Arr[0].educate;
  const y2019_art = y2019Arr[0].art;
  const y2019_scholarship = y2019Arr[0].scholarship;
  const y2019_other = y2019Arr[0].other;
  /* filter out only year 2020 */
  const y2020Arr = datasetS.filter(function (sponsorship) {
    return sponsorship.year == 2020;
  });
  const y2020_educate = y2020Arr[0].educate;
  const y2020_art = y2020Arr[0].art;
  const y2020_scholarship = y2020Arr[0].scholarship;
  const y2020_other = y2020Arr[0].other;
  const bar2Dataset = [
    [
      { x: "a", y: y2016_educate },
      { x: "b", y: y2017_educate },
      { x: "c", y: y2018_educate },
      { x: "d", y: y2019_educate },
      { x: "e", y: y2020_educate },
    ],
    [
      { x: "a", y: y2016_art },
      { x: "b", y: y2017_art },
      { x: "c", y: y2018_art },
      { x: "d", y: y2019_art },
      { x: "e", y: y2020_art },
    ],
    [
      { x: "a", y: y2016_scholarship },
      { x: "b", y: y2017_scholarship },
      { x: "c", y: y2018_scholarship },
      { x: "d", y: y2019_scholarship },
      { x: "e", y: y2020_scholarship },
    ],
    [
      { x: "a", y: y2016_other },
      { x: "b", y: y2017_other },
      { x: "c", y: y2018_other },
      { x: "d", y: y2019_other },
      { x: "e", y: y2020_other },
    ],
  ];

  class Bar2 extends React.Component {
    // This is an example of a function you might use to transform your data to make 100% data
    transformData(dataset) {
      const totals = dataset[0].map((data, i) => {
        return dataset.reduce((memo, curr) => {
          return memo + curr[i].y;
        }, 0);
      });
      return dataset.map((data) => {
        return data.map((datum, i) => {
          return { x: datum.x, y: (datum.y / totals[i]) * 100 };
        });
      });
    }

    render() {
      const dataset = this.transformData(bar2Dataset);
      //const dataset = this.transformData(myDataset);
      return (
        <div>
          <svg viewBox="0 60 600 500">
            <defs>
              <linearGradient
                id="myGradient1_bar2"
                x1="0%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#B09336" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient2_bar2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient3_bar2"
                x1="0%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#C4AD32" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient4_bar2"
                x1="20%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#BBBBBB" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <VictoryChart
              standalone={false}
              width={550}
              height={500}
              domainPadding={{ x: 0, y: 30 }}
            >
              <VictoryStack horizontal>
                {dataset.map((data, i) => {
                  return (
                    <VictoryBar
                      colorScale={[
                        "url(#myGradient1_bar2)",
                        "url(#myGradient2_bar2)",
                        "url(#myGradient3_bar2)",
                        "url(#myGradient4_bar2)",
                      ]}
                      data={data}
                      key={i}
                    />
                  );
                })}
              </VictoryStack>

              <VictoryAxis
                tickFormat={["2016", "2017", "2018", "2019", "2020"]}
                style={{
                  tickLabels: {
                    fontSize: 18,
                    fontWeight: 700,
                    padding: 15,
                  },
                  axis: { stroke: "none" },
                }}
                offsetX={550}
              />
            </VictoryChart>
          </svg>
        </div>
      );
    }
  }
  class Bar2m extends React.Component {
    // This is an example of a function you might use to transform your data to make 100% data
    transformData(dataset) {
      const totals = dataset[0].map((data, i) => {
        return dataset.reduce((memo, curr) => {
          return memo + curr[i].y;
        }, 0);
      });
      return dataset.map((data) => {
        return data.map((datum, i) => {
          return { x: datum.x, y: (datum.y / totals[i]) * 100 };
        });
      });
    }

    render() {
      const dataset = this.transformData(bar2Dataset);
      //const dataset = this.transformData(myDataset);
      return (
        <div>
          <svg viewBox="0 0 500 400">
            <defs>
              <linearGradient
                id="myGradient1_bar2m"
                x1="0%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#B09336" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient2_bar2m"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient3_bar2m"
                x1="0%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#C4AD32" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient4_bar2m"
                x1="20%"
                y1="0%"
                x2="120%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#BBBBBB" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <VictoryChart
              standalone={false}
              width={500}
              height={400}
              domainPadding={{ x: 0, y: 30 }}
            >
              <VictoryStack horizontal>
                {dataset.map((data, i) => {
                  return (
                    <VictoryBar
                      colorScale={[
                        "url(#myGradient1_bar2m)",
                        "url(#myGradient2_bar2m)",
                        "url(#myGradient3_bar2m)",
                        "url(#myGradient4_bar2m)",
                      ]}
                      data={data}
                      key={i}
                    />
                  );
                })}
              </VictoryStack>

              <VictoryAxis
                tickFormat={["2016", "2017", "2018", "2019", "2020"]}
                style={{
                  tickLabels: { fontSize: 13, fontWeight: 700, padding: 35 },
                  axis: { stroke: "none" },
                }}
                offsetX={500}
              />
            </VictoryChart>
          </svg>
        </div>
      );
    }
  }
  /** /stack bar2 chart **/

  // /* CHANGE programs ARRAY SORTING BY ID*/
  // !datasetP ? null : datasetP.sort((a, b) => a.id - b.id);
  // const mydataset = datasetP.slice(0, 3);

  /*********** report **********/
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
  // const mydataset = datasetP.slice(0, 3);

  return (
    <>
      <NextSeo
        title="Hong Foundation 洪建全基金會 ｜ 公開資訊"
        description="Hong Foundation 洪建全基金會：公開資訊"
        canonical="https://hongfoundation.org.tw/resource"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description: "Hong Foundation 洪建全基金會：公開資訊",
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
            <Link href="/about/members">董事會</Link>
          </li>
          <li className="subMenuInAbooutPage_li active">
            <a href="/about/resource">公開資訊</a>
          </li>
          <li className="subMenuInAbooutPage_li">
            <a href="/about/timeline">大事記</a>
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
      {/* resource content */}
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          maxWidth: { xs: "100%", sm: "500px", md: "954px" },
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 28, sm: 36, md: 36 }}
        pl={{ xs: 3, sm: 0, md: 6 }}
      >
        {/* vvv 贊助概覽 */}
        <Box sx={{ display: "none", width: { xs: "100%", md: "50%" } }}>
          <Box
            sx={{
              fontFamily: "Helvetica",
              fontSize: { xs: 30, sm: 34, md: 37 },
            }}
          >
            1971-2020
          </Box>
          <Box mt={{ xs: -2, sm: -4, md: -4 }} ml={{ xs: -3, sm: -6, md: -6 }}>
            <Image
              src={inL}
              placeholder="blur"
              alt="indicator"
              width={473}
              height={115}
            />
          </Box>
          <Box
            mt={{ xs: -3, sm: -5, md: -5 }}
            sx={{ fontSize: { xs: 18, md: 20 } }}
          >
            贊助概覽
          </Box>
        </Box>
        {/* vvv pie */}
        <Box
          sx={{
            display: "none",
            height: { xs: "40vw", md: "30vw" },
            width: { xs: "160%", sm: "90%", md: "70%" },
          }}
          ml={{ xs: "-50%", sm: "-2%", md: "5%" }}
          mt={{ xs: 2, sm: 6, md: 6 }}
          mb={{ xs: 25, sm: 6, md: 0 }}
        >
          <svg viewBox="-120 30 550 550">
            <defs>
              <linearGradient
                id="myGradient1"
                x1="0%"
                y1="0%"
                x2="30%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#B09336" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient2"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient3"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#C4AD32" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient
                id="myGradient4"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#BBBBBB" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <VictoryPie
              standalone={false}
              width={400}
              height={400}
              data={new_y0Arr}
              x="name"
              y="p"
              innerRadius={65}
              //labels={({ datum }) => `${datum.p}%`}
              labels={({ datum }) => `${datum.name}  ${datum.p}%`}
              labelRadius={({ innerRadius }) => innerRadius + 30}
              labelPosition={({ index }) => (index ? "centroid" : "centroid")}
              labelPlacement={({ index }) =>
                index ? "perpendicular" : "perpendicular"
              }
              style={{
                labels: {
                  fontSize: ({ text }) => (text.length > 10 ? 8 : 12),
                  fontWeight: 500,
                  //fill: ["#B09336", "#B09336", "#B09336", "#B09336"],
                  fill: ({ index }) =>
                    index == 0
                      ? "#93834C"
                      : index == 1
                      ? "#000"
                      : index == 2
                      ? "#B09336"
                      : "#545454",
                },
              }}
              colorScale={[
                "url(#myGradient1)",
                "url(#myGradient2)",
                "url(#myGradient3)",
                "url(#myGradient4)",
              ]}
            />
          </svg>
        </Box>
        {/* vvv 各年度贊助比例 */}
        <Box
          sx={{ display: "none", width: { xs: "100%", md: "50%" } }}
          ml={{ xs: "0%", sm: "50%", md: "50%" }}
        >
          <Box
            sx={{
              fontFamily: "Helvetica",
              fontSize: { xs: 30, sm: 34, md: 37 },
            }}
          >
            2016-2020
          </Box>
          <Box mt={{ xs: -2, sm: -4, md: -4 }} ml={{ xs: -3, sm: -6, md: -6 }}>
            <Image
              src="/IMGs/inR.png"
              alt="indicator"
              width={473}
              height={115}
            />
          </Box>
          <Box
            mt={{ xs: -3, sm: -5, md: -5 }}
            sx={{ fontSize: { xs: 18, md: 20 } }}
          >
            各年度贊助比例
          </Box>
        </Box>
        {/* vvv Bar2 */}
        <Box
          sx={{ display: "none", width: { xs: "120%", sm: "80%", md: "50%" } }}
          ml={{ xs: "-16%", sm: "44%", md: "46%" }}
          mt={{ xs: -8, sm: -10, md: -10 }}
        >
          <Bar2 />
        </Box>
        {/* vvv color demo */}
        <Box
          sx={{ display: "none", width: "50%" }}
          ml={{ xs: "-18%", sm: "44%", md: "46.5%" }}
          mb={12}
          mt={{ xs: -4, sm: -5, md: -5 }}
        >
          <Stack direction="row">
            <Item>
              <Box
                ml={2}
                sx={{ width: { xs: "73px", md: "73px" }, height: "3vh" }}
              >
                <Stack direction="row">
                  <Item>
                    <Box
                      mt={0.5}
                      sx={{
                        width: 10,
                        height: 10,
                        background: "rgba(176, 147, 54, 1)",
                        display: "inline-block",
                        borderRadius: 5,
                      }}
                    ></Box>
                  </Item>
                  <Item>
                    <Box
                      sx={{
                        fontSize: { xs: 12, md: 14, xl: 14 },
                        lineHeight: "26px",
                      }}
                    >
                      教育
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Item>
            <Item>
              <Box
                ml={{ xs: -3, sm: -2, md: -2 }}
                sx={{ width: { xs: "73px", md: "73px" } }}
              >
                <Stack direction="row">
                  <Item>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        background: "rgba(0, 0, 0, 1)",
                        display: "inline-block",
                        borderRadius: 5,
                      }}
                    ></Box>
                  </Item>
                  <Item>
                    <Box
                      sx={{
                        fontSize: { xs: 12, md: 14, xl: 14 },
                        lineHeight: "26px",
                      }}
                    >
                      藝術
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Item>
            <Item>
              <Box
                ml={{ xs: -3, sm: -2, md: -2 }}
                sx={{ width: { xs: "73px", md: "73px" } }}
              >
                <Stack direction="row">
                  <Item>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        background: "rgba(196, 173, 50, 1)",
                        display: "inline-block",
                        borderRadius: 5,
                      }}
                    ></Box>
                  </Item>
                  <Item>
                    <Box
                      sx={{
                        fontSize: { xs: 12, md: 14, xl: 14 },
                        lineHeight: "26px",
                      }}
                    >
                      助學
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Item>
            <Item>
              <Box
                ml={{ xs: -3, sm: -2, md: -2 }}
                sx={{ width: { xs: "73px", md: "73px" } }}
              >
                <Stack direction="row">
                  <Item>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        background: "rgba(187, 187, 187, 1)",
                        display: "inline-block",
                        borderRadius: 5,
                      }}
                    ></Box>
                  </Item>
                  <Item>
                    <Box
                      sx={{
                        fontSize: { xs: 12, md: 14, xl: 14 },
                        lineHeight: "26px",
                      }}
                    >
                      文哲
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Item>
          </Stack>
        </Box>
        {/* vvv 每十年贊助比例 */}
        <Box sx={{ display: "none", width: { xs: "100%", md: "50%" } }}>
          <Box sx={{ fontSize: { xs: 30, sm: 34, md: 37 } }}>每十年度</Box>
          <Box mt={{ xs: -2, sm: -4, md: -4 }} ml={{ xs: -3, sm: -6, md: -6 }}>
            <Image
              src="/IMGs/inL.png"
              alt="indicator"
              width={473}
              height={115}
            />
          </Box>
          <Box
            mt={{ xs: -3, sm: -5, md: -5 }}
            sx={{ fontSize: { xs: 18, md: 20 } }}
          >
            贊助比例
          </Box>
        </Box>
        {/* vvv Bar1 */}
        <Box
          sx={{ display: "none", width: { xs: "120%", sm: "80%", md: "50%" } }}
          ml={{ xs: "-16%", sm: "-6.5%", md: "-4%" }}
          mt={{ xs: -8, sm: -10, md: -10 }}
        >
          <Bar1 />
        </Box>
        {/* vvv color demo */}
        <Box
          sx={{ display: "none" }}
          mb={12}
          ml={{ xs: "-18%", sm: "-6.5%", md: "-3.5%" }}
          mt={{ xs: -4, sm: -5, md: -5 }}
        >
          <Stack direction="row">
            <Item>
              <Box
                ml={2}
                sx={{ width: { xs: "73px", md: "73px" }, height: "3vh" }}
              >
                <Stack direction="row">
                  <Item>
                    <Box
                      mt={0.5}
                      sx={{
                        width: 10,
                        height: 10,
                        background: "rgba(176, 147, 54, 1)",
                        display: "inline-block",
                        borderRadius: 5,
                      }}
                    ></Box>
                  </Item>
                  <Item>
                    <Box
                      sx={{
                        fontSize: { xs: 12, md: 14, xl: 14 },
                        lineHeight: "26px",
                      }}
                    >
                      教育
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Item>
            <Item>
              <Box
                ml={{ xs: -3, sm: -2, md: -2 }}
                sx={{ width: { xs: "73px", md: "73px" } }}
              >
                <Stack direction="row">
                  <Item>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        background: "rgba(0, 0, 0, 1)",
                        display: "inline-block",
                        borderRadius: 5,
                      }}
                    ></Box>
                  </Item>
                  <Item>
                    <Box
                      sx={{
                        fontSize: { xs: 12, md: 14, xl: 14 },
                        lineHeight: "26px",
                      }}
                    >
                      藝術
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Item>
            <Item>
              <Box
                ml={{ xs: -3, sm: -2, md: -2 }}
                sx={{ width: { xs: "73px", md: "73px" } }}
              >
                <Stack direction="row">
                  <Item>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        background: "rgba(196, 173, 50, 1)",
                        display: "inline-block",
                        borderRadius: 5,
                      }}
                    ></Box>
                  </Item>
                  <Item>
                    <Box
                      sx={{
                        fontSize: { xs: 12, md: 14, xl: 14 },
                        lineHeight: "26px",
                      }}
                    >
                      助學
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Item>
            <Item>
              <Box
                ml={{ xs: -3, sm: -2, md: -2 }}
                sx={{ width: { xs: "73px", md: "73px" } }}
              >
                <Stack direction="row">
                  <Item>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        background: "rgba(187, 187, 187, 1)",
                        display: "inline-block",
                        borderRadius: 5,
                      }}
                    ></Box>
                  </Item>
                  <Item>
                    <Box
                      sx={{
                        fontSize: { xs: 12, md: 14, xl: 14 },
                        lineHeight: "26px",
                      }}
                    >
                      文哲
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Item>
          </Stack>
        </Box>
      </Box>
      {/* report content */}
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          maxWidth: { xs: "100%", sm: "100%", md: "954px" },
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 0, sm: 0, md: 0 }}
        pl={{ xs: 1, sm: 0, md: 0 }}
        pb={20}
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
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [sponsorships, contact, projects, reports] = await Promise.all([
    await fetchAPI("/sponsorships"),
    await fetchAPI("/contact"),
    await fetchAPI("/projects"),
    await fetchAPI("/reports"),
  ]);

  return {
    props: { sponsorships, contact, projects, reports },
    //revalidate: 1,
  };
}

export default Resource;

Resource.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
