import React, { Component } from 'react';

import Header from './Header.js';
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

        <Header absolute>
          <Grid>
            <div className="grid-column">
              <Heading small>Logo</Heading>
            </div>
            <div className="grid-column">
              <Alignment right>
                <Grid>
                  <div className="grid-column">
                    <Link light>Features</Link>
                  </div>
                  <div className="grid-column">
                    <Link light>About</Link>
                  </div>
                  <div className="grid-column">
                    <Link light>Support</Link>
                  </div>
                  <div className="grid-column">
                    <Link light>Pricing</Link>
                  </div>
                  <div className="grid-column">
                    <Link light>Blog</Link>
                  </div>
                </Grid>
              </Alignment>
            </div>
          </Grid>
        </Header>

        <Section large>
          <Container medium>
            <Spacing pt5 pb5>
              <Alignment center>
                <Spacing mb4>
                  <Heading large>Big ass heading</Heading>
                </Spacing>
                <Heading thin gray>A little ass sub heading to support the big ass heading above. Try not to exceed three lines of text.</Heading>
                <Spacing mt5>
                  <Spacing inline mr3>
                    <Link teal>See how it works</Link>
                  </Spacing>
                  <Spacing inline ml3>
                    <Link teal>Explore the features</Link>
                  </Spacing>
                </Spacing>
                <Spacing mt6>
                  <Spacing inline mr4>
                    <PillButton large white>Get started</PillButton>
                  </Spacing>
                  <Spacing inline mr4>
                    <PillButton large crimson>Learn more</PillButton>
                  </Spacing>
                </Spacing>
                <Spacing mt3>
                  <Text small gray_500>* Make sure you read this before signing up.</Text>
                </Spacing>
              </Alignment>
            </Spacing>
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
                  <Text large>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
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
                  <Heading small>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </div>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </div>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </div>
            </Grid>
          </Container>
        </Section>

        <Section large gray_700>
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
                  <Heading small greenTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </div>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small lavenderTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </div>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small blueTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </div>
              <div className="grid-column">
                <Spacing mb3>
                  <Heading small amberTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </div>
            </Grid>
          </Container>
        </Section>

        <Section medium gray_800>
          <Container large>
              <Text gray_500>Copyright &copy; 1864</Text>
          </Container>
        </Section>

      </div>
    );
  }
}

export default App;
