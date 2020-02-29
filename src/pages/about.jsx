/* eslint-disable max-len, react/jsx-one-expression-per-line */
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import siteShape from "../shapes/site";
import excelSetupPng from "../images/excel-setup-diagram.png";

const ghLink = <a href="https://github.com/knpwrs">my GitHub</a>;
const patsLink = <a href="http://www.patriots.com/">New England Patriots</a>;
const cdpLink = <a href="http://cursordanceparty.com">Cursor Dance Party</a>;
const esdLink = <a href={excelSetupPng}>full setup diagram</a>;

const ResumeHeader = styled.header(({ theme }) => ({
  ...theme.centerPadding,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  "> h5": {
    margin: 0
  }
}));

const H2 = styled.h2(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing
}));
const H3 = styled.h3(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing
}));
const H4 = styled.h4(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing
}));
const P = styled.p(({ theme }) => ({
  ...theme.centerPadding
}));
const Ul = styled.ul(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
  marginLeft: `${theme.spacingPx * 4}px`
}));

const About = ({
  data: {
    site: { siteMetadata: site }
  }
}) => (
  <Layout>
    <main>
      <Helmet>
        <title>About &middot; {site.title}</title>
      </Helmet>
      <H2>肆号</H2>
      <blockquote>
        <P>
          &quot;若批评不自由，则赞美无意义。(Sans la liberté de blâmer, il n'est
          point d'éloge flatteur)&quot; --《费加罗的婚礼》
        </P>
      </blockquote>
      <P>我不知道该如何评价自己</P>
      <P>
        {/* the {patsLink}. Feel free to take a look around and contact me with any */}
        唯一的定性就是喜欢运动。
      </P>
      <H3>ABOUT</H3>
      <H4>Languages</H4>
      <Ul>
        <li>
          Proficient in: JavaScript (Universal Node / Browser, TypeScript,
          React), HTML5, CSS3 (SCSS)
        </li>
        <li>
          Familiar with: C# and .NET Framework, Java, Ruby, Swift, Rust, SQL
        </li>
      </Ul>
      <H4>Software</H4>
      <Ul>
        <li>Database: PostgreSQL, MySQL, SQL Server, MongoDB</li>
        <li>Server: nginx</li>
        <li>Tools: Docker, Git, Jenkins, Travis CI</li>
        <li>Platforms: macOS, Linux / Unix, Microsoft Windows</li>
      </Ul>
      <H4>Experience</H4>
      {/* <ResumeHeader>
        <h5>Signal Messenger &middot; Desktop Developer &middot; Remote</h5>
        <h5>April 2019 - Present</h5>
      </ResumeHeader>
      <Ul>
        <li>
          Worked with React, Redux, Electron, TypeScript with legacy and modern
          features.
        </li>
        <li>Worked with SQLite and SQLCipher.</li>
        <li>
          Progressively ported features from Backbone and JavaScript to
          React/Redux and TypeScript.
        </li>
        <li>Implemented virtualized, fuzzy-searchable emoji picker.</li>
        <li>Implemented inline emoji typeahead with fuzzy search.</li>
        <li>
          Implemented sticker creator for Signal Desktop utilizing native
          libraries for conversion and encryption.
        </li>
        <li>Implemented protocols with low-level encryption primitives.</li>
        <li>Triaged issues on public GitHub repository.</li>
      </Ul> */}
    </main>
  </Layout>
);

About.propTypes = {
  data: PropTypes.shape({
    site: siteShape
  }).isRequired
};

export default About;

export const aboutPageQuery = graphql`
  query AboutPageSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
