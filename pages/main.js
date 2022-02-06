import React from "react";
import ReactDOM from "react-dom";
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
import { NextSeo } from "next-seo";
import { motion, AnimatePresence } from "framer-motion";

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
      mission,
      projects,
      events,
      news,
      news_announce,
      publication,
      contact,
    } = props;

    this.state = {
      //initialActiveSection: null,
      sectionsColor: [...originalColors],
      anchors: ["mission", "projects", "events", "news", "publication"],
      mission: {
        title: "mission",
        data: mission,
      },
      projects: {
        title: "projects",
        data: projects,
      },
      events: {
        title: "specail events",
        data: events,
      },
      news: {
        title: "news",
        data: news,
        data2: news_announce,
      },
      publication: {
        title: "publication",
        data: publication,
      },
      contact,
    };
  }

  onLeave(origin, destination, direction) {
    //console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
    //const secIndex = destination.index;
    //console.log(secIndex);
    //return destination.index;
  }

  render() {
    const {
      mission,
      projects,
      events,
      news,
      publication,
      contact,
      //initialActiveSection,
    } = this.state;

    return (
      <>
        <NextSeo
          title="Hong Foundation 洪建全基金會"
          description="Hong Foundation 洪建全基金會 : 讓前衛創作的力量滲透到社會中，使「原創文化」成為社會和產業的養分與動力。"
          canonical="https://hongfoundation.org.tw/main"
          openGraph={{
            url: "https://hongfoundation.org.tw/",
            title: "Hong Foundation 洪建全基金會",
            description:
              "Hong Foundation 洪建全基金會 : 讓前衛創作的力量滲透到社會中，使「原創文化」成為社會和產業的養分與動力。",
            site_name: "Hong Foundation 洪建全基金會",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
        <NavInMain contact={contact} />
        <div className="App">
          <Box id="myMenu">
            <div data-menuanchor="mission" className="active secName">
              <div className="secName_tw">使命</div>
              <div className="secName_en">mission</div>
            </div>

            <div data-menuanchor="projects" className="secName">
              <div className="secName_tw">計劃</div>
              <div className="secName_en">program</div>
            </div>

            <div data-menuanchor="events" className="secName">
              <div className="secName_tw">活動</div>
              <div className="secName_en">events</div>
            </div>

            <div data-menuanchor="news" className="secName">
              <div className="secName_tw">消息</div>
              <div className="secName_en">news</div>
            </div>

            <div data-menuanchor="publication" className="secName">
              <div className="secName_tw">出版</div>
              <div className="secName_en">publication</div>
            </div>
          </Box>

          <ReactFullpage
            licenseKey={"D28AB884-511F4CC8-B6B12F9C-95B09C68"}
            pluginWrapper={pluginWrapper}
            animateAnchor={false}
            loopHorizontal={false}
            menu={"#myMenu"}
            slidesNavigation={false}
            lockAnchors={false}
            //below two for scrolling like a normal page
            //autoScrolling={false}
            fitToSection={false}
            //recordHistory={false}
            //scrollBar={true}
            controlArrows={false}
            sectionsColor={this.state.sectionsColor}
            anchors={this.state.anchors}
            //using below to make a scrollable section, and prevent scrollOverflow by using fp-noscroll for desktop, and fp-auto-height-responsive for mobile.
            scrollOverflow={true}
            //using below to use normal scroll elements
            normalScrollElements={".scrollEle"}
            //verticalCentered={false}
            onLeave={this.onLeave.bind(this)}
            render={({ state, fullpageApi }) => (
              <>
                <ReactFullpage.Wrapper>
                  {mission && (
                    <div className="section" data-anchor="section1">
                      <MissionSlogan
                        mission={mission.data}
                        fullpageApi={fullpageApi}
                        secIndex={state}
                      />
                    </div>
                  )}

                  {projects && (
                    <div className="section" data-anchor="section2">
                      <Projects
                        projects={projects.data}
                        fullpageApi={fullpageApi}
                        secIndex={state}
                      />
                    </div>
                  )}

                  {events && (
                    <div className="section" data-anchor="section3">
                      <Box>
                        <Events events={events.data} secIndex={state} />
                      </Box>
                    </div>
                  )}

                  {news && (
                    <div className="section" data-anchor="section4">
                      <News
                        news={news.data}
                        newsAnnounce={news.data2}
                        secIndex={state}
                      />
                    </div>
                  )}

                  {publication && (
                    <div className="section" data-anchor="section5">
                      {/*console.log(fullpageApi.getActiveSection())*/}
                      <PublicationIntro
                        publication={publication.data}
                        fullpageApi={fullpageApi}
                        secIndex={state}
                      />
                    </div>
                  )}
                </ReactFullpage.Wrapper>
              </>
            )}
          />
        </div>
      </>
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
    contact,
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
    await fetchAPI("/contact"),
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
      contact,
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
