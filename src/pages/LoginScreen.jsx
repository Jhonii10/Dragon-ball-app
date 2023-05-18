import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/AuthTypes";

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const  navigate = useNavigate()

  const handleLogin = () => {
    dispatch({ type: authTypes.login });

    navigate("/mans");
  };

  return (
    <div className="container mt-5 text-center">
      <img src="/assets/animate.gif" alt="animate" style={{height:"480px"}} />
      <h1 className="my-3">Login Screen</h1>
      <button onClick={handleLogin} className="btn btn-primary ">
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
