import * as React from "react";
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { NextSeo } from "next-seo";

function Members({ members: dataset, leadership_doc, contact }) {
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
  const StackItem = styled(Paper)(({ theme }) => ({
    //...theme.typography.body2,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textAlign: "left",
    color: "#000",
    background: "none",
    boxShadow: "none",
    fontSize: 17,
  }));

  /** grid Item setting **/
  const GridItem = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    textAlign: "left",
    color: "#000",
    background: "none",
    boxShadow: "none",
  }));

  return (
    <>
      <NextSeo
        title="Hong Foundation 洪建全基金會 ｜ 成員"
        description="Hong Foundation 洪建全基金會：成員"
        canonical="https://hongfoundation.org.tw/members"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description: "Hong Foundation 洪建全基金會：成員",
          site_name: "Hong Foundation 洪建全基金會",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Nav contact={contact} />
      <Box id="myMenuInPage">
        <div className="active secName">
          <div className="secName_twInPage">成員</div>
          <div className="secName_enInPage">members</div>
        </div>
      </Box>
      <Box
        ml={{ xs: 8.5, md: "20vw" }}
        mr={{ xs: 2, md: 10 }}
        mt={{ xs: 20, sm: 23, md: 23 }}
      >
        <Box>
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            spacing={{ xs: 4, md: 1 }}
          >
            {/* current year */}
            <StackItem>
              <Box
                className="markdownP"
                sx={{ width: "fit-content", borderBottom: "5px solid #000" }}
              >
                <ReactMarkdown>
                  {leadership_doc.years_of_board_members}
                </ReactMarkdown>
              </Box>
              <Box pt={{ xs: 4, md: 6 }} ml={-2}>
                <a href={leadership_doc.board_members.url} target="_blank">
                  <Stack direction="row" spacing={0}>
                    <StackItem>
                      <Image
                        src="/IMGs/download_icon.png"
                        alt="download icon"
                        width={38}
                        height={38}
                      />
                    </StackItem>
                    <StackItem sx={{ fontSize: 15, lineHeight: "19px" }}>
                      <Box>歷屆董事會成員</Box>
                      <Box sx={{ fontFamily: "Helvetica Neue" }}>
                        Board Members
                      </Box>
                    </StackItem>
                  </Stack>
                </a>
              </Box>
              <Box pt={2} ml={-2} pb={{ xs: 4, md: 0 }}>
                <a
                  href={leadership_doc.articles_of_organization.url}
                  target="_blank"
                >
                  <Stack direction="row" spacing={0}>
                    <StackItem>
                      <Image
                        src="/IMGs/download_icon.png"
                        alt="download icon"
                        width={38}
                        height={38}
                      />
                    </StackItem>
                    <StackItem sx={{ fontSize: 15, lineHeight: "19px" }}>
                      <Box>捐助章程</Box>
                      <Box sx={{ fontFamily: "Helvetica Neue" }}>
                        Foundation Bylaws
                      </Box>
                    </StackItem>
                  </Stack>
                </a>
              </Box>
            </StackItem>
            {/* members */}
            <StackItem
              sx={{
                width: { xs: "76vw", sm: "60vw", md: "50vw", xl: "50vw" },
              }}
            >
              <Box
                sx={{ flexGrow: 1 }}
                pl={{ xs: "0vw", md: "10vw" }}
                mb={{ xs: 10, sm: 30, md: 10 }}
              >
                <Grid
                  container
                  spacing={{ xs: 3, md: 3 }}
                  columns={{ xs: 1, sm: 8, md: 8 }}
                >
                  {boardMembers &&
                    boardMembers.map((boardMember, index) => (
                      <Grid item xs={2} sm={4} md={4} key={index}>
                        <GridItem>
                          <Box key={boardMember.id} mb={{ xs: 3, md: 2 }}>
                            <Box
                              mb={{ xs: 1, md: 1 }}
                              sx={{ fontSize: { xs: 18, xl: 18 } }}
                            >
                              <Box
                                component="span"
                                sx={{
                                  fontWeight: 700,
                                  letterSpacing: "0.02em",
                                }}
                              >
                                {boardMember.name_tw}
                              </Box>
                              <Box
                                component="span"
                                sx={{
                                  fontFamily: "Helvetica Neue",
                                  fontWeight: 500,
                                }}
                                ml={2}
                              >
                                {boardMember.name_en}
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                whiteSpace: { xs: "pre-line", md: "pre-line" },
                                fontSize: { xs: 14, xl: 14 },
                                fontFamily: "Helvetica Neue",
                              }}
                            >
                              {boardMember.selected_title}
                            </Box>
                          </Box>
                        </GridItem>
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </StackItem>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [members, leadership_doc, contact] = await Promise.all([
    await fetchAPI("/leadership-members"),
    await fetchAPI("/leadership"),
    await fetchAPI("/contact"),
  ]);

  return {
    props: { members, leadership_doc, contact },
    //revalidate: 1,
  };
}

export default Members;

Members.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
