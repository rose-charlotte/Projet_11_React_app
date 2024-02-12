


import style from "./App.module.scss"
import data from "./Data/data.json"


function App() {  
  console.log(data)
  return <> <h1 className={style.h1}>{data[0].title}</h1>
  
  </>
}

export default App
