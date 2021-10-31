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
      <Box ml={{ xs: 8, md: 22 }} mr={{ xs: 2, md: 13 }} mt={{ xs: 5, md: 13 }}>
        <Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 6, md: 1 }}
          >
            <Item sx={{ width: { md: "60vw", md: "20vw" } }}>
              <Box
                sx={{
                  whiteSpace: "pre-line",
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {leadership_doc.years_of_board_members}
              </Box>
            </Item>
            <Item sx={{ width: { xs: "70vw", md: "50vw" } }}>
              <Box
                sx={{
                  //width: "100%",
                  //columns: "100px 2",
                  columnCount: { md: "1", md: "2" },
                  columnGap: "25px",
                  textAlign: "justify",
                  textJustify: "distribute",
                  //in order to make element can scroll normally, give element a specific height.

                  width: { xs: "80vw", md: "60vw" },
                  height: { xs: "33vh", md: "408px" },
                  overflow: "scroll",
                  paddingRight: "60px",
                }}
                //in order to make element can scroll normally, give a className and use it in fullPage options
                className="scrollEle"
              >
                {boardMembers &&
                  boardMembers.map((boardMember) => (
                    <Box
                      key={boardMember.id}
                      mb={{ xs: 6, md: 2 }}
                      sx={{
                        height: { xs: "auto", md: "120px" },
                        //maxHeight: { xs: "80px", md: "120px" },
                      }}
                    >
                      <Box
                        mb={{ xs: 1.5, md: 1.5 }}
                        sx={{ fontSize: { xs: 20, xl: 20 } }}
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
                          whiteSpace: "pre-line",
                          fontSize: { xs: 15, xl: 15 },
                        }}
                      >
                        {boardMember.selected_title}
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Item>
          </Stack>
        </Box>
        <Box
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
