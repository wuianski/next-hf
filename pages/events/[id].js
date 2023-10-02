import React from "react";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Nav from "../../components/nav";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

function Event({ event, contact, projects: dataset }) {
  /** sorting dataset by id **/
  //!dataset ? null : dataset.sort((a, b) => a.id - b.id);

  /** route each post **/
  const router = useRouter();
  const { id } = router.query;

  /** stack Item setting **/
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "left",
    color: "#000",
    background: "none",
    boxShadow: "none",
  }));

  /* CHANGE ARRAY SORTING BY ID*/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);
  const mydataset = dataset.slice(0, 3);

  /** block motion var **/
  const varTitle = {
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.2,
        when: "beforeChildren",
        duration: 1,
      },
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

  const varSponsor = {
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.2,
        when: "beforeChildren",
        duration: 1,
      },
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

  const varContent = {
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.2,
        when: "beforeChildren",
        duration: 1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.6,
        when: "beforeChildren",
        duration: 1,
      },
    },
  };

  return (
    <>
      <NextSeo
        title={`Hong Foundation 洪建全基金會 ｜ ` + event.title_tw}
        description={`Hong Foundation 洪建全基金會： ` + event.title_tw}
        canonical={`https://hongfoundation.org.tw/events/` + event.id}
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description: "Hong Foundation 洪建全基金會",
          site_name: "Hong Foundation 洪建全基金會",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Nav contact={contact} projects={dataset} />
      <Box id="myMenuInPage">
        <div className="activeInPage secNameInPage">
          <div className="secName_twInPage">活動</div>
          <div className="secName_enInPage">events</div>
        </div>
      </Box>

      <Box mt={20}>
        <Stack direction="column" spacing={{ xs: 3, md: 6 }}>
          <Item sx={{ width: "100vw" }}>
            <motion.div variants={varTitle} initial="hidden" animate="visible">
              <Box ml={{ xs: 8, md: 28 }} mr={{ xs: 3, md: 14 }}>
                <Box
                  sx={{
                    fontSize: { xs: "24px", md: "30px" },
                    lineHeight: 1.3,
                    textAlign: { xs: "start", md: "end" },
                    whiteSpace: "pre-line",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color:"rgb(0,0,0,0.87)",
                  }}
                >
                  {event.title_tw}
                </Box>
                <Box
                  sx={{
                    fontSize: { xs: "24px", md: "30px" },
                    lineHeight: 1.3,
                    textAlign: { xs: "start", md: "end" },
                    whiteSpace: "pre-line",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                    color:"rgb(0,0,0,0.87)",
                  }}
                >
                  {event.title_en}
                </Box>
              </Box>
            </motion.div>
          </Item>
          <Item>
            <motion.div
              variants={varSponsor}
              initial="hidden"
              animate="visible"
            >
              <Box ml={{ xs: 8, md: 28 }} mr={{ xs: 2, md: 13 }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                  <Item sx={{ width: { xs: "100%", md: "50%" } }}>
                    <Box>
                      <Box
                        pt={1}
                        sx={{
                          fontSize: { xs: "14px", sm: "17px" },
                          fontWeight: 700,
                          lineHeight: 1.6,
                          whiteSpace: "pre-line",
                          textAlign: { xs: "start", md: "start" },
                          color:"rgb(0,0,0,0.87)",
                        }}
                      >
                        {event.sponsor && event.sponsor}
                      </Box>
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </motion.div>
          </Item>
          <Item>
            <motion.div
              variants={varContent}
              initial="hidden"
              animate="visible"
            >
              <Box ml={{ xs: 8, md: 28 }} mr={{ xs: 2, md: 13 }} mb={6}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 2, md: 6 }}
                >
                  <Item sx={{ width: { xs: "100%", md: "50%" } }}>
                    <Box>
                      <ImageList variant="masonry" cols={1} gap={8}>
                        {event.images.map((image) => (
                          <ImageListItem key={image.id}>
                            <img
                              src={`${image.url}?w=162&fit=format`}
                              srcSet={`${image.url}?w=162&fit=format&dpr=2 2x`}
                              //alt={item.title}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Box>
                  </Item>
                  <Item sx={{ width: { xs: "100%", md: "50%" } }}>
                    <Stack
                      direction={{ xs: "column", md: "column" }}
                      spacing={1}
                    >
                      <Item>
                        <Box>
                          {event.video_url && (
                            <Box
                              className="player-wrapper"
                              mt={"15px"}
                              mb={"15px"}
                            >
                              <ReactPlayer
                                className="react-player"
                                url={event.video_url}
                                width="100%"
                                height="100%"
                                controls="true"
                              />
                            </Box>
                          )}
                        </Box>
                      </Item>
                      <Item>
                        <Box>
                          {event.short_info && (
                            <Box
                              className="player-wrapper"
                              mt={"15px"}
                              mb={"15px"}
                            >
                              <ReactPlayer
                                className="react-player"
                                url={event.short_info}
                                width="100%"
                                height="100%"
                                controls="true"
                              />
                            </Box>
                          )}
                        </Box>
                      </Item>
                      <Item>
                        <Box
                          sx={{
                            textAlign: "justify",
                            textJustify: "distribute",
                            fontWeight: 400,
                            fontSize: { xs: "14px", sm: "17px" },
                            letterSpacing: "0.05em",
                          }}
                          mt={"-15px"}
                        >
                          {/* <ReactMarkdown>{event.content_tw}</ReactMarkdown> */}
                          <ReactMarkdown
                          children={event.content_tw}
                          rehypePlugins={[rehypeRaw]}
                        />
                        </Box>
                      </Item>
                    </Stack>
                  </Item>
                </Stack>
              </Box>
            </motion.div>
          </Item>
        </Stack>
      </Box>
    </>
  );
}

export async function getServerSideProps({ params }) {
  // Run API calls in parallel
  //const [events] = await Promise.all([await fetchAPI("/events")]);
  const events = await fetchAPI(`/events?id=${params.id}`);
  const contact = await fetchAPI("/contact");
  const projects = await fetchAPI("/projects");

  return {
    props: { event: events[0], contact, projects },
    //revalidate: 1,
  };
}

export default Event;

Event.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
