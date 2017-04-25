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
            <GridColumn column_12 bpm_column_6>
              <Heading small>Logo</Heading>
            </GridColumn>
            <GridColumn column_12 bpm_column_6>
              <Alignment right>
                <Grid>
                  <GridColumn>
                    <Link light>Features</Link>
                  </GridColumn>
                  <GridColumn>
                    <Link light>About</Link>
                  </GridColumn>
                  <GridColumn>
                    <Link light>Support</Link>
                  </GridColumn>
                  <GridColumn>
                    <Link light>Pricing</Link>
                  </GridColumn>
                  <GridColumn>
                    <Link light>Blog</Link>
                  </GridColumn>
                </Grid>
              </Alignment>
            </GridColumn>
          </Grid>
        </Header>

        <Section h90>
          <Container>
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

        <Section large violetShade>
          <Container large>
            <Spacing mb8>
              <Heading large red>Love life.<br></br> Love yourself.</Heading>
            </Spacing>
            <Grid>
              <GridColumn column_12 bps_column_6>
                <Spacing mb5>
                  <Spacing mb2>
                    <Heading tealTint>Search.</Heading>
                  </Spacing>
                  <Text violetTint>Know what you want to listen to! Just search and hit play.</Text>
                </Spacing>
                <Spacing mb5>
                  <Spacing mb2>
                    <Heading tealTint>Browse.</Heading>
                  </Spacing>
                  <Text violetTint>Check out the latest charts, brand new releases and great playlists for right now.</Text>
                </Spacing>
                <Spacing>
                  <Spacing mb2>
                    <Heading tealTint>Discover.</Heading>
                  </Spacing>
                  <Text violetTint>Enjoy new music every Monday with your own personal playlist. Or sit back and enjoy Radio.</Text>
                </Spacing>
              </GridColumn>
              <GridColumn column_12 bps_column_6>

              </GridColumn>
            </Grid>
          </Container>
        </Section>

        <Section large amberTint>
          <Container large>
            <Spacing mb8>
              <Heading large indigoShade>Love life.<br></br> Love yourself.</Heading>
            </Spacing>
            <Grid>
              <GridColumn column_12 bps_column_6>
                <Spacing mb5>
                  <Spacing mb2>
                    <Heading pink>Search.</Heading>
                  </Spacing>
                  <Text gray_500>Know what you want to listen to! Just search and hit play.</Text>
                </Spacing>
                <Spacing mb5>
                  <Spacing mb2>
                    <Heading pink>Browse.</Heading>
                  </Spacing>
                  <Text gray_500>Check out the latest charts, brand new releases and great playlists for right now.</Text>
                </Spacing>
                <Spacing>
                  <Spacing mb2>
                    <Heading pink>Discover.</Heading>
                  </Spacing>
                  <Text gray_500>Enjoy new music every Monday with your own personal playlist. Or sit back and enjoy Radio.</Text>
                </Spacing>
              </GridColumn>
              <GridColumn column_12 bps_column_6>

              </GridColumn>
            </Grid>
          </Container>
        </Section>

        <Section large gray_900>
          <Container large>
            <Spacing mb8>
              <Heading large amberTint>Love life.<br></br> Love yourself.</Heading>
            </Spacing>
            <Grid>
              <GridColumn column_12 bps_column_6>
                <Spacing mb5>
                  <Spacing mb2>
                    <Heading red>Search.</Heading>
                  </Spacing>
                  <Text gray_500>Know what you want to listen to! Just search and hit play.</Text>
                </Spacing>
                <Spacing mb5>
                  <Spacing mb2>
                    <Heading red>Browse.</Heading>
                  </Spacing>
                  <Text gray_500>Check out the latest charts, brand new releases and great playlists for right now.</Text>
                </Spacing>
                <Spacing>
                  <Spacing mb2>
                    <Heading red>Discover.</Heading>
                  </Spacing>
                  <Text gray_500>Enjoy new music every Monday with your own personal playlist. Or sit back and enjoy Radio.</Text>
                </Spacing>
              </GridColumn>
              <GridColumn column_12 bps_column_6>

              </GridColumn>
            </Grid>
          </Container>
        </Section>

        <Section large amberTint>
          <Container large>
            <Spacing mb8>
              <Heading large crimson>Love life.<br></br> Love yourself.</Heading>
            </Spacing>
            <Grid>
              <GridColumn column_12 bps_column_6>
                <Spacing mb5>
                  <Spacing mb2>
                    <Heading redShade>Search.</Heading>
                  </Spacing>
                  <Text>Know what you want to listen to! Just search and hit play.</Text>
                </Spacing>
                <Spacing mb5>
                  <Spacing mb2>
                    <Heading redShade>Browse.</Heading>
                  </Spacing>
                  <Text>Check out the latest charts, brand new releases and great playlists for right now.</Text>
                </Spacing>
                <Spacing>
                  <Spacing mb2>
                    <Heading redShade>Discover.</Heading>
                  </Spacing>
                  <Text>Enjoy new music every Monday with your own personal playlist. Or sit back and enjoy Radio.</Text>
                </Spacing>
              </GridColumn>
              <GridColumn column_12 bps_column_6>

              </GridColumn>
            </Grid>
          </Container>
        </Section>

        <Section large>
          <Container large>
            <Alignment bps_center>
              <Grid>
                <GridColumn column_12 bps_column_6>
                  <Spacing mb3>
                    <Heading thin>This is a small heading</Heading>
                  </Spacing>
                  <Text large gray_500>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                </GridColumn>
                <GridColumn column_12 bps_column_6>
                  <Spacing mb3>
                    <Heading thin>This is a small heading</Heading>
                  </Spacing>
                  <Text large gray_500>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                </GridColumn>
              </Grid>
            </Alignment>
          </Container>
        </Section>

        <Section large gray_200>
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
          <Container>
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
              <GridColumn column_12 bps_column_6 bpm_column_3>
                <Spacing mb3>
                  <Heading small>Heading</Heading>
                </Spacing>
                <Text large gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
                <Spacing mt4>
                  <Link>Link to something</Link>
                </Spacing>
              </GridColumn>
              <GridColumn column_12 bps_column_6 bpm_column_3>
                <Spacing mb3>
                  <Heading small>Heading</Heading>
                </Spacing>
                <Text large gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
                <Spacing mt4>
                  <Link>Link to something</Link>
                </Spacing>
              </GridColumn>
              <GridColumn column_12 bps_column_6 bpm_column_3>
                <Spacing mb3>
                  <Heading small>Heading</Heading>
                </Spacing>
                <Text large gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
                <Spacing mt4>
                  <Link>Link to something</Link>
                </Spacing>
              </GridColumn>
              <GridColumn column_12 bps_column_6 bpm_column_3>
                <Spacing mb3>
                  <Heading small>Heading</Heading>
                </Spacing>
                <Text large gray_500>Luther sang so beautifully, he's one of those people that I can listen to over and over. Mariahs voice is beautiful as well.</Text>
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
          <Container>
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
              <GridColumn>
                <Spacing>
                  fwfewfwefewfwe
                </Spacing>
              </GridColumn>
              <GridColumn>
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
              </GridColumn>
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
