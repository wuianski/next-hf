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
import Nav from "../../components/nav";
import Masonry from "@mui/lab/Masonry";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

function Event({ event, contact }) {
  /** sorting dataset by id **/
  //!dataset ? null : dataset.sort((a, b) => a.id - b.id);

  /** route each post **/
  const router = useRouter();
  const { id } = router.query;

  /** stack Item setting **/
  const Item = styled(Paper)(({ theme }) => ({
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
      <Nav contact={contact} />
      <Box id="myMenuInPage">
        <div /*data-menuanchor="section1"*/ className="active secName">
          <div className="secName_twInPage">活動</div>
          <div className="secName_enInPage">events</div>
        </div>
      </Box>

      <Box mt={20}>
        <Stack direction="column" spacing={{ xs: 8, md: 12 }}>
          <Item sx={{ width: "100vw" }}>
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
              <Box ml={{ xs: 8, md: 28 }} mr={{ xs: 3, md: 14 }}>
                <Box
                  sx={{
                    fontSize: { xs: "34px", xl: "37px" },
                    lineHeight: 1.3,
                    textAlign: "end",
                    whiteSpace: "pre-line",
                    //maxWidth: { xs: "270px", md: "500px", xl: "600px" },
                  }}
                >
                  {event.title_tw}
                </Box>
                <Box
                  sx={{
                    fontSize: { xs: "25px", xl: "28px" },
                    lineHeight: 1.3,
                    textAlign: "end",
                    whiteSpace: "pre-line",
                  }}
                >
                  {event.title_en}
                </Box>
              </Box>
            </motion.div>
          </Item>
          <Item>
            <Box ml={{ xs: 8, md: 28 }} mr={{ xs: 2, md: 13 }}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                <Item sx={{ width: { xs: "100%", md: "40%" } }}>
                  <Box>
                    {/* vvv comment out only for 活動資訊
                    <Box
                      sx={{
                        fontSize: { xs: "15px", xl: "15px" },
                        fontWeight: { xs: 700, xl: 700 },
                        lineHeight: 1.3,
                        textAlign: { xs: "end", md: "start" },
                      }}
                    >
                      {event.start_time && +`活動時間`}
                    </Box>
                    <Box
                      pt={1}
                      sx={{
                        fontSize: { xs: "17px", xl: "17px" },
                        fontWeight: { xs: 400, xl: 400 },
                        lineHeight: 1.6,
                        textAlign: { xs: "end", md: "start" },
                      }}
                    >
                      <Box component="span">{event.start_time}</Box>
                      <Box component="span">{event.end_time && +` - `}</Box>
                      <Box component="span" ml={1}>
                        {event.end_time}
                      </Box>
                    </Box>
                    <Box
                      pt={3}
                      sx={{
                        fontSize: { xs: "15px", xl: "15px" },
                        fontWeight: { xs: 700, xl: 700 },
                        lineHeight: 1.3,
                        textAlign: { xs: "end", md: "start" },
                      }}
                    >
                      {event.place && +`活動地點`}
                    </Box>
                    <Box
                      pt={1}
                      sx={{
                        fontSize: { xs: "17px", xl: "17px" },
                        fontWeight: { xs: 400, xl: 400 },
                        lineHeight: 1.6,
                        textAlign: { xs: "end", md: "start" },
                      }}
                    >
                      {event.place}
                    </Box>
                    */}
                    <Box
                      pt={3}
                      sx={{
                        fontSize: { xs: "15px", xl: "15px" },
                        fontWeight: { xs: 700, xl: 700 },
                        lineHeight: 1.3,
                        textAlign: { xs: "end", md: "start" },
                      }}
                    >
                      活動資訊
                    </Box>
                    <Box
                      pt={1}
                      sx={{
                        fontSize: { xs: "17px", xl: "17px" },
                        fontWeight: { xs: 400, xl: 400 },
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                        textAlign: { xs: "end", md: "start" },
                      }}
                    >
                      {event.sponsor && event.sponsor}
                    </Box>
                  </Box>
                </Item>
                <Item sx={{ width: { xs: "100%", md: "50%" } }}>
                  <Box>{/*video*/}</Box>
                </Item>
              </Stack>
            </Box>
          </Item>
          <Item>
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
                  <Box
                    pt={{ xs: 3, md: 0 }}
                    sx={{
                      fontSize: { xs: "15px", xl: "15px" },
                      fontWeight: { xs: 700, xl: 700 },
                      lineHeight: 1.3,
                      textAlign: { xs: "end", md: "end" },
                    }}
                  >
                    活動概念
                  </Box>
                  <Box sx={{ textAlign: "justify", textJustify: "distribute" }}>
                    <ReactMarkdown>{event.content_tw}</ReactMarkdown>
                  </Box>
                </Item>
              </Stack>
            </Box>
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

  return {
    props: { event: events[0], contact },
    //revalidate: 1,
  };
}

export default Event;

Event.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
