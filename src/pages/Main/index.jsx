import React, { Component } from "react";
import { NavbarPage } from "../Navbar";
import { SubNavPage } from "../SubNav";
import { SectionPage } from "../Sections";
import { BodyPage } from "../Body";
import { ContentPage } from "../Content";
import { CollectionPage } from "../Collection";
import {TrendingPage} from "../Trending";
import { SpecialOfferPage } from "../SpecialOffer";

import { Wrap } from "./style";

export default class index extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
        <SubNavPage />
        <Wrap.Flex>
          <SectionPage />
          <BodyPage />
        </Wrap.Flex>
        <ContentPage />
        <CollectionPage />
        <TrendingPage />
        <SpecialOfferPage/>

      </div>
    );
  }
}
