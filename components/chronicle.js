import * as React from "react";
import Box from "@mui/material/Box";
import Stepper, { stepperClasses } from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";
import StepContent, { stepContentClasses } from "@mui/material/StepContent";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

//import _, { map } from "underscore";
import _ from "lodash";

const Chronicle = ({ chronicle: dataset }) => {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

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

  /** style stepper **/
  const StyledStepper = styled(Stepper)(() => ({
    [`&.${stepperClasses.root}`]: {
      alignItems: "end",
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
      position: "relative",
      marginTop: "-30vh",
      marginBottom: "-15vh",
    },
  }));

  return (
    <>
      <Box
        ml={{ xs: 8, md: 23 }}
        mr={{ xs: 2, md: 6 }}
        pt={13} /*sx={{ marginTop: "60vh" }}*/
      >
        <OverlayScrollbarsComponent
          options={{ className: "os-theme-block-dark-timeline" }}
        >
          <Box
            pt={33} //16
            pl={{ xs: 3, md: 10 }}
            sx={{
              height: { xs: "80vh", md: "80vh" },
              //in order to make element can scroll normally, give element a specific height.
              width: { xs: "80vw", md: "80vw" },
              //overflow: "scroll",
            }}
            //in order to make element can scroll normally, give a className and use it in fullPage options
            className="scrollEle"
            pb={3}
          >
            <StyledStepper nonLinear activeStep={activeStep}>
              {arrByYear.map((y, index) => (
                <Step key={y.year} completed={completed[index]}>
                  <>
                    <StyledStepLabel onClick={handleStep(index)}>
                      <Box>
                        {y.val.map((chronicle2) => (
                          <Box key={chronicle2.id}>
                            {chronicle2.content_en === null ? (
                              <>
                                <Box
                                  ml={0.8}
                                  sx={{
                                    width: "10px",
                                    height: "5vh",
                                    //marginTop: "13.5vh", //stay bottom 8vh, 13.5vh, 38vh
                                    marginTop: "140px",
                                    bottom: 0,
                                    background:
                                      "linear-gradient(180deg, #000000 0%, rgba(139, 139, 139, 0.453125) 44.79%, rgba(255, 255, 255, 0) 100%)",
                                  }}
                                ></Box>
                                <Box
                                  sx={{
                                    fontSize: { xs: 10, md: 10, xl: 13 },
                                    fontWeight: 400,
                                    color: "rgba(0, 0, 0, 0.38)",
                                  }}
                                >
                                  {y.year}
                                </Box>
                              </>
                            ) : (
                              <>
                                {chronicle2.order === 1 ? (
                                  <></>
                                ) : (
                                  <>
                                    <Box
                                      sx={{
                                        fontSize: { xs: 12, md: 14, xl: 15 },
                                        fontWeight: 700,
                                        color: "#000",
                                        marginTop: "77px", // important to make unclick item down
                                      }}
                                    >
                                      {y.year}
                                    </Box>
                                    <Box
                                      sx={{
                                        cursor: "pointer",
                                        width: "30px",
                                        height: "12vh",
                                        marginBottom: "-250px", //for mobile
                                        background:
                                          "linear-gradient(180deg, #000000 0%, rgba(139, 139, 139, 0.5) 60%, rgba(255, 255, 255, 0) 100%)",
                                      }}
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
                                      xs: 25,
                                      md: 28,
                                      xl: 31,
                                    },
                                    fontWeight: 500,
                                    color: "#000",
                                    marginLeft: "-17px",
                                    marginBottom: "-24vh", //short shift distance? -24vh
                                  }}
                                ></Box>
                                <Box
                                  key={chronicle2.id}
                                  sx={{
                                    width: "33px",
                                    height: "50vh",
                                    background: "none",
                                  }}
                                ></Box>
                              </>
                            ) : (
                              <>
                                {(() => {
                                  switch (chronicle2.order) {
                                    case 1: // for 1st of two items
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
                                                  delay: 0.2,
                                                },
                                              },
                                            }}
                                          >
                                            <Box
                                              sx={{
                                                fontSize: {
                                                  xs: 25,
                                                  md: 28,
                                                  xl: 31,
                                                },
                                                fontWeight: 500,
                                                color: "#000",
                                                marginLeft: "-17px",
                                                //marginTop: "-187px",
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
                                                  delay: 0.6,
                                                },
                                              },
                                            }}
                                          >
                                            <Box
                                              key={chronicle2.id}
                                              sx={{
                                                width: "30px",
                                                height: "87px",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  position: "relative",
                                                  left: "50px",
                                                  width: "max-content",
                                                }}
                                              >
                                                <Box
                                                  sx={{
                                                    color: "#666",
                                                    fontSize: {
                                                      xs: 12,
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
                                                  <Box component="span" ml={1}>
                                                    {chronicle2.type_en}
                                                  </Box>
                                                </Box>
                                                <Box
                                                  sx={{
                                                    fontSize: {
                                                      xs: 15,
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
                                                      xs: 15,
                                                      md: 17,
                                                      xl: 20,
                                                    },
                                                    fontWeight: 500,
                                                  }}
                                                >
                                                  {chronicle2.content_en}
                                                </Box>
                                              </Box>
                                            </Box>
                                          </motion.div>
                                        </>
                                      );
                                    case 2: // for 2nd of two items
                                      return (
                                        <>
                                          <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                              hidden: {
                                                height: "50vh",
                                              },
                                              visible: {
                                                height: "50vh",
                                                transition: {
                                                  delay: 0.6,
                                                },
                                              },
                                            }}
                                          >
                                            <Box
                                              key={chronicle2.id}
                                              sx={{
                                                width: {
                                                  xs: "33px",
                                                  xl: "36px",
                                                },
                                                height: {
                                                  xs: "50vh",
                                                  ml: "50vh",
                                                },
                                                marginTop: "-87px", //-87px
                                                background:
                                                  "linear-gradient(0deg, rgba(255, 255, 255, 1) 0.01%, rgba(176, 147, 54, 1) 99.99%)",
                                                //marginTop: "calc(-30vh - 87px)",
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
                                                      delay: 0.6,
                                                    },
                                                  },
                                                }}
                                              >
                                                <Box
                                                  sx={{
                                                    position: "relative",
                                                    left: "50px",
                                                    width: "max-content",
                                                    top: "98px", //distance between two items
                                                  }}
                                                >
                                                  <Box
                                                    sx={{
                                                      color: "#666",
                                                      fontSize: {
                                                        xs: 12,
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
                                                    >
                                                      {chronicle2.type_en}
                                                    </Box>
                                                  </Box>
                                                  <Box
                                                    sx={{
                                                      fontSize: {
                                                        xs: 15,
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
                                                        xs: 15,
                                                        md: 17,
                                                        xl: 20,
                                                      },
                                                      fontWeight: 500,
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
                                                  delay: 0.2,
                                                },
                                              },
                                            }}
                                          >
                                            <Box
                                              sx={{
                                                fontSize: {
                                                  xs: 25,
                                                  md: 28,
                                                  xl: 31,
                                                },
                                                fontWeight: 500,
                                                color: "#000",
                                                marginLeft: "-17px",
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
                                                height: "40vh",
                                              },
                                              visible: {
                                                height: "50vh",
                                                transition: {
                                                  delay: 0.6,
                                                },
                                              },
                                            }}
                                          >
                                            <Box
                                              key={chronicle2.id}
                                              sx={{
                                                width: {
                                                  xs: "33px",
                                                  xl: "36px",
                                                },
                                                height: "50vh",
                                                background:
                                                  "linear-gradient(0deg, rgba(255, 255, 255, 1) 0.01%, rgba(176, 147, 54, 1) 99.99%)",
                                                //marginTop: "-30vh",
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
                                                      delay: 0.6,
                                                    },
                                                  },
                                                }}
                                              >
                                                <Box
                                                  sx={{
                                                    position: "relative",
                                                    left: "50px",
                                                    width: "max-content",
                                                    //height: "100px",
                                                  }}
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
        </OverlayScrollbarsComponent>
      </Box>
    </>
  );
};

export default Chronicle;
