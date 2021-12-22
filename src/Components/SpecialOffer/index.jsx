import React from "react";
import { Wrap, Titles, Image } from "./style";

export const SpecialOffer = () => {
  return (
    <Wrap>
      <Wrap.Wrapper>
          <Titles>
              <Titles.Title>
                  SPECIAL OFFER
              </Titles.Title>
          </Titles>
        <Wrap.Line>
          <Wrap.Card>
            <Image />
            <Titles.Contain>
              <Titles.Name>Living Room Furniture</Titles.Name>
              <Titles.Desc>
                You don't have a chair. Are you ready for growth? Shop with us
                40% discount!
              </Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles.Contain>
          </Wrap.Card>

          <Wrap.Card>
            <Image />
            <Titles.Contain>
              <Titles.Name>Living Room Furniture</Titles.Name>
              <Titles.Desc>
                You don't have a chair. Are you ready for growth? Shop with us
                40% discount!
              </Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles.Contain>
          </Wrap.Card>
        </Wrap.Line>
      </Wrap.Wrapper>
    </Wrap>
  );
};
