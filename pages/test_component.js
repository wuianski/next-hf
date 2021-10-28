import Layout from "../components/layout";
import Nav from "../components/nav";
import Box from "@mui/material/Box";
import React from "react";
import { fetchAPI } from "../lib/api";

import _ from "lodash";

function Test({ chronicle: data }) {
  let dataset = _.groupBy(data, (x) => x.year);
  dataset = Object.entries(dataset).map((x, index) => {
    let result = {
      year: parseInt(x[0]),
      value: x[1].map((x) => {
        delete x.year;
        return x;
      }),
    };

    result.value = result.value.filter((x) => !_.isEmpty(x));
    return result;
  });

  console.log(dataset);

  return (
    <>
      <Box ml={13} mr={6} mt={53}>
        <div>ddd</div>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [chronicle] = await Promise.all([fetchAPI("/chronicles")]);

  return {
    props: { chronicle },
    //revalidate: 1,
  };
}

export default Test;

