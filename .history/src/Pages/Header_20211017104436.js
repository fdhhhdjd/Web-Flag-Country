import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
const Header = () => {
  const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  `;

  const Title = styled(Link).attrs({
    to: "/",
  })`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
  `;

  const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    // font-weight: var(--fw-bold);
    text-transform: capitalize;
  `;
  return (
    <>
      <HeaderEl>
        <Container>
          <Wrapper>
            <Title>Where is the world?</Title>
          </Wrapper>
        </Container>
      </HeaderEl>
    </>
  );
};

export default Header;
