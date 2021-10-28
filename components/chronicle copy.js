import React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { StyledEngineProvider } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import Grow from "@mui/material/Grow";
import styles from "./chronicle.module.css";

import _, { map } from "underscore";

const Chronicle = ({ chronicle: dataset }) => {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => b.id - a.id);

  /** panel state **/
  const containerRef = React.useRef(null);
  const [expanded, setExpanded] = React.useState(true);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };

  const groups = _.groupBy(dataset, "year");
  const arrByYear = Object.entries(groups).map((x) => {
    let year = x[0];
    let val = x[1];

    return year, val;
  });
  //console.log(arrByYear);

  return (
    <>
      {/*<StyledEngineProvider injectFirst>*/}
      <Box ml={13} mr={6} mt={13}>
        <Box
          sx={{
            //transform: "rotate(-90deg)",
            //in order to make element can scroll normally, give element a specific height.
            width: "70vw",
            height: "60vh",
            overflow: "scroll",
          }}
          className="scrollEle"
        >
          <Box
            ml={13}
            sx={
              {
                //transform: "rotate(-90deg)",
                //position: "relative",
                //left: 0,
                //bottom: "-30vh",
                //display: "flex",
                //justifyContent: { xs: "flex-start", md: "flex-start" },
                //in order to make element can scroll normally, give element a specific height.
                //width: "60vh",
                //height: "60vw",
                // overflow: "scroll",
              }
            }
            //className="scrollEle"
            //className={styles.myAccordionBlk}
          >
            {dataset &&
              dataset.map((chronicle) => (
                <Accordion
                  key={chronicle.id}
                  disableGutters={true}
                  ////className={styles.myAccordion}
                  //expanded={expanded === `panel` + 1}
                  expanded={expanded === `panel` + chronicle.id}
                  onChange={handleChange(`panel` + chronicle.id)}
                  //disabled="true"
                >
                  <AccordionSummary
                    key={chronicle.id}
                    ////className={styles.myAccordionSummary}
                    aria-controls={`panel` + chronicle.id + `d-content`}
                    id={`panel` + chronicle.id + `d-header`}
                  >
                    <Box
                      //visibility={"hidden"}
                      /*onClick={(handleChange) => {
                          alert("clicked");
                        }}*/
                      sx={{
                        height: 110,
                        backgroundImage:
                          "linear-gradient(180deg, #000000 0%, rgba(139, 139, 139, 0.453125) 44.79%, rgba(255, 255, 255, 0) 100%)",
                      }}
                    >
                      <Box mt={-3}>{chronicle.year}</Box>
                    </Box>
                    <Grow in={expanded === `panel` + chronicle.id}>
                      <Box
                        sx={{
                          height: 380,
                          width: 38,
                          backgroundImage:
                            "linear-gradient(180deg, #B09336 27.08%, rgba(176, 147, 54, 0.5) 56.25%, rgba(176, 147, 54, 0.3) 70.31%, rgba(176, 147, 54, 0) 89.58%)",
                          marginLeft: "-36px",
                          marginTop: "-270px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Box mt={-7} ml={-2} sx={{ fontSize: "33px" }}>
                          {chronicle.year}
                        </Box>
                      </Box>
                    </Grow>
                  </AccordionSummary>
                  <AccordionDetails
                    ////className={styles.myAccordionDetails}
                    key={chronicle.id}
                  >
                    <Box sx={{ maxWidth: "300px" }}>
                      <Box
                        sx={{
                          color: "#666666",
                          fontSize: "15px",
                        }}
                      >
                        {chronicle.type_tw}
                      </Box>
                      <Box
                        sx={{ fontSize: "20px", fontWeight: 700 }}
                        component="span"
                        mr={1}
                      >
                        {chronicle.content_tw}
                      </Box>
                      |
                      <Box
                        sx={{ fontSize: "20px", fontWeight: 400 }}
                        component="span"
                        ml={1}
                      >
                        {chronicle.additional_content_tw}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "17px",
                        fontWeight: 500,
                        maxWidth: "300px",
                      }}
                    >
                      <Box component="span" mr={1}>
                        {chronicle.content_en}
                      </Box>
                      :
                      <Box component="span" ml={1}>
                        {chronicle.additional_content_en}
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
          </Box>
        </Box>
      </Box>
      {/*</StyledEngineProvider>*/}
    </>
  );
};

export default Chronicle;
