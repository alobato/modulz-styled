import React, { Component } from 'react';

import Box from './components/Box.js';
import Section from './components/Section.js';
import Container from './components/Container.js';
import Text from './components/Text.js';
import Heading from './components/Heading.js';
import Divider from './components/Divider.js';
import Grid from './components/Grid.js';
import Image from './components/Image.js';
import Badge from './components/Badge.js';
import Input from './components/Input.js';
import CheckboxButton from './components/CheckboxButton.js';
import ToggleButton from './components/ToggleButton.js';
import Switch from './components/Switch.js';
import Slider from './components/Slider.js';
import Select from './components/Select.js';
import Flexbox from './components/Flexbox.js';
import List from './components/List.js';
import ListItem from './components/ListItem.js';
import LinkItem from './components/LinkItem.js';
import Button from './components/Button.js';
import LinesButton from './components/LinesButton.js';
// import ButtonItem from './components/ButtonItem.js';

import Hero from './templates/Hero.jsx';
import CodeExport from './templates/CodeExport.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Section size3>
          <Container size3>
            <Heading size2 gray600 mb6>
              Heading
            </Heading>

            <Heading size1>
              Love life.Love yourself.
            </Heading>
            <Heading size2>
              Love life.Love yourself.
            </Heading>
            <Heading size3>
              Love life.Love yourself.
            </Heading>
            <Heading size4>
              Love life.Love yourself.
            </Heading>
            <Heading size5>
              Love life.Love yourself.
            </Heading>
            <Heading size6>
              Love life.Love yourself.
            </Heading>
          </Container>
        </Section>

        <Section size3>
          <Container size3>
            <Heading size2 gray600 mb6>
              Text
            </Heading>
            <Text size1>
              Love life.Love yourself.
            </Text>
            <Text size2>
              Love life.Love yourself.
            </Text>
            <Text size3>
              Love life.Love yourself.
            </Text>
            <Text size4>
              Love life.Love yourself.
            </Text>
            <Text size5>
              Love life.Love yourself.
            </Text>
            <Text size6>
              Love life.Love yourself.
            </Text>
            <Text size7>
              Love life.Love yourself.
            </Text>
            <Text size8>
              Love life.Love yourself.
            </Text>
          </Container>
        </Section>

        <Section size3>
          <Container size4>
            <Heading size2 gray600 mb6>
              Divider
            </Heading>
            <Divider vertical size3></Divider>
          </Container>
        </Section>

        <Section size3>
          <Container size3>
            <Heading size2 gray600 mb6>
              Grid
            </Heading>
            <Grid cols2>
              <Text size4 lh3>
                It would have been absolutely hilarious if Chris Tucker came out at the end!!!!
              </Text>
              <Text size4 lh3>
                It would have been absolutely hilarious if Chris Tucker came out at the end!!!!
              </Text>
              <Text size4 lh3>
                It would have been absolutely hilarious if Chris Tucker came out at the end!!!!
              </Text>
              <Text size4 lh3>
                It would have been absolutely hilarious if Chris Tucker came out at the end!!!!
              </Text>
            </Grid>
          </Container>
        </Section>

        <Section size3>
          <Container size3>
            <Heading size2 gray600 mb6>
              Badge
            </Heading>
            <Flexbox>
              <Badge>
                Coming soon
              </Badge>
              <Badge blue>
                Coming soon
              </Badge>
              <Badge green>
                Coming soon
              </Badge>
              <Badge yellow>
                Coming soon
              </Badge>
              <Badge red>
                Coming soon
              </Badge>
            </Flexbox>
          </Container>
        </Section>

        <Section size3>
          <Container size4>
            <Heading size2 gray600 mb6>
              Input
            </Heading>
            <Input
              type="text"
              placeholder="Font size"
              />
          </Container>
        </Section>

        <Section size3>
          <Container size4>
            <Heading size2 gray600 mb6>
              Select
            </Heading>
            <Select>
              <option>10</option>
              <option>12</option>
              <option>14</option>
              <option>16</option>
            </Select>
          </Container>
        </Section>

        <Section size3>
          <Container size4>
            <Heading size2 gray600 mb6>
              Toggle button
            </Heading>
            <ToggleButton
              name="text_alignment"
              checked={true}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor">
                <path d="M0 0H9" transform="translate(4 16.5)" />
                <path d="M0 0H17" transform="translate(4 12.5)" />
                <path d="M0 0H9" transform="translate(4 8.5)" />
              </svg>
            </ToggleButton>
            <ToggleButton
              name="text_alignment">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                <path d="M0 0H9" transform="translate(8 16.5)"/>
                <path d="M0 0H17" transform="translate(4 12.5)"/>
                <path d="M0 0H9" transform="translate(8 8.5)"/>
              </svg>
            </ToggleButton>
            <ToggleButton
              name="text_alignment">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                <path d="M0 0H9" transform="translate(12 16.5)"/>
                <path d="M0 0H17" transform="translate(4 12.5)"/>
                <path d="M0 0H9" transform="translate(12 8.5)"/>
              </svg>
            </ToggleButton>
            <ToggleButton
              name="text_alignment">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                <path d="M0 0H17" transform="translate(4 16.5)"/>
                <path d="M0 0H17" transform="translate(4 12.5)"/>
                <path d="M0 0H17" transform="translate(4 8.5)"/>
              </svg>
            </ToggleButton>
          </Container>
        </Section>

        <Section size3>
          <Container size4>
            <Heading size2 gray600 mb6>
              Checkbox button
            </Heading>
            <Flexbox mb6>
              <CheckboxButton
                name="favourite">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <circle cx="5.5" cy="5.5" r="5" transform="translate(2 2)"/>
                  <path d="M0 7L7 0" transform="translate(4 4)"/>
                </svg>
              </CheckboxButton>
              <CheckboxButton
                size="2"
                name="disable"
                checked={true}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <circle cx="5.5" cy="5.5" r="5" transform="translate(2 2)"/>
                  <path d="M0 7L7 0" transform="translate(4 4)"/>
                </svg>
              </CheckboxButton>
            </Flexbox>
            <Flexbox>
              <CheckboxButton
                color="blue"
                name="favourite">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <circle cx="5.5" cy="5.5" r="5" transform="translate(2 2)"/>
                  <path d="M0 7L7 0" transform="translate(4 4)"/>
                </svg>
              </CheckboxButton>
              <CheckboxButton
                color="green"
                name="favourite">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <circle cx="5.5" cy="5.5" r="5" transform="translate(2 2)"/>
                  <path d="M0 7L7 0" transform="translate(4 4)"/>
                </svg>
              </CheckboxButton>
              <CheckboxButton
                color="yellow"
                name="favourite">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <circle cx="5.5" cy="5.5" r="5" transform="translate(2 2)"/>
                  <path d="M0 7L7 0" transform="translate(4 4)"/>
                </svg>
              </CheckboxButton>
              <CheckboxButton
                color="red"
                name="favourite">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <circle cx="5.5" cy="5.5" r="5" transform="translate(2 2)"/>
                  <path d="M0 7L7 0" transform="translate(4 4)"/>
                </svg>
              </CheckboxButton>
            </Flexbox>
          </Container>
        </Section>

        <Section size3>
          <Container size4>
            <Heading size2 gray600 mb6>
              Switch
            </Heading>
            <Switch />
          </Container>
        </Section>

        <Section size3>
          <Container size4>
            <Heading size2 gray600 mb6>
              Slider
            </Heading>
            <Slider
              type="range" />
          </Container>
        </Section>

        <Section size3>
          <Container size4>
            <Heading size2 gray600 mb6>
              List item
            </Heading>
            <List>
              <ListItem size1>
                <Text size2>
                  First item
                </Text>
              </ListItem>
              <ListItem size1>
                <Text size2>
                  Second item
                </Text>
              </ListItem>
              <ListItem size1>
                <Text size2>
                  Third item
                </Text>
              </ListItem>
              <ListItem size1>
                <Text size2>
                  Fourth item
                </Text>
              </ListItem>
            </List>
          </Container>
        </Section>

        <Section size3>
          <Container size4>
            <Heading size2 gray600 mb6>
              Link item
            </Heading>
            <List>
              <LinkItem size1
                href="http://www.youtube.com"
                target="_blank">
                <Text size2>
                  First item
                </Text>
              </LinkItem>
            </List>
          </Container>
        </Section>

        <Section size3>
          <Container size3>
            <Heading size2 gray600 mb6>
              Button
            </Heading>
            <Flexbox mb6>
              <Button>
                Save changes
              </Button>
              <Button size2>
                Save changes
              </Button>
            </Flexbox>
            <Flexbox mb6>
              <Button size2>
                Save changes
              </Button>
              <Button size2 blue>
                Save changes
              </Button>
              <Button size2 green>
                Save changes
              </Button>
              <Button size2 red>
                Save changes
              </Button>
            </Flexbox>
            <Flexbox mb6>
              <Button size2 left>
                Left
              </Button>
              <Button size2 middle>
                Middle
              </Button>
              <Button size2 right>
                Right
              </Button>
            </Flexbox>
            <Flexbox mb6>
              <Button>
                <Box mr1>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                    <circle cx="5.5" cy="5.5" r="5" transform="translate(2 2)"/>
                    <path d="M0 7L7 0" transform="translate(4 4)"/>
                  </svg>
                </Box>
                Disable
              </Button>
              <Button size2>
                <Box mr1>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                    <circle cx="8.5" cy="8.5" r="8" transform="translate(4 4)"/>
                    <path d="M0 11L11 0" transform="translate(7 7)"/>
                  </svg>
                </Box>
                Disable
              </Button>
            </Flexbox>
            <Flexbox mb6>
              <Button size2 active>
                Active
              </Button>
            </Flexbox>
            <Flexbox>
              <Button size2 disabled>
                Disabled
              </Button>
            </Flexbox>
          </Container>
        </Section>

        <Section size3>
          <Container size3>
            <Heading size2 gray600 mb6>
              Lines button
            </Heading>
            <Flexbox mb6>
              <LinesButton>
                Start designing
              </LinesButton>
            </Flexbox>
            <Flexbox mb6>
              <LinesButton>
                <Box mr3>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                    <circle cx="8.5" cy="8.5" r="8" transform="translate(4 4)"/>
                    <path d="M0 11L11 0" transform="translate(7 7)"/>
                  </svg>
                </Box>
                Start designing
              </LinesButton>
            </Flexbox>
          </Container>
        </Section>

        <Section size3>
          <Container size3>
            <Heading size2 gray600 mb6>
              Image
            </Heading>
            <Image
              src="https://images.unsplash.com/photo-1530484490308-d5f6e103e149?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db3be4d42ecb40d27750b3e13d05d306&auto=format&fit=crop&w=1650&q=80">
            </Image>
          </Container>
        </Section>

        <Hero></Hero>
        <CodeExport></CodeExport>
      </div>
    );
  }
}

export default App;
