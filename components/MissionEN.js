import React from "react";
import Box from "@mui/material/Box";

const MissionEN = ({ mission: dataset, fullpageApi }) => {
  return (
    <>
      <Box ml={13} mr={6}>
        <Box
          sx={{
            fontSize: { md: 15, xl: 17 },
            lineHeight: "26px",
            //height: "40vh",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {dataset && (
            <div key={dataset.id}>
              <Box
                sx={{
                  width: "84vw",
                  columnCount: "2",
                  columnGap: "25px",
                }}
              >
                {dataset.content_en}
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
