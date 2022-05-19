import * as React from "react";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import Box from "@mui/material/Box";
import Stepper, { stepperClasses } from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";
import StepContent, { stepContentClasses } from "@mui/material/StepContent";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { NextSeo } from "next-seo";
import Link from "next/link";

//import _, { map } from "underscore";
import _ from "lodash";

function Timeline({ timeline: dataset, contact, projects: datasetP }) {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => b.id - a.id);

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const groups = _.groupBy(dataset, "year");
  const arrByYear = Object.entries(groups).map((x) => {
    let result = {
      year: x[0],
      val: x[1],
    };

    return result;
  });
  arrByYear.sort((a, b) => b.year - a.year);

  /** style stepper **/
  const StyledStepper = styled(Stepper)(() => ({
    [`&.${stepperClasses.root}`]: {
      //alignItems: "end",
    },
  }));

  const StyledStepLabel = styled(StepLabel)(() => ({
    "& .MuiStepLabel-iconContainer": {
      display: "none",
    },
  }));

  const StyledStepContent = styled(StepContent)(() => ({
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    border: "none",
    [`&.${stepContentClasses.root}`]: {
      //position: "relative",
      //marginTop: "-30vh",
      //marginBottom: "-15vh",
    },
  }));

  /* CHANGE programs ARRAY SORTING BY ID*/
  !datasetP ? null : datasetP.sort((a, b) => a.id - b.id);
  const mydataset = datasetP.slice(0, 3);

  return (
    <>
      <NextSeo
        title="Hong Foundation 洪建全基金會 ｜ 大事記"
        description="Hong Foundation 洪建全基金會：大事記"
        canonical="https://hongfoundation.org.tw/timeline"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description: "Hong Foundation 洪建全基金會：大事記",
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
          <li className="subMenuInAbooutPage_li active">
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
      {/* timeline content */}
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          maxWidth: { xs: "100%", sm: "100%", md: "954px" },
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 28, sm: 36, md: 36 }}
        pl={{ xs: 1, sm: 0, md: 0 }}
      >
        <Box>
          <StyledStepper
            nonLinear
            activeStep={activeStep}
            orientation="vertical"
          >
            {arrByYear.map((y, index) => (
              <Step key={y.year} completed={completed[index]}>
                <>
                  <StyledStepLabel onClick={handleStep(index)}>
                    <Box>
                      {y.val.map((chronicle2) => (
                        <Box key={chronicle2.id}>
                          {chronicle2.content_en === null ? (
                            <>
                              {/* year without event */}
                              <Box
                                sx={{
                                  fontSize: { xs: 10, md: 20, xl: 20 },
                                  fontFamily: "Helvetica Neue",
                                  fontWeight: 700,
                                  color: "rgba(0, 0, 0, 0.38)",
                                  display: "inline-block",
                                }}
                              >
                                {y.year}
                              </Box>
                              <Box
                                ml={0.8}
                                sx={{
                                  width: "50px",
                                  height: "10px",
                                  background:
                                    "linear-gradient(-90deg, #000000 0%, rgba(139, 139, 139, 0.45) 45%, rgba(255, 255, 255, 0) 100%)",
                                  display: "inline-block",
                                }}
                              ></Box>
                            </>
                          ) : (
                            <>
                              {/* year with event */}
                              {chronicle2.order === 1 ? (
                                <></>
                              ) : (
                                <>
                                  <Box
                                    sx={{
                                      fontSize: { xs: 12, md: 30, xl: 30 },
                                      fontFamily: "Helvetica Neue",
                                      fontWeight: 700,
                                      color: "#000",
                                      display: "inline-block",
                                      cursor: "pointer",
                                    }}
                                  >
                                    {y.year}
                                  </Box>
                                  <Box
                                    sx={{
                                      cursor: "pointer",
                                      width: "143px",
                                      height: "20px",
                                      background:
                                        "linear-gradient(-90deg, #000000 0%, rgba(139, 139, 139, 0.45) 45%, rgba(255, 255, 255, 0) 100%)",
                                      display: "inline-block",
                                    }}
                                    ml={2}
                                  ></Box>
                                </>
                              )}
                            </>
                          )}
                        </Box>
                      ))}
                    </Box>
                  </StyledStepLabel>
                  <StyledStepContent>
                    <Box>
                      {y.val.map((chronicle2) => (
                        <Box key={chronicle2.id}>
                          {chronicle2.content_en === null ? (
                            <>
                              <Box
                                sx={{
                                  fontSize: {
                                    xs: 28,
                                    md: 28,
                                    xl: 31,
                                  },
                                  fontWeight: 500,
                                  color: "#000",
                                }}
                              ></Box>
                              <Box
                                key={chronicle2.id}
                                sx={{
                                  width: "50vw",
                                  height: "33px",
                                  background: "none",
                                }}
                              ></Box>
                            </>
                          ) : (
                            <>
                              {(() => {
                                switch (chronicle2.order) {
                                  case 2: // for 1st of two items
                                    return (
                                      <>
                                        <motion.div
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
                                              transition: {
                                                delay: 0.1,
                                              },
                                            },
                                          }}
                                        >
                                          <Box
                                            sx={{
                                              fontSize: {
                                                xs: 53,
                                                md: 53,
                                                xl: 53,
                                              },
                                              fontFamily: "Helvetica Neue",
                                              fontWeight: 700,
                                              color: "#000",
                                              marginTop: "-60px",
                                            }}
                                          >
                                            {y.year}
                                          </Box>
                                        </motion.div>
                                        <motion.div
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
                                              transition: {
                                                delay: 0.5,
                                              },
                                            },
                                          }}
                                        >
                                          <Box
                                            key={chronicle2.id}
                                            sx={{
                                              width: "87px",
                                              height: "30px",
                                            }}
                                          >
                                            <Box
                                              sx={{
                                                position: "relative",
                                                //left: "50px",
                                                width: "max-content",
                                              }}
                                              pt={18}
                                            >
                                              <Box
                                                sx={{
                                                  color: "#666",
                                                  fontSize: {
                                                    xs: 14,
                                                    md: 14,
                                                    xl: 17,
                                                  },
                                                  fontWeight: 400,
                                                  lineHeight: "30px",
                                                }}
                                              >
                                                <Box component="span">
                                                  {chronicle2.type_tw}
                                                </Box>
                                                <Box
                                                  component="span"
                                                  ml={1}
                                                  sx={{
                                                    fontFamily:
                                                      "Helvetica Neue",
                                                  }}
                                                >
                                                  {chronicle2.type_en}
                                                </Box>
                                              </Box>
                                              <Box
                                                sx={{
                                                  fontSize: {
                                                    xs: 17,
                                                    md: 17,
                                                    xl: 20,
                                                  },
                                                  fontWeight: 700,
                                                  width: "70vw",
                                                  height: "auto",
                                                }}
                                              >
                                                {chronicle2.content_tw}
                                              </Box>
                                              <Box
                                                sx={{
                                                  fontSize: {
                                                    xs: 17,
                                                    md: 17,
                                                    xl: 20,
                                                  },
                                                  fontWeight: 500,
                                                  width: "70vw",
                                                  height: "auto",
                                                  fontFamily: "Helvetica Neue",
                                                }}
                                              >
                                                {chronicle2.content_en}
                                              </Box>
                                            </Box>
                                          </Box>
                                        </motion.div>
                                      </>
                                    );
                                  case 1: // for 1nd of two items
                                    return (
                                      <>
                                        <motion.div
                                          initial="hidden"
                                          animate="visible"
                                          variants={{
                                            hidden: {
                                              //height: "50vh",
                                            },
                                            visible: {
                                              //height: "50vh",
                                              height: "380px",
                                              transition: {
                                                delay: 0.5,
                                              },
                                            },
                                          }}
                                        >
                                          <Box
                                            key={chronicle2.id}
                                            sx={{
                                              width: "50vw",
                                              height: "33px",
                                              background:
                                                "linear-gradient(90deg, rgba(255, 255, 255, 1) 20%, rgba(176, 147, 54, 1) 99.99%)",
                                              marginTop: "-80px",
                                            }}
                                            ml={-0.2}
                                          >
                                            <motion.div
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
                                                  transition: {
                                                    delay: 0.5,
                                                  },
                                                },
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  position: "relative",
                                                  //left: "50px",
                                                  width: "max-content",
                                                }}
                                                pt={10}
                                              >
                                                <Box
                                                  sx={{
                                                    color: "#666",
                                                    fontSize: {
                                                      xs: 14,
                                                      md: 14,
                                                      xl: 17,
                                                    },
                                                    fontWeight: 400,
                                                    lineHeight: "30px",
                                                  }}
                                                >
                                                  <Box component="span">
                                                    {chronicle2.type_tw}
                                                  </Box>
                                                  <Box
                                                    component="span"
                                                    ml={1}
                                                    sx={{
                                                      fontFamily:
                                                        "Helvetica Neue",
                                                    }}
                                                  >
                                                    {chronicle2.type_en}
                                                  </Box>
                                                </Box>
                                                <Box
                                                  sx={{
                                                    fontSize: {
                                                      xs: 17,
                                                      md: 17,
                                                      xl: 20,
                                                    },
                                                    fontWeight: 700,
                                                  }}
                                                >
                                                  {chronicle2.content_tw}
                                                </Box>
                                                <Box
                                                  sx={{
                                                    fontSize: {
                                                      xs: 17,
                                                      md: 17,
                                                      xl: 20,
                                                    },
                                                    fontWeight: 500,
                                                    fontFamily:
                                                      "Helvetica Neue",
                                                  }}
                                                >
                                                  {chronicle2.content_en}
                                                </Box>
                                              </Box>
                                            </motion.div>
                                          </Box>
                                        </motion.div>
                                      </>
                                    );
                                  default:
                                    // for one item
                                    return (
                                      <>
                                        <motion.div
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
                                              transition: {
                                                delay: 0.1,
                                              },
                                            },
                                          }}
                                        >
                                          <Box
                                            sx={{
                                              fontSize: {
                                                xs: 53,
                                                md: 53,
                                                xl: 53,
                                              },
                                              fontFamily: "Helvetica Neue",
                                              fontWeight: 700,
                                              color: "#000",
                                              marginTop: "-60px",
                                            }}
                                          >
                                            {y.year}
                                          </Box>
                                        </motion.div>
                                        <motion.div
                                          initial="hidden"
                                          animate="visible"
                                          variants={{
                                            hidden: {
                                              //height: "40vh",
                                            },
                                            visible: {
                                              height: "200px",
                                              transition: {
                                                delay: 0.5,
                                              },
                                            },
                                          }}
                                        >
                                          {/* golden bar */}
                                          <Box
                                            key={chronicle2.id}
                                            sx={{
                                              width: "50vw",
                                              height: "33px",
                                              background:
                                                "linear-gradient(90deg, rgba(255, 255, 255, 1) 20%, rgba(176, 147, 54, 1) 99.99%)",
                                              marginTop: "-50px",
                                            }}
                                          >
                                            <motion.div
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
                                                  transition: {
                                                    delay: 0.5,
                                                  },
                                                },
                                              }}
                                            >
                                              {/* content of event */}
                                              <Box
                                                sx={{
                                                  position: "relative",
                                                  //top: "-50px",
                                                  width: "max-content",
                                                  //height: "200px",
                                                  //backgroundColor: "#ff0000",
                                                }}
                                                pt={10}
                                                //mb={10}
                                              >
                                                <Box
                                                  sx={{
                                                    color: "#666",
                                                    fontSize: "15px",
                                                    fontWeight: 400,
                                                    lineHeight: "30px",
                                                  }}
                                                >
                                                  <Box component="span">
                                                    {chronicle2.type_tw}
                                                  </Box>
                                                  <Box
                                                    component="span"
                                                    ml={1}
                                                    sx={{
                                                      fontFamily:
                                                        "Helvetica Neue",
                                                    }}
                                                  >
                                                    {chronicle2.type_en}
                                                  </Box>
                                                </Box>
                                                <Box
                                                  sx={{
                                                    fontSize: "20px",
                                                    fontWeight: 700,
                                                  }}
                                                >
                                                  {chronicle2.content_tw}
                                                </Box>
                                                <Box
                                                  sx={{
                                                    fontSize: "17px",
                                                    fontWeight: 500,
                                                    fontFamily:
                                                      "Helvetica Neue",
                                                  }}
                                                >
                                                  {chronicle2.content_en}
                                                </Box>
                                              </Box>
                                            </motion.div>
                                          </Box>
                                        </motion.div>
                                      </>
                                    );
                                }
                              })()}
                            </>
                          )}
                        </Box>
                      ))}
                    </Box>
                  </StyledStepContent>
                </>
              </Step>
            ))}
          </StyledStepper>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [timeline, contact, projects] = await Promise.all([
    await fetchAPI("/chronicles"),
    await fetchAPI("/contact"),
    await fetchAPI("/projects"),
  ]);

  return {
    props: { timeline, contact, projects },
    //revalidate: 1,
  };
}

export default Timeline;

Timeline.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
