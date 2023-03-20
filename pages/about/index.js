import * as React from "react";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import AboutSlider from "../../components/aboutSlider";

/*** previous resource ***/
import ps_logo from "../../public/IMGs/ps_logo.png";
import ml_logo from "../../public/IMGs/ml_logo.png";
import php_logo from "../../public/IMGs/php_logo.png";
import inR from "../../public/IMGs/inR.png";
import inL from "../../public/IMGs/inL.png";

function About({ mission, contact, projects: dataset, summary }) {
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

  /* CHANGE ARRAY SORTING BY ID*/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);
  const mydataset = dataset.slice(0, 3);

  /*** previous resource ***/
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
      <Nav contact={contact} projects={dataset} />
      {/* sub-menu */}
      <Box className="subMenuInAbooutPage">
        <ul className="subMenuInAbooutPage_ul">
          <li className="subMenuInAbooutPage_li active">
            <Link href="/about">關於</Link>
          </li>
          <li className="subMenuInAbooutPage_li">
            <Link href="/about/members">董事會</Link>
          </li>
          <li className="subMenuInAbooutPage_li">
            <a href="/about/resource">公開資訊</a>
          </li>
          <li className="subMenuInAbooutPage_li">
            <a href="/about/timeline">大事記</a>
          </li>
        </ul>
        <Box
          mt={{ xs: -0.2, sm: 2.2, md: 3 }}
          ml={"auto"}
          mr={"auto"}
          sx={{
            width: { xs: "90vw", sm: "93vw", md: "80vw" },
            maxWidth: "954px",
            height: 2,
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 12.68%, #000000 87.11%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </Box>

      {/* about slogan */}
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          maxWidth: { xs: "600px", md: "954px" },
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 27, sm: 30, md: 35 }}
        pl={{ xs: 1, sm: 0, md: 0 }}
      >
        <Box
          sx={{
            fontSize: { xs: 24, md: 30 },
            lineHeight: 1.4,
            color: "#B09336",
            whiteSpace: { xs: "unset", sm: "pre-line", md: "pre-line" },
          }}
        >
          {mission.slogan_tw}
        </Box>
        <Box
          sx={{
            fontFamily: "Helvetica",
            fontSize: { xs: 18, md: 21 },
            lineHeight: 1.3,
            color: "#B09336",
            whiteSpace: { xs: "unset", sm: "pre-line", md: "pre-line" },
          }}
          mt={1}
          pr={{ xs: 0, sm: 0, md: 10 }}
        >
          {mission.slogan_en}
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          height: { xs: 250, sm: 380, md: 400 },
          maxWidth: { xs: "600px", md: "954px" },
          //backgroundColor: "blue",
        }}
        ml={"auto"}
        mr={"auto"}
        mt={{ xs: 3, sm: 5, md: 5 }}
        mb={{ xs: 3, sm: 5, md: 5 }}
      >
        <AboutSlider />
      </Box>
      {/* about content */}
      <Box
        sx={{
          width: { xs: "90%", xs: "94%", md: "90vw" },
          maxWidth: "1180px",
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 3, sm: 5, md: 10 }}
        pb={{ xs: 3, sm: 5, md: 10 }}
        pl={{ xs: 2, sm: 0, md: 0 }}
        pr={{ xs: 1, sm: 0, md: 0 }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 1 }}
        >
          <Item>
            <Box
              sx={{
                width: { xs: "167px", md: "167px" },
                height: { xs: "7px", md: "7px" },
                background:
                  "linear-gradient(90deg, #B09336 27.08%, rgba(176, 147, 54, 0.5) 56.25%, rgba(176, 147, 54, 0.3) 80.28%, rgba(176, 147, 54, 0) 100%)",
              }}
              mt={3}
              mr={6}
            ></Box>
          </Item>
          <Item
            sx={{
              width: { xs: "90vw", sm: "94vw", md: "40vw" },
              maxWidth: { xs: "100%", md: "480px" },
            }}
          >
            <Box
              sx={{
                textAlign: "justify",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 17 },
                lineHeight: { xs: "23px", sm: "26px" },
              }}
            >
              <ReactMarkdown>{mission.content_tw}</ReactMarkdown>
            </Box>
          </Item>
          <Item
            sx={{
              width: { xs: "90vw", sm: "94vw", md: "40vw" },
              maxWidth: { xs: "100%", md: "480px" },
            }}
          >
            <Box
              sx={{
                //textAlign: "justify",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 15 },
                lineHeight: { xs: "18px", sm: "23px" },
              }}
            >
              <ReactMarkdown>{mission.content_en}</ReactMarkdown>
            </Box>
          </Item>
        </Stack>
      </Box>
      {/* resource content */}
      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "80vw" },
          maxWidth: { xs: "100%", sm: "500px", md: "954px" },
        }}
        ml={"auto"}
        mr={"auto"}
        pt={{ xs: 8, sm: 10, md: 10 }}
        pl={{ xs: 3, sm: 0, md: 6 }}
      >
        {/* vvv project seek data */}
        <Box
          sx={{ width: { xs: "100%", md: "50%" } }}
          ml={{ xs: "0%", sm: "50%", md: "50%" }}
        >
          <Box>
            <Image
              src={ps_logo}
              placeholder="blur"
              alt="download icon"
              width={320}
              height={96}
            />
          </Box>
          <Box mt={{ xs: -2, sm: -4, md: -4 }} ml={{ xs: -3, sm: -6, md: -6 }}>
            <Image
              src={inR}
              placeholder="blur"
              alt="indicator"
              width={473}
              height={115}
            />
          </Box>
          <Box mt={{ xs: -3, sm: -5, md: -5 }} mb={12}>
            <Box>
              <Box component="span" className="textText">
                {p4[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p4[1]}
              </Box>
              <Box component="span" className="textText">
                {p4[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p5[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p5[1]}
              </Box>
              <Box component="span" className="textText">
                {p5[2]}
              </Box>
            </Box>
          </Box>
        </Box>
        {/* vvv minlong forum data */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box>
            <Image
              src={ml_logo}
              placeholder="blur"
              alt="download icon"
              width={320}
              height={96}
            />
          </Box>
          <Box mt={{ xs: -2, sm: -4, md: -4 }} ml={{ xs: -3, sm: -6, md: -6 }}>
            <Image
              src={inL}
              placeholder="blur"
              alt="indicator"
              width={473}
              height={115}
            />
          </Box>
          <Box mt={{ xs: -3, sm: -5, md: -5 }} mb={12}>
            <Box>
              <Box component="span" className="textText">
                {p1[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p1[1]}
              </Box>
              <Box component="span" className="textText">
                {p1[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p2[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p2[1]}
              </Box>
              <Box component="span" className="textText">
                {p2[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p3[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p3[1]}
              </Box>
              <Box component="span" className="textText">
                {p3[2]}
              </Box>
            </Box>
          </Box>
        </Box>
        {/* vvv php data */}
        <Box
          sx={{ width: { xs: "100%", md: "50%" } }}
          ml={{ xs: "0%", sm: "50%", md: "50%" }}
        >
          <Box>
            <Image
              src={php_logo}
              placeholder="blur"
              alt="download icon"
              width={320}
              height={96}
            />
          </Box>
          <Box mt={{ xs: -2, sm: -4, md: -4 }} ml={{ xs: -3, sm: -6, md: -6 }}>
            <Image
              src={inR}
              placeholder="blur"
              alt="indicator"
              width={473}
              height={115}
            />
          </Box>
          <Box mt={{ xs: -3, sm: -5, md: -5 }} mb={12}>
            <Box>
              <Box component="span" className="textText">
                {p6[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p6[1]}
              </Box>
              <Box component="span" className="textText">
                {p6[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p7[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p7[1]}
              </Box>
              <Box component="span" className="textText">
                {p7[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p8[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p8[1]}
              </Box>
              <Box component="span" className="textText">
                {p8[2]}
              </Box>
            </Box>
            <Box>
              <Box component="span" className="textText">
                {p9[0]}
              </Box>
              <Box component="span" className="textNumber">
                {p9[1]}
              </Box>
              <Box component="span" className="textText">
                {p9[2]}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [mission, contact, projects, summary] = await Promise.all([
    await fetchAPI("/mission"),
    await fetchAPI("/contact"),
    await fetchAPI("/projects"),
    await fetchAPI("/summary"),
  ]);

  return {
    props: { mission, contact, projects, summary },
    //revalidate: 1,
  };
}

export default About;

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
