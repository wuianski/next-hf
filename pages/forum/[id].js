import * as React from "react";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Nav from "../../components/nav";
import { format } from "date-fns";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Link from "next/link";
import styles from "../../components/layout.module.css";
import logo_w from "../../public/IMGs/logo_w.png";
import forumCover from "../../public/IMGs/forumCover.png";
import forumCover_mobile from "../../public/IMGs/forumCover_mobile.png";
import ReactMarkdown from "react-markdown";

/** stack Item setting **/
const Item = styled(Paper)(({ theme }) => ({
  //...theme.typography.body2,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  textAlign: "left",
  color: "#000",
  background: "none",
  boxShadow: "none",
}));

function ForumP({ forum, contact, projects: datasetP }) {
  /** sorting dataset by id **/
  //!dataset ? null : dataset.sort((a, b) => b.order - a.order);
  /** route each post **/
  const router = useRouter();
  //const data = router.query.id || [];
  //console.log(forum);

  /* CHANGE ARRAY SORTING BY ID*/
  !datasetP ? null : datasetP.sort((a, b) => a.id - b.id);
  const mydataset = datasetP.slice(0, 3);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "130px",
          zIndex: 99,
          //backgroundColor: "#fff",
          background: "#EDE9DF",
        }}
      >
        <Link href="/">
          <div className={styles.logoFixed} id="logo">
            <Image
              src={logo_w}
              placeholder="blur"
              alt="logo"
              width={185}
              height={75}
            />
          </div>
        </Link>
      </Box>
      <Nav contact={contact} projects={datasetP} />
      <Box sx={{ minHeight: "100vh", backgroundColor: "#EDE9DF" }}>
        <Stack
          direction={{ xs: "row", md: "row" }}
          spacing={{ xs: 0, sm: 0, md: 2 }}
        >
          {/* left: cover area */}
          <Item sx={{ width: { xs: 125, sm: 225 } }}>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "fixed",
                height: "calc(100vh - 146px)",
                width: { sm: 225, md: 225 },
                left: 0,
                bottom: 0,
              }}
            >
              <Image
                src={forumCover}
                placeholder="blur"
                alt="icon of instagram"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                position: "fixed",
                height: { xs: "calc(100vh - 130px)" },
                width: { xs: 125, md: 225 },
                left: 0,
                bottom: { xs: "0", sm: "unset" },
              }}
            >
              <Image
                src={forumCover_mobile}
                placeholder="blur"
                alt="icon of instagram"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Item>
          {/* right: content area */}
          <Item
            sx={{
              width: { xs: "calc(100vw - 125px)", sm: "calc(100vw - 225px)" },
            }}
          >
            <Box
              pt={{ xs: "130px", sm: "146px" }}
              sx={{
                width: { xs: "85%", sm: "90%", md: "80vw" },
                maxWidth: { xs: "600px", md: "954px" },
                position: "relative",
                zIndex: 0,
              }}
              ml={"auto"}
              mr={"auto"}
              // pr={2}
              // pl={2}
              pb={16}
            >
              {/* 1 row : infos and title*/}
              <Box>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 4, md: 0 }}
                >
                  <Item sx={{ width: { xs: "100%", md: "40%" } }}>
                    <Box sx={{ borderLeft: "6px solid #000" }} pl={4}>
                      <Box>
                        <Box component="span">日期：</Box>
                        <Box component="span">
                          {format(new Date(forum.startDate), "yyyy.MM.dd")}
                        </Box>
                        <Box component="span">{forum.endDate && ` - `}</Box>
                        <Box component="span">
                          {forum.endDate &&
                            format(new Date(forum.endDate), "yyyy.MM.dd")}
                        </Box>
                      </Box>
                      <Box>
                        <Box component="span">
                          {forum.startTime && ` 時間： `}
                        </Box>
                        <Box component="span">
                          {forum.startTime &&
                            format(
                              new Date(
                                `${format(new Date(), "yyyy-MM-dd")} ${
                                  forum.startTime
                                }`
                              ),
                              "HH:mm"
                            )}
                        </Box>
                        <Box component="span">{forum.endTime && ` - `}</Box>
                        <Box component="span">
                          {forum.endTime &&
                            format(
                              new Date(
                                `${format(new Date(), "yyyy-MM-dd")} ${
                                  forum.endTime
                                }`
                              ),
                              "HH:mm"
                            )}
                        </Box>
                      </Box>
                      <Box>
                        <Box component="span">講師：</Box>
                        {forum.lecturers &&
                          forum.lecturers.map((lecturer, i) => (
                            <Box component="span" key={i}>
                              {lecturer.name}
                            </Box>
                          ))}
                      </Box>
                    </Box>
                  </Item>
                  <Item sx={{ width: { xs: "100%", md: "60%" } }}>
                    <Box
                      sx={{
                        fontFamily: "Noto Serif HK",
                        fontSize: { xs: 30, sm: 34, md: 37, lg: 46 },
                        lineHeight: 1.4,
                        fontWeight: 700,
                      }}
                    >
                      {forum.title}
                    </Box>
                  </Item>
                </Stack>
              </Box>
              {/* 2 row : categories */}
              <Box
                sx={{ borderBottom: "1px solid #000" }}
                m={1}
                pb={1.2}
                pt={{ xs: 0, md: 9 }}
              >
                {forum.categories &&
                  forum.categories.map((category, i) => (
                    <Box
                      component="span"
                      key={i}
                      sx={{
                        color: "#888",
                        fontFamily: "Noto Sans TC",
                        fontSize: 12,
                        lineHeight: "175%",
                        fontWeight: 400,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {category.name}
                    </Box>
                  ))}
              </Box>
              {/* 3 row : image and description */}
              <Box pt={{ xs: 0, sm: 4 }}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 2, sm: 4 }}
                >
                  <Item sx={{ width: { xs: "100%", md: "40%" } }}>
                    <Box
                      sx={{ width: 300, display: { xs: "none", sm: "block" } }}
                    >
                      {forum.coverImage && (
                        <Image
                          placeholder="blur"
                          blurDataURL={forum.coverImage.url}
                          src={forum.coverImage.url}
                          alt="book cover"
                          layout="responsive"
                          objectFit="contain"
                          objectPosition="center"
                          width={300} /* 300 123*/
                          height={200} /* 200 82*/
                          //quality={100}
                        />
                      )}
                    </Box>
                    <Box sx={{ display: { xs: "block", sm: "none" } }}>
                      {forum.coverImage && (
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: 200,
                          }}
                        >
                          <Image
                            placeholder="blur"
                            blurDataURL={forum.coverImage.url}
                            src={forum.coverImage.url}
                            alt="book cover"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                            //width="80vw" /* 300 123*/
                            //height={82} /* 200 82*/
                            //quality={100}
                          />
                        </Box>
                      )}
                    </Box>
                  </Item>
                  <Item sx={{ width: { xs: "100%", md: "60%" } }}>
                    <Box
                      pb={{ xs: 2, sm: 4 }}
                      mt={{ xs: "unset", md: -4 }}
                      sx={{ backgroundColor: "none" }}
                    >
                      <ReactMarkdown>{forum.description}</ReactMarkdown>
                    </Box>
                    <Box sx={{ borderTop: "1px solid #000" }} />
                    {/* <Box
                      pt={{ xs: 2, sm: 4 }}
                      dangerouslySetInnerHTML={{
                        __html: forum.lecturerIntro,
                      }}
                    /> */}

                    <Box>
                      <ReactMarkdown>{forum.lecturerIntro}</ReactMarkdown>
                    </Box>
                  </Item>
                </Stack>
              </Box>
            </Box>
          </Item>
        </Stack>
      </Box>
    </>
  );
}

// This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get books = 閱讀生活
//   const forums = await fetchAPI("/forums?id=8");

//   // Get the paths we want to pre-render based on books
//   const paths = forums.map((forum) => ({
//     params: { id: forum.id },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return {
//     //paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
//     paths,
//     fallback: false,
//   };
// }

// This also gets called at build time
export async function getServerSideProps({ params }) {
  // params contains the book `title_tw`.
  // If the route is like /books/煙愁, then params.title_tw is 煙愁
  const forums = await fetchAPI(`/forums?id=${encodeURI(params.id)}`);
  const contact = await fetchAPI("/contact");
  const projects = await fetchAPI("/projects");

  // Pass book data to the page via props
  return { props: { forum: forums[0], contact, projects } };
}

export default ForumP;

// ForumP.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
