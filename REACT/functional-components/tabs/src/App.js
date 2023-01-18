import { useState } from 'react';
import Tabs from './components/Tabs';
import Content from './components/Content';

function App() {
  const [tab, setTab] = useState("")
  const [tabSize] = useState(["tab 1", "tab 2", "tab 3"])

  return (
    <div>
        <Tabs setTab = {setTab} tabSize = {tabSize} />
        <Content tab = {tab} />
    </div>
  )
}

export default App;
