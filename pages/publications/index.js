import Layout from "../../components/layout";
import Nav from "../../components/nav";
import React, { useState, useEffect } from "react";
import { fetchAPI } from "../../lib/api";
import Image from "next/image";
import AwesomeSlider from "react-awesome-slider";
import Link from "next/link";
/** grid **/
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
/** tab **/
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import _ from "lodash";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

function Publication_about({
  // books: dataset,
  // bookCat,
  archiveImg,
  contact,
  projects: datasetP,
}) {
  /** organize all books data **/
  // const pub = dataset.map((book) => {
  //   let result = {
  //     id: book.id,
  //     bookName: book.title_tw,
  //     catName: book.book_categories.map((cat) => {
  //       return cat.name;
  //     }),
  //     authorName: book.author_tw,
  //     translatorName: book.translator_tw,
  //     editorName: book.editor_tw,
  //     bookCover:
  //       !!book.cover && !!book.cover.url
  //         ? book.cover.url
  //         : "/IMGs/noBook_img.jpg",
  //   };

  //   return result;
  // });
  //console.log(pub);
  /** /organize all books data **/

  /** filter by categories**/
  // const [filter, setFilter] = useState("新發表");
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   setProjects(pub);
  // }, []);

  // useEffect(() => {
  //   setProjects([]);

  //   const filtered = pub.map((p) => ({
  //     ...p,
  //     filtered: p.catName.includes(filter),
  //   }));
  //   setProjects(filtered);
  // }, [filter]);
  /** /filter by categories**/

  /** grid **/
  // const ItemTab = styled(Paper)(({ theme }) => ({
  //   paddingBottom: 8,
  //   paddingTop: 0,
  //   textAlign: "left",
  //   color: "#fff",
  //   boxShadow: "none",
  //   background: "none",
  //   borderBottom: "1px solid #C4C4C4",
  //   borderRadius: "0px",
  // }));

  // const Item = styled(Paper)(({ theme }) => ({
  //   padding: 16,
  //   textAlign: "left",
  //   color: "#fff",
  //   boxShadow: "none",
  //   background: "none",
  //   //borderBottom: "1px solid #C4C4C4",
  //   borderRadius: "0px",
  // }));
  /** /grid **/

  /** stack Item setting **/
  const ItemS = styled(Paper)(({ theme }) => ({
    textAlign: "left",
    color: "#000",
    background: "none",
    boxShadow: "none",
  }));

  /* CHANGE programs ARRAY SORTING BY ID*/
  !datasetP ? null : datasetP.sort((a, b) => a.id - b.id);
  const mydataset = datasetP.slice(0, 3);

  return (
    <>
      <NextSeo
        title="Hong Foundation 洪建全基金會 ｜ 關於出版"
        description="洪建全基金會的關於出版 。"
        canonical="https://hongfoundation.org.tw/publications"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description: "洪建全基金會的關於出版 。",
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
          <li className="subMenuInAbooutPage_li active">
            <Link href="/publications">關於</Link>
          </li>
          <li className="subMenuInAbooutPage_li">
            <Link href="/publications/publications">出版</Link>
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
      {/* banner */}
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          maxWidth: { xs: "600px", md: "954px" },
          position: "relative",
          zIndex: 0,
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 10, sm: 10, md: 10 }}
        pl={{ xs: 0, sm: 0, md: 0 }}
      >
        <AwesomeSlider
          bullets={true}
          //fillParent={true}
          transitionDelay={500}
          organicArrows={false}
        >
          {archiveImg.images_newbook &&
            archiveImg.images_newbook.map((img) => (
              <Box key={img.id}>
                <Image
                  src={img.url}
                  placeholder="blur"
                  blurDataURL={img.url}
                  alt="slider"
                  //layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  width={1920}
                  height={699}
                />
              </Box>
            ))}
        </AwesomeSlider>
      </Box>
      {/* about publication */}
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          maxWidth: { xs: "600px", md: "954px" },
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 6, sm: 6, md: 10 }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 0 }}
        >
          {/* title */}
          <ItemS
            sx={{
              width: { xs: "100%", md: "18vw", xl: "20vw" },
            }}
          >
            <Box
              sx={{
                fontSize: { xs: 20, md: 26, xl: 33 },
                fontWeight: { xs: 700, md: 400, xl: 400 },
              }}
              mt={1.3}
            >
              關於出版
            </Box>
          </ItemS>
          {/* content */}
          <ItemS sx={{ width: { xs: "100%", sm: "100%", md: "90vw" } }}>
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "100%" },
              }}
              pb={10}
            >
              <Box sx={{ fontSize: { xs: 14, md: 17, lg: 17 } }}>
                <Box component="div" mb={2} sx={{ textAlign: "justify" }}>
                  <ReactMarkdown>{archiveImg.content_tw}</ReactMarkdown>
                </Box>
                <Box
                  component="div"
                  sx={{
                    textAlign: "justify",
                    fontSize: { xs: 14, md: 16, lg: 16 },
                    fontFamily: "Helvetica Neue",
                  }}
                >
                  <ReactMarkdown>{archiveImg.content_en}</ReactMarkdown>
                </Box>
              </Box>
            </Box>
          </ItemS>
        </Stack>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [archiveImg, contact, projects] = await Promise.all([
    await fetchAPI("/about-public"),
    await fetchAPI("/contact"),
    await fetchAPI("/projects"),
  ]);

  return {
    props: { archiveImg, contact, projects },
    //revalidate: 1,
  };
}

export default Publication_about;

Publication_about.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
