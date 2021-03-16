import React from "react";
import "./home.css"
import app from "../Firebase/index"
const Home = () => 
<body>
    <div class="parent">
    <a href="/Login">Login</a>
    <button onClick={() => app.auth().signOut()}>Sair</button>
    <div class="div1"> Salve </div>
    </div>   
</body>;

export default Home;
