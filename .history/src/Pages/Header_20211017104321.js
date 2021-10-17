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
  return (
    <div>
      <h1>header</h1>
    </div>
  );
};

export default Header;
