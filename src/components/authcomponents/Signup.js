import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [name,setName]=useState("");
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   const navigate=useNavigate();
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:3005/user/signup", {
            name,
            username,
            email,
            password,
          });
          if (res.data.success) {
            alert(res.data.message);
            console.log("successfull");
            navigate("/sellerdash");
          } else {
            alert(res.data.message);
            navigate("/sellerdash");
          }
        } catch (error) {
          console.log(error);
          alert("something went wrong");
        }
      };

  return (
    <Sign1>
      <div className="formwrap">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <br />
          <input
            type="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            style={{
              height: "30px",
              width: "300px",
              marginBottom: "20px",
              marginTop: "20px",
              marginLeft: "2px",
            }}
            id="name"
            name="name"
            required
          />
          <br />

          <label htmlFor="username">Username</label>
          <br />
          <input
            type="name"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            style={{
              height: "30px",
              width: "300px",
              marginBottom: "20px",
              marginTop: "20px",
              marginLeft: "2px",
            }}
            id="username"
            name="username"
            required
          />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{ height: "30px", width: "300px", marginBottom: "20px" }}
            id="email"
            name="email"
            required
          />
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              height: "30px",
              width: "300px",
              marginBottom: "20px",
              marginTop: "20px",
              marginLeft: "2px",
            }}
            id="password"
            name="password"
            required
          />
          <br />

          <button
            style={{
              fontsize: "20px",
              color: "white",
              height: "40px",
              width: "100%",
              marginBottom: "20px",
              backgroundColor: "#3498DB",
              border: "none",
            }}
            type="submit"
          >
            Submit
          </button>
        </form>

        <div>
          have an account?
          <Link to="/login">Login for free</Link>
        </div>
      </div>
    </Sign1>
  );
}

export default Signup;

const Sign1 = styled.div`
  display: flex;
  justify-content: center;
  background-position: center;
  margin-top: 300px;

  .formwrap {
    width: 600px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
  }
  .form {
    width: 310px;
  }
`;
