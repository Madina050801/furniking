import React, { Component } from "react";
import { Titles, Wrap } from "./style";

export const Body = () => {
  return (
      <Wrap>
        <Titles>
          <Titles.Title>TOP COLLECTIONS 2022</Titles.Title>
          <Titles.Title2>We Serve Your Dream Furniture</Titles.Title2>
          <Titles.Title3>Get 50% off all products</Titles.Title3>
          <Titles.Button>SHOP NOW</Titles.Button>
        </Titles>
        <Wrap.Armchair>
          <Wrap.Fur1 />
        </Wrap.Armchair>
        <Wrap.Wrapper>
            <Wrap.Wrap1>
                <Wrap.Fur2/>
                <Wrap.Price>$120</Wrap.Price>
                <Wrap.Desc>Office Desk Chair</Wrap.Desc>
            </Wrap.Wrap1>

            <Wrap.Wrap1>
                <Wrap.Fur3/>
                <Wrap.Price>$120</Wrap.Price>
                <Wrap.Desc>Office Desk Chair</Wrap.Desc>
            </Wrap.Wrap1>

            <Wrap.Wrap1>
                <Wrap.Fur4/>
                <Wrap.Price>$120</Wrap.Price>
                <Wrap.Desc>Office Desk Chair</Wrap.Desc>
            </Wrap.Wrap1>
        </Wrap.Wrapper>

        
      </Wrap>
   
  )
}
