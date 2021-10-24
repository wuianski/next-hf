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

const Sponsorship = ({ sponsorship: datasetS }) => {
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
    //nextArrow: <SampleNextArrow />,
    //prevArrow: <SamplePrevArrow />,
    /*afterChange: () =>
      this.setState((state) => ({ updateCount: state.updateCount + 1 })),*/
    //beforeChange: { handleChange },
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
    { name: "獎學金", p: y0_scholarship },
    { name: "其他", p: y0_other },
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
          {/*<svg viewBox="0 0 600 600">*/}
          <VictoryChart
            //standalone={false}
            //height={300}
            //width={300}
            domainPadding={{ x: 0, y: 30 }}
          >
            <VictoryStack horizontal>
              {dataset.map((data, i) => {
                return (
                  <VictoryBar
                    data={data}
                    key={i}
                    colorScale={[
                      "rgba(176, 147, 54, 0.6)",
                      "rgba(0, 0, 0, 0.5)",
                      "rgba(196, 173, 50, 0.6)",
                      "rgba(187, 187, 187, 0.6)",
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
              offsetX={455}
            />
          </VictoryChart>
          {/*</svg>*/}
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
          {/*<svg viewBox="0 0 600 600">*/}
          <VictoryChart
            //standalone={false}
            //height={300}
            //width={300}
            domainPadding={{ x: 0, y: 30 }}
          >
            <VictoryStack horizontal>
              {dataset.map((data, i) => {
                return (
                  <VictoryBar
                    colorScale={[
                      "rgba(176, 147, 54, 0.6)",
                      "rgba(0, 0, 0, 0.5)",
                      "rgba(196, 173, 50, 0.6)",
                      "rgba(187, 187, 187, 0.6)",
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
              offsetX={447}
            />
          </VictoryChart>
          {/*</svg>*/}
        </div>
      );
    }
  }
  /** /stack bar2 chart **/

  return (
    <>
      <Box ml={{ xs: 8, md: 13 }} mr={{ xs: 2, md: 12 }} mt={-5}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Stack direction="row" spacing={-12}>
            <Item>
              <Box sx={{ height: "60vh", width: "60vw" }}>
                <svg viewBox="-100 0 600 600">
                  <VictoryPie
                    standalone={false}
                    width={400}
                    height={400}
                    data={new_y0Arr}
                    x="name"
                    y="p"
                    innerRadius={100}
                    labelRadius={168}
                    style={{
                      labels: { fontSize: 15, fontWeight: 500, fill: "black" },
                    }}
                    colorScale={[
                      "rgba(176, 147, 54, 0.6)",
                      "rgba(0, 0, 0, 0.5)",
                      "rgba(196, 173, 50, 0.6)",
                      "rgba(187, 187, 187, 0.6)",
                    ]}
                  />
                  <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 30, fontWeight: 700 }}
                    x={200}
                    y={190}
                    text="1971~2020"
                  />
                  <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 15, fontWeight: 700 }}
                    x={200}
                    y={220}
                    text="總比例贊助"
                  />
                </svg>
              </Box>
            </Item>
            <Item>
              <Box sx={{ height: "60vh", marginTop: { md: 0, xl: 0 } }}>
                <Stack spacing={{ sm: 2, md: 2 }}>
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

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Slider {...settings}>
            <Box sx={{ width: "100vw" }}>
              <svg viewBox="-20 0 400 450">
                <VictoryPie
                  standalone={false}
                  width={360}
                  height={360}
                  data={new_y0Arr}
                  x="name"
                  y="p"
                  innerRadius={60}
                  labelRadius={140}
                  style={{
                    labels: { fontSize: 15, fontWeight: 500, fill: "black" },
                  }}
                  colorScale={[
                    "rgba(176, 147, 54, 0.6)",
                    "rgba(0, 0, 0, 0.5)",
                    "rgba(196, 173, 50, 0.6)",
                    "rgba(187, 187, 187, 0.6)",
                  ]}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 30, fontWeight: 700 }}
                  x={180}
                  y={385}
                  text="1971~2020"
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 23, fontWeight: 700 }}
                  x={180}
                  y={420}
                  text="總比例贊助"
                />
              </svg>
            </Box>
            <Box>
              <Stack
                /* set up the distance between two Item, and vertical center of Stack */
                spacing={-6}
                sx={{ marginTop: "-60px", marginLeft: "-30px" }}
              >
                <Item>
                  <Bar2 />
                </Item>
                <Item>
                  <Bar1 />
                </Item>
              </Stack>
            </Box>
          </Slider>
        </Box>

        <Box>
          <Box sx={{ cursor: "pointer" }}>
            <Link href="/board_members">
              <Stack
                direction="row"
                spacing={0}
                sx={{
                  width: "auto",
                  position: "absolute",
                  bottom: "60px",
                  //right: "calc(50vw - 175px)",
                  right: 0,
                }}
                height={"38px"}
                mr={{ xs: 3, md: 13 }}
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
                      sx={{
                        display: { xs: "block", md: "inline" },
                      }}
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
