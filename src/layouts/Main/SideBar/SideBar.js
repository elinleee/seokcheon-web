// /* src/layouts/Main/SideBar/SideBar.js */
// /* React */
// import React from 'react';
// import PropTypes from 'prop-types';

// /* Styled */
// import styled from 'styled-components';

// /* Sub Components */
// import SideBarNav from './SideBarNav/SideBarNav';

// /* Styled Components */
// const Container = styled.div`
//   // position: fixed;
//   // left: 0;
//   // height: 100%;
//   width: 240px;
//   background-color: lightgreen;
// `;

// /* Constant Variables */
// const items = [
//   { label: "홈", href: "/" },
//   { label: "게시판", href: "/board" },
//   { label: "상품", href: "/product" },
//   { label: "로그인", href: "/login" }
// ];

// /* Main Compoent */
// const SideBar = props => {
//   /* Props */
//   const {
//     className,
//   } = props;

//   /* Renderer */
//   return (
//     <Container className={className}>
//       SideBar
//       <SideBarNav items={items} />
//     </Container>
//   );
// }

// /* Main Component Settings */
// SideBar.propTypes = {
//   className: PropTypes.string,
// }

// /* Exports */
// export default SideBar;


import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from 'react-icons';

import { Grid } from '@mui/material';

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* 네비게이션 토글 코드*/}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} color="black" />
          </Link>
          <Link to="/"><img width={130} className="logoImage" alt="iPhone_01" src="img/seokcheon_nanum.png" /></Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {/* SidebarData를 순서대로 담기*/}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;