import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "shared/styles";
import { LinkProps, Link } from "react-router-dom";
import { BurgerButton } from "components";

const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 780px) {
    justify-content: space-between;
  }
`;
const Items = styled.nav<{ open: boolean }>`
  display: flex;
  > a {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    margin: 20px;
    padding: 0 0 7px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 300ms ease-in-out;
    color: ${colors.primaryTextColor};
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom-color: ${colors.primaryTextColor};
    }
  }
  @media screen and (max-width: 780px) {
    flex-direction: column;
    transition: all 0.3s linear;
    animation: fadeInFromNone 0.5s ease-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    position: ${({ open }) => (open ? "relative" : "absolute")};
  }
`;

interface Props {
  links?: LinkProps[];
  title?: string;
}

const Header = ({ links }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Navbar>
      <Items open={open}>
        {links?.map((link, key) => (
          <Link key={key} to={link.to}>
            {link.title}
          </Link>
        ))}
      </Items>
      <BurgerButton open={open} onClick={() => setOpen(!open)} />
    </Navbar>
  );
};

export default Header;
