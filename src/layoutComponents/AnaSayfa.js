import React, { Component, useState }  from 'react';
import { Button } from 'reactstrap';
import Form from '../pages/Form';
import {Link,Router, useHistory} from "react-router-dom"
import "./AnaSayfa.css"
import Banner from "../img/banner.png.png"
import Logo from "../img/logo.svg"
const AnaSayfa=()=>{
 const history=useHistory()
const handlerClick=()=>{
    history.push("/pizza")
}
    return <div className='ansayfa'>
     <div className='content'>
        <img className='logo' src={Logo}></img>
       <p className='title'>KOD ACIKTIRIR PIZZA,DOYURUR</p>
       <Button className='button' onClick={handlerClick}>ACIKTIM</Button>
        </div>
     
       <img className='banner' src={Banner}/> 
       
    </div>
}
export default AnaSayfa;