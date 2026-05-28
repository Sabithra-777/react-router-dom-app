// // import React from 'react'
// import Navbar from "./components/Navbar";
// import {Routes, Route} from 'react-router-dom';
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import User from "./components/Promise";
//import Products from "./components/Products"
import User from "./components/promise_async";
function App() {
  return (
    <div>
      <User/>
    </div>
    // <div>
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" element={<Home/>}></Route>
    //      <Route path="/about" element={<About/>}></Route>
    //       <Route path="/contact" element={<Contact/>}></Route>
    //        <Route path="/login" element={<Login/>}></Route>
    //        <Route path="/dashboard" element={<Dashboard/>}></Route>
    //   </Routes>
    // </div>
  )
}

export default App
// import Counter from "./components/Counter"
// import { useState } from "react"


// function App() {
//   const [showButton, setShowButton] = useState(true);

//   function handleClick(){
//     setShowButton(!setShowButton);
//   }
 
//   return (
//     <div>
//       <h1>Hello from React</h1>
//       <br /><br />
//        {showButton ? <button onClick={handleClick}>Toggle</button> : ""}
//        {showButton && <Counter/>}
//     </div>
//   )
// }

// export default App