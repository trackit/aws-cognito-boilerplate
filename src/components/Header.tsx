import React from "react";
import styled from "styled-components";
import { colors } from "shared/styles";
import { LinkProps, Link } from "react-router-dom";
import { Burger, LinkWrapper } from "components";

const Navbar = styled.div`
  display: flex;
  color: ${colors.secondaryTextColor};
`;

interface IProps {
  links?: LinkProps[];
  title?: string;
}

const Header = ({ links, title }: IProps) => {
  return (
    <Navbar>
      {links?.map((link, key) => (
        <LinkWrapper key={key}>
          <Link to={link.to}>{link.title}</Link>
        </LinkWrapper>
      ))}
      <Burger />
    </Navbar>
  );
};

export default Header;
