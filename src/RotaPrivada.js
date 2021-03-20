import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./pages/Auth/auth";
const RoutaPrivada = ({ component: RouteComponent, ...other }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...other}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/Login"} />
        )
      }
    />
  );
};
export default RoutaPrivada;
