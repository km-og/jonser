import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" />;
};

export default ProtectedRouteElement;
