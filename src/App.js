import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Register from "./pages/Login/Register/Register";
import PrivatRoute from "./PrivatRoute/PrivatRoute";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import About from "./pages/About/About/About";
import ViewDeatilsPage from "./pages/ViewDeatilsPage/ViewDeatilsPage/ViewDeatilsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/viewdetails" element={<ViewDeatilsPage />} />
      <Route path="*" element={<PageNotFound />} />

      <Route
        path="/dashboard/*"
        element={
          <PrivatRoute>
            <Dashboard />
          </PrivatRoute>
        }
      />
    </Routes>
  );
}

export default App;
