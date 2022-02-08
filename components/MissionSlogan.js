import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MissionSlogan = ({ mission: dataset, fullpageApi, secIndex }) => {
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

  /** fullPage onLeave trigger motion framer **/
  const activeSec = secIndex;
  const activeSecI = secIndex;

  return (
    <div>
      <Box ml={{ xs: 10, md: 23 }} mr={{ xs: 0, md: 4 }} mt={{ xs: 6, md: 13 }}>
        {/* 1st row */}

        <Box
          sx={{
            fontSize: { xs: 24, md: 30, xl: 33 },
            lineHeight: 1.3,
            display: "flex",
            justifyContent: "flex-end",
            width: { xs: "90%", md: "70%", lg: "68%", xl: "60%" },
            height: { xs: "30vh", md: "40vh", lg: "34vh", xl: "38vh" },
            //textTransform: "uppercase",
          }}
          mr={0}
          mb={{ xs: 12, md: 6 }}
          ml={{ xs: "0", md: "20vw", xl: "20vw" }}
        >
          {dataset && (
            <Box key={dataset.id}>
              <Box sx={{ whiteSpace: { xs: "unset", md: "pre-line" } }}>
                {dataset.slogan_tw}
              </Box>
              <Box
                sx={{
                  whiteSpace: { xs: "unset", md: "pre-line" },
                  fontSize: { xs: 16, md: 22, xl: 23 },
                  fontFamily: "Helvetica Neue",
                }}
                mt={2}
              >
                {dataset.slogan_en}
              </Box>
            </Box>
          )}
        </Box>

        {/* 2nd row */}
        <Box>
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            spacing={{ xs: 3, md: 0 }}
          >
            <Item sx={{ width: { xs: "80vw", md: "30vw" } }}>
              {activeSecI && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: { duration: 0.3, delay: 0.6 },
                    },
                  }}
                >
                  <Box>
                    <Stack
                      direction="column"
                      spacing={{ xs: 2, md: 5 }}
                      /*sx={{
                        scale: { xs: "0.4", md: "0.75", xl: "1" },
                      }}*/
                      ml={{ xs: -2, md: -2, xl: 10 }}
                    >
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "80px", md: "210px" },
                            height: { xs: "20px", md: "55px" },
                            background:
                              "linear-gradient(180deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            width: { xs: "80px", md: "210px" },
                            height: { xs: "20px", md: "55px" },
                            background:
                              "linear-gradient(180deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                          }}
                        ></Box>
                      </Item>
                    </Stack>
                  </Box>
                </motion.div>
              )}
            </Item>
            <Item sx={{ width: { xs: "70vw", md: "70vw" } }}>
              {/*<AnimatePresence initial={{ x: 60 }}>*/}

              <Box
                sx={{
                  fontSize: { md: 17, xl: 19 },
                  lineHeight: 1.3,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Link href="/about">
                  <Box
                    variant="text"
                    sx={{
                      lineHeight: "38px",
                      borderBottom: "3px solid #000",
                      cursor: "pointer",
                      textTransform: "capitalize",
                    }}
                  >
                    更多 more
                  </Box>
                </Link>
              </Box>

              {/*</AnimatePresence>*/}
            </Item>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default MissionSlogan;
