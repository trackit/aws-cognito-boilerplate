import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export default (): ReactElement => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to='/register'>Register Page</Link>
    </div>
  );
};
