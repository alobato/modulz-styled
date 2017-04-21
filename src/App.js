import React, { Component } from 'react';

import Section from './Section.js';
import Container from './Container.js';
import Grid from './Grid.js';
import Spacing from './Spacing.js';
import Alignment from './Alignment.js';
import Button from './Button.js';
import Text from './Text.js';
import Link from './Link.js';
import Heading from './Heading.js';
import PillButton from './PillButton.js';

class App extends Component {
  render() {
    return (
      <div>
        <Section small>
          <Container>
            <Grid>
              <div className="grid-column">
                <Heading small>Logo</Heading>
              </div>
              <div className="grid-column">
                <Alignment right>
                  <Grid>
                    <div className="grid-column">
                      <Link>Features</Link>
                    </div>
                    <div className="grid-column">
                      <Link>About</Link>
                    </div>
                    <div className="grid-column">
                      <Link>Pricing</Link>
                    </div>
                    <div className="grid-column">
                      <Link>Blog</Link>
                    </div>
                  </Grid>
                </Alignment>
              </div>
            </Grid>
          </Container>
        </Section>
        <Section large>
          <Container medium>
            <Alignment center>
              <Spacing mb4>
                <Heading large>Write better code</Heading>
              </Spacing>
              <Heading thin gray>On GitHub, lightweight code review tools are built into every pull request. Your team can create review processes that improve the quality of your code and fit neatly into your workflow.</Heading>
              <Spacing mt5>
                <Link teal>See how it works</Link>
                <Link teal>Explore the features</Link>
              </Spacing>
              <Spacing mt6>
                <PillButton large white>Get started</PillButton>
                <PillButton large crimson>Learn more</PillButton>
              </Spacing>
              <Spacing mt3>
                <Text small gray_500>* Make sure you read this before signing up.</Text>
              </Spacing>
            </Alignment>
          </Container>
        </Section>

        <Section large tealTint>
          <Container medium>
            <Alignment center>
                  <Spacing mb3>
                    <Heading thin>This is a big ass quote from a glowing testimonial from a loyal customer.</Heading>
                  </Spacing>
                  <Text small gray_500>Colm Tuite</Text>
            </Alignment>
          </Container>
        </Section>

        <Section large tealTint>
          <Container large>
            <Alignment center>
              <Grid>
                <div className="grid-column">
                  <Spacing mb3>
                    <Heading thin gray_500>This is a small heading</Heading>
                  </Spacing>
                  <Text large teal>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                </div>
                <div className="grid-column">
                  <Spacing mb3>
                    <Heading thin gray_500>This is a small heading</Heading>
                  </Spacing>
                  <Text large>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                </div>
              </Grid>
            </Alignment>
          </Container>
        </Section>

        <Section large>
          <Container medium>
            <Alignment center>
              <Text large>We’re looking for talented creatives from all disciplines.</Text>
              <Spacing mt5>
                <PillButton crimson>Learn more</PillButton>
              </Spacing>
            </Alignment>
          </Container>
        </Section>

        <Section large>
          <Container large>
            <Grid>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small>Symbols</Heading>
                </Spacing>
                <Text gray_500>Symbols are groups of elements you can copy and paste throughout your documents. Change one, and all of them will change automatically.</Text>
              </div>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small>Layer Styles</Heading>
                </Spacing>
                <Text gray_500>Layer styles let you automatically sync borders, fills, shadows and other style elements across multiple layers.</Text>
              </div>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small>Text Styles</Heading>
                </Spacing>
                <Text gray_500>Text Styles let you set a font, size and style once, and have it change across multiple text layers.</Text>
              </div>
            </Grid>
          </Container>
        </Section>

        <Section large amberTint>
          <Container large>
            <Alignment center>
              <Spacing mb5>
                <Heading red>This is a main heading</Heading>
                <Spacing mt1>
                  <Heading thin gray_500>This is a small heading</Heading>
                </Spacing>
              </Spacing>
            </Alignment>
            <Grid>
              <div className="grid-column">
                <Text large>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                <Spacing mt6>
                  <PillButton large white>Get started</PillButton>
                </Spacing>
              </div>
              <div className="grid-column">
                <Grid>
                  <div className="grid-column">
                    <Text>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                  </div>
                  <div className="grid-column">
                    <Text>We are having a problem billing your account. Please enter a new payment method or check with your payment provider.</Text>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Container>
        </Section>

        <Section large gray_800>
          <Container large>
            <Alignment center>
              <Spacing mb6>
                <Heading white>This is a main heading</Heading>
                <Spacing mt1>
                  <Heading thin gray_500>This is a small heading</Heading>
                </Spacing>
              </Spacing>
            </Alignment>
            <Grid>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small greenTint>Symbols</Heading>
                </Spacing>
                <Text gray_500>Symbols are groups of elements you can copy and paste throughout your documents. Change one, and all of them will change automatically.</Text>
              </div>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small lavenderTint>Layer Styles</Heading>
                </Spacing>
                <Text gray_500>Layer styles let you automatically sync borders, fills, shadows and other style elements across multiple layers.</Text>
              </div>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small blueTint>Layer Styles</Heading>
                </Spacing>
                <Text gray_500>Layer styles let you automatically sync borders, fills, shadows and other style elements across multiple layers.</Text>
              </div>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small amberTint>Text Styles</Heading>
                </Spacing>
                <Text gray_500>Text Styles let you set a font, size and style once, and have it change across multiple text layers.</Text>
              </div>
            </Grid>
          </Container>
        </Section>

      </div>
    );
  }
}

export default App;
