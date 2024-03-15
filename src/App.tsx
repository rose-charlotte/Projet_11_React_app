import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Logement } from "./Pages/Logement/Logement";
import { About } from "./Pages/About/About";
import { Page404 } from "./Pages/Page404/Page404";
import { Layout } from "./Pages/Layout/Layout";
import { Error as ErrorPage } from "./Pages/Error/Error";
import data from "./assets/Data/data.json";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<Navigate to="/error" />}
    >
      <Route index element={<Home />} />
      <Route
        path="logement/:id"
        element={<Logement />}
        loader={({ params }) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const dataElement = data.find((data) => data.id === params.id);

          if (!dataElement) {
            throw new Error("Logement inconnu");
          }

          return dataElement;
        }}
      />
      <Route path="about" element={<About />} />
      <Route path="error" element={<ErrorPage />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
