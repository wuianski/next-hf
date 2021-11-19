import React from "react";
import Box from "@mui/material/Box";
import ReactMarkdown from "react-markdown";

const MissionEN = ({ mission: dataset, fullpageApi }) => {
  return (
    <>
      <Box ml={{ xs: 10, md: 13 }} mr={{ xs: 2, md: 6 }} mt={10}>
        <Box
          sx={{
            fontSize: { md: 15, xl: 17 },
            lineHeight: { md: "24px", xl: "26px" },
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            //in order to make element can scroll normally, give element a specific height.
            height: { xs: "55vh", md: "45vh" },
            overflow: "scroll",
          }}
          //in order to make element can scroll normally, give a className and use it in fullPage options
          className="scrollEle"
        >
          {dataset && (
            <div key={dataset.id}>
              <Box
                pr={2}
                sx={{
                  width: { md: "auto", md: "84vw" },
                  columnCount: { md: "1", md: "2" },
                  columnGap: "25px",
                  textAlign: "justify",
                  textJustify: "distribute",
                }}
                //in order to make first <P/> of markdown margin top equal zero
                className="markdownP"
              >
                <ReactMarkdown>{dataset.content_en}</ReactMarkdown>
              </Box>
            </div>
          )}
        </Box>
        <Box
          mt={3}
          sx={{
            fontSize: { md: 15, xl: 17 },
            lineHeight: { md: "24px", xl: "26px" },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            mr={2}
            variant="text"
            onClick={() => fullpageApi.moveTo(2, 1)}
            sx={{
              lineHeight: "38px",
              borderBottom: "3px solid #000",
              cursor: "pointer",
            }}
          >
            中文
          </Box>
        </Box>
        <Box
          mt={3}
          sx={{
            width: { xs: "auto", md: "84vw" },
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-start" },
            float: { xs: "left", md: "right" },
          }}
        >
          <Box
            sx={{
              width: 74,
              height: 74,
              background:
                "linear-gradient(180deg, #B09336 0%, rgba(176, 147, 54, 0.5) 60%, rgba(176, 147, 54, 0.1) 100%)",
              scale: { xs: "0.5", md: "0.75", xl: "1" },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default MissionEN;
