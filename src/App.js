import React, {useEffect, useState} from 'react';

import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";


// import {Home, About, NotFound} from './pages'
import MainPage from './views/Main/MainPage'
import About from './views/product/About'
import Product from './views/product/Product'
import Users from './views/user/users'
import UsersIndex from './views/user/usersIndex'
import UserProfile from './views/user/userProfile'
import OwnUserProfile from './views/user/ownUserProfile'
import NotFound from './views/NotFound'

// import About from './pages/About'
// import UserInfo from './UserInfo'; // 

export default function App() {
  return (
      <Routes>
        {/* <Route className={(navData) =>  navData.isActive ? classes.active : '' } path="/" element={<Home />} /> */}
        {/* 이전버전 */}
        {/* <Route exact path="/" component={Home}/> */}
        {/* 현버전 */}
        <Route path="/" element={<MainPage />} />
        {/* about 관련 페이지 만약 정확히 일치하는 path 가 없을때 그나마 얘랑 비슷하다 생각해서 해당 페이지 노출. */}
        {/* <Route path="/about" element={<About />}>
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserProfile />} />
          <Route path="me" element={<OwnUserProfile />} />
          <Route path="index" element={<UsersIndex />} />
        </Route> */}

        <Route path="/*" element={<NotFound />} />
        {/* <Route path="/*" element={<div>Page Not Found</div>} /> */}
      </Routes>
  );
}
