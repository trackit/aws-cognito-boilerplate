import styled from "styled-components";
import React from "react";
import { colors } from "shared/styles";

const Button = styled.button<{ open: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.95rem;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${colors.primaryTextColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media screen and (max-width: 780px) {
    display: flex;
    margin: 20px 20px 0 auto;
  }
`;

interface Props {
  onClick: () => void;
  open: boolean;
}

/*
  <BurgerButton> is used inside the <Header> component when the screen breakpoint is reached
*/
const BurgerButton = ({ onClick, open }: Props) => {
  return (
    <Button open={open} onClick={onClick}>
      <div />
      <div />
      <div />
    </Button>
  );
};

export default BurgerButton;
