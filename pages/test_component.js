import Layout from "../components/layout";
import Nav from "../components/nav";

import React from "react";
import { fetchAPI } from "../lib/api";

import Mission from "../components/mission";

function Index2({ mission, aboutPublic }) {
  return (
    <div>
      <Layout>
        <Nav />
        <div>
          <Mission mission={mission} />
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [mission, aboutPublic] = await Promise.all([
    fetchAPI("/mission"),
    fetchAPI("/about-public"),
  ]);

  return {
    props: { mission, aboutPublic },
    //revalidate: 1,
  };
}

export default Index2;
