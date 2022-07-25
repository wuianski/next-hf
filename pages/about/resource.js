import * as React from "react";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { VictoryPie, VictoryLabel } from "victory";
import { VictoryChart, VictoryBar, VictoryStack, VictoryAxis } from "victory";
import { NextSeo } from "next-seo";

import ps_logo from "../../public/IMGs/ps_logo.png";
import ml_logo from "../../public/IMGs/ml_logo.png";
import php_logo from "../../public/IMGs/php_logo.png";
import inR from "../../public/IMGs/inR.png";
import inL from "../../public/IMGs/inL.png";

function Resource({
  sponsorships: datasetS,
  summary,
  contact,
  projects: datasetP,
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
    //...theme.typography.body2,
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

  /** parsing sentence **/
  const allPhase = summary.content.split("、");
  //console.log(phase[0]);

  const p1 = allPhase[0].split("，");
  const p2 = allPhase[1].split("，");
  const p3 = allPhase[2].split("，");

  const p4 = allPhase[3].split("，");
  const p5 = allPhase[4].split("，");

  const p6 = allPhase[5].split("，");
  const p7 = allPhase[6].split("，");
  const p8 = allPhase[7].split("，");
  const p9 = allPhase[8].split("，");
  //const p10 = allPhase[9].split("，");
  //console.log(p2[0]);

  /* CHANGE programs ARRAY SORTING BY ID*/
  !datasetP ? null : datasetP.sort((a, b) => a.id - b.id);
  const mydataset = datasetP.slice(0, 3);

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
            <Link href="/about/members">成員</Link>
          </li>
          <li className="subMenuInAbooutPage_li active">
            <a href="/about/resource">公開資訊</a>
          </li>
          <li className="subMenuInAbooutPage_li">
            <a href="/about/timeline">大事記</a>
          </li>
          <li className="subMenuInAbooutPage_li">
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
        {/* vvv project seek data */}
        <Box
          sx={{ width: { xs: "100%", md: "50%" } }}
          ml={{ xs: "0%", sm: "50%", md: "50%" }}
        >
          <Box>
            <Image
              src={ps_logo}
              placeholder="blur"
              alt="download icon"
              width={320}
              height={96}
            />
          </Box>
          <Box mt={{ xs: -2, sm: -4, md: -4 }} ml={{ xs: -3, sm: -6, md: -6 }}>
            <Image
              src={inR}
              placeholder="blur"
              alt="indicator"
              width={473}
              height={115}
            />
          </Box>
          <Box mt={{ xs: -3, sm: -5, md: -5 }} mb={12}>
            <Box>
              <Box component="span" className="textText">
                {p4[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p4[1]}
              </Box>
              <Box component="span" className="textText">
                {p4[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p5[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p5[1]}
              </Box>
              <Box component="span" className="textText">
                {p5[2]}
              </Box>
            </Box>
          </Box>
        </Box>
        {/* vvv minlong forum data */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box>
            <Image
              src={ml_logo}
              placeholder="blur"
              alt="download icon"
              width={320}
              height={96}
            />
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
          <Box mt={{ xs: -3, sm: -5, md: -5 }} mb={12}>
            <Box>
              <Box component="span" className="textText">
                {p1[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p1[1]}
              </Box>
              <Box component="span" className="textText">
                {p1[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p2[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p2[1]}
              </Box>
              <Box component="span" className="textText">
                {p2[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p3[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p3[1]}
              </Box>
              <Box component="span" className="textText">
                {p3[2]}
              </Box>
            </Box>
          </Box>
        </Box>
        {/* vvv php data */}
        <Box
          sx={{ width: { xs: "100%", md: "50%" } }}
          ml={{ xs: "0%", sm: "50%", md: "50%" }}
        >
          <Box>
            <Image
              src={php_logo}
              placeholder="blur"
              alt="download icon"
              width={320}
              height={96}
            />
          </Box>
          <Box mt={{ xs: -2, sm: -4, md: -4 }} ml={{ xs: -3, sm: -6, md: -6 }}>
            <Image
              src={inR}
              placeholder="blur"
              alt="indicator"
              width={473}
              height={115}
            />
          </Box>
          <Box mt={{ xs: -3, sm: -5, md: -5 }} mb={12}>
            <Box>
              <Box component="span" className="textText">
                {p6[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p6[1]}
              </Box>
              <Box component="span" className="textText">
                {p6[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p7[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p7[1]}
              </Box>
              <Box component="span" className="textText">
                {p7[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p8[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p8[1]}
              </Box>
              <Box component="span" className="textText">
                {p8[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p9[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p9[1]}
              </Box>
              <Box component="span" className="textText">
                {p9[2]}
              </Box>
            </Box>
          </Box>
        </Box>
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
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [sponsorships, summary, contact, projects] = await Promise.all([
    await fetchAPI("/sponsorships"),
    await fetchAPI("/summary"),
    await fetchAPI("/contact"),
    await fetchAPI("/projects"),
  ]);

  return {
    props: { sponsorships, summary, contact, projects },
    //revalidate: 1,
  };
}

export default Resource;

Resource.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
