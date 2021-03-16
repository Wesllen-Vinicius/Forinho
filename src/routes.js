import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./pages/Auth/auth";
const Routes = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
    {...rest}
    render={routeProps => 
    !!currentUser ? (
      <RouteComponent  {...routeProps} />
    ) : (
      <Redirect to={"/Login"} />
      )
    }
    />
  );
};
export default Routes;
