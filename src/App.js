import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable.js'
import { useState } from 'react';
import ListDataTable from './ListDataTable.js'
import GallaryDataTable from './GallaryDataTable.js'


function App() {
  const [view, setView] = useState("Individual"); 

  const [itemNo, setItemNo] = useState(0);

  const handleChange = (event) => {
    setView(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">       
        <h1 className='OuterHeader'><img src={logo} className="App-logo" alt="logo"/>Junior</h1>
         <select className='select' value={view} onChange={handleChange}>
          <option key={"Individual"} value={"Individual"}>Individual</option>
          <option key={"List"} value={"List"}>List</option> 
          <option key={"Gallary"} value={"Gallary"}>Gallery</option> 
          </select>
        {view === "Individual" ?  <DataTable itemNo={itemNo} setItemNo={setItemNo}/> : null }
        {view === "List" ? <ListDataTable /> : null }
        {view === "Gallary" ? <GallaryDataTable setView={setView} setItemNo={setItemNo}/> : null}
      </header>
    </div>
  );
}
export default App;