import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Movies from "./pages/Movies";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="profile" element={<Profile />} />
        <Route path="entertainment" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
