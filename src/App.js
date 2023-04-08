import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import {Outlet } from "react-router-dom";
import SectionSix from "./components/SectionSix";


function App() {
  
  return (
    <>
      <div className="HeaderNewTop">
        <Banner/>
        <Header />
      </div>
      <Outlet/>
      <SectionSix />
    </>
  );
}

export default App;
