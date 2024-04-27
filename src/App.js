import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkbox from "./Interview/Checkbox";
import Deleting from "./Interview/Deleting";
import Pagination from "./Interview/Pagination";
import Searchbar from "./Interview/Searchbar";
import Chart from "./Interview/Chart";
import PreviousValue from "./Interview/PreviousValue";
import AddingUser from './Interview/AddingUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Checkbox />} path="/" />
          <Route element={<Deleting />} path="/delete" />
          <Route element={<Pagination />} path="/page" />
          <Route element={<Searchbar />} path="/search" />
          <Route element={<Chart />} path="/chart" />
          <Route element={<PreviousValue />} path="/prev" />
          <Route element={<AddingUser />} path="/adding" />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
