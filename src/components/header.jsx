/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "@emotion/styled";
import { Link, A } from "./header-footer-anchor";

const Header = styled.header(({ theme }) => ({
  padding: `0 ${theme.spacing}`,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: theme.headerHeight,
  lineHeight: theme.headerHeight,
  color: theme.textColor,
  [theme.smallMedia]: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "space-between",
    height: "50px",
    lineHeight: "20px"
  },
  [theme.largeMedia]: {
    ...theme.centerPadding
  }
}));

const H1 = styled.h1(({ theme }) => ({
  fontSize: "1.25rem",
  margin: 0,
  [theme.smallMedia]: {
    fontSize: "1rem"
  }
}));

const Small = styled.small({
  fontSize: "75%",
  opacity: 0.35
});

const Nav = styled.nav(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  textTransform: "uppercase",
  a: {
    marginLeft: theme.spacing
  }
}));

const SiteHeader = () => (
  <Header>
    <H1>
      <Small>With</Small> <Link to="/">似号</Link>{" "}
      <Small>枪炮、病菌与键盘</Small>
    </H1>
    <Nav>
      <Link to="/">Blog</Link>
      <Link to="/about">关于</Link>
      <A href="https://github.com/nikomaniac">GitHub</A>
      <A href="https://twitter.com/4sihao">Twitter</A>
    </Nav>
  </Header>
);

export default SiteHeader;
