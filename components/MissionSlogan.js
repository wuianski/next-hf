import React from "react";
import Box from "@mui/material/Box";

const MissionSlogan = ({ mission: dataset, fullpageApi }) => {
  return (
    <div>
      <Box ml={13} mr={6}>
        <Box
          sx={{
            fontSize: { md: "h4.fontSize", xl: "h3.fontSize" },
            lineHeight: 1.3,
            display: "flex",
            justifyContent: "flex-end",
            height: "40vh",
            whiteSpace: "pre-line",
            textTransform: "uppercase",
          }}
        >
          {dataset && (
            <div key={dataset.id}>
              <div>{dataset.slogan.tw}</div>
              <div>{dataset.slogan.en}</div>
            </div>
          )}
        </Box>
        <Box
          sx={{
            //fontSize: { md: "h4.fontSize", xl: "h3.fontSize" },
            lineHeight: 1.3,
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
            更多 more
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MissionSlogan;
