import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ViewAllProduct from "./pages/ViewAllProduct/ViewAllProduct";
import Navigation from "./pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allproduct" element={<ViewAllProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>

  );
}

export default App;
