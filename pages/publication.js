import Layout from "../components/layout";
import Nav from "../components/nav";
import React, { useState, useEffect } from "react";
import { fetchAPI } from "../lib/api";
import Image from "next/image";
/** grid **/
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
/** tab **/
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import _ from "lodash";

function Publication({ books: dataset, archiveImg }) {
  /** organize data **/
  const pub = dataset.map((book) => {
    let result = {
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
  /** /organize data **/

  /** filter **/
  const [filter, setFilter] = useState("書評書目");
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
  /** /filter **/

  /** grid **/
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }));
  /** /grid **/

  /** tab **/
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /*
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  });

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: "rgba(255, 255, 255, 0.7)",
      "&.Mui-selected": {
        color: "#000",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
      },
    })
  );
  */
  /** /tab **/

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
      <Box ml={13} mr={8} mt={38}>
        {/*<box>{archiveImg.images_archive}</box>*/}
        <Box
          className="portfolio__labels"
          ml={2}
          p={2}
          sx={{ width: "calc(100% - 32px)", backgroundColor: "#000" }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={3}
            height={"100px"}
          >
            <ItemS sx={{ width: { xs: "100%", md: "25%" } }}>
              <a
                href="#"
                active={filter === "書評書目"}
                onClick={() => setFilter("書評書目")}
              >
                <Box
                  sx={{
                    color: "#fff",
                    fontSize: { md: 17, xl: 20 },
                    lineHeight: "49px",
                    borderBottom: "1px solid #fff",
                  }}
                >
                  書評書目
                </Box>
              </a>
            </ItemS>

            <ItemS sx={{ width: { xs: "100%", md: "25%" } }}>
              <a
                href="#"
                active={filter === "書"}
                onClick={() => setFilter("書")}
              >
                <Box
                  sx={{
                    color: "#fff",
                    fontSize: { md: 17, xl: 20 },
                    lineHeight: "49px",
                    borderBottom: "1px solid #fff",
                  }}
                >
                  書
                </Box>
              </a>
            </ItemS>

            <ItemS sx={{ width: { xs: "100%", md: "25%" } }}>
              <a
                href="#"
                active={filter === "影音"}
                onClick={() => setFilter("影音")}
              >
                <Box
                  sx={{
                    color: "#fff",
                    fontSize: { md: 17, xl: 20 },
                    lineHeight: "49px",
                    borderBottom: "1px solid #fff",
                  }}
                >
                  影音
                </Box>
              </a>
            </ItemS>

            <ItemS sx={{ width: { xs: "100%", md: "25%" } }}>
              <a
                href="#"
                active={filter === "刊物"}
                onClick={() => setFilter("刊物")}
              >
                <Box
                  sx={{
                    color: "#fff",
                    fontSize: { md: 17, xl: 20 },
                    lineHeight: "49px",
                    borderBottom: "1px solid #fff",
                  }}
                >
                  刊物
                </Box>
              </a>
            </ItemS>
          </Stack>
        </Box>
        <Box sx={{ flexGrow: 1 }} pt={10}>
          <Grid
            className="portfolio__container"
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 10 }}
          >
            {projects.map((item) =>
              item.filtered === true ? (
                <Grid item xs={2} sm={4} md={2} key={item.bookName}>
                  <Item>
                    <Box>
                      <Box /*sx={{ width: "152px", height: "223px" }}*/>
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
                        sx={{ fontSize: 17, fontWeight: 600, color: "#000" }}
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
                        <div>
                          {item.authorName && `作者：` + item.authorName}
                        </div>
                        <div>
                          {item.translatorName &&
                            `譯者：` + item.translatorName}
                        </div>
                        <div>
                          {item.editorName && `編輯：` + item.editorName}
                        </div>
                      </Box>
                    </Box>
                  </Item>
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [books, archiveImg] = await Promise.all([
    await fetchAPI("/books?_limit=-1"),
    await fetchAPI("/about-public"),
  ]);

  return {
    props: { books, archiveImg },
    //revalidate: 1,
  };
}

export default Publication;
