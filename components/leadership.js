import React, { useRef } from "react";
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
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const Leadership = ({ leadership: dataset, fullpageApi, leadership_doc }) => {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

  /** (leaders) filting dataset by job_title.id **/
  const leaders = dataset.filter(function (leadership) {
    return leadership.job_title.id !== 5;
  });

  /** (boardMembers) filting dataset by job_title.id **/
  const boardMembers = dataset.filter(function (leadership) {
    return leadership.job_title.id == 5;
  });

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

  return (
    <>
      <Box
        ml={{ xs: 8, md: 22 }}
        mr={{ xs: 2, md: 13 }}
        mt={{ xs: 2, md: 13 }}
        mb={1}
      >
        <Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 1 }}
          >
            <Item sx={{ width: { xs: "60vw", md: "20vw" } }}>
              <Box
                sx={{
                  whiteSpace: "pre-line",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                {leadership_doc.years_of_board_members}
              </Box>
            </Item>
            <Item sx={{ width: { xs: "80vw", md: "50vw" } }}>
              <OverlayScrollbarsComponent
                options={{ className: "os-theme-block-dark-timeline" }}
              >
                <Box
                  sx={{
                    columnCount: { md: "1", md: "2" },
                    columnGap: "5px",
                    //textAlign: "justify",
                    //textJustify: "distribute",
                    //in order to make element can scroll normally, give element a specific height.
                    width: { xs: "70vw", md: "60vw" },
                    height: { xs: "30vh", md: "348px" },
                    //overflow: "scroll",
                    paddingRight: { xs: "3px", md: "90px" },
                  }}
                  //in order to make element can scroll normally, give a className and use it in fullPage options
                  className="scrollEle"
                >
                  {boardMembers &&
                    boardMembers.map((boardMember) => (
                      <Box
                        key={boardMember.id}
                        mb={{ xs: 3, md: 2 }}
                        sx={{
                          height: { xs: "auto", md: "100px" },
                          width: { xs: "auto", md: "300px" },
                          //maxHeight: { xs: "80px", md: "120px" },
                        }}
                      >
                        <Box
                          mb={{ xs: 1, md: 1 }}
                          sx={{ fontSize: { xs: 18, xl: 18 } }}
                        >
                          <Box component="span" sx={{ fontWeight: 700 }}>
                            {boardMember.name_tw}
                          </Box>
                          <Box component="span" ml={2}>
                            {boardMember.name_en}
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            whiteSpace: { xs: "pre-line", md: "pre-line" },
                            fontSize: { xs: 14, xl: 14 },
                          }}
                        >
                          {boardMember.selected_title}
                        </Box>
                      </Box>
                    ))}
                </Box>
              </OverlayScrollbarsComponent>
            </Item>
          </Stack>
        </Box>
        <Box
          /* set up the distance between two Box */
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-end", md: "flex-end" },
            marginTop: { xs: "5vh", md: "10vh", xl: "16vh" },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1}
            height={"38px"}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#000" }}
            />
            <Item>
              <a
                href={leadership_doc.articles_of_organization.url}
                target="_blank"
              >
                <Stack direction="row" spacing={0}>
                  <Item>
                    <Box>捐助章程</Box>
                    <Box>Foundation Bylaws</Box>
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
              </a>
            </Item>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#000" }}
            />
            <Item>
              <a href={leadership_doc.board_members.url} target="_blank">
                <Stack direction="row" spacing={0}>
                  <Item>
                    <Box>歷屆董事會成員</Box>
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
              </a>
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
