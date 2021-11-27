import React from "react";
import Box from "@mui/material/Box";
import ReactMarkdown from "react-markdown";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const MissionTW = ({ mission: dataset, fullpageApi }) => {
  return (
    <>
      <Box
        ml={{ xs: 10, md: 33 }}
        mr={{ xs: 2, md: 13 }}
        mt={{ xs: 6, md: 10 }}
      >
        <OverlayScrollbarsComponent
          options={{ className: "os-theme-block-dark" }}
        >
          <Box
            sx={{
              fontSize: { md: 15, xl: 17 },
              lineHeight: { md: "24px", xl: "26px" },
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              //in order to make element can scroll normally, give element a specific height.
              height: { xs: "50vh", md: "40vh" },
              //overflow: "scroll",
            }}
            //in order to make element can scroll normally, give a className and use it in fullPage options
            className="scrollEle"
            pr={3}
          >
            {dataset && (
              <div key={dataset.id}>
                <Box
                  pr={2}
                  sx={{
                    width: { xs: "auto", md: "55vw" },
                    columnCount: { md: "1", md: "2" },
                    columnGap: "25px",
                    textAlign: "justify",
                    textJustify: "distribute",
                  }}
                  //in order to make first <P/> of markdown margin top equal zero
                  className="markdownP"
                >
                  <ReactMarkdown>{dataset.content_tw}</ReactMarkdown>
                </Box>
              </div>
            )}
          </Box>
        </OverlayScrollbarsComponent>
        <Box
          mt={{ xs: 1, md: 3 }}
          sx={{
            fontSize: { md: 15, xl: 17 },
            lineHeight: { md: "23px", xl: "26px" },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            mr={2}
            variant="text"
            onClick={() => fullpageApi.moveTo(2, 2)}
            sx={{
              lineHeight: "38px",
              borderBottom: "3px solid #000",
              cursor: "pointer",
            }}
          >
            EN
          </Box>
        </Box>

        <Box
          mt={3}
          sx={{
            width: { xs: "auto", md: "55vw" },
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-start" },
            float: { xs: "left", md: "right" },
          }}
        >
          <Box
            sx={{
              width: { xs: "20px", md: "55px", xl: "74px" },
              height: { xs: "20px", md: "55px", xl: "74px" },
              background:
                "linear-gradient(180deg, #B09336 0%, rgba(176, 147, 54, 0.5) 60%, rgba(176, 147, 54, 0.1) 100%)",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default MissionTW;
