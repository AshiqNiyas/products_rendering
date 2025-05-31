import Home from "./pages/Home";
import "./App.css";
import Notfound from "./pages/Notfound";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./pages/UserDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
