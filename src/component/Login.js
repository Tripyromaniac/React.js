import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";

const accounts = [
  {
    id: 1,
    username: "account1",
    password: "123",
  },
  {
    id: 2,
    username: "fatfuck",
    password: "fatass123",
  },
  {
    id: 3,
    username: "meinkraft",
    password: "hitler",
  },
  {
    id: 4,
    username: "leekeebum",
    password: "fatshit",
  },
  {
    id: 5,
    username: "account2",
    password: "gofkurmum",
  },
];

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUser = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(username, password);
    const potentialAccount = accounts.filter((acc) => acc.username == username);

    if (potentialAccount.length === 0) {
      alert("No designated Username");
    } else {
      if (potentialAccount[0].password == password) {
        alert("Success !");
      } else {
        alert("Wrong Password!");
      }
    }
  };

  return (
    <div className="cover">
      <h2>Already had an account ?</h2>
      <h1>Login</h1>
      <form className="login" onSubmit={handleLogin}>
        <div>
          <BiUser style={{marginLeft: "1.1rem", marginTop:"13px", position: "absolute", color:"whitesmoke", fontSize: "18px"}}/>
          <input
            className="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleChangeUser}
          />
          
        </div>

        <div>
          <AiFillLock style={{marginLeft: "1.1rem", marginTop:"12px", position: "absolute", color:"whitesmoke", fontSize: "18px"}}/>
          <input
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePass}
          />
          
        </div>

        <button className="login-btn">Log-in</button>
      </form>

      <div className="notification"></div>
      <div className="utilities">
        <div className="remember">
          <input type="checkbox" name="" id="check" />
          <label for="check"> Remember Me</label>
        </div>
        <div className="forget">
          <a href="">Forgot password ?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
