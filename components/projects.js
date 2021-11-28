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

const Projects = ({ projects: dataset, fullpageApi, secIndex }) => {
  /* CHANGE ARRAY SORTING BY ID*/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

  /* SEPERATE DATASET INTO 4*/
  const dataset0 = dataset.slice(0, 1);
  const dataset1 = dataset.slice(1, 2);
  const dataset2 = dataset.slice(2, 3);
  const dataset3 = dataset.slice(3, 4);

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

  /* desktop toggle setting */
  const [open, setOpen] = React.useState(false);
  //const [openR, setopenR] = React.useState(true);
  const handleClick = (project, open) => (event) => {
    setOpen({ ...open, [project]: open });
    //setopenR({ ...!openR, [project]: !openR });
  };

  /** mobile Drawer setting **/
  const [state, setState] = React.useState({
    right: false,
    right: false,
    right: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });

    /* when drawer open, set fullPage cannot scroll */
    if (open == true) {
      fullpageApi.setAllowScrolling(false);
    } else {
      fullpageApi.setAllowScrolling(true);
    }
  };

  /** fullPage onLeave trigger motion framer **/
  const activeSec = secIndex;
  const activeSecI = activeSec.destination;

  return (
    <>
      {/** vvv desktop collapse mode **/}
      <Box
        ml={{ xs: 13, md: 33 }}
        mr={{ xs: 2, md: 13 }}
        mt={{ xs: 5, md: 6 }}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Box
          ml={{ xs: 13, md: 0 }}
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "start",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <Box pr={2.5} sx={{ width: { xs: "60vw", md: "30vw" } }}>
            {dataset0 &&
              dataset0.map((project) => (
                <Box key={project.id}>
                  <Box onClick={handleClick(project.id, true)}>
                    <Box mb={2}>
                      <Image
                        src="/IMGs/ps_logo.png"
                        alt="download icon"
                        width={240}
                        height={96}
                      />
                    </Box>

                    <Collapse
                      in={open[project.id]}
                      style={{ transformOrigin: "0 0 0" }}
                      {...(open[project.id]
                        ? { easing: 200, timeout: 0 }
                        : { easing: 500, timeout: 500 })}
                    >
                      <Box mb={-4} sx={{ backgroundColor: "#fff" }}>
                        <OverlayScrollbarsComponent
                          options={{ className: "os-theme-block-dark" }}
                        >
                          <Box
                            sx={{ height: "20vh" /*overflow: "scroll"*/ }} //in order to make element can scroll normally, give a className and use it in fullPage options
                            className="scrollEle"
                            pr={3}
                          >
                            <Box
                              pb={1}
                              sx={{
                                fontSize: { md: 14, xl: 17 },
                                lineHeight: { md: 1.4, xl: 1.6 },
                                textAlign: "justify",
                                textJustify: "distribute",
                              }}
                            >
                              {project.content_tw}
                            </Box>
                            <Box
                              sx={{
                                fontSize: { md: 14, xl: 17 },
                                lineHeight: { md: 1.4, xl: 1.6 },
                              }}
                            >
                              {project.content_en}
                            </Box>
                          </Box>
                        </OverlayScrollbarsComponent>
                        <Box sx={{ mt: 2 }}>
                          <Box
                            sx={{
                              height: 48,
                              backgroundImage:
                                "linear-gradient(90deg, #B09336 0%, rgba(176, 147, 54, 0.5) 30%, rgba(176, 147, 54, 0.3) 60%, rgba(176, 147, 54, 0) 100%)",
                            }}
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              style={{ cursor: "pointer" }}
                            >
                              <Image
                                src="/IMGs/externalLink_icon.png"
                                alt="deco"
                                width={48}
                                height={48}
                              />
                            </a>
                          </Box>
                        </Box>
                      </Box>
                    </Collapse>

                    <Box
                      sx={{
                        height: 32,
                        backgroundImage:
                          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                      }}
                    />
                  </Box>
                </Box>
              ))}
          </Box>

          <Box pl={2.5} sx={{ width: { xs: "60vw", md: "30vw" } }}>
            {dataset1 &&
              dataset1.map((project) => (
                <div key={project.id}>
                  <Box onClick={handleClick(project.id, true)}>
                    <Box mb={2}>
                      <Image
                        src="/IMGs/ml_logo.png"
                        alt="download icon"
                        width={240}
                        height={96}
                      />
                    </Box>

                    <Collapse
                      in={open[project.id]}
                      style={{ transformOrigin: "0 0 0" }}
                      {...(open[project.id]
                        ? { easing: 200, timeout: 0 }
                        : { easing: 500, timeout: 500 })}
                    >
                      <Box mb={-4} sx={{ backgroundColor: "#fff" }}>
                        <OverlayScrollbarsComponent
                          options={{ className: "os-theme-block-dark" }}
                        >
                          <Box
                            sx={{ height: "20vh" /*overflow: "scroll"*/ }} //in order to make element can scroll normally, give a className and use it in fullPage options
                            className="scrollEle"
                            pr={3}
                          >
                            <Box
                              pb={1}
                              sx={{
                                fontSize: { md: 14, xl: 17 },
                                lineHeight: { md: 1.4, xl: 1.6 },
                                textAlign: "justify",
                                textJustify: "distribute",
                              }}
                            >
                              {project.content_tw}
                            </Box>
                            <Box
                              sx={{
                                fontSize: { md: 14, xl: 17 },
                                lineHeight: { md: 1.4, xl: 1.6 },
                              }}
                            >
                              {project.content_en}
                            </Box>
                          </Box>
                        </OverlayScrollbarsComponent>
                        <Box sx={{ mt: 2 }}>
                          <Box
                            sx={{
                              height: 48,
                              backgroundImage:
                                "linear-gradient(90deg, #B09336 0%, rgba(176, 147, 54, 0.5) 30%, rgba(176, 147, 54, 0.3) 60%, rgba(176, 147, 54, 0) 100%)",
                            }}
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              style={{ cursor: "pointer" }}
                            >
                              <Image
                                src="/IMGs/externalLink_icon.png"
                                alt="deco"
                                width={48}
                                height={48}
                              />
                            </a>
                          </Box>
                        </Box>
                      </Box>
                    </Collapse>
                    <Box
                      sx={{
                        height: 32,
                        backgroundImage:
                          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                      }}
                    ></Box>
                  </Box>
                </div>
              ))}
          </Box>
        </Box>

        <Box
          //ml={{ xs: 13, md: 13 }}
          mt={8}
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "end",
            alignItems: "flex-end",
          }}
        >
          <Box pr={2.5} sx={{ width: { xs: "60vw", md: "30vw" } }}>
            {dataset2 &&
              dataset2.map((project) => (
                <div key={project.id}>
                  <Box onClick={handleClick(project.id, true)}>
                    <Box mb={2}>
                      <Image
                        src="/IMGs/php_logo.png"
                        alt="download icon"
                        width={240}
                        height={96}
                      />
                    </Box>

                    <Collapse
                      in={open[project.id]}
                      style={{ transformOrigin: "0 0 0" }}
                      {...(open[project.id]
                        ? { easing: 200, timeout: 0 }
                        : { easing: 500, timeout: 500 })}
                    >
                      <Box mb={-4} sx={{ backgroundColor: "#fff" }}>
                        <OverlayScrollbarsComponent
                          options={{ className: "os-theme-block-dark" }}
                        >
                          <Box
                            sx={{ height: "20vh" /*overflow: "scroll"*/ }} //in order to make element can scroll normally, give a className and use it in fullPage options
                            className="scrollEle"
                            pr={3}
                          >
                            <Box
                              pb={1}
                              sx={{
                                fontSize: { md: 14, xl: 17 },
                                lineHeight: { md: 1.4, xl: 1.6 },
                                textAlign: "justify",
                                textJustify: "distribute",
                              }}
                            >
                              {project.content_tw}
                            </Box>
                            <Box
                              sx={{
                                fontSize: { md: 14, xl: 17 },
                                lineHeight: { md: 1.4, xl: 1.6 },
                              }}
                            >
                              {project.content_en}
                            </Box>
                          </Box>
                        </OverlayScrollbarsComponent>
                        <Box sx={{ mt: 2 }}>
                          <Box
                            sx={{
                              height: 48,
                              backgroundImage:
                                "linear-gradient(90deg, #B09336 0%, rgba(176, 147, 54, 0.5) 30%, rgba(176, 147, 54, 0.3) 60%, rgba(176, 147, 54, 0) 100%)",
                            }}
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              style={{ cursor: "pointer" }}
                            >
                              <Image
                                src="/IMGs/externalLink_icon.png"
                                alt="deco"
                                width={48}
                                height={48}
                              />
                            </a>
                          </Box>
                        </Box>
                      </Box>
                    </Collapse>
                    <Box
                      sx={{
                        height: 32,
                        backgroundImage:
                          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                      }}
                    ></Box>
                  </Box>
                </div>
              ))}
          </Box>

          <Box pl={2.5} sx={{ width: { xs: "60vw", md: "30vw" } }}>
            {dataset3 &&
              dataset3.map((project) => (
                <div key={project.id}>
                  <Box onClick={handleClick(project.id, true)}>
                    <Box mb={2}>
                      <Image
                        src="/IMGs/g_logo.png"
                        alt="download icon"
                        width={240}
                        height={24}
                      />
                    </Box>

                    <Collapse
                      in={open[project.id]}
                      style={{ transformOrigin: "0 0 0" }}
                      {...(open[project.id]
                        ? { easing: 200, timeout: 0 }
                        : { easing: 500, timeout: 500 })}
                    >
                      <Box mb={-4} sx={{ backgroundColor: "#fff" }}>
                        <Box
                          pb={1}
                          sx={{
                            fontSize: { md: 14, xl: 17 },
                            lineHeight: { md: 1.4, xl: 1.6 },
                            textAlign: "justify",
                            textJustify: "distribute",
                          }}
                        >
                          {project.content_tw}
                        </Box>
                        <Box
                          sx={{
                            fontSize: { md: 14, xl: 17 },
                            lineHeight: { md: 1.4, xl: 1.6 },
                          }}
                        >
                          {project.content_en}
                        </Box>
                        <Box sx={{ mt: 2 }}>
                          <Box
                            sx={{
                              height: 48,
                              backgroundImage:
                                "linear-gradient(90deg, #B09336 0%, rgba(176, 147, 54, 0.5) 30%, rgba(176, 147, 54, 0.3) 60%, rgba(176, 147, 54, 0) 100%)",
                            }}
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              style={{ cursor: "pointer" }}
                            >
                              <Image
                                src="/IMGs/externalLink_icon.png"
                                alt="deco"
                                width={48}
                                height={48}
                              />
                            </a>
                          </Box>
                        </Box>
                      </Box>
                    </Collapse>
                    <Box
                      sx={{
                        height: 32,
                        backgroundImage:
                          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                      }}
                    ></Box>
                  </Box>
                </div>
              ))}
          </Box>
        </Box>
      </Box>
      {/** vvv mobile drawer mode **/}
      <Box
        ml={{ xs: 10 }}
        mr={{ xs: 2 }}
        mt={{ xs: 5 }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          mt={12}
          sx={{
            display: { xs: "block" },
            justifyContent: "end",
            alignItems: "flex-end",
          }}
        >
          <Box pr={5} sx={{ width: { xs: "60vw", md: "60vw" } }}>
            {dataset &&
              dataset.map((project) => (
                <div key={project.id}>
                  <Box
                    // toggle drawer
                    onClick={toggleDrawer(project.id, true)}
                  >
                    {/*
                    <Box
                      sx={{
                        fontSize: 20,
                        lineHeight: 1.2,
                        whiteSpace: "pre-line",
                        textTransform: "uppercase",
                      }}
                    >
                      {project.title_en}
                    </Box>
                    <Box sx={{ fontSize: 18, mb: 0.8 }}>{project.title_tw}</Box>
                    <Box
                      mb={"4vh"}
                      sx={{
                        height: 22,
                        backgroundImage:
                          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                      }}
                    ></Box>
                    */}
                    {/*
                    <Image
                      src={
                        !!project.cover && !!project.cover.url
                          ? project.cover.url
                          : ""
                      }
                      alt="project logo"
                      layout="responsive"
                      objectFit="cover"
                      //objectPosition="left bottom"
                      width={"45%"}
                      height={"15%"}
                    />
                    <Box
                      mt={2}
                      mb={"4vh"}
                      sx={{
                        height: 22,
                        backgroundImage:
                          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                      }}
                    />
                    */}
                    <ImageList variant="masonry" cols={1} gap={"2.5vh"}>
                      <ImageListItem key={project.cover.id}>
                        <img
                          src={`${project.cover.url}?w=136&fit=format`}
                          srcSet={`${project.cover.url}?w=136&fit=format&dpr=2 2x`}
                          //alt={item.title}
                          loading="lazy"
                        />
                        <Box
                          mt={1.5}
                          //mb={"4vh"}
                          sx={{
                            height: 22,
                            backgroundImage:
                              "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                          }}
                        />
                      </ImageListItem>
                    </ImageList>
                  </Box>
                  <Drawer
                    anchor={"right"}
                    open={state[project.id]}
                    //onClose={toggleDrawer(project.id, false)}
                  >
                    {/* content inside of drawer */}
                    <Box>
                      <Box
                        role="presentation"
                        onClick={toggleDrawer(project.id, false)}
                        sx={{ textAlign: "right", cursor: "pointer" }}
                      >
                        <Image
                          src="/IMGs/drawerClose_icon.png"
                          alt="close medal"
                          width={48}
                          height={48}
                        />
                      </Box>
                      <OverlayScrollbarsComponent
                        options={{ className: "os-theme-block-dark" }}
                      >
                        <Box
                          sx={{
                            width: "80vw",
                            backgroundColor: "#fff",
                            padding: 2,
                            /* height of scroll area on mobile */
                            height: { xs: "80vh" },
                            //overflow: "scroll",
                          }}
                          //in order to make element can scroll normally, give a className and use it in fullPage options
                          className="scrollEle"
                          pr={3}
                        >
                          <Box
                            sx={{
                              fontSize: 33,
                              lineHeight: 1.2,
                              whiteSpace: "pre-line",
                              textTransform: "uppercase",
                            }}
                          >
                            {project.title_en}
                          </Box>
                          <Box sx={{ fontSize: 30 }}>{project.title_tw}</Box>
                          <Box
                            mt={2}
                            mb={2}
                            sx={{
                              height: 48,
                              backgroundImage:
                                "linear-gradient(90deg, #B09336 0%, rgba(176, 147, 54, 0.5) 51.56%, rgba(176, 147, 54, 0.3) 81.25%, rgba(176, 147, 54, 0) 100%)",
                            }}
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              style={{ cursor: "pointer" }}
                            >
                              <Image
                                src="/IMGs/externalLink_icon.png"
                                alt="deco"
                                width={48}
                                height={48}
                              />
                            </a>
                          </Box>
                          <Box>{project.content_tw}</Box>
                          <Box>{project.content_en}</Box>
                        </Box>
                      </OverlayScrollbarsComponent>
                    </Box>
                  </Drawer>
                </div>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects;


