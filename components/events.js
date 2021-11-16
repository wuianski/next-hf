import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import AwesomeSlider from "react-awesome-slider";
import styles from "./events.module.css";
import Nav from "./nav";

import { format } from "date-fns";

const Events = ({ events: dataset }) => {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

  return (
    <>
      <Box>
        <AwesomeSlider
          bullets={true}
          fillParent={true}
          transitionDelay={500}
          organicArrows={false}
        >
          {dataset &&
            dataset.map((event) => (
              <Box key={event.id}>
                <Image
                  className={styles.landingImage}
                  src={event.cover && event.cover.url}
                  alt="download icon"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  //width={1080}
                  //height={520}
                />
                <Link href="/events/[id]" as={`/events/` + event.id}>
                  <Box
                    mr={{ xs: 4, md: 6 }}
                    mb={{ xs: 10, md: 6 }}
                    sx={{
                      cursor: "pointer",
                      color: "#fff",
                      textAlign: "end",
                      textShadow: "0.2em 0.2em 0.8em #000",
                      whiteSpace: "pre-line",
                      maxWidth: "78vw",
                    }}
                    className={styles.landingText}
                  >
                    <Box
                      sx={{
                        fontSize: { xs: 17, md: 37, xl: 40 },
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: { xs: 20, md: 37, xl: 40 },
                          fontWeight: { xs: 400, md: 500, xl: 700 },
                        }}
                      >
                        {event.title_tw}
                      </Box>
                      <Box
                        mt={1}
                        sx={{
                          fontWeight: { xs: 400, md: 400, xl: 500 },
                          lineHeight: { xs: "21px", md: "45px", xl: "48px" },
                        }}
                      >
                        {event.title_en}
                      </Box>
                    </Box>

                    <Box
                      mt={1}
                      sx={{
                        fontSize: { xs: 15, md: 27, xl: 30 },
                        fontWeight: { xs: 400, md: 400, xl: 500 },
                      }}
                    >
                      <Box component="span">
                        {event.start_time &&
                          format(new Date(event.start_time), "MMM dd")}
                      </Box>
                      <Box component="span">
                        {event.end_time &&
                          ` - ` +
                            format(new Date(event.end_time), "MMM dd, yyyy")}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        fontSize: { md: 17, xl: 19 },
                        lineHeight: 1.3,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Box
                        mt={2}
                        variant="text"
                        sx={{
                          lineHeight: "38px",
                          borderBottom: "3px solid #fff",
                          textTransform: "capitalize",
                        }}
                      >
                        更多資訊 read more
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </Box>
            ))}
        </AwesomeSlider>
      </Box>
    </>
  );
};

export default Events;


