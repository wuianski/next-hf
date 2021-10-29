import Layout from "../components/layout";
import Nav from "../components/nav";
import Box from "@mui/material/Box";
import React from "react";
import { fetchAPI } from "../lib/api";

import _ from "lodash";

function Publication({ books: dataset }) {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);
  return (
    <>
      <Box ml={13} mr={6} mt={53}>
        <div>
          {dataset &&
            dataset.map((books) => <div key={books.id}>{books.id}</div>)}
        </div>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [books] = await Promise.all([fetchAPI("/books")]);

  return {
    props: { books },
    //revalidate: 1,
  };
}

export default Publication;
