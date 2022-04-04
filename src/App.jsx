import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Loading from "./components/Loading";
import Home from "./containers/Home";
import Likes from "./containers/Likes";
import Profile from "./containers/Profile";
import Search from "./containers/Search";

function App() {
  const pathLink = [
    { path: "/", element: < Loading /> },
    { path: "/home", element: < Home /> },
    { path: "/search", element: < Search /> },
    { path: "/likes", element: < Likes /> },
    { path: "/profile", element: < Profile /> },
  ]
  return (
    <Wrapper>
      <Routes>
        {
          pathLink.map(({ path, element }) => {
            return (
              <Route key={Math.random()} path={path} element={element} />
            )
          })
        }

      </Routes>
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
