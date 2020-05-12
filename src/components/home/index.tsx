import React from "react";
import styled from "styled-components";
import moment from "moment";
import Clock from "react-live-clock";
import {
  facebookURL,
  linkedinURL,
  githubURL,
  twitterURL,
  githubNinURL,
  dwitterURL,
  pouetNinURL,
  youtubeURL,
  instagramURL,
  twitchURL,
} from "../../common/urls";

const HomeContainer = styled.div`
  padding: 10px 30px;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const DateBucket = styled.div`
  padding: 10px 0px;
  font-size: 24px;
  font-weight: 600;
`;

const TimeBucket = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px 0px;
`;

const DemoBucket = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const DemoLink = styled.a`
  width: 50%;
  opacity: 1;
  &:hover {
    opacity: 0.6;
  }
`;

const UrlBucket = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const UrlImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Url = styled.a`
  opacity: 0.6;
  padding: 5px;
  &:hover {
    opacity: 1;
  }
`;

const Home = () => {
  moment.locale("nb");
  let date = moment();
  return (
    <HomeContainer>
      <UrlBucket>
        <Url href={facebookURL}>
          <UrlImg alt="..." src="/img/facebook.png" />
        </Url>
        <Url href={linkedinURL}>
          <UrlImg alt="..." src="/img/linkedin.png" />
        </Url>
        <Url href={githubURL}>
          <UrlImg alt="..." src="/img/github.png" />
        </Url>
        <Url href={twitterURL}>
          <UrlImg alt="..." src="/img/twitter.png" />
        </Url>
        <Url href={youtubeURL}>
          <UrlImg alt="..." src="/img/youtube.jpeg" />
        </Url>
        <Url href={instagramURL}>
          <UrlImg alt="..." src="/img/instagram.png" />
        </Url>
        <Url href={twitchURL}>
          <UrlImg alt="..." src="/img/twitch.png" />
        </Url>
        <Url href={dwitterURL}>
          <UrlImg alt="..." src="/img/dwitter.png" />
        </Url>
        <Url href={githubNinURL}>
          <UrlImg alt="..." src="/img/nin.png" />
        </Url>
      </UrlBucket>

      <DateBucket>
        {date.format("dddd D. MMMM YYYY")} Week {date.format("w")}
      </DateBucket>
      <TimeBucket>
        <div>
          <h3>Seoul</h3>
          <Clock format={"HH:mm"} ticking={true} timezone={"Asia/Seoul"} />
        </div>
        <div>
          <h3>New York</h3>
          <Clock
            format={"HH:mm"}
            ticking={true}
            timezone={"America/New_York"}
          />
        </div>
        <div>
          <h3>Oslo</h3>
          <Clock format={"HH:mm"} ticking={true} timezone={"Europe/Oslo"} />
        </div>
        <div>
          <h3>Tokyo</h3>
          <Clock format={"HH:mm"} ticking={true} timezone={"Asia/Tokyo"} />
        </div>
      </TimeBucket>

      <h1 style={{ margin: 0 }}>Demos made by Ninjadev</h1>
      <a href={pouetNinURL}>You can find us on Pouet.net</a>
      <DemoBucket>
        <DemoLink href="/demo/pinky.png.html">
          <img alt="..." width="100%" height="100%" src="/img/pinky.png" />
        </DemoLink>
        <DemoLink href="/demo/no.png.html">
          <img alt="..." width="100%" height="100%" src="/img/no.png" />
        </DemoLink>
        <DemoLink href="/demo/zeven.png.html">
          <img alt="..." width="100%" height="100%" src="/img/zeven.png" />
        </DemoLink>
        <DemoLink href="/demo/sync.png.html">
          <img alt="..." width="100%" height="100%" src="/img/sync.png" />
        </DemoLink>
      </DemoBucket>
    </HomeContainer>
  );
};

export default Home;
