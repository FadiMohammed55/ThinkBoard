import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../lib/axios";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
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
      const { data } = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      toast.success("Account created 🎉");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="card w-96 bg-base-100 p-6 shadow"
      >
        <h2 className="mb-4 text-center text-2xl font-bold">Register</h2>

        <input
          className="input input-bordered mb-3"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <button className="btn btn-primary w-full">Register</button>

        <p className="mt-3 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
