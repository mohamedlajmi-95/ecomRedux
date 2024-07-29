import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listarticles from "./components/admin/articles/Listarticles";
import Listcategories from "./components/admin/categories/Listcategories";
import Listscategories from "./components/admin/scategories/Listscategories";
import Menu from "./components/admin/Menu";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/articles" element={<Listarticles />} />
          <Route path="/categories" element={<Listcategories />} />
          <Route path="/scategories" element={<Listscategories />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
