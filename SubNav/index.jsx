import React, { Component } from "react";
import { Title, Wrap } from "./style";

export default class index extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Box>
          <Wrap.Menu /> ALL COLLECTION
        </Wrap.Box>
        <Title.Wrap>
          <Title>HOME</Title>
          <Title>SHOP</Title>
          <Title>BLOG</Title>
          <Title>ABOUT</Title>
          <Title color>CONTACT US</Title>
        </Title.Wrap>
      </Wrap>
    );
  }
}
