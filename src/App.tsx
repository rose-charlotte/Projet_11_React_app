import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Logement } from "./Pages/Logement/Logement";
import { About } from "./Pages/About/About";
import { Page404 } from "./Pages/Page404/Page404";
import { Layout } from "./Pages/Layout/Layout";

function App() {
  // const { id } = useParams();
  // console.log(id);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
