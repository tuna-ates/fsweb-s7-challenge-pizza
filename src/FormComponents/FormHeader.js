import React, { Component }  from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom/';
import App from '../App';
import Form from '../pages/Form';

const Header=()=>{

    return(
  
          <div className='header'>
             <h1>Teknolojik Yemekler</h1>
             <h1>Burası FOrm</h1>
             <nav className='nav'>
          <ul>
            <li>
              <Link to="/">Ansayfa</Link>
            </li>
            <li>
              <Link to="/about">Seçenekler</Link>
            </li>
            <li>
              <Link to="/pizza" >Sipariş Oluştur</Link>
            </li>
          </ul>
        </nav>
          </div>
         
    ); 
}
export default Header;