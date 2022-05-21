import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import menuOpen_w from "../public/IMGs/menuOpen_w.png";
import menuClose from "../public/IMGs/menuClose.png";
import email_icon from "../public/IMGs/email_icon.png";
import fb_icon from "../public/IMGs/fb_icon.png";
import yt_icon from "../public/IMGs/yt_icon.png";
import ig_icon from "../public/IMGs/ig_icon.png";

const style = {
  position: "absolute",
  right: 0,
  width: { xs: "100%", md: "50vw" },
  height: "100%",
  bgcolor: "#000",
  color: "#fff",
  paddingLeft: { xs: "32px", md: "40px" },
  paddingRight: { xs: "32px", md: "40px" },
  paddingTop: { xs: "32px", md: "40px" },
  paddingBottom: { xs: "40px", md: "20px" },
  overflowY: "scroll",
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 1)",
  color: "rgba(255, 255, 255, 1)",
  marginTop: theme.spacing(0),
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid #fff`,
  padding: theme.spacing(0),
  backgroundColor: "rgba(0, 0, 0, 1)",
  color: "rgba(255, 255, 255, 1)",
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(0),
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(2),
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "rgba(255, 255, 255, 1)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Nav({ contact, projects: dataset }) {
  /** open and close modal setting **/
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  /** stack Item setting **/
  const Item = styled(Paper)(({ theme }) => ({
    //...theme.typography.body2,
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    textAlign: "left",
    color: "#fff",
    background: "none",
    boxShadow: "none",
  }));

  /** accordion setting **/
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  /* CHANGE ARRAY SORTING BY ID*/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

  const mydataset = dataset.slice(0, 3);

  return (
    <div>
      <Box onClick={handleOpen} className={styles.menuOpen}>
        <Image
          src={menuOpen_w}
          // placeholder="blur"
          alt="icon of menu open"
          width={40}
          height={28}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
          <Box sx={{ ...style }}>
            <Box
              sx={{
                backgroundColor: "#000",
                width: { xs: "100%", md: "50%" },
                height: "82px",
                position: "fixed",
                top: "0px",
                left: { xs: "0px", md: "50%" },
                zIndex: { xs: 99, md: 0 },
              }}
            >
              <Box onClick={handleClose} className={styles.menuClose}>
                <Image
                  src={menuClose}
                  placeholder="blur"
                  alt="icon of menu close"
                  width={42}
                  height={42}
                />
              </Box>
            </Box>
            <Stack
              direction={{ xs: "column", md: "column" }}
              spacing={{ xs: 6, md: 3 }}
              mt={{ xs: 13, md: 0 }}
            >
              {/* menu item */}
              <Item
                sx={{
                  width: { xs: "100%", md: "50%" },
                  height: { xs: "auto", md: "50vh" },
                }}
              >
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>
                      <Box component="span">關於</Box>
                      <Box component="span" ml={2}>
                        ABOUT
                      </Box>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="/about">
                      <Box mb={1} sx={{ cursor: "pointer" }}>
                        關於
                      </Box>
                    </Link>
                    <Link href="/about/members">
                      <Box mb={1} sx={{ cursor: "pointer" }}>
                        成員
                      </Box>
                    </Link>
                    <Link href="/about/resource">
                      <Box mb={1} sx={{ cursor: "pointer" }}>
                        公開資訊
                      </Box>
                    </Link>
                    <Link href="/about/timeline">
                      <Box mb={1} sx={{ cursor: "pointer" }}>
                        大事記
                      </Box>
                    </Link>
                    <Link href="/about/reports">
                      <Box mb={1} sx={{ cursor: "pointer" }}>
                        報表
                      </Box>
                    </Link>
                  </AccordionDetails>
                </Accordion>
                <Link href="/programs">
                  <Box
                    sx={{
                      borderBottom: "1px solid #fff",
                      height: "30px",
                      cursor: "pointer",
                    }}
                    mt={3}
                  >
                    <Typography>
                      <Box component="span">計畫</Box>
                      <Box component="span" ml={2}>
                        PROGRAMS
                      </Box>
                    </Typography>
                  </Box>
                </Link>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>
                      <Box component="span">出版</Box>
                      <Box component="span" ml={2}>
                        PUBLICATION
                      </Box>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="/publications">
                      <Box mb={1} sx={{ cursor: "pointer" }}>
                        關於
                      </Box>
                    </Link>
                    <Link href="/publications/publications">
                      <Box mb={1} sx={{ cursor: "pointer" }}>
                        出版
                      </Box>
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </Item>
              {/* contact item */}
              <Item
                sx={{
                  width: { xs: "100%", md: "45vw" },
                  height: { xs: "auto", md: "38vh" },
                }}
              >
                <Box>
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 6, md: 2 }}
                  >
                    {/* logo item */}
                    <Item sx={{ width: { xs: "80vw", md: "40%" } }}>
                      <Box mt={{ xs: 3, md: 0.5 }}>
                        {mydataset &&
                          mydataset.map((project) => (
                            <Box
                              key={project.id}
                              id={"item" + project.id}
                              sx={{
                                cursor: "pointer",
                                overflow: "hidden",
                              }}
                            >
                              <a href={project.link} target="_blank">
                                <Box mt={3} sx={{ filter: "invert(1)" }}>
                                  <Image
                                    //className={styles.landingImage}
                                    src={project.cover && project.cover.url}
                                    placeholder="blur"
                                    blurDataURL={project.cover.url}
                                    alt="logo image of projects"
                                    //layout="responsive"
                                    objectFit="contain"
                                    //objectPosition="center"
                                    width="168"
                                    height="69"
                                  />
                                </Box>
                              </a>
                            </Box>
                          ))}
                      </Box>
                    </Item>
                    {/* contact item */}
                    <Item sx={{ width: { xs: "80vw", md: "60%" } }}>
                      <Box mt={3}>
                        <Box pb={2}>
                          <Box
                            sx={{
                              fontFamily: "Helvetica Neue",
                              fontSize: { xs: 16, md: 16, xl: 19 },
                              fontWeight: 500,
                            }}
                          >
                            {contact.address_tw}
                          </Box>
                          <Box
                            sx={{
                              fontFamily: "Helvetica Neue",
                              fontSize: { xs: 16, md: 16, xl: 19 },
                              fontWeight: 500,
                              whiteSpace: "pre-line",
                              lineHeight: "137%",
                            }}
                          >
                            {contact.address_en}
                          </Box>
                        </Box>

                        <Box pb={{ xs: 0, md: 4 }}>
                          <Box
                            sx={{
                              fontFamily: "Helvetica Neue",
                              fontSize: { xs: 16, md: 16, xl: 19 },
                              fontWeight: 500,
                            }}
                            component="span"
                          >
                            {contact.phone}
                          </Box>
                        </Box>

                        {/* social media item */}
                        <Box
                          sx={{
                            position: { xs: "unset", md: "unset" },
                            bottom: { xs: "74px", md: "74px" },
                            display: { xs: "flex", md: "flex" },
                          }}
                          pb={{ xs: 4, md: 8 }}
                        >
                          <a href={`mailto:` + contact.email} target="_blank">
                            <Box
                              sx={{ width: 20, height: 20 }}
                              mt={{ xs: 4, md: 4 }}
                              mr={{ xs: 6, md: 2 }}
                            >
                              <Image
                                src={email_icon}
                                // placeholder="blur"
                                alt="icon of email"
                                layout="responsive"
                                objectFit="contain"
                                objectPosition="center"
                                width={20}
                                height={12}
                              />
                            </Box>
                          </a>
                          <a href={contact.facebook} target="_blank">
                            <Box
                              sx={{ width: 20, height: 20 }}
                              mt={3.5}
                              mr={{ xs: 6, md: 2 }}
                            >
                              <Image
                                src={fb_icon}
                                // placeholder="blur"
                                alt="icon of fb"
                                layout="responsive"
                                objectFit="contain"
                                objectPosition="center"
                                width={20}
                                height={19}
                              />
                            </Box>
                          </a>
                          <a href={contact.youtube} target="_blank">
                            <Box
                              sx={{ width: 20, height: 20 }}
                              mt={4}
                              mr={{ xs: 6, md: 2 }}
                            >
                              <Image
                                src={yt_icon}
                                // placeholder="blur"
                                alt="icon of youtube"
                                layout="responsive"
                                objectFit="contain"
                                objectPosition="center"
                                width={20}
                                height={12}
                              />
                            </Box>
                          </a>
                          <a href={contact.instagram} target="_blank">
                            <Box
                              sx={{ width: 20, height: 20 }}
                              mt={3.5}
                              mr={{ xs: 6, md: 2 }}
                            >
                              <Image
                                src={ig_icon}
                                // placeholder="blur"
                                alt="icon of instagram"
                                layout="responsive"
                                objectFit="contain"
                                objectPosition="center"
                                width={20}
                                height={18}
                              />
                            </Box>
                          </a>
                        </Box>

                        <Box
                          sx={{
                            fontFamily: "Helvetica Neue",
                            fontSize: { xs: 10, md: 10, xl: 13 },
                          }}
                          pb={{ xs: 0, md: 0 }}
                        >
                          2021©財團法人洪建全教育文化基金會 All Rights Reserved.
                        </Box>
                      </Box>
                    </Item>
                  </Stack>
                </Box>
              </Item>
            </Stack>
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}
