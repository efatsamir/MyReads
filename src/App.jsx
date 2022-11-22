import "./App.css";
import Search from "./pages/Search";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default App;
