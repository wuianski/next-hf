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
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

function About({ mission, contact, projects: dataset }) {
  /** stack Item setting **/
  const Item = styled(Paper)(({ theme }) => ({
    //...theme.typography.body2,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textAlign: "left",
    color: "#000",
    background: "none",
    boxShadow: "none",
    fontSize: 17,
  }));

  /* CHANGE ARRAY SORTING BY ID*/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);
  const mydataset = dataset.slice(0, 3);

  return (
    <>
      <NextSeo
        title="Hong Foundation 洪建全基金會 ｜ 關於"
        description="Hong Foundation 洪建全基金會：關於"
        canonical="https://hongfoundation.org.tw/about"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description: "Hong Foundation 洪建全基金會：關於",
          site_name: "Hong Foundation 洪建全基金會",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Nav contact={contact} projects={dataset} />
      {/* sub-menu */}
      <Box className="subMenuInAbooutPage">
        <ul className="subMenuInAbooutPage_ul">
          <li className="subMenuInAbooutPage_li active">
            <Link href="/about">關於</Link>
          </li>
          <li className="subMenuInAbooutPage_li">
            <Link href="/about/members">董事</Link>
          </li>
          <li className="subMenuInAbooutPage_li">
            <a href="/about/resource">公開資訊</a>
          </li>
          <li className="subMenuInAbooutPage_li">
            <a href="/about/timeline">大事記</a>
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

      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.9,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { delay: 0.3 },
          },
        }}
      > */}
      {/* about slogan */}
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          maxWidth: { xs: "600px", md: "954px" },
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 27, sm: 30, md: 35 }}
        pl={{ xs: 1, sm: 0, md: 0 }}
      >
        <Box
          sx={{
            fontSize: { xs: 24, md: 30 },
            lineHeight: 1.4,
            color: "#B09336",
            whiteSpace: { xs: "unset", sm: "pre-line", md: "pre-line" },
          }}
        >
          {mission.slogan_tw}
        </Box>
        <Box
          sx={{
            fontFamily: "Helvetica",
            fontSize: { xs: 18, md: 21 },
            lineHeight: 1.3,
            color: "#B09336",
            whiteSpace: { xs: "unset", sm: "pre-line", md: "pre-line" },
          }}
          mt={1}
          pr={{ xs: 0, sm: 0, md: 10 }}
        >
          {mission.slogan_en}
        </Box>
      </Box>
      {/* about content */}
      <Box
        sx={{
          width: { xs: "90%", xs: "94%", md: "90vw" },
          maxWidth: "1180px",
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 3, sm: 5, md: 10 }}
        pb={{ xs: 3, sm: 5, md: 10 }}
        pl={{ xs: 2, sm: 0, md: 0 }}
        pr={{ xs: 1, sm: 0, md: 0 }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 1 }}
        >
          <Item>
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
          </Item>
          <Item
            sx={{
              width: { xs: "90vw", sm: "94vw", md: "40vw" },
              maxWidth: { xs: "100%", md: "480px" },
            }}
          >
            <Box
              sx={{
                textAlign: "justify",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 17 },
                lineHeight: { xs: "23px", sm: "26px" },
              }}
            >
              <ReactMarkdown>{mission.content_tw}</ReactMarkdown>
            </Box>
          </Item>
          <Item
            sx={{
              width: { xs: "90vw", sm: "94vw", md: "40vw" },
              maxWidth: { xs: "100%", md: "480px" },
            }}
          >
            <Box
              sx={{
                //textAlign: "justify",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 15 },
                lineHeight: { xs: "18px", sm: "23px" },
              }}
            >
              <ReactMarkdown>{mission.content_en}</ReactMarkdown>
            </Box>
          </Item>
        </Stack>
      </Box>
      {/* </motion.div> */}
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [mission, contact, projects] = await Promise.all([
    await fetchAPI("/mission"),
    await fetchAPI("/contact"),
    await fetchAPI("/projects"),
  ]);

  return {
    props: { mission, contact, projects },
    //revalidate: 1,
  };
}

export default About;

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
