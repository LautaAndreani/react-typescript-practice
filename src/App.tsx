import { useEffect, useState } from "react"
import List from "./components/List"
import Form from "./components/Form"
import { Sub } from "./types/types.d"
import { INITIAL_STATE } from "./data"

import "./App.css"

//Interface

interface AppState {
  subs: Sub[]
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  console.log(subs)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  })

  return (
    <div className="App">
      <h1>Sub descriptions</h1>
      <List subs={subs} />
      <Form onNewSub={setSubs} />
    </div>
  )
}

export default App
