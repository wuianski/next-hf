import React, { useState } from "react";
import Box from "@mui/material/Box";
import LayoutIndex from "../components/layout";
import Nav from "../components/nav";
import { fetchAPI } from "../lib/api";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Link from "next/link";
import { NextSeo } from "next-seo";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useRouter } from "next/router";

function Index({ summary, contact }) {
  const router = useRouter();
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

  /**  **/
  //const [goLink, setGoLink] = useState(false);

  return (
    <>
      <NextSeo
        title="Hong Foundation 洪建全基金會"
        description="Hong Foundation 洪建全基金會 : 讓前衛創作的力量滲透到社會中，使「原創文化」成為社會和產業的養分與動力。"
        canonical="https://hongfoundation.org.tw/"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description:
            "Hong Foundation 洪建全基金會 : 讓前衛創作的力量滲透到社會中，使「原創文化」成為社會和產業的養分與動力。",
          site_name: "Hong Foundation 洪建全基金會",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Nav contact={contact} />
      {/*<Link href="/">
        <div className="logoFixed">
          <Image src="/IMGs/logo_w.png" alt="logo" width={185} height={75} />
        </div>
      </Link>*/}
      <ReactScrollWheelHandler
        //upHandler={(e) => console.log("scroll up")}
        downHandler={() => router.push("/main#mission")}
      >
        <Box
          sx={{
            backgroundColor: "#000000",
            width: "100vw",
            height: "100vh",
            position: "fixed",
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0,
                  delay: 0,
                },
              },
            }}
          >
            <Box
              sx={{
                width: { xs: "100vw", md: "50vw" },
                height: { xs: "100vw", md: "50vw" },
                position: "fixed",
                top: { xs: "8vh", md: "0px" },
                right: { xs: "0px", md: "50px" },
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
            </Box>
          </motion.div>
          {/* gradient black bg */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: { xs: "20vw", md: "50vw" },
              height: "100vh",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 2,
              backgroundImage:
                "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 1.0) 60%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)",
            }}
          />

          {/* /gradient black bg */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 0,
                },
              },
            }}
          >
            <Link href="/main#mission">
              <Box
                sx={{
                  position: "fixed",
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
          </motion.div>

          {/* logo ani */}
          <Box
            sx={{
              zIndex: 8,
              position: "absolute",
              bottom: "18vh",
              left: "18vh",
              overflow: { xs: "hidden", md: "unset" },
              display: { xs: "none", md: "block" },
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.5,
                  },
                },
              }}
            >
              <Box>
                <Image
                  src="/IMGs/logo_w.png"
                  alt="logo"
                  width={256}
                  height={103}
                />
              </Box>
            </motion.div>
          </Box>
          {/* /logo ani */}
          {/* logo ani (mobile) */}
          <Box
            sx={{
              zIndex: 8,
              position: "absolute",
              bottom: "50vh",
              left: "10vw",
              overflow: { xs: "unset", md: "unset" },
              display: { xs: "block", md: "none" },
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.5,
                  },
                },
              }}
            >
              <Box>
                <Image
                  src="/IMGs/logo_w.png"
                  alt="logo"
                  width={256}
                  height={103}
                />
              </Box>
            </motion.div>
          </Box>
          {/* /logo ani (mobile) */}
        </Box>
      </ReactScrollWheelHandler>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [summary, contact] = await Promise.all([
    await fetchAPI("/summary"),
    await fetchAPI("/contact"),
  ]);

  return {
    props: { summary, contact },
    //revalidate: 1,
  };
}

export default Index;

Index.getLayoutIndex = function getLayoutIndex(page) {
  return <Layout>{page}</Layout>;
};
