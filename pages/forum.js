import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";
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
import forumCover from "../public/IMGs/forumCover.png";

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

function Forum({ forums: dataset, forumCat }) {
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
    };

    return result;
  });

  const cat_forum = forumCat.map((c) => {
    let result_cat = {
      catName: c.name,
    };
    return result_cat;
  });
  //console.log(cat_forum);
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
  const [paginate, setpaginate] = useState(3);
  const data = Object.values(sorted);
  const search_parameters = ["title", "lecturers"];
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
    setpaginate((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    setFilter("All");
  }, []);

  return (
    <>
      <Box sx={{ minHeight: "100vh", backgroundColor: "#EDE9DF" }}>
        <Stack direction={{ xs: "row", md: "row" }} spacing={{ xs: 6, md: 2 }}>
          {/* left: cover area */}
          <StackItem sx={{ width: "225px" }}>
            <Box
              sx={{
                position: "fixed",
                height: "100vh",
                width: "225px",
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
          </StackItem>
          {/* right: grid area */}
          <StackItem sx={{ width: "82%" }}>
            <Box
              pt={{ xs: 15, md: 13 }}
              ml={{ xs: 15, md: 23 }}
              mr={{ xs: 4, md: 0 }}
            >
              <Box sx={{ flexGrow: 1 }} pt={4}>
                <Grid container spacing={4} columns={3}>
                  {/* search component */}
                  <Grid item xs={1}>
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
                  <Grid item xs={1}>
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
                              <MenuItem value={filter_item}>
                                {filter_item}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                      {/* <Box>
                        <div>
                          <select
                            onChange={(e) => setFilter(e.target.value)}
                            className="custom-select"
                            aria-label="Filter Countries By Region"
                          >
                            <option value="All" key="0">
                              All
                            </option>
                            {filter_items.map((filter_item, i) => (
                              <option value={filter_item} key={i - 1}>
                                {filter_item}
                              </option>
                            ))}
                          </select>
                          <span className="focus"></span>
                        </div>
                      </Box> */}
                    </FilterItem>
                  </Grid>
                </Grid>
              </Box>

              {/* list all forums */}
              <Box sx={{ flexGrow: 1 }} pt={4}>
                <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {search(data)
                    .slice(0, paginate)
                    .map((item, i) => (
                      <Grid item xs={4} sm={4} md={4} key={i}>
                        <GridItem>
                          <Box
                            sx={{
                              width: "100%",
                              height: "200px",
                              backgroundColor: "#fff",
                            }}
                          />
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
                              format(new Date(item.startDate), "yyyy.MM.dd")}
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
                            sx={{ fontSize: { xs: 15, md: 15 }, minHeight: 52 }}
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
                        </GridItem>
                      </Grid>
                    ))}
                </Grid>
              </Box>

              {/* load more component */}
              <Box sx={{ flexGrow: 1 }} pt={4} pb={4}>
                <Grid container spacing={4} columns={3}>
                  <Grid item xs={1}>
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
  const [forums, forumCat] = await Promise.all([
    await fetchAPI("/forums"),
    await fetchAPI("/forum-categories"),
  ]);

  return {
    props: { forums, forumCat },
    //revalidate: 1,
  };
}

export default Forum;

Forum.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
