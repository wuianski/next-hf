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
    //...theme.typography.body2,
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

  const PSDrawer = styled(Drawer)(() => ({
    "& .MuiDrawer-paper ": {
      background:
        "linear-gradient(90deg, rgba(187, 187, 187, 1) 0%, rgba(255, 255, 255, 1) 100%)",
    },
  }));

  const MLDrawer = styled(Drawer)(() => ({
    "& .MuiDrawer-paper ": {
      background:
        "linear-gradient(90deg, rgba(147, 139, 101, 1) 0%, rgba(255, 255, 255, 1) 100%)",
    },
  }));

  const PHPDrawer = styled(Drawer)(() => ({
    "& .MuiDrawer-paper ": {
      background:
        "linear-gradient(90deg, rgba(176, 147, 54, 1) 0%, rgba(255, 255, 255, 1) 100%)",
    },
  }));

  /** fullPage onLeave trigger motion framer **/
  const activeSec = secIndex;
  const activeSecI = activeSec.destination;

  return (
    <>
      {/** vvv desktop collapse mode **/}

      <Box
        ml={{ xs: 8.5, sm: "20vw" }}
        mr={{ xs: 2, md: 10 }}
        mt={{ xs: 22, sm: 22, md: 23 }}
        sx={{ width: { xs: "70vw", md: "70%" }, height: "80%" }}
      >
        {/* ps */}
        <Box sx={{ width: { xs: "260px", sm: "280px", md: "300px" } }}>
          {dataset0 &&
            dataset0.map((project) => (
              <Box key={project.id} sx={{ cursor: "pointer" }}>
                {/* toggle drawer */}
                <Box onClick={toggleDrawer(project.id, true)}>
                  <Box ml={0.1} pt={1}>
                    <Image
                      src="/IMGs/ps_logo.png"
                      alt="ps_logo"
                      width={320}
                      height={96}
                    />
                  </Box>
                  <Box
                    mt={1.5}
                    sx={{
                      width: { xs: "60vw", md: "300px" },
                      height: 28,
                      backgroundImage:
                        "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                    }}
                  />
                </Box>
                <PSDrawer anchor={"right"} open={state[project.id]}>
                  {/* content inside of drawer */}
                  <Box>
                    <Box
                      role="presentation"
                      onClick={toggleDrawer(project.id, false)}
                      sx={{
                        textAlign: "right",
                        cursor: "pointer",
                        width: "110px",
                        height: "110px",
                        position: "fixed",
                        top: 0,
                        right: 0,
                        zIndex: 99,
                      }}
                    >
                      <Image
                        src="/IMGs/drawerClose_icon.png"
                        alt="close medal"
                        width={110}
                        height={110}
                      />
                    </Box>

                    <Box
                      sx={{
                        width: { xs: "100vw", md: "80vw" },

                        padding: { xs: 3, md: 10 },
                        /* height of scroll area on mobile */
                        height: { xs: "90vh" },
                        //overflow: "scroll",
                      }}
                      //in order to make element can scroll normally, give a className and use it in fullPage options
                      className="scrollEle"
                    >
                      <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 2, md: 0 }}
                        mb={10}
                        mt={13}
                      >
                        <Item sx={{ width: { xs: "100%", md: "25vw" } }}>
                          <Box>
                            {/* logo */}
                            <Box ml={0.1}>
                              <Image
                                src="/IMGs/ps_logo.png"
                                alt="ps_logo"
                                width={320}
                                height={96}
                              />
                            </Box>
                            {/* link */}
                            <Box mt={2} mb={2}>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                              >
                                <Image
                                  src="/IMGs/externalLink_icon.png"
                                  alt="deco"
                                  width={24}
                                  height={24}
                                />
                              </a>
                            </Box>
                          </Box>
                        </Item>
                        <Item
                          sx={{
                            width: {
                              xs: "100%",
                              md: "42vw",
                            },
                            textAlign: "justify",
                            fontSize: { xs: 17, md: 17 },
                            lineHeight: "26px",
                          }}
                        >
                          <Box>
                            <Box mb={6}>
                              <Image
                                src="/IMGs/ps_cover.png"
                                alt="deco"
                                width={521}
                                height={264}
                              />
                            </Box>
                            <Box sx={{ fontWeight: 400 }}>
                              {project.content_tw}
                            </Box>
                            <Box
                              sx={{
                                fontFamily: "Helvetica Neue",
                                fontWeight: 500,
                              }}
                              mt={2}
                            >
                              {project.content_en}
                            </Box>
                          </Box>
                        </Item>
                      </Stack>
                    </Box>
                  </Box>
                </PSDrawer>
              </Box>
            ))}
        </Box>
        {/* ml */}
        <Box
          ml={{ xs: 0, md: "300px" }}
          mt={6}
          sx={{ width: { xs: "260px", sm: "280px", md: "300px" } }}
        >
          {dataset1 &&
            dataset1.map((project) => (
              <Box key={project.id} sx={{ cursor: "pointer" }}>
                {/* toggle drawer */}
                <Box onClick={toggleDrawer(project.id, true)}>
                  <Box ml={0.1} pt={1}>
                    <Image
                      src="/IMGs/ml_logo.png"
                      alt="ml_logo"
                      width={320}
                      height={96}
                    />
                  </Box>
                  <Box
                    mt={1.5}
                    sx={{
                      width: { xs: "60vw", md: "300px" },
                      height: 28,
                      backgroundImage:
                        "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                    }}
                  />
                </Box>
                <MLDrawer anchor={"right"} open={state[project.id]}>
                  {/* content inside of drawer */}
                  <Box>
                    <Box
                      role="presentation"
                      onClick={toggleDrawer(project.id, false)}
                      sx={{
                        textAlign: "right",
                        cursor: "pointer",
                        width: "110px",
                        height: "110px",
                        position: "fixed",
                        top: 0,
                        right: 0,
                        zIndex: 99,
                      }}
                    >
                      <Image
                        src="/IMGs/drawerClose_icon.png"
                        alt="close medal"
                        width={110}
                        height={110}
                      />
                    </Box>

                    <Box
                      sx={{
                        width: { xs: "100vw", md: "80vw" },
                        padding: { xs: 3, md: 10 },
                        /* height of scroll area on mobile */
                        height: { xs: "90vh" },
                        //overflow: "scroll",
                      }}
                      //in order to make element can scroll normally, give a className and use it in fullPage options
                      className="scrollEle"
                    >
                      <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 2, md: 0 }}
                        mb={10}
                        mt={13}
                      >
                        <Item sx={{ width: { xs: "100%", md: "25vw" } }}>
                          <Box>
                            {/* logo */}
                            <Box ml={0.1}>
                              <Image
                                src="/IMGs/ml_logo.png"
                                alt="ps_logo"
                                width={320}
                                height={96}
                              />
                            </Box>
                            {/* link */}
                            <Box mt={2} mb={2}>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                              >
                                <Image
                                  src="/IMGs/externalLink_icon.png"
                                  alt="deco"
                                  width={24}
                                  height={24}
                                />
                              </a>
                            </Box>
                          </Box>
                        </Item>
                        <Item
                          sx={{
                            width: {
                              xs: "100%",
                              md: "42vw",
                            },
                            textAlign: "justify",
                            fontSize: { xs: 17, md: 17 },
                            lineHeight: "26px",
                          }}
                        >
                          <Box>
                            <Box mb={6}>
                              <Image
                                src="/IMGs/ml_cover.png"
                                alt="deco"
                                width={521}
                                height={264}
                              />
                            </Box>
                            <Box sx={{ fontWeight: 400 }}>
                              {project.content_tw}
                            </Box>
                            <Box
                              sx={{
                                fontFamily: "Helvetica Neue",
                                fontWeight: 500,
                              }}
                              mt={2}
                            >
                              {project.content_en}
                            </Box>
                          </Box>
                        </Item>
                      </Stack>
                    </Box>
                  </Box>
                </MLDrawer>
              </Box>
            ))}
        </Box>
        {/* php */}
        <Box
          ml={{ xs: 0, md: "600px" }}
          mt={6}
          sx={{ width: { xs: "260px", sm: "280px", md: "300px" } }}
        >
          {dataset2 &&
            dataset2.map((project) => (
              <Box key={project.id} sx={{ cursor: "pointer" }}>
                {/* toggle drawer */}
                <Box onClick={toggleDrawer(project.id, true)}>
                  <Box ml={0.1} pt={1}>
                    <Image
                      src="/IMGs/php_logo.png"
                      alt="php_logo"
                      width={320}
                      height={96}
                    />
                  </Box>
                  <Box
                    mt={1.5}
                    sx={{
                      width: { xs: "60vw", md: "300px" },
                      height: 28,
                      backgroundImage:
                        "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                    }}
                  />
                </Box>
                <PHPDrawer anchor={"right"} open={state[project.id]}>
                  {/* content inside of drawer */}
                  <Box>
                    <Box
                      role="presentation"
                      onClick={toggleDrawer(project.id, false)}
                      sx={{
                        textAlign: "right",
                        cursor: "pointer",
                        width: "110px",
                        height: "110px",
                        position: "fixed",
                        top: 0,
                        right: 0,
                        zIndex: 99,
                      }}
                    >
                      <Image
                        src="/IMGs/drawerClose_icon.png"
                        alt="close medal"
                        width={110}
                        height={110}
                      />
                    </Box>

                    <Box
                      sx={{
                        width: { xs: "100vw", md: "80vw" },
                        padding: { xs: 3, md: 10 },
                        /* height of scroll area on mobile */
                        height: { xs: "90vh" },
                        //overflow: "scroll",
                      }}
                      //in order to make element can scroll normally, give a className and use it in fullPage options
                      className="scrollEle"
                    >
                      {/* php stack */}
                      <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 2, md: 0 }}
                        mb={10}
                        mt={13}
                      >
                        <Item sx={{ width: { xs: "100%", md: "25vw" } }}>
                          <Box>
                            {/* logo */}
                            <Box ml={0.1}>
                              <Image
                                src="/IMGs/php_logo.png"
                                alt="ps_logo"
                                width={320}
                                height={96}
                              />
                            </Box>
                            {/* link */}
                            <Box mt={2} mb={2}>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                              >
                                <Image
                                  src="/IMGs/externalLink_icon.png"
                                  alt="deco"
                                  width={24}
                                  height={24}
                                />
                              </a>
                            </Box>
                          </Box>
                        </Item>
                        <Item
                          sx={{
                            width: {
                              xs: "100%",
                              md: "42vw",
                            },
                            textAlign: "justify",
                            fontSize: { xs: 17, md: 17 },
                            lineHeight: "26px",
                          }}
                        >
                          <Box>
                            <Box mb={6}>
                              <Image
                                src="/IMGs/php_cover.png"
                                alt="deco"
                                width={521}
                                height={264}
                              />
                            </Box>
                            <Box sx={{ fontWeight: 400 }}>
                              {project.content_tw}
                            </Box>
                            <Box
                              sx={{
                                fontFamily: "Helvetica Neue",
                                fontWeight: 500,
                              }}
                              mt={2}
                            >
                              {project.content_en}
                            </Box>
                          </Box>
                        </Item>
                      </Stack>
                      {/* 簡老師讀遊園 stack */}
                      {dataset3 &&
                        dataset3.map((d3) => (
                          <Box key={d3.id} sx={{ cursor: "pointer" }}>
                            <Stack
                              direction={{ xs: "column", md: "row" }}
                              spacing={{ xs: 2, md: 0 }}
                              mb={10}
                              mt={13}
                            >
                              <Item sx={{ width: { xs: "100%", md: "25vw" } }}>
                                <Box>
                                  {/* logo */}
                                  <Box ml={0.1}>
                                    <Image
                                      src="/IMGs/g_logo.png"
                                      alt="ps_logo"
                                      width={320}
                                      height={96}
                                    />
                                  </Box>
                                  {/* link */}
                                  <Box mt={2} mb={2}>
                                    <a
                                      href={d3.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <Image
                                        src="/IMGs/externalLink_icon.png"
                                        alt="deco"
                                        width={24}
                                        height={24}
                                      />
                                    </a>
                                  </Box>
                                </Box>
                              </Item>
                              <Item
                                sx={{
                                  width: {
                                    xs: "100%",
                                    md: "40vw",
                                  },
                                  textAlign: "justify",
                                  fontSize: { xs: 17, md: 17 },
                                  lineHeight: "26px",
                                }}
                              >
                                <Box mt={{ xs: 0, md: 8 }}>
                                  <Box sx={{ fontWeight: 400 }}>
                                    {d3.content_tw}
                                  </Box>
                                  <Box
                                    sx={{
                                      fontFamily: "Helvetica Neue",
                                      fontWeight: 500,
                                    }}
                                    mt={2}
                                  >
                                    {d3.content_en}
                                  </Box>
                                </Box>
                              </Item>
                            </Stack>
                          </Box>
                        ))}
                    </Box>
                  </Box>
                </PHPDrawer>
              </Box>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Projects;
