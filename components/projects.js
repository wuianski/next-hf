import React from "react";
import Image from "next/image";

import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";

const Projects = ({ projects: dataset }) => {
  //console.log(events);

  /* CHANGE ARRAY SORTING BY ID*/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);
  /* SEPERATE DATASET INTO 4*/
  const dataset0 = dataset.slice(0, 1);
  const dataset1 = dataset.slice(1, 2);
  const dataset2 = dataset.slice(2, 3);
  const dataset3 = dataset.slice(3, 4);
  /* SET UP HOVER PROJECT SEEK*/
  const [anchorEl_PS, setAnchorEl_PS] = React.useState(null);
  const [anchorEl_PSR, setAnchorEl_PSR] = React.useState(true);
  const handlePopoverOpenPS = (event) => {
    setAnchorEl_PS(event.currentTarget);
    setAnchorEl_PSR(false);
  };
  const handlePopoverClosePS = () => {
    setAnchorEl_PS(null);
    setAnchorEl_PSR(true);
  };
  const open_PS = Boolean(anchorEl_PS);
  const open_PSR = Boolean(anchorEl_PSR);
  /* SET UP HOVER MINLONG FORUM*/
  const [anchorEl_MF, setAnchorEl_MF] = React.useState(null);
  const [anchorEl_MFR, setAnchorEl_MFR] = React.useState(true);
  const handlePopoverOpenMF = (event) => {
    setAnchorEl_MF(event.currentTarget);
    setAnchorEl_MFR(false);
  };
  const handlePopoverCloseMF = () => {
    setAnchorEl_MF(null);
    setAnchorEl_MFR(true);
  };
  const open_MF = Boolean(anchorEl_MF);
  const open_MFR = Boolean(anchorEl_MFR);
  /* SET UP HOVER PHP SUNAO COMMUNITY*/
  const [anchorEl_PHP, setAnchorEl_PHP] = React.useState(null);
  const [anchorEl_PHPR, setAnchorEl_PHPR] = React.useState(true);
  const handlePopoverOpenPHP = (event) => {
    setAnchorEl_PHP(event.currentTarget);
    setAnchorEl_PHPR(false);
  };
  const handlePopoverClosePHP = () => {
    setAnchorEl_PHP(null);
    setAnchorEl_PHPR(true);
  };
  const open_PHP = Boolean(anchorEl_PHP);
  const open_PHPR = Boolean(anchorEl_PHPR);
  /* SET UP HOVER CH*/
  const [anchorEl_CH, setAnchorEl_CH] = React.useState(null);
  const [anchorEl_CHR, setAnchorEl_CHR] = React.useState(true);
  const handlePopoverOpenCH = (event) => {
    setAnchorEl_CH(event.currentTarget);
    setAnchorEl_CHR(false);
  };
  const handlePopoverCloseCH = () => {
    setAnchorEl_CH(null);
    setAnchorEl_CHR(true);
  };
  const open_CH = Boolean(anchorEl_CH);
  const open_CHR = Boolean(anchorEl_CHR);

  return (
    <div>
      <Box
        ml={13}
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "center",
          alignItems: "flex-start",
          height: "38vh",
          minHeight: 380,
        }}
      >
        <Box
          sx={{
            width: 1 / 5,
            marginRight: 3,
            "&:hover": {
              width: 2 / 3,
            },
          }}
        >
          {dataset0 &&
            dataset0.map((project) => (
              <div key={project.id}>
                <div
                  aria-owns={open_PS ? "mouse-over-popover" : null}
                  aria-haspopup="true"
                  onMouseOver={handlePopoverOpenPS}
                  onMouseOut={handlePopoverClosePS}
                >
                  <Box
                    sx={{
                      fontSize: { md: "h5.fontSize", xl: "h4.fontSize" },
                      lineHeight: 1.2,
                    }}
                    style={{
                      whiteSpace: "pre-line",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    {project.title.en}
                  </Box>
                  <Box
                    sx={{
                      fontSize: { md: "h6.fontSize", xl: "h5.fontSize" },
                      mb: 3,
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {project.title.tw}
                  </Box>

                  <Collapse in={open_PS}>
                    <Box
                      pb={1}
                      sx={{
                        fontSize: { md: 15, xl: 17 },
                        lineHeight: { md: 1.4, xl: 1.6 },
                        textAlign: "justify",
                        textJustify: "distribute",
                      }}
                    >
                      {project.content.tw}
                    </Box>
                    <Box
                      sx={{
                        fontSize: { md: 15, xl: 17 },
                        lineHeight: { md: 1.4, xl: 1.6 },
                      }}
                    >
                      {project.content.en}
                    </Box>
                  </Collapse>
                  <Collapse in={open_PS}>
                    <Box sx={{ mt: 3 }}>
                      <Box
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
                    </Box>
                  </Collapse>
                  <Collapse in={open_PSR}>
                    <Box
                      sx={{
                        height: 28,
                        backgroundImage:
                          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                      }}
                    ></Box>
                  </Collapse>
                </div>
              </div>
            ))}
        </Box>
        <Box
          mr={3}
          sx={{
            width: 1 / 5,
            "&:hover": {
              width: 1 / 3,
            },
          }}
        >
          {dataset1 &&
            dataset1.map((project) => (
              <div key={project.id}>
                <div
                  aria-owns={open_MF ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseOver={handlePopoverOpenMF}
                  onMouseOut={handlePopoverCloseMF}
                >
                  <Box
                    sx={{
                      fontSize: { md: "h5.fontSize", xl: "h4.fontSize" },
                      lineHeight: 1.2,
                    }}
                    style={{
                      whiteSpace: "pre-line",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    {project.title.en}
                  </Box>
                  <Box
                    sx={{
                      fontSize: { md: "h6.fontSize", xl: "h5.fontSize" },
                      mb: 3,
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {project.title.tw}
                  </Box>

                  <Collapse in={open_MF}>
                    <Box
                      pb={1}
                      sx={{
                        fontSize: { md: 15, xl: 17 },
                        lineHeight: { md: 1.4, xl: 1.6 },
                        textAlign: "justify",
                        textJustify: "distribute",
                      }}
                    >
                      {project.content.tw}
                    </Box>
                    <Box
                      sx={{
                        fontSize: { md: 15, xl: 17 },
                        lineHeight: { md: 1.4, xl: 1.6 },
                        lineHeight: 1.6,
                      }}
                    >
                      {project.content.en}
                    </Box>
                  </Collapse>
                  <Collapse in={open_MF}>
                    <Box sx={{ mt: 3 }}>
                      <Box
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
                    </Box>
                  </Collapse>
                  <Collapse in={open_MFR}>
                    <Box
                      sx={{
                        height: 28,
                        backgroundImage:
                          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                      }}
                    ></Box>
                  </Collapse>
                </div>
              </div>
            ))}
        </Box>
        <Box
          mr={3}
          sx={{
            alignSelf: "flex-end",
            width: 1 / 5,
            "&:hover": {
              width: 2 / 3,
            },
          }}
        >
          {dataset2 &&
            dataset2.map((project) => (
              <div key={project.id}>
                <div
                  aria-owns={open_PHP ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseOver={handlePopoverOpenPHP}
                  onMouseOut={handlePopoverClosePHP}
                >
                  <Box
                    sx={{
                      fontSize: { md: "h5.fontSize", xl: "h4.fontSize" },
                      lineHeight: 1.2,
                    }}
                    style={{
                      whiteSpace: "pre-line",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    {project.title.en}
                  </Box>
                  <Box
                    sx={{
                      fontSize: { md: "h6.fontSize", xl: "h5.fontSize" },
                      mb: 3,
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {project.title.tw}
                  </Box>

                  <Collapse in={open_PHP}>
                    <Box
                      pb={1}
                      sx={{
                        fontSize: { md: 15, xl: 17 },
                        lineHeight: { md: 1.4, xl: 1.6 },
                        textAlign: "justify",
                        textJustify: "distribute",
                      }}
                    >
                      {project.content.tw}
                    </Box>
                    <Box
                      sx={{
                        fontSize: { md: 15, xl: 17 },
                        lineHeight: { md: 1.4, xl: 1.6 },
                        lineHeight: 1.6,
                      }}
                    >
                      {project.content.en}
                    </Box>
                  </Collapse>
                  <Collapse in={open_PHP}>
                    <Box sx={{ mt: 3 }}>
                      <Box
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
                            src="/IMGs/externalLink_fb.png"
                            alt="deco"
                            width={48}
                            height={48}
                          />
                        </a>
                      </Box>
                    </Box>
                  </Collapse>
                  <Collapse in={open_PHPR}>
                    <Box
                      sx={{
                        height: 28,
                        backgroundImage:
                          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                      }}
                    ></Box>
                  </Collapse>
                </div>
              </div>
            ))}
        </Box>
        <Box
          sx={{
            alignSelf: "flex-end",
            width: 1 / 6,
            "&:hover": {
              width: 1 / 6,
            },
          }}
        >
          {dataset3 &&
            dataset3.map((project) => (
              <div key={project.id}>
                <div
                  aria-owns={open_CH ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseOver={handlePopoverOpenCH}
                  onMouseOut={handlePopoverCloseCH}
                >
                  <Box
                    sx={{
                      fontSize: { md: "h5.fontSize", xl: "h4.fontSize" },
                      lineHeight: 1.2,
                    }}
                    style={{
                      whiteSpace: "pre-line",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    {project.title.en}
                  </Box>
                  <Box
                    sx={{
                      fontSize: { md: "h6.fontSize", xl: "h5.fontSize" },
                      mb: 3,
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {project.title.tw}
                  </Box>

                  <Collapse in={open_CH}>
                    <Box
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
                          src="/IMGs/externalLink_fb.png"
                          alt="deco"
                          width={48}
                          height={48}
                        />
                      </a>
                    </Box>
                  </Collapse>
                  <Collapse in={open_CHR}>
                    <Box
                      sx={{
                        height: 28,
                        backgroundImage:
                          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.63) 51.56%, rgba(0, 0, 0, 0.15) 81.25%, rgba(0, 0, 0, 0) 100%)",
                      }}
                    ></Box>
                  </Collapse>
                </div>
              </div>
            ))}
        </Box>
      </Box>
    </div>
  );
};

export default Projects;

/*<div>{project.id}</div>
            <div>{project.title.tw}</div>
            <div>{project.title.en}</div>
            <div>{project.content.tw}</div>
            <div>{project.content.en}</div> 
                          
              <Card.Description>{project.content.en}</Card.Description>*/
/*
<Card.Group itemsPerRow={4}>
            {dataset &&
              dataset.map((project) => (
                <>
                  <Card>
                    <Card.Content>
                      <Card.Header>{project.title.tw}</Card.Header>
                      <Card.Header>{project.title.en}</Card.Header>
                      <Card.Description>{project.content.tw}</Card.Description>
                      <Card.Description>{project.content.en}</Card.Description>
                    </Card.Content>
                  </Card>
                </>
              ))}
          </Card.Group>
*/

/*
return (
    <>
      <div>
        {dataset0 &&
          dataset0.map((project) => (
            <div>
              <div>{project.title.tw}</div>
              <div>{project.title.en}</div>
              <div>
                <Reveal animated="fade">
                  <Reveal.Content visible>
                    <div className={styles.big}>{project.content.en}</div>
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div>{project.content.tw}</div>
                  </Reveal.Content>
                </Reveal>
              </div>
            </div>
          ))}
      </div>
      <div>
        {dataset1 &&
          dataset1.map((project) => (
            <div key={project.id}>
              <div>{project.title.tw}</div>
              <div>{project.title.en}</div>
            </div>
          ))}
      </div>
      <div>
        {dataset2 &&
          dataset2.map((project) => (
            <div key={project.id}>
              <div>{project.title.tw}</div>
              <div>{project.title.en}</div>
            </div>
          ))}
      </div>
    </>
  );
*/
