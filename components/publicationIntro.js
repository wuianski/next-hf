import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const PublicationIntro = ({ publication: dataset }) => {
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

  const [isActive, setIsActive] = React.useState(false);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Box ml={{ xs: 8, md: 25 }} mr={{ xs: 2, md: 8 }} mt={{ xs: 4, md: 13 }}>
        <Stack>
          <Item>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 3 }}
            >
              <Item sx={{ width: { xs: "100%", md: "18vw" } }}>
                <Box
                  sx={{
                    fontSize: { xs: 20, md: 30, xl: 33 },
                    fontWeight: { xs: 700, md: 400, xl: 400 },
                  }}
                >
                  關於出版
                </Box>
              </Item>
              <Item
                sx={{
                  width: { xs: "100%", md: "100vw" },
                  /* height of scroll area on mobile */
                  height: { xs: "40vh", md: "38vh" },
                  overflow: "scroll",
                }}
                //in order to make element can scroll normally, give a className and use it in fullPage options
                className="scrollEle"
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
                  <Box component="div">{dataset.content_en}</Box>
                </Box>
              </Item>
            </Stack>
          </Item>
          <Item>
            <Box mt={{ xs: 0, md: 2 }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{
                  display: { xs: "flex", md: "flex" },
                  alignItems: { xs: "flex-start", md: "flex-end" },
                  /* set up the distance between two Box */
                  height: { md: "25vh", xl: "30vh" },
                  minHeight: 200,
                }}
              >
                <Item sx={{ width: { xs: "0vw", md: "40vw" } }}>
                  <Box sx={{ marginLeft: { xs: 0, md: -8, xl: -1 } }}>
                    <Stack
                      direction="row"
                      spacing={-2}
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "flex-end",
                        height: "25vh",
                        scale: { xs: "0.36", md: "0.65", xl: "1" },
                        marginBottom: { xs: "-3vh", md: "-3.1vh", xl: "0" },
                      }}
                    >
                      <Item>
                        <Box
                          sx={{
                            width: 43,
                            height: 199,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: 54,
                            height: 228,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: 60,
                            height: 228,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: 39,
                            height: 161,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: -30 }}
                          exit={{ rotate: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Box
                            sx={{
                              width: 52,
                              height: 154,
                              background:
                                "linear-gradient(269.98deg, rgba(176, 147, 54, 0) 0.01%, #B09336 99.99%)",
                            }}
                          ></Box>
                        </motion.div>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: 44,
                            height: 182,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: 35,
                            height: 187,
                            background:
                              "linear-gradient(90deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                    </Stack>
                  </Box>
                </Item>
                <Item sx={{ width: { xs: "100vw", md: "60vw" } }}>
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
                      <Item>
                        <Link href="">
                          <Stack
                            direction={{ xs: "row", md: "row" }}
                            spacing={0}
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
                                  焦點新書
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
                        <Link href="/publication">
                          <Stack
                            direction={{ xs: "row", md: "row" }}
                            spacing={0}
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
                                  經點館藏
                                </Box>
                                <Box ml={{ xs: 0, md: 1 }} component="span">
                                  Archive
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
