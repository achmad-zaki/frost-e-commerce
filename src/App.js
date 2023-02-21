import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  return (
    <>
    <Home/>
    <Category/>
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={ <Home/> } />
    //     <Route path="/category" element={ <Category/> } />
    //   </Routes>
    // </Router>
  );
}

export default App;
