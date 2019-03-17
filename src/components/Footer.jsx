import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { Link } from "gatsby";
import { Flex } from "grid-emotion";
import GitHub from "../images/_ionicons_svg_logo-github.svg";
import LinkedIn from "../images/_ionicons_svg_logo-linkedin.svg";

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.greyDark};
  color: ${props => props.theme.colors.greyLight};
  a {
    color: ${props => props.theme.colors.bg};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`;

const Inner = styled(Flex)`
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
    div:last-child {
      margin-top: 1rem;
    }
  }
`;
const FooterImage = styled.section`
  img {
    height: 2.5rem;
  }
  .svg {
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(146deg)
      brightness(116%) contrast(104%);
  }
`;
const StyledLink = styled(Link)`
  transform: translateX(0);
  transition: all 200ms ease-out;
  &:before {
    content: "←";
    padding-right: 8px;
  }
  &:hover {
    color: ${props => props.theme.colors.bg};
    transform: translateX(-6px);
  }
`;

const Footer = ({ isCase }) => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Inner justifyContent="space-between" p={4}>
        {isCase ? (
          <React.Fragment>
            <StyledLink to="/">Return to home</StyledLink>
            <div>
              <a href="mailto: lauren@laurenforcey.com">Contact Me</a>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
              Copyright &copy; {year} by{" "}
              <a href="lauren@laurenforcey.com">Lauren Forcey</a>. Built with{" "}
              <a href="https://www.gatsbyjs.org/">Gastby</a> on top of{" "}
              <a href="https://reactjs.org/">React</a>, utilizing{" "}
              <a href="http://prismic.io">Prismic.io</a>.
            </div>
            <FooterImage>
              <div>
                <a href="https://github.com/lauren4c">
                  <img src={GitHub} className="svg" alt="Github Logo" />
                </a>
                {"   "}
                <a href="https://www.linkedin.com/in/lauren4c/">
                  <img className="svg" src={LinkedIn} alt="Linkedin Logo" />
                </a>
              </div>
            </FooterImage>
          </React.Fragment>
        )}
      </Inner>
    </Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  isCase: PropTypes.bool
};

Footer.defaultProps = {
  isCase: false
};
