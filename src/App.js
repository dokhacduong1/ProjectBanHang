import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import {Outlet } from "react-router-dom";


function App() {
  
  return (
    <>
      <div className="HeaderNew">
        <Banner />
        <Header />
      </div>
      <Outlet/>
    </>
  );
}

export default App;
