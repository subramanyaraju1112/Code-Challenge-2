import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create/Create";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import View from "./components/View/View";

function App() {
  return (
    <BrowserRouter>
      <div className="components">
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
