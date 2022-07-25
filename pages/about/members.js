import * as React from "react";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
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
import { motion } from "framer-motion";

function Members({
  members: dataset,
  leadership_doc,
  contact,
  projects: datasetP,
}) {
  /** sorting member dataset by id **/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

  /** (leaders) filting dataset by job_title.id **/
  const leaders = dataset.filter(function (leadership) {
    return leadership.job_title.id !== 5;
  });

  /** (boardMembers) filting dataset by job_title.id **/
  const boardMembers = dataset.filter(function (leadership) {
    return leadership.job_title.id == 5;
  });

  /* CHANGE programs ARRAY SORTING BY ID*/
  !datasetP ? null : datasetP.sort((a, b) => a.id - b.id);
  const mydataset = datasetP.slice(0, 3);

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
      <Nav contact={contact} projects={datasetP} />
      {/* sub-menu */}
      <Box className="subMenuInAbooutPage">
        <ul className="subMenuInAbooutPage_ul">
          <li className="subMenuInAbooutPage_li">
            <Link href="/about">關於</Link>
          </li>
          <li className="subMenuInAbooutPage_li active">
            <Link href="/about/members">成員</Link>
          </li>
          <li className="subMenuInAbooutPage_li">
            <a href="/about/resource">公開資訊</a>
          </li>
          <li className="subMenuInAbooutPage_li">
            <a href="/about/timeline">大事記</a>
          </li>
          <li className="subMenuInAbooutPage_li">
            <a href="/about/reports">報表</a>
          </li>
        </ul>
        <Box
          mt={{ xs: -0.2, sm: 2.2, md: 3 }}
          ml={"auto"}
          mr={"auto"}
          sx={{
            width: { xs: "90vw", sm: "93vw", md: "80vw" },
            maxWidth: "954px",
            height: 2,
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 12.68%, #000000 87.11%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </Box>
      {/* member content */}
      {/* <motion.div
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
            transition: { type: "spring", stiffness: 100 },
          },
        }}
      > */}
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          maxWidth: { xs: "100%", md: "954px" },
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 24, sm: 30, md: 32 }}
      >
        <Box>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 4, md: 1 }}
          >
            {/* current year */}
            <StackItem
              sx={{
                width: { xs: "90vw", sm: "90vw", md: "25vw" },
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: 24, md: 30 },
                  fontWeight: 300,
                  color: "#B09336",
                }}
                className="markdownP"
              >
                <ReactMarkdown>
                  {leadership_doc.years_of_board_members}
                </ReactMarkdown>
                <Box
                  sx={{
                    width: { xs: "167px", md: "167px" },
                    height: { xs: "7px", md: "7px" },
                    background:
                      "linear-gradient(90deg, #B09336 27.08%, rgba(176, 147, 54, 0.5) 56.25%, rgba(176, 147, 54, 0.3) 80.28%, rgba(176, 147, 54, 0) 100%)",
                  }}
                  mt={3}
                  mr={6}
                ></Box>
              </Box>
              <Box pt={{ xs: 3, md: 6 }} ml={-2}>
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
                      <Box sx={{ fontFamily: "Helvetica" }}>Board Members</Box>
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
                      <Box sx={{ fontFamily: "Helvetica" }}>
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
                width: { xs: "76vw", sm: "90vw", md: "55vw" },
              }}
            >
              <Box
                sx={{ flexGrow: 1 }}
                pl={{ xs: "0vw", md: "2vw" }}
                mb={{ xs: 0, sm: 30, md: 10 }}
                pt={{ xs: 0, md: 3.5 }}
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
                          <Box key={boardMember.id} mb={{ xs: 0, md: 2 }}>
                            <Box
                              mb={{ xs: 1, md: 1 }}
                              sx={{ fontSize: { xs: 17, xl: 18 } }}
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
                                  fontFamily: "Helvetica",
                                  fontWeight: 500,
                                }}
                                ml={2}
                              >
                                {boardMember.name_en}
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                whiteSpace: {
                                  xs: "pre-line",
                                  md: "pre-line",
                                },
                                fontSize: { xs: 14, xl: 14 },
                                fontFamily: "Helvetica",
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
      {/* </motion.div> */}
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [members, leadership_doc, contact, projects] = await Promise.all([
    await fetchAPI("/leadership-members"),
    await fetchAPI("/leadership"),
    await fetchAPI("/contact"),
    await fetchAPI("/projects"),
  ]);

  return {
    props: { members, leadership_doc, contact, projects },
    //revalidate: 1,
  };
}

export default Members;

Members.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
