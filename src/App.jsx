import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Account from "./components/account/account";
import Login from "./components/account/Login";
import SignUp from "./components/account/SignUp";
import Loading from "./components/Loading";
import Home from "./containers/Home";
import Likes from "./containers/Likes";
import Profile from "./containers/Profile";
import Search from "./containers/Search";
import YouLink from "./components/likes/YouLink";
import FollowingLink from "./components/likes/FollowingLink";
import Main from "./containers/Main";
import Footer from "./components/Footer";

function App() {
  const pathLink = [
    { path: "/", element: < Loading /> },
    { path: "/home", element: < Home /> },
    { path: "/search", element: < Search /> },
    { path: "/likes", element: < Likes /> },
    { path: "/likes/you", element: < YouLink /> },
    { path: "/likes/following", element: < FollowingLink /> },
    { path: "/profile", element: < Profile /> },
    { path: "/account", element: < Account /> },
    { path: "/main", element: < Main /> },
    { path: "/account/login", element: < Login /> },
    { path: "/account/signup", element: < SignUp /> },
  ]

  const { pathname } = useLocation()
  return (
    <Wrapper>
      {pathname !== "/" && <Header />}

      <Routes>
        {
          pathLink.map(({ path, element }) => {
            return (
              <Route key={Math.random()} path={path} element={element} />
            )
          })
        }
      </Routes>
      {!(pathname === "/"
        || pathname === "/account"
        || pathname === "/account/login"
        || pathname === "/account/signup"
        || pathname === "/profileEdit")
        && <Footer />}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 812px;
  width: 375px;
  background-color: #FFFFFF;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
