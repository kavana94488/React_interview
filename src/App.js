

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkbox from './Interview/Checkbox';
import Deleting from './Interview/Deleting';
import Pagination from './Interview/Pagination';
import Searchbar from './Interview/Searchbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Checkbox/>} path="/"/>
        <Route element={<Deleting/>} path="/delete"/>
        <Route element={<Pagination/>} path="/page"/>
        <Route element={<Searchbar/>} path="/search"/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
