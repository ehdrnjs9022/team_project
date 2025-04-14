import "./App.css";
import Body from "./component/Common/Body/Body";
import Header from "./component/Common/Header/Header";
import Footer from "./component/Common/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import MainMyPage from "./component/MyPage/MainMyPage";
import Point from "./component/point/point";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/MyPage" element={<MainMyPage />} />
        <Route path="/Point" element={<Point />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
