import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const PublicationIntro = ({ publication: dataset, fullpageApi, secIndex }) => {
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

  /** fullPage onLeave trigger motion framer **/
  const activeSec = secIndex;
  const activeSecI = activeSec.destination;
  //console.log(activeSecI);

  const [isActive, setIsActive] = React.useState(false);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Box
        ml={{ xs: 7, md: 21, xl: 32 }}
        mr={{ xs: 2, md: 2 }}
        mt={{ xs: 8, md: 13 }}
      >
        <Stack>
          <Item>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 3, md: 3 }}
            >
              <Item sx={{ width: { xs: "100%", md: "18vw", xl: "20vw" } }}>
                <Box
                  sx={{
                    fontSize: { xs: 20, md: 30, xl: 33 },
                    fontWeight: { xs: 700, md: 400, xl: 400 },
                  }}
                  mt={-1}
                >
                  關於出版
                </Box>
              </Item>
              <Item
                className="scrollEle"
                sx={{ width: { xs: "100%", md: "48vw" } }}
              >
                <OverlayScrollbarsComponent
                  options={{ className: "os-theme-block-dark" }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", md: "100%" },
                      /* height of scroll area on mobile */
                      height: { xs: "29vh", md: "35vh", xl: "38vh" },
                      //overflow: "scroll",
                    }}
                    //className="scrollEle"
                    pr={3}
                  >
                    <Box sx={{ fontSize: { md: 14, xl: 17 } }}>
                      <Box
                        component="div"
                        mb={2}
                        sx={{ textAlign: "justify", textJustify: "distribute" }}
                        //in order to make first <P/> of markdown margin top equal zero
                        className="markdownP"
                      >
                        <ReactMarkdown>{dataset.content_tw}</ReactMarkdown>
                      </Box>
                      <Box component="div">
                        <ReactMarkdown>{dataset.content_en}</ReactMarkdown>
                      </Box>
                    </Box>
                  </Box>
                </OverlayScrollbarsComponent>
              </Item>
            </Stack>
          </Item>
          <Item>
            <Box mt={{ xs: 0, md: 2 }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{
                  display: { xs: "flex", md: "flex" },
                  alignItems: {
                    xs: "flex-start",
                    md: "flex-end",
                  },
                  /* set up the distance between two Box */
                  height: { md: "25vh", xl: "25vh" },
                  minHeight: 200,
                }}
              >
                <Item sx={{ width: { xs: "0vw", md: "15vw", xl: "20vw" } }}>
                  <Box sx={{ marginLeft: { xs: -1, md: -1, xl: -1 } }}>
                    <Stack
                      direction="row"
                      spacing={-2}
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "flex-end",
                      }}
                      mt={3}
                      mb={{ xs: 4, md: 0 }}
                    >
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "13px", md: "28px", xl: "39px" },
                            height: { xs: "60px", md: "130px", xl: "180px" },
                            //width: 43,
                            //height: 199,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "16px", md: "35px", xl: "48px" },
                            height: { xs: "68px", md: "148px", xl: "204px" },
                            //width: 54,
                            //height: 228,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "18px", md: "39px", xl: "54px" },
                            height: { xs: "68px", md: "148px", xl: "204px" },
                            //width: 60,
                            //height: 228,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "12px", md: "25px", xl: "36px" },
                            height: { xs: "48px", md: "105px", xl: "144px" },
                            //width: 39,
                            //height: 161,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        {/*<AnimatePresence initial={{ rotate: 0 }}>*/}
                        {activeSecI && (
                          <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 30 }}
                            exit={{ rotate: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                          >
                            <Box
                              sx={{
                                width: { xs: "15px", md: "34px", xl: "45px" },
                                height: {
                                  xs: "46px",
                                  md: "100px",
                                  xl: "138px",
                                },
                                //width: 52,
                                //height: 154,
                                background:
                                  "linear-gradient(269.98deg, rgba(176, 147, 54, 0) 0.01%, #B09336 99.99%)",
                              }}
                            />
                          </motion.div>
                        )}
                        {/*</AnimatePresence>*/}
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "13px", md: "28px", xl: "39px" },
                            height: { xs: "55px", md: "118px", xl: "165px" },
                            //width: 44,
                            //height: 182,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "10.5px", md: "23px", xl: "31.5px" },
                            height: { xs: "26px", md: "121px", xl: "78px" },
                            //width: 35,
                            //height: 187,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                    </Stack>
                  </Box>
                </Item>
                <Item sx={{ width: { xs: "100vw", md: "65vw", lg: "80vw" } }}>
                  <Box mt={{ xs: -2, md: 0 }}>
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      spacing={0}
                      height={"38px"}
                      sx={{
                        display: "flex",
                        justifyContent: "right",
                      }}
                    >
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ borderColor: "#000" }}
                      />
                      <Item sx={{ cursor: "pointer" }}>
                        <Link href="/publications_new">
                          <Stack
                            direction={{ xs: "row", md: "row" }}
                            spacing={0}
                            ml={{ xs: -2, md: 0 }}
                            mt={{ xs: "1vh", md: 0 }}
                          >
                            <Item>
                              <Box
                                sx={{ lineHeight: { xs: "19px", md: "38px" } }}
                              >
                                <Box
                                  component="span"
                                  sx={{
                                    display: { xs: "block", md: "inline" },
                                  }}
                                >
                                  新發表
                                </Box>
                                <Box ml={{ xs: 0, md: 1 }} component="span">
                                  New Release
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
                          </Stack>
                        </Link>
                      </Item>

                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ borderColor: "#000" }}
                      />
                      <Item sx={{ cursor: "pointer" }}>
                        <Link href="/publications">
                          <Stack
                            direction={{ xs: "row", md: "row" }}
                            spacing={0}
                            ml={{ xs: -2, md: 0 }}
                            mt={{ xs: "1vh", md: 0 }}
                          >
                            <Item>
                              <Box
                                sx={{ lineHeight: { xs: "19px", md: "38px" } }}
                              >
                                <Box
                                  component="span"
                                  sx={{
                                    display: { xs: "block", md: "inline" },
                                  }}
                                >
                                  出版
                                </Box>
                                <Box ml={{ xs: 0, md: 1 }} component="span">
                                  Publication
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
                          </Stack>
                        </Link>
                      </Item>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ borderColor: "#000" }}
                      />
                    </Stack>
                  </Box>
                </Item>
              </Stack>
            </Box>
          </Item>
        </Stack>
      </Box>
    </>
  );
};

export default PublicationIntro;
