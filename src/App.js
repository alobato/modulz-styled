import React, { Component } from 'react';

import Header from './components/Header.js';
import Section from './components/Section.js';
import Container from './components/Container.js';
import Grid from './components/Grid.js';
import GridColumn from './components/GridColumn.js';
import Spacing from './components/Spacing.js';
import Alignment from './components/Alignment.js';
import Button from './components/Button.js';
import Text from './components/Text.js';
import Link from './components/Link.js';
import Heading from './components/Heading.js';
import PillButton from './components/PillButton.js';
import Divider from './components/Divider.js';

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

        <Section h90>
          <Container medium>
            <Alignment center>
              <Spacing mb4>
                <Heading large>A big ass heading to introduce stuff</Heading>
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
          </Container>
        </Section>

        <Section large teal>
          <Container large>
            <Alignment center>
              <Grid>
                <GridColumn column_12 bps_column_6>
                  <Spacing mb3>
                    <Heading thin gray_500>This is a small heading</Heading>
                  </Spacing>
                  <Text large>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                </GridColumn>
                <GridColumn column_12 bps_column_6>
                  <Spacing mb3>
                    <Heading thin gray_500>This is a small heading</Heading>
                  </Spacing>
                  <Text large>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                </GridColumn>
              </Grid>
            </Alignment>
          </Container>
        </Section>

        <Section large gray_100>
          <Container large>
            <Grid>
              <GridColumn column_12 bps_column_8>
                <Grid>
                  <GridColumn column_12 bps_column_6>
                    <Spacing mb3>
                      <Heading thin gray_500>This is a small heading</Heading>
                    </Spacing>
                    <Text>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                  </GridColumn>
                  <GridColumn column_12 bps_column_6>
                    <Spacing mb3>
                      <Heading thin gray_500>This is a small heading</Heading>
                    </Spacing>
                    <Text>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                  </GridColumn>
                  <GridColumn column_12 bps_column_6>
                    <Spacing mb3>
                      <Heading thin gray_500>This is a small heading</Heading>
                    </Spacing>
                    <Text>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                  </GridColumn>
                  <GridColumn column_12 bps_column_6>
                    <Spacing mb3>
                      <Heading thin gray_500>This is a small heading</Heading>
                    </Spacing>
                    <Text>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                  </GridColumn>
                </Grid>
              </GridColumn>
              <GridColumn column_12 bps_column_4>
                <Spacing mb3>
                  <Heading thin gray_500>This is a small heading</Heading>
                </Spacing>
                <Text>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
              </GridColumn>
            </Grid>
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

        <Divider></Divider>

        <Section large>
          <Container large>
            <Grid>
              <GridColumn column_12 bps_column_4>
                <Spacing mb3>
                  <Heading small>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
                <Spacing mt4>
                  <Link>Link to something</Link>
                </Spacing>
              </GridColumn>
              <GridColumn column_12 bps_column_4>
                <Spacing mb3>
                  <Heading small>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
                <Spacing mt4>
                  <Link>Link to something</Link>
                </Spacing>
              </GridColumn>
              <GridColumn column_12 bps_column_4>
                <Spacing mb3>
                  <Heading small>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
                <Spacing mt4>
                  <Link>Link to something</Link>
                </Spacing>
              </GridColumn>
            </Grid>
          </Container>
        </Section>

        <Section large gray_700>
          <Container large>
            <Alignment center>
              <Spacing mb6>
                <Heading white>This is a main heading</Heading>
                <Spacing mt3>
                  <Heading thin gray_500>This is a small heading</Heading>
                </Spacing>
              </Spacing>
            </Alignment>
            <Grid>
              <GridColumn column_12 bps_column_3>
                <Spacing mb3>
                  <Heading small greenTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </GridColumn>
              <GridColumn column_12 bps_column_3>
                <Spacing mb3>
                  <Heading small lavenderTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </GridColumn>
              <GridColumn column_12 bps_column_3>
                <Spacing mb3>
                  <Heading small blueTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </GridColumn>
              <GridColumn column_12 bps_column_3>
                <Spacing mb3>
                  <Heading small amberTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </GridColumn>
              <GridColumn column_12 bps_column_3>
                <Spacing mb3>
                  <Heading small greenTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </GridColumn>
              <GridColumn column_12 bps_column_3>
                <Spacing mb3>
                  <Heading small lavenderTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </GridColumn>
              <GridColumn column_12 bps_column_3>
                <Spacing mb3>
                  <Heading small blueTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </GridColumn>
              <GridColumn column_12 bps_column_3>
                <Spacing mb3>
                  <Heading small amberTint>Heading</Heading>
                </Spacing>
                <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
              </GridColumn>
            </Grid>
          </Container>
        </Section>

        <Section large gray_800>
          <Container medium>
            <Alignment center>
              <Spacing mb7>
                <Heading white>This is a main heading</Heading>
                <Spacing mt3>
                  <Heading thin gray_500>Enforcing your security policies doesn’t have to complicate the way you work.</Heading>
                </Spacing>
              </Spacing>
            </Alignment>
          </Container>
          <Container large>
            <Grid>
              <div className="grid-column">
                <Spacing>
                  fwfewfwefewfwe
                </Spacing>
              </div>
              <div className="grid-column">
                <Spacing mb4>
                  <Spacing mb1>
                    <Heading small lavenderTint>Heading</Heading>
                  </Spacing>
                  <Text gray_500>Know who authored code or pushed a commit, automate compliance workflows, and protect branches from accidental changes.</Text>
                </Spacing>
                <Spacing mb4>
                  <Spacing mb1>
                    <Heading small greenTint>Heading</Heading>
                  </Spacing>
                  <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
                </Spacing>
                <Spacing>
                  <Spacing mb1>
                    <Heading small orangeTint>Heading</Heading>
                  </Spacing>
                  <Text gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
                </Spacing>
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
