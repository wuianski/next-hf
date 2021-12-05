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

function Publication_new({ books: dataset, bookCat, archiveImg, contact }) {
  /** organize all books data **/
  const pub = dataset.map((book) => {
    let result = {
      id: book.id,
      bookName: book.title_tw,
      catName: book.book_categories.map((cat) => {
        return cat.name;
      }),
      authorName: book.author_tw,
      translatorName: book.translator_tw,
      editorName: book.editor_tw,
      bookCover:
        !!book.cover && !!book.cover.url
          ? book.cover.url
          : "/IMGs/noBook_img.jpg",
    };

    return result;
  });
  //console.log(pub);
  /** /organize all books data **/

  /** filter by categories**/
  const [filter, setFilter] = useState("新發表");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(pub);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = pub.map((p) => ({
      ...p,
      filtered: p.catName.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  /** /filter by categories**/

  /** grid **/
  const ItemTab = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    paddingBottom: 8,
    paddingTop: 0,
    textAlign: "left",
    color: "#fff",
    boxShadow: "none",
    background: "none",
    borderBottom: "1px solid #C4C4C4",
    borderRadius: "0px",
  }));

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: 16,
    textAlign: "left",
    color: "#fff",
    boxShadow: "none",
    background: "none",
    //borderBottom: "1px solid #C4C4C4",
    borderRadius: "0px",
  }));
  /** /grid **/

  /** stack Item setting **/
  const ItemS = styled(Paper)(({ theme }) => ({
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
      <NextSeo
        title="Hong Foundation 洪建全基金會 ｜ 新發表出版"
        description="洪建全基金會的新發表出版 。"
        canonical="https://hongfoundation.org.tw/publication"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description: "洪建全基金會的新發表出版 。",
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
        <Box className="active secName">
          <Box className="secName_twInPage">出版</Box>
          <Box className="secName_enInPage">publication</Box>
        </Box>
      </Box>

      <motion.div
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
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Box
          ml={{ xs: 8, md: 26 }}
          mr={{ xs: 2, md: 8 }}
          mt={{ xs: 12, md: -12 }}
        >
          {/* banner */}
          <Box m={2} sx={{ display: { xs: "none", md: "block" } }}>
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
          {/* books category */}
          <Box
            className="portfolio__labels"
            mt={{ xs: 8, md: -3 }}
            ml={2}
            p={2}
            sx={{ width: "calc(100% - 32px)", backgroundColor: "#000" }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="left"
              alignItems="center"
              spacing={{ xs: 0, md: 3 }}
              height={{ xs: "100%", md: "100px" }}
            >
              <ItemS sx={{ width: { xs: "100%", md: "25%" } }}>
                <Box
                  sx={{ cursor: "pointer" }}
                  active={filter === "新發表" ? 1 : 0}
                  onClick={() => setFilter("新發表")}
                >
                  <Box
                    sx={{
                      color: "#fff",
                      fontSize: { xs: 17, xl: 20 },
                      lineHeight: "49px",
                      borderBottom: "5px solid #fff",
                    }}
                  >
                    新發表
                  </Box>
                </Box>
              </ItemS>
            </Stack>
          </Box>

          {/* list books */}
          <Box
            sx={{
              flexGrow: 1,
              minWidth: { xs: "78vw", sm: "90vw", md: "78vw" },
            }}
            pt={{ xs: 4, md: 6 }}
            pb={{ xs: 4, md: 6 }}
          >
            <Grid
              className="portfolio__container"
              container
              spacing={{ xs: 2, md: 4 }}
              columns={{ xs: 4, sm: 8, md: 10 }}
            >
              {projects.map((item) =>
                item.filtered === true ? (
                  <Grid item xs={2} sm={4} md={2} key={item.id}>
                    <Link
                      href={`/books/newRelease/${encodeURIComponent(
                        item.bookName
                      )}`}
                      key={item.id}
                    >
                      <Item>
                        <Box sx={{ cursor: "pointer" }}>
                          <Box>
                            <Image
                              src={item.bookCover}
                              alt="book cover"
                              layout="responsive"
                              objectFit="cover"
                              objectPosition="center"
                              width={152}
                              height={223}
                            />
                          </Box>
                          <Box
                            mt={2}
                            mb={1}
                            sx={{
                              fontSize: 17,
                              fontWeight: 600,
                              color: "#000",
                            }}
                          >
                            {item.bookName}
                          </Box>
                          <Box
                            sx={{
                              fontSize: 13,
                              fontWeight: 500,
                              color: "#666",
                              lineHeight: "21px",
                            }}
                          >
                            <Box>
                              {item.authorName && `作者：` + item.authorName}
                            </Box>
                            <Box>
                              {item.translatorName &&
                                `譯者：` + item.translatorName}
                            </Box>
                            <Box>
                              {item.editorName && `編輯：` + item.editorName}
                            </Box>
                          </Box>
                        </Box>
                      </Item>
                    </Link>
                  </Grid>
                ) : (
                  ""
                )
              )}
            </Grid>
          </Box>
        </Box>
      </motion.div>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [books, bookCat, archiveImg, contact] = await Promise.all([
    await fetchAPI("/books?_limit=-1"),
    await fetchAPI("/book-categories"),
    await fetchAPI("/about-public"),
    await fetchAPI("/contact"),
  ]);

  return {
    props: { books, bookCat, archiveImg, contact },
    //revalidate: 1,
  };
}

export default Publication_new;

Publication_new.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
