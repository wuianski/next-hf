import Layout from "../../components/layout";
import Nav from "../../components/nav";
import React, { useState, useEffect, useRef } from "react";
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
import { useRouter } from "next/router";
import { useQueryState } from "next-usequerystate";

function Publication({
  books: dataset,
  bookCat,
  archiveImg,
  contact,
  projects: datasetP,
}) {
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
      file: !!book.file && !!book.file.url ? book.file.url : "",
    };

    return result;
  });
  //console.log(pub);
  /** /organize all books data **/

  /** (sub categories of 書) filting dataCat by id **/
  const cat_books = bookCat.filter(function (cat) {
    // return cat.id <= 22 && cat.id >= 6;
    return (
      cat.id <= 28 &&
      cat.id >= 6 &&
      cat.id !== 23 &&
      cat.id !== 24 &&
      cat.id !== 25 &&
      cat.id !== 26 &&
      cat.id !== 27
    );
  });

  const subCat_books = cat_books.map((c) => {
    let result_cat = {
      id: c.id,
      catName: c.name,
      booksNum: c.books.length,
    };

    return result_cat;
  });
  /** /(sub categories of 書) filting dataCat by id **/

  /** (sub categories of 影音) filting dataCat by id **/
  const cat_medias = bookCat.filter(function (cat) {
    return cat.id <= 4 && cat.id >= 3;
  });

  const subCat_media = cat_medias.map((c) => {
    let result_cat = {
      id: c.id,
      catName: c.name,
      booksNum: c.books.length,
    };

    return result_cat;
  });
  //console.log(subCat_media);
  /** /(sub categories of 影音) filting dataCat by id **/

  /** (sub categories of 刊物) filting dataCat by id **/
  const cat_journals = bookCat.filter(function (cat) {
    //make sure not include id==28, which is the category of new release of books.
    return cat.id <= 29 && cat.id >= 24 && cat.id !== 28;
  });

  const subCat_journal = cat_journals.map((c) => {
    let result_cat = {
      id: c.id,
      catName: c.name,
      booksNum: c.books.length,
    };

    return result_cat;
  });
  //console.log(cat_journal);
  /** /(sub categories of 刊物) filting dataCat by id **/

  /** filter by categories**/
  const router = useRouter();
  //const ref = useRef("書評書目");

  const [filter, setFilter] = useQueryState("filter", {
    defaultValue: "書評書目",
  });
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
    //router.replace(`/publications?${filter}`);
    /*router.replace(`/publications?${filter}`, undefined, {
      shallow: true,
    });*/
  }, [filter]);

  /** /filter by categories**/

  /** grid **/
  const ItemTab = styled(Paper)(({ theme }) => ({
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
    // padding: 16,
    textAlign: "left",
    color: "#fff",
    boxShadow: "none",
    background: "none",
    //borderBottom: "1px solid #C4C4C4",
    borderRadius: "0px",
  }));
  /** /grid **/

  /** tab **/
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //console.log(newValue);
  };

  const StyledTab = styled(Tab)(({ theme }) => ({
    color: "#828282",
    fontSize: 17,
    alignItems: "start",
    padding: 0,
    marginRight: 48,
    borderBottom: "1px solid #828282",

    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(25% - 36px)",
    },
    [theme.breakpoints.down("md")]: {
      width: "calc(100%)",
      maxWidth: "initial",
    },
    "&.Mui-selected": {
      color: "#fff !important",
      borderBottom: "5px solid #fff",
    },
  }));

  const StyledTabList = styled(TabList)(({ theme }) => ({
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      display: "grid",
    },
  }));

  /** /tab **/

  /** stack Item setting **/
  const ItemS = styled(Paper)(({ theme }) => ({
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
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
        title="Hong Foundation 洪建全基金會 ｜ 出版"
        description="洪建全基金會自 1972 年成立書評書目出版社至今，包括《書評書目》雜誌、兒童文學創作獎得獎作品的出版或專為孩童策畫出版的本土童書系列等，與 PHP 研究所合作出版的 PHP 叢書，以及各類自製策畫出版的本土作家如陳怡安、傅佩榮、林清玄等人的作品，一共出版將近八百本刊物，除了內容豐富多樣，亦曾獲得各式獎項。如 1977 年，兒童文學創作獎作品榮獲金鼎獎優良圖書類獎項；1979 年，《書評書目》 榮獲金鼎獎雜誌類獎項；1985 年，榮獲金鼎獎頒贈「獎助出版事業及出版有功」； 2007 年，榮獲金鼎三十給予「老字號金招牌」資優出版事業特別獎。 除了書籍之外，洪建全基金會也接連發行膾炙人口的音樂唱片。1975年，楊弦的《中國現代民歌集》是台灣發行的第一張現代民歌唱片， 《民族樂手─陳達和他的歌》於1977年榮獲首屆金鼎獎「唱片類」獎項。"
        canonical="https://hongfoundation.org.tw/publication"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description:
            "洪建全基金會自 1972 年成立書評書目出版社至今，包括《書評書目》雜誌、兒童文學創作獎得獎作品的出版或專為孩童策畫出版的本土童書系列等，與 PHP 研究所合作出版的 PHP 叢書，以及各類自製策畫出版的本土作家如陳怡安、傅佩榮、林清玄等人的作品，一共出版將近八百本刊物，除了內容豐富多樣，亦曾獲得各式獎項。如 1977 年，兒童文學創作獎作品榮獲金鼎獎優良圖書類獎項；1979 年，《書評書目》 榮獲金鼎獎雜誌類獎項；1985 年，榮獲金鼎獎頒贈「獎助出版事業及出版有功」； 2007 年，榮獲金鼎三十給予「老字號金招牌」資優出版事業特別獎。 除了書籍之外，洪建全基金會也接連發行膾炙人口的音樂唱片。1975年，楊弦的《中國現代民歌集》是台灣發行的第一張現代民歌唱片， 《民族樂手─陳達和他的歌》於1977年榮獲首屆金鼎獎「唱片類」獎項。",
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
            <Link href="/publications">關於</Link>
          </li>
          <li className="subMenuInAbooutPage_li active">
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

      {/*
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8,opacity: 0,},
          visible: {scale: 1,opacity: 1,transition: {delay: 0.4,},},
        }}
      >
      */}
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          maxWidth: { xs: "600px", md: "954px" },
          position: "relative",
          zIndex: 0,
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 25, sm: 30, md: 35 }}
        pl={{ xs: 0, sm: 0, md: 0 }}
      >
        {/* banner */}
        {/* <Box m={2} sx={{ display: { xs: "none", md: "block" } }}>
          <AwesomeSlider
            bullets={true}
            //fillParent={true}
            transitionDelay={500}
            organicArrows={false}
          >
            {archiveImg.images_archive &&
              archiveImg.images_archive.map((img) => (
                <Box key={img.id}>
                  <Image
                    //className={styles.landingImage}
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
        </Box> */}
        {/* books category */}
        <Box
          className="portfolio__labels"
          p={2}
          sx={{ width: "100%", backgroundColor: "#000" }}
        >
          <TabContext value={value}>
            <Box pt={2}>
              <StyledTabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <StyledTab
                  label="書評書目"
                  value="1"
                  active={filter === "書評書目" ? 1 : 0}
                  onClick={() => setFilter("書評書目")}
                />
                <StyledTab label="影音" value="2" />
                <StyledTab label="圖書" value="3" />
                <StyledTab label="刊物" value="4" />
              </StyledTabList>
            </Box>
            <TabPanel value="1"></TabPanel>
            <TabPanel value="2" sx={{ marginTop: 3 }}>
              <Box sx={{ color: "#fff" }}>
                <Grid
                  container
                  rowSpacing={1.5}
                  columnSpacing={{ sm: 6, md: 6 }}
                >
                  {subCat_media.map((cat) => (
                    <Grid item xs={12} sm={6} md={3} key={cat.id}>
                      <ItemTab key={cat.id}>
                        <Box
                          key={cat.id}
                          sx={{ cursor: "pointer" }}
                          /* add ? 1 : 0 for pass a boolean in a custom attribute */
                          active={filter === cat.catName ? 1 : 0}
                          onClick={() => setFilter(cat.catName)}
                        >
                          <Box
                            component="span"
                            sx={{ fontSize: { xs: 14, md: 14, xl: 17 } }}
                          >
                            {cat.catName}
                          </Box>
                          <Box
                            component="span"
                            sx={{ float: "right", color: "#828282" }}
                          >
                            <Box component="span">{cat.booksNum}</Box>
                            <Box
                              component="span"
                              ml={0.5}
                              sx={{ fontSize: "11px" }}
                            >
                              張
                            </Box>
                          </Box>
                        </Box>
                      </ItemTab>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value="3" sx={{ marginTop: 3 }}>
              <Box sx={{ color: "#fff" }}>
                <Grid
                  container
                  rowSpacing={1.5}
                  columnSpacing={{ sm: 6, md: 6 }}
                >
                  {subCat_books.map((cat) => (
                    <Grid item xs={12} sm={6} md={3} key={cat.id}>
                      <ItemTab key={cat.id}>
                        <Box
                          key={cat.id}
                          sx={{ cursor: "pointer" }}
                          /* add ? 1 : 0 for pass a boolean in a custom attribute */
                          active={filter === cat.catName ? 1 : 0}
                          onClick={() => {
                            setFilter(cat.catName);
                            //console.log(router.push);
                            /*router.push(
                              `/publications?${cat.catName}`,
                              undefined,
                              { shallow: true }
                            );*/
                          }}
                          //ref={cat.catName}
                        >
                          <Box
                            component="span"
                            sx={{ fontSize: { xs: 14, md: 14, xl: 17 } }}
                          >
                            {cat.catName}
                          </Box>
                          <Box
                            component="span"
                            sx={{ float: "right", color: "#828282" }}
                          >
                            <Box component="span">{cat.booksNum}</Box>
                            <Box
                              component="span"
                              ml={0.5}
                              sx={{ fontSize: "11px" }}
                            >
                              本
                            </Box>
                          </Box>
                        </Box>
                      </ItemTab>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value="4" sx={{ marginTop: 3 }}>
              <Box sx={{ color: "#fff" }}>
                <Grid
                  container
                  rowSpacing={1.5}
                  columnSpacing={{ sm: 6, md: 6 }}
                >
                  {subCat_journal.map((cat) => (
                    <Grid item xs={12} sm={6} md={3} key={cat.id}>
                      <ItemTab key={cat.id}>
                        <Box
                          key={cat.id}
                          sx={{ cursor: "pointer" }}
                          /* add ? 1 : 0 for pass a boolean in a custom attribute */
                          active={filter === cat.catName ? 1 : 0}
                          onClick={() => setFilter(cat.catName)}
                        >
                          <Box
                            component="span"
                            sx={{ fontSize: { xs: 14, md: 14, xl: 17 } }}
                          >
                            {cat.catName}
                          </Box>
                          <Box
                            component="span"
                            sx={{ float: "right", color: "#828282" }}
                          >
                            <Box component="span">{cat.booksNum}</Box>
                            <Box
                              component="span"
                              ml={0.5}
                              sx={{ fontSize: "11px" }}
                            >
                              本
                            </Box>
                          </Box>
                        </Box>
                      </ItemTab>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
        {/* list books */}
        <Box
          sx={{
            flexGrow: 1,
            width: { xs: "100%", sm: "100%", md: "80vw" },
            maxWidth: { xs: "600px", md: "954px" },
          }}
          pt={{ xs: 4, md: 6 }}
          pb={{ xs: 4, md: 6 }}
        >
          <Grid
            className="portfolio__container"
            container
            spacing={{ xs: 4, sm: 4, md: 6 }}
            columns={{ xs: 4, sm: 12, md: 10 }}
          >
            {projects.map((item) =>
              item.filtered === true ? (
                <>
                  {(() => {
                    switch (item.catName[1]) {
                      case "新發表":
                        return (
                          <>
                            <Grid item xs={2} sm={2} md={2} key={item.id}>
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
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "文學":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/literature/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "經營管理":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/management/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "兩性議題":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/genderIssues/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "文學評論":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/literaryReview/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "家庭親子":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/family/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "兒童文學":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/literatureChildren/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "藝術設計":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/artDesign/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "人文史哲":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/historyPhilosophy/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "洪建全兒童文學創作獎":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/literatureChildrenAward/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "青少年文學":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/literatureYouth/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "醫學保健":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/medicalCare/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "心理勵志":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/psychology/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "閱讀生活":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/readingLife/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "人物傳記":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/biography/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "人際溝通":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/communication/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "PHP叢書":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/PHP/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "洪建全基金會":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/hf/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "唱片":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/record/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "DVD":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Link
                                href={`/books/DVD/${encodeURIComponent(
                                  item.bookName
                                )}`}
                                key={item.id}
                              >
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                            </Grid>
                          </>
                        );
                      case "文經人":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <a href={item.file} target="_blank" key={item.id}>
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </a>
                            </Grid>
                          </>
                        );
                      case "PHP友會通訊":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <a href={item.file} target="_blank" key={item.id}>
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </a>
                            </Grid>
                          </>
                        );
                      case "基金會會刊":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <a href={item.file} target="_blank" key={item.id}>
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </a>
                            </Grid>
                          </>
                        );
                      case "年報":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <a href={item.file} target="_blank" key={item.id}>
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </a>
                            </Grid>
                          </>
                        );
                      case "國際視聽月刊":
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <a href={item.file} target="_blank" key={item.id}>
                                <Item>
                                  <Box sx={{ cursor: "pointer" }}>
                                    <Box>
                                      <Image
                                        src={item.bookCover}
                                        placeholder="blur"
                                        blurDataURL={item.bookCover}
                                        alt="book cover"
                                        layout="responsive"
                                        objectFit="contain"
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
                                        {item.authorName &&
                                          `作者：` + item.authorName}
                                      </Box>
                                      <Box>
                                        {item.translatorName &&
                                          `譯者：` + item.translatorName}
                                      </Box>
                                      <Box>
                                        {item.editorName &&
                                          `編輯：` + item.editorName}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Item>
                              </a>
                            </Grid>
                          </>
                        );
                      default:
                        return (
                          <>
                            <Grid item xs={2} sm={4} md={2} key={item.id}>
                              <Item key={item.id}>
                                <Box>
                                  <Box>
                                    <Image
                                      src={item.bookCover}
                                      placeholder="blur"
                                      blurDataURL={item.bookCover}
                                      alt="book cover"
                                      layout="responsive"
                                      objectFit="contain"
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
                                      {item.authorName &&
                                        `作者：` + item.authorName}
                                    </Box>
                                    <Box>
                                      {item.translatorName &&
                                        `譯者：` + item.translatorName}
                                    </Box>
                                    <Box>
                                      {item.editorName &&
                                        `編輯：` + item.editorName}
                                    </Box>
                                  </Box>
                                </Box>
                              </Item>
                            </Grid>
                          </>
                        );
                    }
                  })()}
                </>
              ) : (
                ""
              )
            )}
          </Grid>
        </Box>
      </Box>
      {/*
      </motion.div>
        */}
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [books, bookCat, archiveImg, contact, projects] = await Promise.all([
    await fetchAPI("/books?_limit=-1"),
    await fetchAPI("/book-categories"),
    await fetchAPI("/about-public"),
    await fetchAPI("/contact"),
    await fetchAPI("/projects"),
  ]);

  return {
    props: { books, bookCat, archiveImg, contact, projects },
    //revalidate: 1,
  };
}

export default Publication;

Publication.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
