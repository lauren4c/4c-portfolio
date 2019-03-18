import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "react-emotion";
import { Flex } from "grid-emotion";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import GridItem from "../components/GridItem";
import Headshot from "../images/headshot-circle.png";

const Header = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 1.75rem;
  background: linear-gradient(90deg, #6d4d9f, #00bfd9);
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    height: 700px;
  }
`;

const Logo = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1.75rem;
  margin-top: 50px;
`;

const Hero = styled(Flex)`
  height: 100vh;
  text-align: center;
  h1 {
    letter-spacing: 0.1rem;
    line-height: 3.5rem;
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 2rem;
    font-size: 1.85rem;
    font-weight: 400;
    line-height: 2.5rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    h1 {
      line-height: 3.5rem;
      letter-spacing: 0rem;
    }
    h3 {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    h1 {
      line-height: 2.5rem;
      letter-spacing: 0rem;
    }
    h3 {
      font-size: 1.3rem;
      line-height: 1.75rem;
    }
  }
`;

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
`;

const PrimaryBG = styled.section`
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.textInvert};
  }
`;

const ServiceImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 80%;
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    img {
      width: 75%;
    }
  }
`;

const ServiceText = styled.div`
  flex-basis: calc(99.9% * 3 / 7 - 5rem);
  max-width: calc(99.9% * 3 / 7 - 5rem);
  width: calc(99.9% * 3 / 7 - 5rem);
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: "－";
    padding-right: 8px;
  }

  h4:before {
    line-height: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
`;

const Contact = styled(Wrapper)`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    font-size: 1.5rem;
  }
`;

const IndexPage = ({
  data: {
    caseStudies: { edges }
  }
}) => (
  <Layout>
    <Header>
      <Hero justifyContent="center" alignItems="center" flexDirection="column">
        <h1>Hey there!</h1>
        <h3>
          My name is Lauren and I am a designer and developer.
          <br />
          Let's create something amazing together.
        </h3>
      </Hero>
    </Header>

    <Wrapper
      p={3}
      mb={[4, 4, 7]}
      mx="auto"
      justifyContent="space-around"
      flexWrap="wrap-reverse"
    >
      {edges.map(c => (
        <GridItem
          uid={c.node.uid}
          key={c.node.uid}
          image={c.node.data.header_image.localFile.childImageSharp.fluid}
          alt={c.node.data.title.text}
          title={c.node.data.title.text}
          subtitle={c.node.data.subtitle.text}
        />
      ))}
    </Wrapper>
    <PrimaryBG>
      <Wrapper flexDirection="column" p={4} mx="auto">
        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={Headshot} alt="Lauren Forcey headshot" />
          </ServiceImage>
          <ServiceText>
            <h2>Who is Lauren Forcey, anyway?</h2>
            <p>
              I'm so glad you asked! I'm a thoughtful and curious graphic
              designer turned front end developer now ready to take on all
              things print and web! I love problem-solving and live by the "less
              is more" concept. Responsive, clean code and designs are what make
              me smile, as do my two dogs and cat. Let's hit the trail or chat
              over a coffee or beer about your next project we can tackle
              together. My skill tacklebox includes:
            </p>
            <ul>
              <h4>Computer Languages:</h4>
              <li>
                JavaScript (ES6+), HTML5, CSS3, Git & GitHub, Heroku, Netlify
              </li>
              <h4> Frameworks/Libraries:</h4>
              <li>React.js, Gastby, jQuery, NPM, Webpack</li>
              <h4>Databases/Back-End:</h4>
              <li>Node.js, PostgresSQL</li>
              <h4>Design:</h4>
              <li>
                Adobe Creative Suite, Graphic Design, Publication & Ad Design,
                Project Management
              </li>
            </ul>
          </ServiceText>
        </Flex>
      </Wrapper>
    </PrimaryBG>
    <Contact
      px={4}
      py={6}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <h1>Let's Chat!</h1>
      <h3>
        <a href="mailto:lauren@laurenforcey.com">Lauren@LaurenForcey.com</a>
      </h3>
    </Contact>
    <Footer />
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    caseStudies: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
};

export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(
      sort: { fields: [last_publication_date], order: DESC }
    ) {
      edges {
        node {
          uid
          data {
            header_image {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;
