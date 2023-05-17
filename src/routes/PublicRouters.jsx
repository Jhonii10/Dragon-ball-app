import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PublicRouter = ({children}) => {

  const {log} = useContext(AuthContext);

  return (
    !log ? <Navigate to='/'/>:children
  );
};

export default PublicRouter;