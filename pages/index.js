import React, { useState } from "react";
import Box from "@mui/material/Box";
import Layout from "../components/layout";
import Nav from "../components/nav";
import { fetchAPI } from "../lib/api";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Projects from "../components/projects";
import Events from "../components/events";
import News from "../components/news";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import i_programs from "../public/IMGs/programs.png";
import i_programs_m from "../public/IMGs/programs_m.png";
import i_events from "../public/IMGs/events.png";
import i_events_m from "../public/IMGs/events_m.png";
import i_news from "../public/IMGs/news.png";
import i_news_m from "../public/IMGs/news_m.png";
import { motion } from "framer-motion";

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

/** block motion var **/
const variantPrograms = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
      when: "beforeChildren",
      duration: 1,
    },
  },
};

const variantEvents = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.4,
      when: "beforeChildren",
      duration: 1,
    },
  },
};

function Index({ summary, contact, projects, events, news }) {
  return (
    <>
      <NextSeo
        title="Hong Foundation 洪建全基金會"
        description="Hong Foundation 洪建全基金會 : 讓前衛創作的力量滲透到社會中，使「原創文化」成為社會和產業的養分與動力。"
        canonical="https://hongfoundation.org.tw/"
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
      <Nav contact={contact} projects={projects} />

      <Box pt={{ xs: 15, md: 23 }} mb={"-7px"} pb={{ xs: 0, md: 0 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Item>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: { xs: "100%", md: "94px" },
                height: { xs: "7px", md: "7px" },
                background:
                  "linear-gradient(90deg, #000000 0%, rgba(139, 139, 139, 0.45) 45%, rgba(255, 255, 255, 0) 100%)",
              }}
            />
          </Item>
          <Item>
            <Box
              sx={{
                width: { xs: "100%", md: "42px" },
                display: { xs: "none", md: "block" },
              }}
            >
              <Image
                src={i_programs}
                placeholder="blur"
                alt="icon of programs"
                width={42}
                height={91}
              />
            </Box>
            <Box
              pl={4}
              sx={{
                height: { xs: "14px" },
                display: { xs: "block", md: "none" },
              }}
            >
              <Image
                src={i_programs_m}
                placeholder="blur"
                alt="icon of programs"
                objectFit="contain"
                width={139}
                height={14}
              />
            </Box>
          </Item>
          <Item>
            <motion.div
              variants={variantPrograms}
              initial="hidden"
              animate="visible"
            >
              <Projects projects={projects} />
            </motion.div>
          </Item>
        </Stack>
      </Box>

      <Box
        pt={{ xs: 10, sm: 100, md: 0 }}
        mb={"-7px"}
        sx={{ position: "relative", display: "block" }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Item>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: { xs: "100%", md: "94px" },
                height: { xs: "7px", md: "7px" },
                background:
                  "linear-gradient(90deg, #000000 0%, rgba(139, 139, 139, 0.45) 45%, rgba(255, 255, 255, 0) 100%)",
              }}
            />
          </Item>
          <Item>
            <Box
              sx={{
                width: { xs: "100%", md: "42px" },
                display: { xs: "none", md: "block" },
              }}
            >
              <Image
                src={i_events}
                placeholder="blur"
                alt="icon of events"
                width={42}
                height={58}
              />
            </Box>
            <Box
              pl={4}
              sx={{
                height: { xs: "14px" },
                display: { xs: "block", md: "none" },
              }}
            >
              <Image
                src={i_events_m}
                alt="icon of events"
                objectFit="contain"
                width={106}
                height={14}
              />
            </Box>
          </Item>
          <Item>
            <motion.div
              variants={variantEvents}
              initial="hidden"
              animate="visible"
            >
              <Events events={events} />
            </motion.div>
          </Item>
        </Stack>
      </Box>

      <Box pt={10} mb={"-7px"} sx={{ position: "relative", display: "block" }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Item>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: { xs: "100%", md: "94px" },
                height: { xs: "7px", md: "7px" },
                background:
                  "linear-gradient(90deg, #000000 0%, rgba(139, 139, 139, 0.45) 45%, rgba(255, 255, 255, 0) 100%)",
              }}
            />
          </Item>
          <Item>
            <Box
              sx={{
                width: { xs: "100%", md: "42px" },
                display: { xs: "none", md: "block" },
              }}
            >
              <Image
                src={i_news}
                placeholder="blur"
                alt="icon of news"
                width={42}
                height={70}
              />
            </Box>
            <Box
              pl={4}
              sx={{
                height: { xs: "14px" },
                display: { xs: "block", md: "none" },
              }}
            >
              <Image
                src={i_news_m}
                placeholder="blur"
                alt="icon of news"
                objectFit="contain"
                width={128}
                height={14}
              />
            </Box>
          </Item>
          <Item>
            <News news={news} />
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
