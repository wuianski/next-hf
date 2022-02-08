import * as React from "react";
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { NextSeo } from "next-seo";

function About({ mission, contact }) {
  /** stack Item setting **/
  const Item = styled(Paper)(({ theme }) => ({
    //...theme.typography.body2,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textAlign: "left",
    color: "#000",
    background: "none",
    boxShadow: "none",
    fontSize: 17,
  }));

  return (
    <>
      <NextSeo
        title="Hong Foundation 洪建全基金會 ｜ 關於"
        description="Hong Foundation 洪建全基金會：關於"
        canonical="https://hongfoundation.org.tw/about"
        openGraph={{
          url: "https://hongfoundation.org.tw/",
          title: "Hong Foundation 洪建全基金會",
          description: "Hong Foundation 洪建全基金會：關於",
          site_name: "Hong Foundation 洪建全基金會",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Nav contact={contact} />
      <Box id="myMenuInPage">
        <div className="active secName">
          <div className="secName_twInPage">關於</div>
          <div className="secName_enInPage">about</div>
        </div>
      </Box>
      <Box
        ml={{ xs: 8, sm: "20vw", md: "30vw" }}
        mr={{ md: 10 }}
        mt={{ xs: 17, sm: 21, md: 21 }}
      >
        {/* about content */}
        <Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 6, md: 3 }}
          >
            <Item sx={{ width: { xs: "77vw", md: "30vw" } }}>
              <Box sx={{ textAlign: "justify" }}>
                <ReactMarkdown>{mission.content_tw}</ReactMarkdown>
              </Box>
            </Item>
            <Item sx={{ width: { xs: "77vw", md: "30vw" } }}>
              <Box sx={{ textAlign: "justify", fontFamily: "Helvetica Neue" }}>
                <ReactMarkdown>{mission.content_en}</ReactMarkdown>
              </Box>
            </Item>
          </Stack>
        </Box>
        {/* links */}
        <Box
          sx={{ float: { xs: "left", sm: "right", md: "right" } }}
          ml={{ xs: -1, md: "-18vw" }}
          mt={{ xs: 3, sm: 8, md: 10 }}
          mb={{ md: 10 }}
        >
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            spacing={0}
            height={"38px"}
          >
            <Item>
              <Box
                sx={{
                  width: { xs: "55px", sm: "55px", md: "55px", xl: "74px" },
                  height: { xs: "55px", sm: "55px", md: "55px", xl: "74px" },
                  background:
                    "linear-gradient(180deg, #B09336 0%, rgba(176, 147, 54, 0.5) 60%, rgba(176, 147, 54, 0.1) 100%)",
                }}
                mr={{ md: 6 }}
                ml={{ xs: 1, md: 0 }}
                mb={{ xs: 4, md: 0 }}
              />
            </Item>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#000" }}
            />
            <Item sx={{ cursor: "pointer" }}>
              <Link href="/members">
                <Stack direction="row" spacing={0}>
                  <Item sx={{ fontSize: 15, lineHeight: "19px" }}>
                    <Box sx={{ fontWeight: 700 }}>組織</Box>
                    <Box sx={{ fontWeight: 500, fontFamily: "Helvetica Neue" }}>
                      Leadership
                    </Box>
                  </Item>
                  <Item>
                    <Image
                      src="/IMGs/goto_icon.png"
                      alt="download icon"
                      width={38}
                      height={38}
                    />
                  </Item>
                </Stack>
              </Link>
            </Item>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#000" }}
            />
            <Item sx={{ cursor: "pointer" }}>
              <Link href="/timeline">
                <Stack direction="row" spacing={0}>
                  <Item sx={{ fontSize: 15, lineHeight: "19px" }}>
                    <Box sx={{ fontWeight: 700 }}>大事記</Box>
                    <Box sx={{ fontWeight: 500, fontFamily: "Helvetica Neue" }}>
                      Timeline
                    </Box>
                  </Item>
                  <Item>
                    <Image
                      src="/IMGs/goto_icon.png"
                      alt="download icon"
                      width={38}
                      height={38}
                    />
                  </Item>
                </Stack>
              </Link>
            </Item>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#000" }}
            />
            <Item sx={{ cursor: "pointer" }}>
              <Link href="/resource">
                <Stack direction="row" spacing={0}>
                  <Item sx={{ fontSize: 15, lineHeight: "19px" }}>
                    <Box sx={{ fontWeight: 700 }}>公開資訊</Box>
                    <Box sx={{ fontWeight: 500, fontFamily: "Helvetica Neue" }}>
                      Resource
                    </Box>
                  </Item>
                  <Item>
                    <Image
                      src="/IMGs/goto_icon.png"
                      alt="download icon"
                      width={38}
                      height={38}
                    />
                  </Item>
                </Stack>
              </Link>
            </Item>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#000" }}
            />
            <Item>
              <Link href="/main#mission">
                <Box
                  ml={{ xs: 1, sm: "-6px", md: "25vw" }}
                  mt={{ xs: 4, sm: 12, md: 0 }}
                  mb={{ xs: 10, sm: 30, md: 0 }}
                  sx={{
                    lineHeight: "38px",
                    //textTransform: "uppercase",
                    fontSize: { md: 17, xl: 17 },
                    fontWeight: 500,
                    borderBottom: "3px solid #000",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    width: "89px",
                  }}
                >
                  返回 back
                </Box>
              </Link>
            </Item>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [mission, contact] = await Promise.all([
    await fetchAPI("/mission"),
    await fetchAPI("/contact"),
  ]);

  return {
    props: { mission, contact },
    //revalidate: 1,
  };
}

export default About;

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
