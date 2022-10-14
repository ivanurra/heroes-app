import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1 className="p-3">Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        LogIn
      </button>
    </div>
  );
};
