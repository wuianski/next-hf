import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { useState, useLayoutEffect } from "react";

const Leadership = ({ leadership: dataset, fullpageApi }) => {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

  /** (leaders) filting dataset by job_title.id **/
  const leaders = dataset.filter(function (leadership) {
    return leadership.job_title.id !== 5;
  });

  /** react-slick setting **/
  const settings = {
    infinite: false,
    //className: "center",
    //centerMode: true,
    //centerPadding: "500px",
    slidesToShow: 2.5,
    slidesToScroll: 0.5,
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

  /** Drawer setting **/
  const [state, setState] = React.useState({
    right: false,
    right: false,
    right: false,
    right: false,
  });

  const [stateS, setStateS] = React.useState({
    right: false,
    right: false,
    right: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });

    /* when drawer open, set fullPage cannot scroll */
    if (open == true) {
      fullpageApi.setAllowScrolling(false);
    } else {
      fullpageApi.setAllowScrolling(true);
    }
  };

  return (
    <>
      <Box ml={0} mr={0}>
        <Box
          ml={{ xs: 8, md: 33 }}
          mt={{ xs: 0, md: 10 }}
          sx={{ backgroundColor: "none" }}
        >
          <Slider {...settings}>
            {leaders &&
              leaders.map((leader) => (
                <Box key={leader.id}>
                  <React.Fragment key={leader.job_title.tw}>
                    <Box
                      onClick={toggleDrawer(leader.job_title.tw, true)}
                      sx={{ cursor: "pointer" }}
                    >
                      <Box mb={2} sx={{ fontSize: 15 }} component="div">
                        <Box
                          mb={2}
                          sx={{
                            width: { xs: "13vh", md: "33vh" },
                            height: { xs: "13vh", md: "33vh" },
                          }}
                        >
                          <Image
                            src="/localTest_IMGs/chien.png"
                            alt="download icon"
                            width={500}
                            height={500}
                          />
                        </Box>
                        <Box
                          component="span"
                          sx={{
                            fontWeight: 500,
                            display: { xs: "block", md: "inline" },
                          }}
                        >
                          {leader.job_title.tw}
                        </Box>
                        <Box
                          component="span"
                          sx={{ fontWeight: 500 }}
                          ml={{ xs: 0, md: 1 }}
                        >
                          {leader.job_title.en}
                        </Box>
                      </Box>
                      <Box sx={{ fontSize: 20, fontWeight: 500 }}>
                        <Box>
                          <Box
                            sx={{ fontSize: { xs: 20, md: 20 } }}
                            component="div"
                          >
                            {leader.name_tw}
                          </Box>
                          <Box
                            component="div"
                            sx={{
                              fontSize: { xs: 15, md: 20 },
                              fontWeight: { xs: 400, md: 400 },
                            }}
                          >
                            {leader.name_en}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Drawer
                      anchor={"right"}
                      open={state[leader.job_title.tw]}
                      onClose={toggleDrawer(leader.job_title.tw, false)}
                      //onClose={handleCloseDrawer}
                    >
                      {/* content inside of drawer */}
                      <Box
                        role="presentation"
                        onClick={toggleDrawer(leader.job_title.tw, false)}
                        onKeyDown={toggleDrawer(leader.job_title.tw, false)}
                        sx={{
                          width: "80vw",
                          //height: "100vh",
                          backgroundColor: "#000",
                          padding: 2,
                          //position: "absolute",
                        }}
                      >
                        <Stack direction="row" spacing={1}>
                          <Item sx={{ width: "50%" }}>
                            <Box pl={6} pt={6} mb={-6}>
                              <Image
                                src="/localTest_IMGs/chien.png"
                                alt="download icon"
                                width={400}
                                height={400}
                              />
                            </Box>
                            <Box
                              pl={1}
                              pb={6}
                              sx={{
                                /* for overlay work */
                                position: "absolute",
                                bottom: 0,
                                color: "#fff",
                                fontWeight: 500,
                                fontSize: {
                                  md: 13,
                                  xl: 15,
                                },
                                lineHeight: 1.3,
                              }}
                            >
                              <Box mb={3}>
                                <Box component="span" sx={{ fontWeight: 700 }}>
                                  {leader.job_title.tw}
                                </Box>
                                <Box component="span" ml={1}>
                                  {leader.job_title.en}
                                </Box>
                              </Box>

                              <Box mb={3}>
                                <Box sx={{ fontSize: { md: 30, xl: 33 } }}>
                                  {leader.name_tw}
                                </Box>
                                <Box sx={{ fontSize: { md: 24, xl: 27 } }}>
                                  {leader.name_en}
                                </Box>
                              </Box>

                              <Box sx={{ whiteSpace: "pre-line" }}>
                                {leader.selected_title}
                              </Box>
                            </Box>
                          </Item>
                          {/* leader.introduce */}
                          <Item sx={{ width: "50%" }}>
                            <Box
                              pr={3}
                              sx={{
                                color: "#fff",
                                fontSize: 15,
                                lineHeight: 1.5,
                                fontWeight: 500,
                                /* vertical align in the middle of screen's height */
                                display: "table-cell",
                                verticalAlign: "middle",
                                height: "100vh",
                              }}
                            >
                              <Box
                                ml={-13}
                                sx={{
                                  /* for overlay work */
                                  position: "relative",
                                  whiteSpace: "pre-line",
                                  fontSize: {
                                    md: 15,
                                    xl: 17,
                                  },
                                }}
                              >
                                <Box component="div" mb={3}>
                                  {leader.introduce_tw}
                                </Box>
                                <Box component="div">{leader.introduce_en}</Box>
                              </Box>
                            </Box>
                          </Item>
                          {/* /leader.introduce */}
                        </Stack>
                      </Box>
                      {/* /content inside of drawer */}
                    </Drawer>
                  </React.Fragment>
                </Box>
              ))}
          </Slider>
        </Box>
        <Box
          ml={{ xs: 6, md: 13 }}
          mr={{ xs: 2, md: 13 }}
          /* set up the distance between two Box */
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            marginTop: { xs: "13vh", md: "13vh", xl: "18vh" },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={0}
            height={"38px"}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#000" }}
            />
            <Item>
              <Stack direction="row" spacing={0}>
                <Item>
                  <Box>組織章程</Box>
                  <Box>Articles of Organization</Box>
                </Item>
                <Item>
                  <Image
                    src="/IMGs/download_icon.png"
                    alt="download icon"
                    width={38}
                    height={38}
                  />
                </Item>
              </Stack>
            </Item>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#000" }}
            />
            <Item>
              <Stack direction="row" spacing={0}>
                <Item>
                  <Box>歷年董事會成員</Box>
                  <Box>Board Members</Box>
                </Item>
                <Item>
                  <Image
                    src="/IMGs/download_icon.png"
                    alt="download icon"
                    width={38}
                    height={38}
                  />
                </Item>
              </Stack>
            </Item>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#000" }}
            />
            <Item
              //onClick={() => fullpageApi.moveTo(5, 1)}
              sx={{ cursor: "pointer" }}
            >
              <Link href="/board_members">
                <Stack direction="row" spacing={0}>
                  <Item>
                    <Box>現任董事會成員</Box>
                    <Box>Board Members</Box>
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
      </Box>
    </>
  );
};

export default Leadership;

