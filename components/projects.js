import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Link from "next/link";

const Projects = ({ projects: dataset }) => {
  /* CHANGE ARRAY SORTING BY ID*/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

  const mydataset = dataset.slice(0, 3);
  // const Phasedataset = mydataset.split("、");

  /* SEPERATE DATASET INTO 4*/
  const dataset0 = dataset.slice(0, 1);
  const dataset1 = dataset.slice(1, 2);
  const dataset2 = dataset.slice(2, 3);
  const dataset3 = dataset.slice(3, 4);

  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "78vw" },
          // maxWidth: { xs: "600px", md: "954px" },
          maxWidth: { xs: "100%", md: "1180px", lg: "1180px" },
        }}
        pt={{ xs: 0, sm: 5, md: 0 }}
        pb={{ xs: 0, sm: 5, md: 0 }}
        ml={{ xs: 0, sm: 0, md: 6, xl: 16 }}
      >
        <Box
          className="grid-container"
          sx={{
            width: { xs: "100%", sm: "100%", md: "calc(100% + 20px)" },
            height: "800px",
          }}
        >
          {mydataset &&
            mydataset.map((project) => (
              <Box
                key={project.id}
                id={"item" + project.id}
                sx={{
                  cursor: "pointer",
                  height: { xs: "250px", sm: "500px", md: "100%" },
                  width: "100%",
                  overflow: "hidden",
                  filter: "brightness(100%) contrast(100%)",
                }}
              >
                <Link href={project.link}>
                  <Box
                    sx={{
                      width: { xs: "100%", md: "100%" },
                      height: { xs: "100%", md: "100%" },
                    }}
                  >
                    {/* <Box className="progamBg" /> */}
                    <Box
                      sx={{
                        background: `url('${
                          project.cover2 && project.cover2.url
                        }')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: { xs: "cover", md: "cover" },
                        backgroundPosition: { xs: "center", md: "unset" },

                        // height: { xs: "auto", md: "720px" },
                        width: "100%",
                        height: "100%",

                        filter: "brightness(88%) contrast(105%)",
                      }}
                    >
                      <Box className="progamLogo">
                        <Image
                          //className={styles.landingImage}
                          src={project.cover && project.cover.url}
                          //placeholder="blur"
                          blurDataURL={project.cover.url}
                          alt="logo image of projects"
                          //layout="responsive"
                          objectFit="contain"
                          objectPosition="center"
                          width="215"
                          height="89"
                        />
                      </Box>
                      <Box
                        className="progamName"
                        mt={2}
                        sx={{
                          fontSize: { xs: 14, sm: 17, md: 17, lg: 17 },
                          letterSpacing: "0.05em",
                          
                        }}
                      >
                        {project.short_content.split("b").map((it, i) => (
                          <div key={"x" + i}>{it}</div>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </Box>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Projects;
