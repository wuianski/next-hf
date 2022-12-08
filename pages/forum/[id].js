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
          background: "none",
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
        <Stack direction={{ xs: "row", md: "row" }} spacing={{ xs: 6, md: 2 }}>
          {/* left: cover area */}
          <Item sx={{ width: "225px" }}>
            <Box
              sx={{
                position: "fixed",
                height: "100vh",
                width: "225px",
                left: 0,
              }}
            >
              <Image
                src={forumCover}
                placeholder="blur"
                alt="icon of instagram"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
          </Item>
          {/* right: content area */}
          <Item sx={{ width: "82%" }}>
            <Box pt={26} pr={2} pl={2} pb={16}>
              {/* 1 row : infos and title*/}
              <Box>
                <Stack
                  direction={{ xs: "row", md: "row" }}
                  spacing={{ xs: 6, md: 2 }}
                >
                  <Item sx={{ width: "40%" }}>
                    <Box sx={{ borderLeft: "6px solid #000" }} pl={4}>
                      <Box>
                        <Box component="span">日期：</Box>
                        <Box component="span">
                          {format(new Date(forum.startDate), "yyyy.MM.dd")}
                        </Box>
                        <Box component="span">{forum.endDate && ` - `}</Box>
                        <Box component="span">
                          {forum.startDate &&
                            format(new Date(forum.endDate), "yyyy.MM.dd")}
                        </Box>
                      </Box>
                      <Box>
                        <Box component="span">時間：</Box>
                        <Box component="span">
                          {format(
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
                          {format(
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
                  <Item sx={{ width: "60%" }}>
                    <Box
                      sx={{
                        fontFamily: "Noto Serif HK",
                        fontSize: 49,
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
                pt={9}
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
              <Box pt={4}>
                <Stack
                  direction={{ xs: "row", md: "row" }}
                  spacing={{ xs: 6, md: 2 }}
                >
                  <Item sx={{ width: "40%" }}>
                    <Box sx={{ width: 300 }}>
                      {forum.coverImage && (
                        <Image
                          placeholder="blur"
                          blurDataURL={forum.coverImage.url}
                          src={forum.coverImage.url}
                          alt="book cover"
                          layout="responsive"
                          objectFit="contain"
                          objectPosition="center"
                          width={300}
                          height={200}
                        />
                      )}
                    </Box>
                  </Item>
                  <Item sx={{ width: "60%" }}>
                    <Box>{forum.description}</Box>
                    <Box sx={{ borderTop: "1px solid #000" }} />
                    <Box
                      dangerouslySetInnerHTML={{
                        __html: forum.lecturerIntro,
                      }}
                    />
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
