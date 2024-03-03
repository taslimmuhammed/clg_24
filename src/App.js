import './Styles/globals.css';
import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Create from './Pages/Create';
import Transfer from './Components/Transfer';
import MyWorks from './Pages/MyWorks';
import View from './Pages/View';
import MyView from './Pages/MyView';
import LendingPage from './Pages/LendingPage';
import BuyPage from './Pages/BuyPage';
import BuyMarket from './Pages/BuyMarket';
import LendMarket from './Pages/LendMarket';
import SearchPage from './Pages/SearchPage';

function App() {

  return (
    <div className="min-h-screen ">

        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path="ip/:id" element={<View />} />
          <Route path='/you' element={<MyWorks />}></Route>
          <Route path='/you/:id' element={<MyView />}></Route>
          <Route path='/buy' element={<BuyMarket />}></Route>
          <Route path='/lend' element={<LendMarket />}></Route>
          <Route path='/lend/:id' element={<LendingPage />}></Route>
          <Route path='/buy/:id' element={<BuyPage />}></Route>
          <Route path='/transfer/:id' element={<Transfer />}></Route>
          <Route path='/search/:searchText' element={<SearchPage />}></Route>
        </Routes>

    </div>
  );
}

export default App;
