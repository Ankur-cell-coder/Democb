import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <Home1>
      <div className="logo">
       <div style={{marginTop:'2px',fontSize:'30px'}}>Credit Bazar</div> 
      </div>
      
      <div className="rightpart">

      
     {/* <div>
        <select id="users">
          <option value="seller">Seller</option>
          <option value="buyers">Buyers</option>
          <option value="merchants">Merchants</option>
        </select>
      </div>  */}

      <div> 
        <Link to='/login' className="login">
        Login
        </Link>
          
      </div>

      </div>

    </Home1>
  );
}

export default HomePage;

const Home1 = styled.div`
display:flex;
justify-content:space-between;
margin-left:10px;
margin-right:10px;
margin-top:20px;

.rightpart{
    display:flex;
    width:200px;
    justify-content:space-between;
}

.logo{
    width:300px;
    height:50px;
    border:2px solid orange;
    justify-content:center;
    display:flex;

}
`;
