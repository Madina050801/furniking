import React, { Component } from "react";
import { Wrap } from "./style";

export default class index extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Logo>
          <Wrap.LogoIcon /> Furniking
        </Wrap.Logo>
        <Wrap.Input placeholder="Search here" />
        <Wrap.Select selected="Categories">
          <option selected disabled>
            Categories
          </option>
          <option>Price</option>
          <option>Categories</option>
        </Wrap.Select>
        <Wrap.Button>
          <Wrap.Search />
        </Wrap.Button>
        <Wrap.IconContainer>
          <Wrap.Bang />
          <Wrap.Basket />
          <Wrap.User />
        </Wrap.IconContainer>
      </Wrap>
    );
  }
}
