import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";

import Layout from "../components/layout";
import Nav from "../components/nav";

import { fetchAPI } from "../lib/api";
import Mission from "../components/mission";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const originalColors = [
  "#ff5f45",
  "#0798ec",
  "#fc6c7c",
  "#435b71",
  "orange",
  "blue",
  "purple",
  "yellow",
];

const missionData = (mission) => {
  mission.content.tw;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "Section 1",
        },
        {
          text: "Section 2",
        },
        {
          text: "Section 3",
        },
      ],
    };
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <div className="App">
        <ReactFullpage
          pluginWrapper={pluginWrapper}
          // scrollHorizontally = {true}
          sectionsColor={this.state.sectionsColor}
          render={(comp) =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
                {fullpages.map(({ text }) => (
                  <div key={text} className="section">
                    <h1>{text}</h1>
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    );
  }
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

export default App;

App.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Nav />
      {page}
    </Layout>
  );
};
