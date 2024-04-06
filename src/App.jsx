import "./App.css";
// import "./Feed.css"
import Login from "./components/Login";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";
import Feed from "./components/Feed";

import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Filter from "./components/Filter";
import Page4 from "./components/Page4";



function App() {
  return (
    <>
    
      {/* <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Register flag="true"/>}></Route>
       <Route path="/register" element={<Register/>}></Route> 
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/page2" element={<Page2/>}></Route>
        <Route path="/page3" element={<Page3/>}></Route>


      </Routes>
     </BrowserRouter> */}
     {/* <Page4/> */}
    {/* <Filter /> */}
    {<Feed />}
    </>
  )
}

export default App;
