import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Layout from "../components/layout";
import Nav from "../components/nav";
import NavInMain from "../components/navInMain";

import { fetchAPI } from "../lib/api";
import MissionSlogan from "../components/MissionSlogan";
import MissionTW from "../components/MissionTW";
import MissionEN from "../components/MissionEN";
import Events from "../components/events";
import Projects from "../components/projects";
import Chronicle from "../components/chronicle";
import Leadership from "../components/leadership";
import News from "../components/news";
import Sponsorship from "../components/sponsorship";
import PublicationIntro from "../components/publicationIntro";
//import dynamic from "next/dynamic";
//const Events = dynamic(() => import("../components/events"));
import Box from "@mui/material/Box";

import Image from "next/image";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const originalColors = ["#fff"];

class App extends React.Component {
  constructor(props) {
    super(props);
    let {
      events,
      mission,
      projects,
      chronicle,
      leadership,
      leadership_doc,
      news,
      news_announce,
      sponsorship,
      publication,
    } = props;

    this.state = {
      sectionsColor: [...originalColors],
      anchors: [
        "events",
        "mission",
        "projects",
        "chronicle",
        "leadership",
        "news",
        "facts",
        "publication",
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
        data2: leadership_doc,
      },
      news: {
        title: "news",
        data: news,
        data2: news_announce,
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
        <NavInMain />
        <Box id="myMenu">
          <div data-menuanchor="events" className="active secName">
            <div className="secName_tw">活動</div>
            <div className="secName_en">events</div>
          </div>

          <div data-menuanchor="mission" className="secName">
            <div className="secName_tw">使命</div>
            <div className="secName_en">mission</div>
          </div>

          <div data-menuanchor="projects" className="secName">
            <div className="secName_tw">業務</div>
            <div className="secName_en">projects</div>
          </div>

          <div data-menuanchor="chronicle" className="secName">
            <div className="secName_tw">大事記</div>
            <div className="secName_en">chronicle</div>
          </div>

          <div data-menuanchor="leadership" className="secName">
            <div className="secName_tw">組織</div>
            <div className="secName_en">leadership</div>
          </div>

          <div data-menuanchor="news" className="secName">
            <div className="secName_tw">消息</div>
            <div className="secName_en">news</div>
          </div>

          <div data-menuanchor="facts" className="secName">
            <div className="secName_tw">公開資訊</div>
            <div className="secName_en">facts</div>
          </div>

          <div data-menuanchor="publication" className="secName">
            <div className="secName_tw">出版</div>
            <div className="secName_en">publication</div>
          </div>
        </Box>

        <ReactFullpage
          pluginWrapper={pluginWrapper}
          animateAnchor={false}
          loopHorizontal={false}
          menu={"#myMenu"}
          slidesNavigation={false}
          lockAnchors={false}
          //autoScrolling={false}
          //recordHistory={false}
          //scrollBar={true}
          controlArrows={false}
          sectionsColor={this.state.sectionsColor}
          anchors={this.state.anchors}
          //using below to make a scrollable section, and prevent scrollOverflow by using fp-noscroll for desktop, and fp-auto-height-responsive for mobile.
          //scrollOverflow={true}
          //using below to use normal scroll elements
          normalScrollElements={".scrollEle"}
          //verticalCentered={false}
          render={({ state, fullpageApi }) =>
            console.log("render prop change") || (
              <>
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
                    <div className="section" data-anchor="section4">
                      <Chronicle chronicle={chronicle.data} />
                    </div>
                  )}

                  {leadership && (
                    <div className="section" data-anchor="section5">
                      <Leadership
                        leadership={leadership.data}
                        leadership_doc={leadership.data2}
                        fullpageApi={fullpageApi}
                      />
                    </div>
                  )}

                  {news && (
                    <div className="section" data-anchor="section6">
                      <News news={news.data} newsAnnounce={news.data2} />
                    </div>
                  )}

                  {sponsorship && (
                    <div className="section" data-anchor="section7">
                      <Sponsorship sponsorship={sponsorship.data} />
                    </div>
                  )}

                  {publication && (
                    <div className="section" data-anchor="section8">
                      <PublicationIntro publication={publication.data} />
                    </div>
                  )}
                </ReactFullpage.Wrapper>
              </>
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
    leadership_doc,
    news,
    news_announce,
    sponsorship,
    publication,
  ] = await Promise.all([
    await fetchAPI("/events"),
    await fetchAPI("/mission"),
    await fetchAPI("/projects"),
    await fetchAPI("/chronicles"),
    await fetchAPI("/leadership-members"),
    await fetchAPI("/leadership"),
    await fetchAPI("/the-news"),
    await fetchAPI("/news-announcements"),
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
      leadership_doc,
      news,
      news_announce,
      sponsorship,
      publication,
    },
    //revalidate: 1,
  };
}

export default App;

App.getLayout = function getLayout(page) {
  //console.log(App);
  return (
    <Layout>
      {/*<Nav />*/}
      {page}
    </Layout>
  );
};
