import React from "react";
import useFirebase from "../../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <button className="btn btn-large btn-primary" onClick={signInWithGoogle} >
        Google Login
      </button>
    </div>
  );
};

export default Login;
