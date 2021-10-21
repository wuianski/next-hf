import React from "react";
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";
//import Nav from "../components/nav";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import Slide from "@mui/material/Slide";

function LeadershipBoad({ leadership: dataset, leadership_doc }) {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

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
      <Slide direction="left" apear={true} in={true} timeout={700}>
        <Box ml={13} mr={6} mt={20}>
          <Stack direction="row" spacing={1}>
            <Item sx={{ width: "20vw" }}>
              <Box
                sx={{
                  whiteSpace: "pre-line",
                  fontSize: { md: 17, xl: 20 },
                  fontWeight: 700,
                }}
              >
                {leadership_doc.years_of_board_members}
              </Box>
            </Item>
            <Item sx={{ width: "50vw" }}>
              <Box
                sx={{
                  width: "100%",
                  columnCount: "2",
                  columnGap: "25px",
                  textAlign: "justify",
                  textJustify: "distribute",
                }}
              >
                {boardMembers &&
                  boardMembers.map((boardMember) => (
                    <Box key={boardMember.id} mb={2} sx={{ height: "120px" }}>
                      <Box mb={1.5} sx={{ fontSize: { md: 17, xl: 20 } }}>
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
                          fontSize: { md: 12, xl: 15 },
                        }}
                      >
                        {boardMember.selected_title}
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Item>
            <Item sx={{ width: "25vw", cursor: "pointer" }}>
              <Link href="/main#section5">
                <Stack
                  direction="row"
                  spacing={0}
                  sx={{ position: "fixed", bottom: "38px" }}
                  height={"38px"}
                >
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "#000" }}
                  />
                  <Item>
                    <Box
                      pl={1}
                      sx={{
                        lineHeight: "38px",
                        textTransform: "uppercase",
                        fontSize: { md: 12, xl: 15 },
                        fontWeight: 700,
                      }}
                    >
                      返回 back
                    </Box>
                  </Item>
                  <Item>
                    <Box pr={1}>
                      <Image
                        src="/IMGs/back_icon.png"
                        alt="back icon"
                        width={38}
                        height={38}
                      />
                    </Box>
                  </Item>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "#000" }}
                  />
                </Stack>
              </Link>
            </Item>
          </Stack>
        </Box>
      </Slide>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [leadership, leadership_doc] = await Promise.all([
    await fetchAPI("/leadership-members"),
    await fetchAPI("/leadership"),
  ]);

  return {
    props: { leadership, leadership_doc },
    //revalidate: 1,
  };
}

export default LeadershipBoad;

LeadershipBoad.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
