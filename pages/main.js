import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Layout from "../components/layout";
import Nav from "../components/nav";

import { fetchAPI } from "../lib/api";
import MissionSlogan from "../components/MissionSlogan";
import MissionTW from "../components/MissionTW";
import MissionEN from "../components/MissionEN";
import Events from "../components/events";
import Projects from "../components/projects";
//import dynamic from "next/dynamic";
//const Events = dynamic(() => import("../components/events"));
import Box from "@mui/material/Box";

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
    let {
      events,
      mission,
      projects,
      chronicle,
      leadership,
      news,
      sponsorship,
      publication,
    } = props;

    this.state = {
      sectionsColor: [...originalColors],
      anchors: [
        "section1",
        "section2",
        "section3",
        "section4",
        "section5",
        "section6",
        "section7",
        "section8",
      ],
      events: {
        title: "specail events",
        data: events,
      },
      mission: {
        title: "mission",
        data: mission,
      },
      projects: {
        title: "projects",
        data: projects,
      },
      chronicle: {
        title: "chronicle",
        data: chronicle,
      },
      leadership: {
        title: "leadership",
        data: leadership,
      },
      news: {
        title: "news",
        data: news,
      },
      sponsorship: {
        title: "sponsorship",
        data: sponsorship,
      },
      publication: {
        title: "publication",
        data: publication,
      },
    };
  }

  render() {
    const {
      events,
      mission,
      projects,
      chronicle,
      leadership,
      news,
      sponsorship,
      publication,
    } = this.state;

    return (
      <div className="App">
        <Box id="myMenu">
          <div data-menuanchor="section1" className="active secName">
            <div className="secName_tw">活動</div>
            <div className="secName_en">events</div>
          </div>

          <div data-menuanchor="section2" className="secName">
            <div className="secName_tw">使命</div>
            <div className="secName_en">mission</div>
          </div>

          <div data-menuanchor="section3" className="secName">
            <div className="secName_tw">業務</div>
            <div className="secName_en">projects</div>
          </div>

          <div data-menuanchor="section4" className="secName">
            <div className="secName_tw">大事記</div>
            <div className="secName_en">chronicle</div>
          </div>

          <div data-menuanchor="section5" className="secName">
            <div className="secName_tw">組織</div>
            <div className="secName_en">leadership</div>
          </div>

          <div data-menuanchor="section6" className="secName">
            <div className="secName_tw">消息</div>
            <div className="secName_en">news</div>
          </div>

          <div data-menuanchor="section7" className="secName">
            <div className="secName_tw">公開資訊</div>
            <div className="secName_en">facts</div>
          </div>

          <div data-menuanchor="section8" className="secName">
            <div className="secName_tw">出版</div>
            <div className="secName_en">publication</div>
          </div>
        </Box>
        <ReactFullpage
          pluginWrapper={pluginWrapper}
          //scrollHorizontally={true}
          //fixedElements={".getSection"}
          loopHorizontal={false}
          menu={"#myMenu"}
          slidesNavigation={true}
          slidesNavPosition={"bottom"}
          controlArrows={false}
          sectionsColor={this.state.sectionsColor}
          anchors={this.state.anchors}
          render={({ state, fullpageApi }) =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
                {events && (
                  <div className="section" data-anchor="section1">
                    <Events events={events.data} />
                  </div>
                )}

                {mission && (
                  <div className="section" data-anchor="section2">
                    <div className="slide">
                      <MissionSlogan
                        mission={mission.data}
                        fullpageApi={fullpageApi}
                      />
                    </div>
                    <div className="slide">
                      <MissionTW
                        mission={mission.data}
                        fullpageApi={fullpageApi}
                      />
                    </div>
                    <div className="slide">
                      <MissionEN
                        mission={mission.data}
                        fullpageApi={fullpageApi}
                      />
                    </div>
                  </div>
                )}

                {projects && (
                  <div className="section" data-anchor="section3">
                    <Projects projects={projects.data} />
                  </div>
                )}

                {chronicle && (
                  <div className="section" data-anchor="section4"></div>
                )}

                {leadership && (
                  <div className="section" data-anchor="section5"></div>
                )}

                {news && <div className="section" data-anchor="section6"></div>}

                {sponsorship && (
                  <div className="section" data-anchor="section7"></div>
                )}

                {publication && (
                  <div className="section" data-anchor="section8"></div>
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
  const [
    events,
    mission,
    projects,
    chronicle,
    leadership,
    news,
    sponsorship,
    publication,
  ] = await Promise.all([
    await fetchAPI("/events"),
    await fetchAPI("/mission"),
    await fetchAPI("/projects"),
    await fetchAPI("/chronicles"),
    await fetchAPI("/leadership-members"),
    await fetchAPI("/the-news"),
    await fetchAPI("/sponsorships"),
    await fetchAPI("/about-public"),
  ]);

  return {
    props: {
      events,
      mission,
      projects,
      chronicle,
      leadership,
      news,
      sponsorship,
      publication,
    },
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
