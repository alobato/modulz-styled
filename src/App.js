import React, { Component } from 'react';
import Section from './Section.react.jsx';
import Container from './Container.react.jsx';
import Row from './Row.react.jsx';
import Title from './Title.react.jsx';
import Button from './Button.react.jsx';
import PillButton from './PillButton.react.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Title>
            Button
          </Title>
        </Container>
        <Section>
          <Container>
            <Title small>
              Sizes
            </Title>
            <Row>
              <Button small>Upvote</Button>
              <Button>Upvote</Button>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Title small>
              Semantics
            </Title>
            <Row>
              <Button>Upvote</Button>
              <Button primary>Upvote</Button>
              <Button negative>Upvote</Button>
              <Button positive>Upvote</Button>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Title small>
              Pill button
            </Title>
            <Row>
              <PillButton red>Upvote</PillButton>
              <PillButton pink>Upvote</PillButton>
              <PillButton purple>Upvote</PillButton>
              <PillButton indigo>Upvote</PillButton>
              <PillButton blue>Upvote</PillButton>
              <PillButton teal>Upvote</PillButton>
              <PillButton green>Upvote</PillButton>
              <PillButton lime>Upvote</PillButton>
              <PillButton yellow>Upvote</PillButton>
              <PillButton amber>Upvote</PillButton>
              <PillButton orange>Upvote</PillButton>
              <PillButton crimson>Upvote</PillButton>
              <PillButton lavender>Upvote</PillButton>
              <PillButton violet>Upvote</PillButton>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Title small>
              Large pill button
            </Title>
            <PillButton blue large>Upvote</PillButton>
          </Container>
        </Section>
        <Section large snow>
          <Container>
            <Title>
              Large pill button
            </Title>
            <PillButton blue large>Upvote</PillButton>
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
