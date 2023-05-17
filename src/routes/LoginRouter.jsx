
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AppRouter from "./AppRouter";

import LoginScreen from "../pages/LoginScreen";
import PublicRouter from "./PublicRouters";

const LoginRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<PublicRouter><LoginScreen/></PublicRouter>} />
      <Route path="/*" element={<PublicRouter><AppRouter/></PublicRouter>} />
      </Routes>
    </BrowserRouter>
  );
};

export default LoginRouter;
