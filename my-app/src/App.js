import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Register from "./pages/register/Register";
import CarRental from "./pages/carRental/CarRental";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/car" element={<CarRental />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
