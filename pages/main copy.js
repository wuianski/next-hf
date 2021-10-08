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
      fullpages: [
        {
          text: "specail events",
          events: events,
          eventsId: events.map((event) => event.id),
          //eventsTitleTw: events.map((event) => event.title.tw),
          //eventsTitleDate: events.map((event) => event.date),
        },
        {
          text: "mission",
          missionSloganTw: mission.slogan.tw,
          missionSloganEn: mission.slogan.en,
        },
        {
          text: "project",
        },
        {
          text: "chronicle",
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
                {fullpages.map(
                  ({
                    text,
                    events,
                    eventsId,
                    //eventsTitleTw,
                    //eventsTitleDate,
                    missionSloganTw,
                    missionSloganEn,
                  }) => (
                    <div key={text} className="section">
                      <h1>{text}</h1>
                      <Events
                        events={events}
                        eventsId={eventsId}
                        //eventsTitleTw={eventsTitleTw}
                        //eventsTitleDate={eventsTitleDate}
                      />
                      <Mission
                        missionSloganTw={missionSloganTw}
                        missionSloganEn={missionSloganEn}
                      />
                    </div>
                  )
                )}
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
