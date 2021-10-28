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
            lineHeight: "26px",
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            //in order to make element can scroll normally, give element a specific height.
            height: { xs: "60vh", md: "50vh" },
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
                  width: { md: "60vw", md: "84vw" },
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
            lineHeight: "26px",
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
      </Box>
    </>
  );
};

export default MissionEN;
