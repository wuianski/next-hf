import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import AwesomeSlider from "react-awesome-slider";
import styles from "./events.module.css";
import Nav from "./nav";

const Events = ({ events: dataset }) => {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

  return (
    <>
      {/*<Nav />*/}
      <div className={styles.container}>
        {dataset &&
          dataset.map((event) => (
            <div key={event.id}>
              <Image
                className={styles.landingImage}
                src="/localTest_IMGs/event1.jpg"
                alt="download icon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Events;


/*
{dataset &&
          dataset.map((event) => (
            <Box key={event.id}>
              <Box>{event.title_tw}</Box>
              <Box>{event.title_en}</Box>
              <Box sx={{ width: "30vw" }}>
                <Image
                  src="/localTest_IMGs/event1.jpg"
                  alt="download icon"
                  width={38}
                  height={38}
                />
              </Box>
            </Box>
          ))}
*/

/*
<AwesomeSlider
        bullets={true}
        fillParent={true}
        transitionDelay={500}
        organicArrows={false}
      >
        {dataset &&
          dataset.map((event) => (
            <div key={event.id}>
              <Image
                layout={"fill"}
                src="/localTest_IMGs/event1.jpg"
                alt="download icon"
              />
            </div>
          ))}
      </AwesomeSlider>
*/