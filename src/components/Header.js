import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

import { Dropdown } from 'react-bootstrap';
const Navbar = styled.div`
background:transparent;
margin-top:35px;
// background-color:hsl(219, 4%, 4%);;
width:100%;
height:6.5rem;
border-bottom:1px solid #03131E;

display:flex;
align-items:center;
justify-content:space-between;
flex:0;
font-size:20px;

`;
const NavBrand = styled.div`
margin-left: 19rem;
`;

const NavMenu = styled.div`
background-color:#052A44;
justify-content:space-between;
position:relative;
margin-right:19rem;
text-align: center; /* Centered text/links */
@media(max-width:1400px){
    ul{
        display:none;

    }
}
ul{
    list-style:none;
    margin: 0;
    padding: 0;
    li{
        .dropdown-menu{
            width:15rem;
           float:left;
            background-color:#052A44;
            a{
                text-decoration:none;
                &:hover{
                    color:black;
                   
                }
            }
        }
        display:inline-flex; 
        padding:8px 35px;
        a{
            text-decoration: none;
            color:#d5dfe6;
            // animation: before 2s;
            // @keyframes before {
            //     from {tranform:Translatex(15px);}
            //     to {tranform:Translatex(13px);}
            //   }

            &:hover{
                color:white;
                padding: 5px 7px;
                // animation: after 0.5s linear;
                // @keyframes after {
                //     from {padding: 11px 13px;}
                //     to {padding: 15px 17px;}
                //   }
            }
        }
    }
}
`;

const NavImage = styled.img`
height:4.2rem;

`;

const Rightbar = styled.div`
display:flex;
background-color:yellow;
height:100;    
z-index:1;
width:10rem;
top:0;
`;

function Header() {
    return (
        <Navbar>
            <NavBrand>
                <a href='javascript:void(0)'><NavImage src="/images/logo.png" /></a>
            </NavBrand>

            <NavMenu>
                <ul>
                    <li><a href='http://localhost:3000/'>Home</a></li>
                    <li><a href='http://localhost:3000/about'>About</a></li>
                    <li>
                       
                        
                        <Dropdown style={{ 'padding':0,'background-color':'hsl(219, 4%, 4%);' }}>
                        <Dropdown.Toggle variant="" id="dropdown-basic" style={{ 'border':'none','color':'#d5dfe6','font-weight':'500','font-size':'20px'}}>
                            Brands
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{  }}>
                            <Dropdown.Item href=""><img src='images/lamborghini.png' width={ '20px' } height={ '20px'} />&nbsp;&nbsp;Lamborghini</Dropdown.Item>
                            <Dropdown.Item href=""><img src='images/sf.png' width={ '20px' } height={ '20px'} />&nbsp;&nbsp;Ferrari</Dropdown.Item>
                            <Dropdown.Item href=""><img src='images/bmw.png' width={ '20px' } height={ '20px'} />&nbsp;&nbsp;BMW</Dropdown.Item>
                            <Dropdown.Item href=""><img src='images/porsche.png' width={ '20px' } height={ '20px'} />&nbsp;&nbsp;Porsche</Dropdown.Item>
                            <Dropdown.Item href=""><img src='images/ko.png' width={ '20px' } height={ '20px'} />&nbsp;&nbsp;Koenigsegg</Dropdown.Item>
                            <Dropdown.Item href=""><img src='images/audi.png' width={ '20px' } height={ '20px'} />&nbsp;&nbsp;Audi</Dropdown.Item>
                            <Dropdown.Item href=""><img src='images/dodge.png' width={ '20px' } height={ '20px'} />&nbsp;&nbsp;Dodge</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li><a href='javascript:void(0)'>Featured</a></li>
                    
                </ul>
               
            </NavMenu>

        </Navbar>
    )
}

export default Header