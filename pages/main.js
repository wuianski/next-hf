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
      chronicle,
      projects,
      leadership,
      leadership_doc,
      news,
      news_announce,
      sponsorship,
      publication,
      contact,
    } = props;

    this.state = {
      //initialActiveSection: null,
      sectionsColor: [...originalColors],
      anchors: [
        "events",
        "mission",
        "chronicle",
        "projects",
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
      chronicle: {
        title: "chronicle",
        data: chronicle,
      },
      projects: {
        title: "projects",
        data: projects,
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
      events,
      mission,
      chronicle,
      projects,
      leadership,
      news,
      sponsorship,
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
            title: "Open Graph Title",
            description: "Open Graph Description",
            /*images: [
            {
              url: "/IMGs/frontPage_bg.png",
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],*/
            site_name: "Hong Foundation",
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
            <div data-menuanchor="events" className="active secName">
              <div className="secName_tw">活動</div>
              <div className="secName_en">events</div>
            </div>

            <div data-menuanchor="mission" className="secName">
              <div className="secName_tw">使命</div>
              <div className="secName_en">mission</div>
            </div>

            <div data-menuanchor="chronicle" className="secName">
              <div className="secName_tw">大事記</div>
              <div className="secName_en">timeline</div>
            </div>

            <div data-menuanchor="projects" className="secName">
              <div className="secName_tw">計劃</div>
              <div className="secName_en">program</div>
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
              <div className="secName_en">resource</div>
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
            onLeave={this.onLeave.bind(this)}
            render={({ state, fullpageApi }) =>
              console.log("render") || (
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

                    {chronicle && (
                      <div className="section" data-anchor="section4">
                        <Chronicle chronicle={chronicle.data} />
                      </div>
                    )}

                    {projects && (
                      <div className="section" data-anchor="section3">
                        <Projects
                          projects={projects.data}
                          fullpageApi={fullpageApi}
                        />
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
                        <Sponsorship
                          sponsorship={sponsorship.data}
                          fullpageApi={fullpageApi}
                        />
                      </div>
                    )}

                    {publication && (
                      <div className="section" data-anchor="section8">
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
              )
            }
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
