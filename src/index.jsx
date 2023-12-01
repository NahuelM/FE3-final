import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Details from './Routes/Detail'
import Contact from './Routes/Contact'
import UserContextProvider from './UserContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<App/>} >
            <Route path='home' element={<Home/>} />
            <Route path='details/:id' element={<Details/>} />
            <Route path='favs' element={<Favs/>} />
            <Route path='contact' element={<Contact/>} />
          </Route>
          <Route path='*' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
);


