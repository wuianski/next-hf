import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Layout from "../components/layout";
import Nav from "../components/nav";

import { fetchAPI } from "../lib/api";
import Mission from "../components/mission";
import Events from "../components/events";
//import dynamic from "next/dynamic";
//const Events = dynamic(() => import("../components/events"));

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

class App extends React.Component {
  constructor(props) {
    super(props);
    let { events, mission } = props;

    this.state = {
      sectionsColor: [...originalColors],
      events: {
        title: "specail events",
        data: events,
      },
      mission: {
        title: "mission",
        data: mission,
      },
      // fullpages: [
      //   {
      //     sec1: "specail events",
      //     events: events,
      //     eventsId: events.map((event) => event.id),
      //     //eventsTitleTw: events.map((event) => event.title.tw),
      //     //eventsTitleDate: events.map((event) => event.date),
      //   },
      //   {
      //     sec2: "mission",
      //     missionSloganTw: mission.slogan.tw,
      //     missionSloganEn: mission.slogan.en,
      //   },
      //   {
      //     sec3: "project",
      //   },
      //   {
      //     sec4: "chronicle",
      //   },
      // ],
    };
  }

  render() {
    const { events, mission } = this.state;
    return (
      <div className="App">
        <ReactFullpage
          pluginWrapper={pluginWrapper}
          // scrollHorizontally = {true}
          sectionsColor={this.state.sectionsColor}
          render={(comp) =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
                {events && <div className="section">
                  <p>section1</p>
                  <div>
                    <h1>{events.title}</h1>
                    <Events events={events.data} />
                  </div>
                </div>}

                {mission && <div className="section">
                  <p>section2</p>
                  <div>
                    <h1>{mission.title}</h1>
                    <Mission mission={mission.data} />
                  </div>
                </div>}
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
  const [events, mission] = await Promise.all([
    await fetchAPI("/events"),
    await fetchAPI("/mission"),
  ]);

  return {
    props: { events, mission },
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
