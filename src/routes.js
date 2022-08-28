import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Header from "./components/Header";
import Error from "./Pages/Error";
import Favorites from "./Pages/Favorites";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
