import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import styles from "./events.module.css";
import Slider from "react-slick";
import { format } from "date-fns";

const Events = ({ events: dataset }) => {
  /** sorting dataset by id **/
  //!dataset ? null : dataset.sort((a, b) => a.id - b.id);
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  /** sorting dataset by start_time in the Object **/
  function sortByDate(a, b) {
    if (a.start_time < b.start_time) {
      return 1;
    }
    if (a.start_time > b.start_time) {
      return -1;
    }
    return 0;
  }
  const sorted = dataset.sort(sortByDate);
  //console.log(sorted);

  /** react-slick setting **/
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  /** react-slick setting for mobile **/
  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const MAX_LENGTH = 130;

  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "79.7vw" },
          maxWidth: { xs: "100%", md: "1180px", lg: "1180px" },
          // maxWidth: { xs: "600px", md: "954px" },
        }}
        // ml={"auto"}
        // mr={"auto"}
        pt={{ xs: 0, sm: 5, md: 0 }}
        pb={{ xs: 3, sm: 5, md: 10 }}
        ml={{ xs: 1, sm: 1, md: 3, xl: 13 }}
        pr={{ xs: 4, sm: 4, md: 0 }}
      >
        {/* desktop */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Slider {...settings}>
            {sorted &&
              sorted.map((event, i) => (
                <Box key={event.id} pl={3.4}>
                  <Box
                    sx={{
                      width: { xs: "100%", md: "100%" },
                      height: { xs: "7px", md: "7px" },
                      background:
                        "linear-gradient(90deg, #000000 0%, rgba(139, 139, 139, 0.45) 45%, rgba(255, 255, 255, 0) 100%)",
                    }}
                    mr={6}
                  ></Box>
                  <Link href="/events/[id]" as={`/events/` + event.id}>
                    <Box sx={{ cursor: "pointer" }}>
                      {/* image */}
                      <Box mt={3}>
                        <Image
                          className={styles.landingImage}
                          src={event.cover && event.cover.url}
                          placeholder="blur"
                          blurDataURL={event.cover.url}
                          alt="cover image of event"
                          //layout="responsive"
                          objectFit="cover"
                          objectPosition="center"
                          width={1035}
                          height={750}
                        />
                      </Box>
                      {/* title */}
                      <Box
                        sx={{
                          fontSize: { xs: 17, md: 24 },
                          fontWeight: { xs: 400, md: 700 },
                          whiteSpace: "pre-line",
                        }}
                        mt={3}
                      >
                        {event.title_tw}
                      </Box>

                      {/*
                      <Box
                        mt={1}
                        sx={{
                          fontSize: { xs: 15, md: 27, xl: 30 },
                          fontWeight: { xs: 400, md: 400, xl: 500 },
                        }}
                      >
                        <Box component="span">
                          {event.start_time &&
                          event.start_time == event.end_time
                            ? ""
                            : format(new Date(event.start_time), "MMM dd") +
                              ` - `}
                        </Box>
                        <Box component="span">
                          {event.end_time &&
                            format(new Date(event.end_time), "MMM dd, yyyy")}
                        </Box>
                      </Box>
                          */}

                      {/* info */}
                      <Box
                        sx={{
                          fontSize: { xs: 14, md: 15 },
                          fontWeight: { xs: 700, md: 700 },
                          whiteSpace: "pre-line",
                        }}
                        mt={2}
                      >
                        {event.sponsor}
                      </Box>

                      {/* content */}
                      <Box
                        sx={{
                          fontSize: { xs: 14, md: 17 },
                          fontWeight: { xs: 400, md: 400 },
                        }}
                      >
                        {event.content_tw.length > MAX_LENGTH ? (
                          <Box mt={2}>
                            {`${event.content_tw.substring(0, MAX_LENGTH)}...`}
                            <Box
                              sx={{
                                lineHeight: "38px",
                                borderBottom: "3px solid #000",
                                textTransform: "none",
                                opacity: 0.5,
                                width: "fit-content",
                              }}
                            >
                              more
                            </Box>
                          </Box>
                        ) : (
                          <Box mt={2}>{event.content_tw}</Box>
                        )}
                      </Box>
                    </Box>
                  </Link>
                </Box>
              ))}
          </Slider>
        </Box>

        {/* mobile */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Slider {...settingsMobile}>
            {sorted &&
              sorted.map((event, i) => (
                <Box key={event.id} pl={3}>
                  <Box
                    sx={{
                      width: { xs: "100%", md: "100%" },
                      height: { xs: "7px", md: "7px" },
                      background:
                        "linear-gradient(90deg, #B09336 27.08%, rgba(176, 147, 54, 0.5) 56.25%, rgba(176, 147, 54, 0.3) 80.28%, rgba(176, 147, 54, 0) 100%)",
                    }}
                    mr={6}
                  ></Box>
                  <Link href="/events/[id]" as={`/events/` + event.id}>
                    <Box sx={{ cursor: "pointer" }}>
                      {/* image */}
                      <Box mt={3}>
                        <Image
                          className={styles.landingImage}
                          src={event.cover && event.cover.url}
                          placeholder="blur"
                          blurDataURL={event.cover.url}
                          alt="cover image"
                          //layout="responsive"
                          objectFit="cover"
                          objectPosition="center"
                          width={1035}
                          height={750}
                        />
                      </Box>
                      {/* title */}
                      <Box
                        sx={{
                          fontSize: { xs: 18, md: 24 },
                          fontWeight: { xs: 400, md: 700 },
                          whiteSpace: "pre-line",
                        }}
                        mt={3}
                      >
                        {event.title_tw}
                      </Box>

                      {/*
                      <Box
                        mt={1}
                        sx={{
                          fontSize: { xs: 15, md: 27, xl: 30 },
                          fontWeight: { xs: 400, md: 400, xl: 500 },
                        }}
                      >
                        <Box component="span">
                          {event.start_time &&
                          event.start_time == event.end_time
                            ? ""
                            : format(new Date(event.start_time), "MMM dd") +
                              ` - `}
                        </Box>
                        <Box component="span">
                          {event.end_time &&
                            format(new Date(event.end_time), "MMM dd, yyyy")}
                        </Box>
                      </Box>
                          */}

                      {/* info */}
                      <Box
                        sx={{
                          fontSize: { xs: 14, md: 15 },
                          fontWeight: { xs: 700, md: 700 },
                          whiteSpace: "pre-line",
                        }}
                        mt={2}
                      >
                        {event.sponsor}
                      </Box>

                      {/* content */}
                      <Box
                        sx={{
                          fontSize: { xs: 14, md: 17 },
                          fontWeight: { xs: 400, md: 400 },
                        }}
                      >
                        {event.content_tw.length > MAX_LENGTH ? (
                          <Box mt={2}>
                            {`${event.content_tw.substring(0, MAX_LENGTH)}...`}
                            <Box
                              sx={{
                                lineHeight: "38px",
                                borderBottom: "3px solid #000",
                                textTransform: "none",
                                opacity: 0.5,
                                width: "fit-content",
                              }}
                            >
                              more
                            </Box>
                          </Box>
                        ) : (
                          <Box mt={2}>{event.content_tw}</Box>
                        )}
                      </Box>
                    </Box>
                  </Link>
                </Box>
              ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Events;
