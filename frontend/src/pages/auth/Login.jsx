import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../lib/axios";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔐 Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      toast.success("Welcome back 👋");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="card w-96 bg-base-100 p-6 shadow"
      >
        <h2 className="mb-4 text-center text-2xl font-bold">Login</h2>

        <input
          className="input input-bordered mb-3"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input input-bordered mb-4"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-full">Login</button>

        <p className="mt-3 text-center text-sm">
          No account?{" "}
          <Link to="/register" className="link link-primary">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
