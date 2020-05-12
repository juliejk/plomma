import React from "react";
import styled from "styled-components";
import { device } from "../../common/size";

const DemoContainer = styled.div`
  padding: 30px;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const DemoBucket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  padding: 20px 0px;
  &:hover {
    opacity: 0.6;
  }
  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DemoTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${device.laptop} {
    max-width: 200px;
  }
`;

const DemoName = styled.div`
  font-size: 24px;
`;

const DemoImg = styled.div`
  width: 100%;
  @media ${device.laptop} {
    max-width: calc(100vw - 200px);
  }
`;

const Demo = () => (
  <DemoContainer>
    <a href="/demo/pinky.png.html">
      <DemoBucket>
        <DemoTitle>
          <DemoName>Pinky Frinky</DemoName>
          <div>Ninjadev - Solskogen 2018</div>
        </DemoTitle>
        <DemoImg>
          <img alt="..." width="100%" height="100%" src="/img/pinky.png" />
        </DemoImg>
      </DemoBucket>
    </a>
    <a href="/demo/no.png.html">
      <DemoBucket>
        <DemoTitle>
          <DemoName>No invitation</DemoName>
          <div>Ninjadev - Invite to Revison 2018</div>
        </DemoTitle>
        <DemoImg>
          <img alt="..." width="100%" height="100%" src="/img/no.png" />
        </DemoImg>
      </DemoBucket>
    </a>
    <a href="/demo/zeven.png.html">
      <DemoBucket>
        <DemoTitle>
          <DemoName>Zeven</DemoName>
          <div>Ninjadev - Solskogen 2017</div>
        </DemoTitle>
        <DemoImg>
          <img alt="..." width="100%" height="100%" src="/img/zeven.png" />
        </DemoImg>
      </DemoBucket>
    </a>
    <a href="/demo/sync.png.html">
      <DemoBucket>
        <DemoTitle>
          <DemoName>What are you syncing about?</DemoName>
          <div>Ninjadev - Revison 2017</div>
        </DemoTitle>
        <DemoImg>
          <img alt="..." width="100%" height="100%" src="/img/sync.png" />
        </DemoImg>
      </DemoBucket>
    </a>
  </DemoContainer>
);

export default Demo;
