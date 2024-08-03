import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listarticles from "./components/admin/articles/Listarticles";
import Listcategories from "./components/admin/categories/Listcategories";
import Listscategories from "./components/admin/scategories/Listscategories";
import Menu from "./components/admin/Menu";
import Listarticlescard from "./components/client/Listarticlescard";
import Editarticle from "./components/admin/articles/Editarticle";
import Editcategorie from "./components/admin/categories/Editcategorie";
import Editscategorie from "./components/admin/scategories/Editscategorie";
import Insertarticle from "./components/admin/articles/Insertarticle";
import Insertcategorie from "./components/admin/categories/Insertcategorie";
import Insertscategorie from "./components/admin/scategories/Insertscategorie";
import Listcategoriescard from "./components/client/Listcategoriescard";
import Listscategoriescard from "./components/client/Listscategoriescard";
import Cart from "./components/client/panier/Cart";
import NavScrolls from "./components/client/NavScrolls";

function App() {
  return (
    <>
      <Router>
        {/* <Menu /> */}
        <NavScrolls/>
        <Routes>
          <Route path="/articles" element={<Listarticles />} />
          <Route path="/categories" element={<Listcategories />} />
          <Route path="/scategories" element={<Listscategories />} />

          <Route path="/" element={<Listarticlescard />} />
          <Route path="/categoriescard" element={<Listcategoriescard />} />
          <Route path="/scategoriescard" element={<Listscategoriescard />} />


          <Route path="/editarticles/:id" element={<Editarticle />} />
          <Route path="/editcategories/:id" element={<Editcategorie />} />
          <Route path="/editscategories/:id" element={<Editscategorie />} />

          <Route path="/insertarticles" element={<Insertarticle />} />
          <Route path="/insertcategories" element={<Insertcategorie />} />
          <Route path="/insertscategories" element={<Insertscategorie />} />

          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
