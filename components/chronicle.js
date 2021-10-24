import React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { StyledEngineProvider } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import Grow from "@mui/material/Grow";
import styles from "./chronicle.module.css";

const Chronicle = ({ chronicle: dataset }) => {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

  /** panel state **/
  const containerRef = React.useRef(null);
  const [expanded, setExpanded] = React.useState(true);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };

  return (
    <StyledEngineProvider injectFirst>
      <>
        <Box ml={13} mr={6}>
          <Box>
            <Box
              ml={6}
              mt={38}
              sx={{ width: "400px" }}
              className={styles.myAccordionBlk}
            >
              {dataset &&
                dataset.map((chronicle) => (
                  <Accordion
                    key={chronicle.id}
                    disableGutters={true}
                    className={styles.myAccordion}
                    expanded={expanded === `panel` + chronicle.id}
                    onChange={handleChange(`panel` + chronicle.id)}
                  >
                    <AccordionSummary
                      key={chronicle.id}
                      className={styles.myAccordionSummary}
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
                      className={styles.myAccordionDetails}
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
      </>
    </StyledEngineProvider>
  );
};

export default Chronicle;
