import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Login />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
