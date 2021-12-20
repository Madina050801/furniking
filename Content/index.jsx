import React, { Component } from 'react'
import { Wrap, Title } from './style'

export default class index extends Component {
    render() {
        return (
            <div>
                <Wrap>
                    <Wrap.Box>
                        <Wrap.Content1/>
                        <Title>
                            <Title.Title1>Free Shipping</Title.Title1>
                            <Title.Desc>Orders over $100</Title.Desc>
                        </Title>
                    </Wrap.Box>

                    <Wrap.Box>
                        <Wrap.Content1/>
                        <Title>
                            <Title.Title1>Smart Gift Card</Title.Title1>
                            <Title.Desc>Orders over $100</Title.Desc>
                        </Title>
                    </Wrap.Box>
                    <Wrap.Box>
                        <Wrap.Content1/>
                        <Title>
                            <Title.Title1>Free Shipping</Title.Title1>
                            <Title.Desc>Orders over $100</Title.Desc>
                        </Title>
                    </Wrap.Box>
                    <Wrap.Box>
                        <Wrap.Content1/>
                        <Title>
                            <Title.Title1>Free Shipping</Title.Title1>
                            <Title.Desc>Orders over $100</Title.Desc>
                        </Title>
                    </Wrap.Box>
                </Wrap>
            </div>
        )
    }
}
