import React,{ useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {
  const [closedMenu,setClosedMenu] = useState(true);
  return (
    <NavContainer>
       <a>
         <img src="images/logo.svg" alt="img" />
       </a>
         <NavMenu>
             <MenuItem to = '/'>
             <p>Model S</p>
             </MenuItem>
             <MenuItem to = '/'>
             <p>Model 3</p>
             </MenuItem>
             <MenuItem to = '/'>
             <p>Model X</p>
             </MenuItem>
             <MenuItem to = '/'>
             <p>Model Y</p>
             </MenuItem>
             <MenuItem to = '/'>
             <p>Solar Roof</p>
             </MenuItem>
             <MenuItem to = '/'>
             <p>Solar Panel</p>
             </MenuItem>
        </NavMenu>
        <LeftMenu>
            <ResponsiveMenuItems>
            <MenuItem to = '/'>
              <p>Shop</p>
             </MenuItem>
             <MenuItem to = '/'>
             <p>Account</p>
             </MenuItem>
            </ResponsiveMenuItems>
             <MenuItem to = '/' onClick={() => setClosedMenu(false) }>
             <p>Menu</p>
             </MenuItem>
        </LeftMenu>
        <BurgerNav show={closedMenu}>
         <CloseBurgerNav>
             <MaterialCloseIcon onClick={() => setClosedMenu(true)}>
               <CloseIcon />
             </MaterialCloseIcon>
         </CloseBurgerNav>
         <BurgerNavItems>
         <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-In</a></li>
          <li><a href="#">Test Drive</a></li>
          <li><a href="#">CyberTruck</a></li>
          <li><a href="#">Roadster</a></li>
          <li><a href="#">Semi</a></li>
          <li><a href="#">Charging</a></li>
          <li><a href="#">Powerwall</a></li>
          <li><a href="#">Commercial Energy</a></li>
          <li><a href="#">Utilities</a></li>
          <li><a href="#">Find Us</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Investor  Relations</a></li>
         </BurgerNavItems>
        </BurgerNav>
    </NavContainer>
    
  )
}

export default Navbar;

const NavContainer = styled.div`
  min-height:60px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  position:fixed;
  top:0;
  right:0;
  left:0;
  padding:0px 32px;
  z-index:1;
`
const MenuItem = styled(Link)`
     p{
       
       font-weight:600;
       padding:0 10px;
       flex-wrap:nowrap;
       font-size:18px;
     }
`
const NavMenu = styled.div`
display:flex;
justify-content:center;
flex:1;
  @media(max-width:1182px){
    display:none;
  }
`
const LeftMenu = styled.div`
display:flex;
`
const ResponsiveMenuItems = styled.div`
display:flex;
  @media(max-width:1182px){
    display:none;
  }
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    right:0;
    background:#fff;
    width:294px;
    z-index:100;
    height:100vh;
    transform:${props => props.show ? "translateX(100%)":"translateX(0)"};
    transition: transform 0.2s ease-in-out;
`
const CloseBurgerNav = styled.div`
width:100%;
height:80px;
display:flex;
justify-content:end;
align-items:center;
`
const BurgerNavItems = styled.ul`
list-style:none;
margin:8px 25px;
   li{
    padding:11px 0;
      a{
        font-weight:600;
      }
   }

`
const MaterialCloseIcon = styled.div`
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
padding:8px;
cursor:pointer;
margin-right:30px;
  &:hover{
    background:rgba(0,0,0,0.1);
  }
`