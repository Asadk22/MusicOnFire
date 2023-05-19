import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "../SubMenu";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import InputFields from "../InputFields";
import "../Sidebar/Sidebar.css";
const Nav = styled.div`
  padding: 2rem;
  background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavIcon = styled(Link)`
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  var nav = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <div style={{ display: "flex", columnGap: "20px" }}>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={() => showSidebar()} />
          </NavIcon>

          <h1
            style={{
              color: "green",
              alignItems: "center",
              display: "flex",
            }}
          >
            Music
          </h1>
        </div>

        <div className="container">
          <InputFields type={"text"} placeholder={"search"} />
          <div>
            <AiIcons.AiOutlineSearch size={25} className="icon" color="black" />
          </div>
        </div>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
  );
};

export default Sidebar;
