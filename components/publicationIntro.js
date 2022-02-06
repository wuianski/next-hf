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
        ml={{ xs: 7, md: 26, lg: 28, xl: 33 }}
        mr={{ xs: 2, md: 2 }}
        mt={{ xs: 23, md: 18 }}
        mb={5}
      >
        <Stack>
          <Item>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 3, md: 0 }}
            >
              {/* title */}
              <Item
                sx={{
                  width: { xs: "100%", md: "18vw", xl: "20vw" },
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: 20, md: 26, xl: 33 },
                    fontWeight: { xs: 700, md: 400, xl: 400 },
                  }}
                  mt={-0.5}
                >
                  關於出版
                </Box>
              </Item>
              {/* content */}
              <Item sx={{ width: { xs: "100%", sm: "20vw", md: "90vw" } }}>
                <Box
                  sx={{
                    width: { xs: "100%", md: "100%" },
                  }}
                  pr={{ md: 0, lg: 5, xl: 5 }}
                >
                  <Box sx={{ fontSize: { xs: 14, md: 14, lg: 15, xl: 17 } }}>
                    <Box
                      component="div"
                      mb={2}
                      sx={{ textAlign: "justify" }}
                      //in order to make first <P/> of markdown margin top equal zero
                      className="markdownP"
                    >
                      <ReactMarkdown>{dataset.content_tw}</ReactMarkdown>
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        textAlign: "justify",
                        fontSize: { xs: 13, md: 13, lg: 14, xl: 16 },
                      }}
                    >
                      <ReactMarkdown>{dataset.content_en}</ReactMarkdown>
                    </Box>
                  </Box>
                </Box>
              </Item>
            </Stack>
          </Item>
          <Item>
            <Box mt={{ xs: 0, md: -2, lg: -4, xl: -6 }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{
                  display: { xs: "flex", md: "flex" },
                  alignItems: {
                    xs: "flex-start",
                    md: "flex-end",
                  },
                  /* set up the distance between two Box */

                  height: { md: "20vh", lg: "20vh" },
                  minHeight: 180,
                }}
              >
                {/* deco */}
                <Item sx={{ width: { xs: "0vw", md: "15vw", xl: "15vw" } }}>
                  <Box ml={{ xs: -1, md: -15 }}>
                    <Stack
                      direction="row"
                      spacing={-2}
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "flex-end",
                      }}
                      mt={{ xs: 5, md: -10 }}
                      mb={{ xs: 4, md: 0 }}
                    >
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "13px", md: "28px", xl: "28px" },
                            height: { xs: "60px", md: "130px", xl: "130px" },
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "16px", md: "35px", xl: "35px" },
                            height: { xs: "68px", md: "148px", xl: "148px" },
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "18px", md: "39px", xl: "39px" },
                            height: { xs: "68px", md: "148px", xl: "148px" },
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "12px", md: "25px", xl: "25px" },
                            height: { xs: "48px", md: "105px", xl: "105px" },
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
                                width: { xs: "15px", md: "34px", xl: "34px" },
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
                            width: { xs: "13px", md: "28px", xl: "28px" },
                            height: { xs: "55px", md: "118px", xl: "118px" },
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
                            width: { xs: "10.5px", md: "23px", xl: "23px" },
                            height: { xs: "26px", md: "121px", xl: "121px" },
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                    </Stack>
                  </Box>
                </Item>
                {/* links */}
                <Item sx={{ width: { xs: "60vw", md: "65vw", lg: "80vw" } }}>
                  <Box mt={{ xs: -2, md: 0 }} mb={{ xs: 10, md: 0 }}>
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
                        <Link href="/publications_new" passHref>
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
                                    fontWeight: 700,
                                  }}
                                >
                                  新發表
                                </Box>
                                <Box
                                  ml={{ xs: 0, md: 1 }}
                                  component="span"
                                  sx={{ fontWeight: 500 }}
                                >
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
                        <Link href="/publications" passHref>
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
                                    fontWeight: 700,
                                  }}
                                >
                                  出版
                                </Box>
                                <Box
                                  ml={{ xs: 0, md: 1 }}
                                  component="span"
                                  sx={{ fontWeight: 500 }}
                                >
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
