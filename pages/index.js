import React from "react";
import Box from "@mui/material/Box";
import Layout from "../components/layout";
import Nav from "../components/nav";
import { fetchAPI } from "../lib/api";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Link from "next/link";

function Index({ summary }) {
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

  /** parsing sentence **/
  const allPhase = summary.content.split("、");
  //console.log(phase[0]);

  const p1 = allPhase[0].split("，");
  const p2 = allPhase[1].split("，");
  const p3 = allPhase[2].split("，");

  const p4 = allPhase[3].split("，");
  const p5 = allPhase[4].split("，");

  const p6 = allPhase[5].split("，");
  const p7 = allPhase[6].split("，");
  const p8 = allPhase[7].split("，");
  const p9 = allPhase[8].split("，");
  //const p10 = allPhase[9].split("，");
  //console.log(p2[0]);

  /** animation **/

  return (
    <>
      <Box sx={{ backgroundColor: "#000000", width: "100vw", height: "100vh" }}>
        <Box
          sx={{
            width: { xs: "100vw", md: "50vw" },
            height: { xs: "100vw", md: "50vw" },
            position: "absolute",
            top: { xs: "8vh", md: "-4vh" },
            right: 0,
            zIndex: 0,
          }}
        >
          <Image
            layout="responsive"
            src="/IMGs/frontPage_bg.png"
            alt="front page background image"
            objectFit="cover"
            objectPosition="center"
            width={500}
            height={500}
          />

          <Box
            sx={{
              position: "fixed",
              width: "100vw",
              bottom: 120,
              left: 0,
              zIndex: 1,
              overflow: "hidden",
            }}
            className="textAniBlk"
          >
            {/* flex items */}
            <Box sx={{ width: { xs: "80vw", md: "30vw" } }}>
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: ["100vw", "50vw", "-100vw"] }}
                exit={{ x: "-100vw" }}
                transition={{ duration: 5, times: [0, 0.8, 0], delay: 5 }}
              >
                <Box>
                  <Box sx={{ color: "#fff" }}>
                    <Box component="span">{p1[0]}</Box>
                    <Box component="span" className="textAniNumber">
                      {p1[1]}
                    </Box>
                    <Box component="span">{p1[2]}</Box>
                  </Box>
                  <Box sx={{ color: "#fff" }}>
                    <Box component="span">{p2[0]}</Box>
                    <Box component="span" className="textAniNumber">
                      {p2[1]}
                    </Box>
                    <Box component="span">{p2[2]}</Box>
                  </Box>
                  <Box sx={{ color: "#fff" }}>
                    <Box component="span">{p3[0]}</Box>
                    <Box component="span" className="textAniNumber">
                      {p3[1]}
                    </Box>
                    <Box component="span">{p3[2]}</Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>

            <Box sx={{ width: { xs: "80vw", md: "30vw" } }}>
              <motion.div
                initial={{ x: "70vw" }}
                animate={{ x: ["70vw", "20vw", "-130vw"] }}
                exit={{ x: "-130vw" }}
                transition={{ duration: 5, times: [0, 0.8, 1], delay: 10 }}
              >
                <Box>
                  <Box sx={{ color: "#fff" }}>
                    <Box component="span">{p4[0]}</Box>
                    <Box component="span" className="textAniNumber">
                      {p4[1]}
                    </Box>
                    <Box component="span">{p4[2]}</Box>
                  </Box>
                  <Box sx={{ color: "#fff" }}>
                    <Box component="span">{p5[0]}</Box>
                    <Box component="span" className="textAniNumber">
                      {p5[1]}
                    </Box>
                    <Box component="span">{p5[2]}</Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>

            <Box sx={{ width: { xs: "80vw", md: "30vw" } }}>
              <motion.div
                initial={{ x: "40vw" }}
                animate={{ x: ["40vw", "-10vw", "-160vw"] }}
                exit={{ x: "-160vw" }}
                transition={{ duration: 5, times: [0, 0.8, 1], delay: 15 }}
              >
                <Box>
                  <Box sx={{ color: "#fff" }}>
                    <Box component="span">{p6[0]}</Box>
                    <Box component="span" className="textAniNumber">
                      {p6[1]}
                    </Box>
                    <Box component="span">{p6[2]}</Box>
                  </Box>
                  <Box sx={{ color: "#fff" }}>
                    <Box component="span">{p7[0]}</Box>
                    <Box component="span" className="textAniNumber">
                      {p7[1]}
                    </Box>
                    <Box component="span">{p7[2]}</Box>
                  </Box>
                  <Box sx={{ color: "#fff" }}>
                    <Box component="span">{p8[0]}</Box>
                    <Box component="span" className="textAniNumber">
                      {p8[1]}
                    </Box>
                    <Box component="span">{p8[2]}</Box>
                  </Box>
                  <Box sx={{ color: "#fff" }}>
                    <Box component="span">{p9[0]}</Box>
                    <Box component="span" className="textAniNumber">
                      {p9[1]}
                    </Box>
                    <Box component="span">{p9[2]}</Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>

            {/* / flex items */}
          </Box>
        </Box>
        <Box
          sx={{
            width: "50vw",
            width: { xs: "20vw", md: "20vw" },
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            backgroundImage:
              "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 1.0) 60%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </Box>
      <Link href="/main#events">
        <Box
          sx={{
            position: "absolute",
            left: "calc(50vw - 12px)",
            bottom: 40,
            zIndex: 99,
            cursor: "pointer",
          }}
        >
          <Image
            src="/IMGs/clickDown_icon.png"
            alt="go to main page"
            width={24}
            height={55}
          />
        </Box>
      </Link>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [summary] = await Promise.all([await fetchAPI("/summary")]);

  return {
    props: { summary },
    //revalidate: 1,
  };
}

export default Index;

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Nav />
      {page}
    </Layout>
  );
};
