import React, { Component } from "react";
import { ColleImage, Title, Wrap } from "./style";

export default class index extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Wrapper>
          <Wrap.Box>
            <Title>
              <Title.Desc>Modern Furniture Collections</Title.Desc>
              <Title.Price>Starting from $500</Title.Price>
              <Wrap.Wrapper>
                <Title.Read>Read more</Title.Read>
                <Title.Arrow />
              </Wrap.Wrapper>
            </Title>
            <ColleImage />
          </Wrap.Box>
          <Wrap.Wrap2and3>
            <Wrap.Box>
              <Title>
                <Title.Desc>Geometric Bookcase</Title.Desc>
                <Title.Price>Starting from $500</Title.Price>
                <Wrap.Wrapper>
                  <Title.Read>Read more</Title.Read>
                  <Title.Arrow />
                </Wrap.Wrapper>
              </Title>
              <ColleImage.ColleImage2 />
            </Wrap.Box>
            <Wrap.Box>
              <Title>
                <Title.Desc>Minimal Sofa collections </Title.Desc>
                <Title.Price>Starting from $500</Title.Price>
                <Wrap.Wrapper>
                  <Title.Read>Read more</Title.Read>
                  <Title.Arrow />
                </Wrap.Wrapper>
              </Title>
              <ColleImage.ColleImage3 />
            </Wrap.Box>
          </Wrap.Wrap2and3>
        </Wrap.Wrapper>
      </Wrap>
    );
  }
}
