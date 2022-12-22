import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { format } from "date-fns";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import Image from "next/image";
import forumCover from "../../public/IMGs/forumCover.png";
import forumCover_mobile from "../../public/IMGs/forumCover_mobile.png";
import Nav from "../../components/nav";
import Link from "next/link";
import styles from "../../components/layout.module.css";
import logo_w from "../../public/IMGs/logo_w.png";
import forumCoverBG from "../../public/IMGs/forumCoverBG.png";
import forumCoverText from "../../public/IMGs/forumCoverText.png";

/** Filter Item setting **/
const FilterItem = styled(Paper)(({ theme }) => ({
  padding: 0,
  textAlign: "left",
  color: "#000",
  boxShadow: "none",
  background: "none",
  borderRadius: "0px",
}));

/** Grid Item setting **/
const GridItem = styled(Paper)(({ theme }) => ({
  margin: 0,
  padding: 0,
  textAlign: "left",
  color: "#000",
  boxShadow: "none",
  backgroundColor: "#fff",
  borderRadius: "0px",
}));

/** Stack Item setting **/
const StackItem = styled(Paper)(({ theme }) => ({
  //...theme.typography.body2,
  margin: 0,
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
  textAlign: "left",
  color: "#fff",
  background: "none",
  boxShadow: "none",
}));

/** input setting **/
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    //marginTop: theme.spacing(3),
    fontSize: 16,
  },
  "& .MuiInputBase-input": {
    borderRadius: 0,
    position: "relative",
    backgroundColor: "none",
    borderTop: "none",
    borderRight: "#000 solid 1px",
    borderBottom: "#000 solid 1px",
    borderLeft: "#000 solid 1px",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["-apple-system", "BlinkMacSystemFont"].join(","),
    "&:focus": {
      borderRadius: 0,
      borderColor: "none",
      boxShadow: "none",
    },
  },
}));

