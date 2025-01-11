import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">signup</h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          id="username"
          placeholder="username"
          className="bg-slate-100 p-3 rounded-lg"
        />

        <input
          type="email"
          id="email"
          placeholder="email"
          className="bg-slate-100 p-3 rounded-lg"
        />

        <input
          type="password"
          id="password"
          placeholder="password"
          className="bg-slate-100 p-3 rounded-lg"
        />

        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-80">
          signup
        </button>
      </form>

      <div className="flex gap-3 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
