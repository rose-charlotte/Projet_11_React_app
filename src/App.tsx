


import {Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home/Home"
import { Logement } from "./Pages/Logement/Logement"
import { About } from "./Pages/About/About"
import { Page404 } from "./Pages/Page404/Page404"


function App() {  
 return (
  <Routes>
    <Route path="/" element={< Home/>} />
    <Route path="/logement" element={<Logement />} />
    <Route path="/about" element={<About />}/>
    <Route path="/404" element={<Page404 />}/>
    <Route path="*" element={<Page404 />} />
  </Routes>
 )
}

export default App