function Forum({ forums: dataset, forumCat, contact, projects }) {
  /** organize all forums data **/
  const forum = dataset.map((f) => {
    let result = {
      id: f.id,
      title: f.title,
      catName: f.categories.map((cat) => {
        return cat.name;
      }),
      startDate: f.startDate,
      lecturers: f.lecturers.map((lecturer) => {
        return lecturer.name;
      }),
      //coverImage: f.coverImage,
      coverImage: f.coverImage ? f.coverImage.url : "/IMGs/noForumCover.png",
    };

    return result;
  });

  const cat_forum = forumCat.map((c) => {
    let result_cat = {
      catName: c.name,
    };
    return result_cat;
  });
  // console.log(forum);
  /** sorting dataset by StartDate in the Object **/
  function sortByDate(a, b) {
    if (a.startDate < b.startDate) {
      return 1;
    }
    if (a.startDate > b.startDate) {
      return -1;
    }
    return 0;
  }

  const sorted = forum.sort(sortByDate);
  //console.log(sorted);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [paginate, setpaginate] = useState(6);
  const data = Object.values(sorted);
  const search_parameters = ["title", "lecturers", "startDate"];
  const filter_items = [...new Set(cat_forum.map((item) => item.catName))];
  //console.log(filter_items);
  function search(sorted) {
    return sorted.filter((item) => {
      //item.catName.map((category) => category.includes(filter)) &&
      //item.catName.includes(filter) &&
      //search_parameters.some((parameter) => item[parameter].includes(query))
      if (item.catName.includes(filter)) {
        return search_parameters.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      } else if (filter == "All") {
        return search_parameters.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      }
    });
  }

  const load_more = (event) => {
    setpaginate((prevValue) => prevValue + 6);
  };

  useEffect(() => {
    setFilter("All");
  }, []);

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
      <Nav contact={contact} projects={projects} />
      <Box sx={{ minHeight: "100vh", backgroundColor: "#EDE9DF" }}>
        <Stack
          direction={{ xs: "row", md: "row" }}
          spacing={{ xs: 0, sm: 0, md: 2 }}
        >
          {/* left: cover area */}
          <StackItem sx={{ width: { xs: 125, sm: 225 } }}>
            {/* desktop */}
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
                src={forumCoverBG}
                placeholder="blur"
                alt="icon of instagram"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "fixed",
                height: "calc(100vh - 206px)",
                width: { sm: 225, md: 225 },
                left: 0,
                bottom: 30,
              }}
            >
              <Image
                src={forumCoverText}
                placeholder="blur"
                alt="icon of instagram"
                layout="fill"
                objectFit="contain"
                objectPosition="right"
              />
            </Box>
            {/* mobile */}
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
                src={forumCoverBG}
                placeholder="blur"
                alt="icon of instagram"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                position: "fixed",
                height: { xs: "calc(100vh - 330px)" },
                width: { xs: 125, md: 225 },
                left: 0,
                bottom: { xs: 100, sm: "unset" },
              }}
            >
              <Image
                src={forumCoverText}
                placeholder="blur"
                alt="icon of instagram"
                layout="fill"
                objectFit="contain"
                objectPosition="right"
              />
            </Box>
          </StackItem>
          {/* right: grid area */}
          <StackItem
            sx={{
              width: { xs: "calc(100vw - 125px)", sm: "calc(100vw - 225px)" },
            }}
          >
            <Box
              sx={{
                width: { xs: "85%", sm: "90%", md: "80vw" },
                maxWidth: { xs: "600px", md: "954px" },
                position: "relative",
                zIndex: 0,
              }}
              pt={{ xs: "130px", md: "130px" }}
              // ml={{ xs: 4, md: 23 }}
              // mr={{ xs: 4, md: 4 }}
              ml={"auto"}
              mr={"auto"}
            >
              <Box sx={{ flexGrow: 1 }} pt={{ xs: 0, sm: 2, md: 2 }}>
                <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {/* search component */}
                  <Grid item xs={4} sm={4} md={4}>
                    <FilterItem>
                      <div>
                        <label htmlFor="search-form">
                          <input
                            type="search"
                            name="search-form"
                            className="search-input"
                            placeholder="Search..."
                            onChange={(e) => setQuery(e.target.value)}
                          />
                        </label>
                      </div>
                    </FilterItem>
                  </Grid>
                  {/* filter component */}
                  <Grid item xs={4} sm={4} md={4}>
                    <FilterItem>
                      <Box>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-simple-select-label">
                            Categories
                          </InputLabel>
                          <Select
                            value={filter}
                            displayEmpty
                            onChange={(e) => setFilter(e.target.value)}
                            input={<BootstrapInput />}
                          >
                            <MenuItem value="All">All</MenuItem>
                            {filter_items.map((filter_item, i) => (
                              <MenuItem value={filter_item} key={i}>
                                {filter_item}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </FilterItem>
                  </Grid>
                </Grid>
              </Box>

              {/* list all forums */}
              <Box sx={{ flexGrow: 1 }} pt={4}>
                <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {search(data)
                    .slice(0, paginate)
                    .map((item) => (
                      <Grid item xs={4} sm={4} md={4} key={item.id}>
                        <Link
                          href={`/forum/${encodeURIComponent(item.id)}`}
                          key={item.id}
                        >
                          <GridItem>
                            <Box sx={{ cursor: "pointer" }}>
                              <Box
                                sx={{
                                  backgroundColor: "#fff",
                                }}
                              >
                                {item.coverImage && (
                                  <Image
                                    placeholder="blur"
                                    blurDataURL={item.coverImage}
                                    src={item.coverImage}
                                    alt="forum cover"
                                    layout="responsive"
                                    objectFit="cover"
                                    objectPosition="center"
                                    width={300}
                                    height={200}
                                  />
                                )}
                              </Box>
                              <Box sx={{ borderTop: "1px solid #000" }} />
                              <Box
                                mt={1}
                                ml={1}
                                mr={1}
                                sx={{
                                  color: "#888",
                                  fontSize: { xs: 15, md: 15 },
                                  fontWeight: { xs: 400, md: 700 },
                                  fontFamily: "Noto Serif HK",
                                  letterSpacing: "0.05em",
                                }}
                              >
                                {item.startDate &&
                                  format(
                                    new Date(item.startDate),
                                    "yyyy.MM.dd"
                                  )}
                              </Box>
                              <Box ml={1} mr={1} sx={{ minHeight: 72 }}>
                                {item.catName &&
                                  item.catName.map((category, i) => (
                                    <Box
                                      component="span"
                                      mr={1}
                                      sx={{
                                        color: "#888",
                                        fontSize: { xs: 12, md: 12 },
                                        letterSpacing: "0.05em",
                                      }}
                                      key={i}
                                    >
                                      {category}
                                    </Box>
                                  ))}
                              </Box>
                              <Box
                                mt={1}
                                ml={1}
                                mr={1}
                                sx={{
                                  fontSize: { xs: 21, md: 21 },
                                  fontWeight: { xs: 400, md: 700 },
                                  fontFamily: "Noto Serif HK",
                                  minHeight: 102,
                                }}
                              >
                                {item.title}
                              </Box>
                              <Box
                                mt={1}
                                ml={1}
                                mr={1}
                                pb={1}
                                sx={{
                                  fontSize: { xs: 15, md: 15 },
                                  minHeight: 52,
                                }}
                              >
                                {item.lecturers &&
                                  item.lecturers.map((lecturer, i) => (
                                    <Box
                                      component="span"
                                      mr={1}
                                      sx={{
                                        color: "#000",
                                        fontSize: {
                                          xs: 15,
                                          md: 15,
                                          fontWeight: 700,
                                          letterSpacing: "0.05em",
                                        },
                                      }}
                                      key={i}
                                    >
                                      {lecturer}
                                    </Box>
                                  ))}
                              </Box>
                            </Box>
                          </GridItem>
                        </Link>
                      </Grid>
                    ))}
                </Grid>
              </Box>

              {/* load more component */}
              <Box sx={{ flexGrow: 1 }} pt={4} pb={4}>
                <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={4} sm={4} md={4}>
                    <Box
                      sx={{
                        width: "100%",
                        cursor: "pointer",
                        color: "#000",
                        borderRight: "#000 solid 1px",
                        borderTop: "#000 solid 1px",
                        borderLeft: "#000 solid 1px",
                        padding: "10px 26px 10px 12px",
                        textAlign: "left",
                      }}
                    >
                      <Box onClick={load_more}>Load More</Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </StackItem>
        </Stack>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [forums, forumCat, contact, projects] = await Promise.all([
    await fetchAPI("/forums?_limit=-1"),
    //await fetchAPI("/forums"),
    await fetchAPI("/forum-categories"),
    await fetchAPI("/contact"),
    await fetchAPI("/projects"),
  ]);

  return {
    props: { forums, forumCat, contact, projects },
    //revalidate: 1,
  };
}

export default Forum;

// Forum.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
