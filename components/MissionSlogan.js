import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const MissionSlogan = ({ mission: dataset, fullpageApi }) => {
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

  return (
    <div>
      <Box ml={{ xs: 13, md: 33 }} mr={{ xs: 2, md: 13 }} mt={13}>
        {/* 1st row */}
        <Box
          sx={{
            fontSize: { xs: 20, md: 30, xl: 33 },
            lineHeight: 1.3,
            display: "flex",
            justifyContent: "flex-end",
            width: "85%",
            height: { xs: "30vh", md: "40vh" },
            textTransform: "uppercase",
          }}
          mr={13}
        >
          {dataset && (
            <Box key={dataset.id}>
              <Box sx={{ whiteSpace: "pre-line" }}>{dataset.slogan_tw}</Box>
              <Box sx={{ whiteSpace: { xs: "unset", md: "pre-line" } }}>
                {dataset.slogan_en}
              </Box>
            </Box>
          )}
        </Box>

        {/* 2nd row */}
        <Box>
          <Stack direction={{ xs: "column-reverse", md: "row" }}>
            <Item
              sx={{
                width: { xs: "50vw", md: "50vw" },
              }}
            >
              <Box>
                <Stack
                  direction="column"
                  spacing={6}
                  sx={{
                    scale: { xs: "0.5", md: "0.75", xl: "1" },
                  }}
                >
                  <Item>
                    <Box
                      sx={{
                        width: 349,
                        height: 74,
                        background:
                          "linear-gradient(180deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                      }}
                    ></Box>
                  </Item>
                  <Item>
                    <Box
                      sx={{
                        width: 349,
                        height: 74,
                        background:
                          "linear-gradient(180deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                      }}
                    ></Box>
                  </Item>
                </Stack>
              </Box>
            </Item>
            <Item sx={{ width: { xs: "60vw", md: "50vw" } }}>
              <Box
                sx={{
                  fontSize: { md: 17, xl: 19 },
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
                    textTransform: "capitalize",
                  }}
                >
                  更多 more
                </Box>
              </Box>
            </Item>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default MissionSlogan;
