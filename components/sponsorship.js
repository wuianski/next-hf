import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { VictoryPie, VictoryLabel } from "victory";
import { VictoryChart, VictoryBar, VictoryStack, VictoryAxis } from "victory";
import Slider from "react-slick";

const Sponsorship = ({ sponsorship: datasetS, fullpageApi }) => {
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
    ...theme.typography.body2,
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
          <svg viewBox="0 30 600 400">
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
              width={600}
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
                orientation="bottom"
                label="每十年贊助比例"
                dependentAxis
                style={{
                  tickLabels: { fill: "none" },
                  axis: { stroke: "none" },
                  axisLabel: { fontSize: 17, fontWeight: 700 },
                }}
                offsetY={33}
              />
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
                orientation="bottom"
                label="每十年贊助比例"
                dependentAxis
                style={{
                  tickLabels: { fill: "none" },
                  axis: { stroke: "none" },
                  axisLabel: { fontSize: 17, fontWeight: 700 },
                }}
              />
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
          <svg viewBox="0 30 600 400">
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
              width={600}
              height={400}
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
                orientation="bottom"
                label="2016-2020 各年度贊助比例"
                dependentAxis
                style={{
                  tickLabels: { fill: "none" },
                  axis: { stroke: "none" },
                  axisLabel: { fontSize: 17, fontWeight: 700 },
                }}
                offsetY={33}
              />
              <VictoryAxis
                tickFormat={["2016", "2017", "2018", "2019", "2020"]}
                style={{
                  tickLabels: { fontSize: 13, fontWeight: 700, padding: 35 },
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
                orientation="bottom"
                label="2015-2019 各年度贊助比例"
                dependentAxis
                style={{
                  tickLabels: { fill: "none" },
                  axis: { stroke: "none" },
                  axisLabel: { fontSize: 17, fontWeight: 700 },
                }}
              />
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

  return (
    <>
      <Box ml={{ xs: 8, md: 0 }} mr={{ xs: 2, md: 12 }} mt={10}>
        {/** vvv desktop **/}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Box sx={{ width: "60vw" }} ml={1} mr={1}>
            {/* vvv color demo */}
            <Stack direction="row" sx={{ justifyContent: "center" }}>
              <Item>
                <Box sx={{ width: "73px", height: "4vh", marginLeft: "100px" }}>
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
                          fontSize: { md: 14, xl: 14 },
                          lineHeight: { md: "14px", xl: "14px" },
                        }}
                      >
                        教育
                      </Box>
                    </Item>
                  </Stack>
                </Box>
              </Item>
              <Item>
                <Box sx={{ width: "73px" }}>
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
                          fontSize: { md: 14, xl: 14 },
                          lineHeight: { md: "14px", xl: "14px" },
                        }}
                      >
                        藝術
                      </Box>
                    </Item>
                  </Stack>
                </Box>
              </Item>
              <Item>
                <Box sx={{ width: "73px" }}>
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
                          fontSize: { md: 14, xl: 14 },
                          lineHeight: { md: "14px", xl: "14px" },
                        }}
                      >
                        助學
                      </Box>
                    </Item>
                  </Stack>
                </Box>
              </Item>
              <Item>
                <Box sx={{ width: "73px" }}>
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
                          fontSize: { md: 14, xl: 14 },
                          lineHeight: { md: "14px", xl: "14px" },
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

          <Stack direction="row" spacing={0}>
            <Item>
              <Box sx={{ height: "40vh", width: "60vw" }}>
                {/* vvv pie */}
                <svg viewBox="-100 30 550 600">
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
                    innerRadius={100}
                    labels={({ datum }) => `${datum.p}%`}
                    labelRadius={({ innerRadius }) => innerRadius + 15}
                    labelPosition={({ index }) =>
                      index ? "centroid" : "centroid"
                    }
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
                  <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 30, fontWeight: 600 }}
                    x={200}
                    y={190}
                    text="1971~2020"
                  />
                  <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 15, fontWeight: 500 }}
                    x={200}
                    y={220}
                    text="贊助概覽"
                  />
                </svg>
              </Box>
            </Item>

            <Item>
              <Box sx={{ height: "60vh", width: "30vw" }}>
                <Stack spacing={{ sm: 2, md: 2 }}>
                  {/* vvv color demo, set marginBottom for the distance with down ele */}

                  <Item>
                    <Box sx={{ height: "20vh" }}>
                      <Bar2 />
                    </Box>
                  </Item>
                  <Item>
                    <Box sx={{ height: "20vh" }}>
                      <Bar1 />
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Item>
          </Stack>
        </Box>

        {/** vvv mobile **/}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Slider {...settings}>
            <Box sx={{ width: "100vw" }}>
              <Stack
                /* set up the distance between two Item, and vertical center of Stack */
                spacing={0}
                sx={{ marginTop: "-20px", marginLeft: "-30px" }}
              >
                <Item sx={{ marginBottom: 0, paddingTop: "2vh" }}>
                  <Box>
                    {/* vvv color demo */}
                    <Stack direction="row">
                      <Item>
                        <Box ml={2} sx={{ width: "73px", height: "3vh" }}>
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
                                  lineHeight: {
                                    xs: "12px",
                                    md: "14px",
                                    xl: "14px",
                                  },
                                }}
                              >
                                教育
                              </Box>
                            </Item>
                          </Stack>
                        </Box>
                      </Item>
                      <Item>
                        <Box ml={-2} sx={{ width: "73px" }}>
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
                                  lineHeight: {
                                    xs: "12px",
                                    md: "14px",
                                    xl: "14px",
                                  },
                                }}
                              >
                                藝術
                              </Box>
                            </Item>
                          </Stack>
                        </Box>
                      </Item>
                      <Item>
                        <Box ml={-2} sx={{ width: "73px" }}>
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
                                  lineHeight: {
                                    xs: "12px",
                                    md: "14px",
                                    xl: "14px",
                                  },
                                }}
                              >
                                助學
                              </Box>
                            </Item>
                          </Stack>
                        </Box>
                      </Item>
                      <Item>
                        <Box ml={-2} sx={{ width: "73px" }}>
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
                                  lineHeight: {
                                    xs: "12px",
                                    md: "14px",
                                    xl: "14px",
                                  },
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
                </Item>
                <Item>
                  {/* vvv pie */}
                  <svg viewBox="-40 0 400 450">
                    <defs>
                      <linearGradient
                        id="myGradient1m"
                        x1="0%"
                        y1="0%"
                        x2="30%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#B09336" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                      </linearGradient>
                      <linearGradient
                        id="myGradient2m"
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#000000" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                      </linearGradient>
                      <linearGradient
                        id="myGradient3m"
                        x1="0%"
                        y1="100%"
                        x2="0%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#C4AD32" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                      </linearGradient>
                      <linearGradient
                        id="myGradient4m"
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
                      width={360}
                      height={360}
                      data={new_y0Arr}
                      x="name"
                      y="p"
                      innerRadius={70}
                      labels={({ datum }) => `${datum.p}%`}
                      labelRadius={({ innerRadius }) => innerRadius + 15}
                      labelPosition={({ index }) =>
                        index ? "centroid" : "centroid"
                      }
                      labelPlacement={({ index }) =>
                        index ? "perpendicular" : "perpendicular"
                      }
                      style={{
                        labels: {
                          fontSize: 15,
                          fontWeight: 500,
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
                        "url(#myGradient1m)",
                        "url(#myGradient2m)",
                        "url(#myGradient3m)",
                        "url(#myGradient4m)",
                      ]}
                    />
                    <VictoryLabel
                      textAnchor="middle"
                      style={{ fontSize: 30, fontWeight: 700 }}
                      x={180}
                      y={370}
                      text="1971~2020"
                    />
                    <VictoryLabel
                      textAnchor="middle"
                      style={{ fontSize: 23, fontWeight: 700 }}
                      x={180}
                      y={410}
                      text="贊助概覽"
                    />
                  </svg>
                </Item>
              </Stack>
            </Box>
            <Box>
              <Stack
                /* set up the distance between two Item, and vertical center of Stack */
                spacing={-11}
                sx={{ marginTop: "-20px", marginLeft: "-30px" }}
              >
                <Item sx={{ marginBottom: 0, paddingTop: "2vh" }}>
                  <Box>
                    {/* vvv color demo */}
                    <Stack direction="row">
                      <Item>
                        <Box ml={2} sx={{ width: "73px", height: "3vh" }}>
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
                                  lineHeight: {
                                    xs: "12px",
                                    md: "14px",
                                    xl: "14px",
                                  },
                                }}
                              >
                                教育
                              </Box>
                            </Item>
                          </Stack>
                        </Box>
                      </Item>
                      <Item>
                        <Box ml={-2} sx={{ width: "73px" }}>
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
                                  lineHeight: {
                                    xs: "12px",
                                    md: "14px",
                                    xl: "14px",
                                  },
                                }}
                              >
                                藝術
                              </Box>
                            </Item>
                          </Stack>
                        </Box>
                      </Item>
                      <Item>
                        <Box ml={-2} sx={{ width: "73px" }}>
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
                                  lineHeight: {
                                    xs: "12px",
                                    md: "14px",
                                    xl: "14px",
                                  },
                                }}
                              >
                                助學
                              </Box>
                            </Item>
                          </Stack>
                        </Box>
                      </Item>
                      <Item>
                        <Box ml={-2} sx={{ width: "73px" }}>
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
                                  lineHeight: {
                                    xs: "12px",
                                    md: "14px",
                                    xl: "14px",
                                  },
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
                </Item>
                <Item>
                  <Bar2m />
                </Item>
                <Item>
                  <Bar1m />
                </Item>
              </Stack>
            </Box>
          </Slider>
        </Box>

        <Box>
          <Box sx={{ cursor: "pointer" }}>
            <Link href="/reports">
              <Stack
                direction="row"
                spacing={0}
                sx={{
                  width: "auto",
                  position: "relative",
                  alignContent: "flex-end",
                  justifyContent: "flex-end",
                }}
                height={"38px"}
                mt={{ xs: 6, md: 6 }}
              >
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderColor: "#000",
                    display: { xs: "none", md: "block" },
                  }}
                />
                <Item>
                  <Box sx={{ lineHeight: { xs: "19px", md: "38px" } }}>
                    <Box
                      component="span"
                      sx={{ display: { xs: "block", md: "inline" } }}
                    >
                      公開資訊
                    </Box>
                    <Box ml={{ xs: 0, md: 1 }} component="span">
                      Public Information
                    </Box>
                  </Box>
                </Item>
                <Item>
                  <Image
                    src="/IMGs/goto_icon.png"
                    alt="download icon"
                    width={38}
                    height={38}
                  />
                </Item>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderColor: "#000",
                    display: { xs: "none", md: "block" },
                  }}
                />
              </Stack>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sponsorship;
