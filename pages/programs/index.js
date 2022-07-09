import React, { useState } from "react";
import Box from "@mui/material/Box";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import { fetchAPI } from "../../lib/api";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { NextSeo } from "next-seo";
import News from "../../components/news";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import programs from "../../public/IMGs/programs.png";
import externalLink_icon from "../../public/IMGs/externalLink_icon.png";

/** stack Item setting **/
const Item = styled(Paper)(({ theme }) => ({
  //...theme.typography.body2,
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
  textAlign: "left",
  color: "#000",
  background: "none",
  boxShadow: "none",
}));

function Index({ contact, projects: dataset }) {
  /* CHANGE ARRAY SORTING BY ID*/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);
  const mydataset = dataset.slice(0, 4);

  return (
    <>
      <NextSeo
        title="Hong Foundation 洪建全基金會 ｜ 計畫"
        description="Hong Foundation 洪建全基金會：計畫"
        canonical="https://hongfoundation.org.tw/programs"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description:
            "Hong Foundation 洪建全基金會 : 讓前衛創作的力量滲透到社會中，使「原創文化」成為社會和產業的養分與動力。",
          site_name: "Hong Foundation 洪建全基金會",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Nav contact={contact} projects={dataset} />

      <Box pt={{ xs: 18, md: 23 }} mb={"-7px"}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Item>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: { xs: "100%", md: "94px" },
                height: { xs: "7px", md: "7px" },
                background:
                  "linear-gradient(90deg, #000000 0%, rgba(139, 139, 139, 0.45) 45%, rgba(255, 255, 255, 0) 100%)",
                position: "fixed",
              }}
            />
          </Item>
          <Item>
            <Box
              sx={{
                width: { xs: "100%", md: "42px" },
                display: { xs: "none", md: "block" },
                position: "fixed",
                left: "130px",
              }}
            >
              <Image
                src={programs}
                placeholder="blur"
                alt="name of program"
                width={42}
                height={91}
              />
            </Box>
          </Item>
          <Item>
            <Box
              sx={{
                width: { xs: "auto", sm: "100%", md: "78vw" },
                maxWidth: { xs: "100%", md: "1180px", lg: "1300px" },
              }}
              pt={{ xs: 0, sm: 5, md: 0 }}
              pb={{ xs: 3, sm: 5, md: 10 }}
              ml={{ xs: 4, sm: 4, md: 28 }}
            >
              <Box>
                {mydataset &&
                  mydataset.map((project) => (
                    <Box key={project.id} pb={16}>
                      <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={0.5}
                      >
                        <Item>
                          <Box sx={{ width: { xs: "320px", md: "320px" } }}>
                            {/* logo */}
                            <Box pb={2}>
                              <Image
                                //className={styles.landingImage}
                                src={project.cover && project.cover.url}
                                placeholder="blur"
                                blurDataURL={project.cover && project.cover.url}
                                alt="logo of program"
                                //layout="responsive"
                                objectFit="contain"
                                objectPosition="left"
                                width={640}
                                height={192}
                              />
                            </Box>
                            <Box pt={2} pb={2}>
                              <a href={project.link} target="_blank">
                                <Image
                                  src={externalLink_icon}
                                  // placeholder="blur"
                                  alt="icon of external link"
                                  width={30}
                                  height={30}
                                  sx={{ cursor: "pointer" }}
                                />
                              </a>
                            </Box>
                          </Box>
                        </Item>
                        <Item>
                          <Box
                            sx={{ width: { xs: "92%", sm: "96%", md: "80%" } }}
                          >
                            {/* image */}
                            <Box pb={0}>
                              {project.cover2 && (
                                <Image
                                  src={project.cover2 && project.cover2.url}
                                  placeholder="blur"
                                  blurDataURL={
                                    project.cover2 && project.cover2.url
                                  }
                                  alt="cover photo of program"
                                  objectFit="cover"
                                  objectPosition="center"
                                  width={1042}
                                  height={528}
                                />
                              )}
                            </Box>
                            {/* content */}
                            <Box sx={{ textAlign: "justify" }}>
                              <Box
                                pb={1}
                                mt={{ xs: 4, md: 8.5 }}
                                sx={{
                                  fontFamily: "Noto Sans TC",
                                  fontSize: { xs: 15, md: 17 },
                                  fontWeight: 400,
                                  lineHeight: "26px",
                                }}
                              >
                                {project.content_tw}
                              </Box>
                              <Box
                                mt={2}
                                sx={{
                                  fontFamily: "Helvetica, Noto Sans TC",
                                  fontSize: { xs: 15, md: 17 },
                                  fontWeight: 500,
                                  lineHeight: "26px",
                                }}
                              >
                                {project.content_en && project.content_en}
                              </Box>
                            </Box>
                          </Box>
                        </Item>
                      </Stack>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Item>
        </Stack>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [summary, contact, projects, events, news] = await Promise.all([
    await fetchAPI("/summary"),
    await fetchAPI("/contact"),
    await fetchAPI("/projects"),
    await fetchAPI("/events"),
    await fetchAPI("/the-news"),
  ]);

  return {
    props: { summary, contact, projects, events, news },
    //revalidate: 1,
  };
}

export default Index;

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
