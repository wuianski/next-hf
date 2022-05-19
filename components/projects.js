import React from "react";
import Image from "next/image";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { motion, AnimatePresence } from "framer-motion";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "next/link";

const Projects = ({ projects: dataset }) => {
  /* CHANGE ARRAY SORTING BY ID*/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

  const mydataset = dataset.slice(0, 3);

  /* SEPERATE DATASET INTO 4*/
  const dataset0 = dataset.slice(0, 1);
  const dataset1 = dataset.slice(1, 2);
  const dataset2 = dataset.slice(2, 3);
  const dataset3 = dataset.slice(3, 4);

  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "78vw" },
          maxWidth: { xs: "100%", md: "1180px", lg: "1300px" },
        }}
        pt={{ xs: 0, sm: 5, md: 0 }}
        pb={{ xs: 3, sm: 5, md: 10 }}
        ml={{ xs: 0, sm: 0, md: 2.5 }}
      >
        <Box
          className="grid-container"
          sx={{
            width: { xs: "100%", sm: "100%", md: "calc(100% + 20px)" },
            height: "500px",
          }}
        >
          {mydataset &&
            mydataset.map((project) => (
              <Box
                key={project.id}
                id={"item" + project.id}
                sx={{
                  cursor: "pointer",
                  height: { xs: "250px", sm: "500px", md: "100%" },
                  overflow: "hidden",
                  filter: "brightness(100%) contrast(100%)",
                }}
              >
                <a href={project.link} target="_blank">
                  <Image
                    //key={event.id}
                    //className={styles.landingImage}
                    src={project.cover2 && project.cover2.url}
                    alt="cover image of projects"
                    //layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    width="1000"
                    height="1304"
                  />

                  <Box className="progamBg" />
                  <Box className="progamName">{project.short_content}</Box>
                  <Box className="progamLogo">
                    <Image
                      //key={event.id}
                      //className={styles.landingImage}
                      src={project.cover && project.cover.url}
                      alt="logo image of projects"
                      //layout="responsive"
                      objectFit="contain"
                      //objectPosition="center"
                      width="215"
                      height="89"
                    />
                  </Box>
                </a>
              </Box>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Projects;
