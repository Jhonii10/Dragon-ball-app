
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AppRouter from "./AppRouter";

import LoginScreen from "../pages/LoginScreen";
//import PublicRouter from "./PublicRouters";
import PrivateRouter from "./PrivateRouter";

const LoginRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/*" element={<PrivateRouter><AppRouter/></PrivateRouter>} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default LoginRouter;
