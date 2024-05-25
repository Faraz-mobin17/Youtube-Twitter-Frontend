import { Link } from "react-router-dom";
import TextInput from "@/components/common/Input";
export default function LoginPage() {
  return (
    <div className="w-full h-screen text-white p-3 flex justify-center items-start">
      <div className="flex max-w-5xl flex-col space-y-5 justify-center items-center border border-slate-600 p-3 mt-20">
        <div className="flex items-center gap-2 mt-5">
          <a href="#" className="flex gap-2 items-center">
            <span>Youtube</span>
          </a>
        </div>
        <form className="space-y-5 p-2">
          <div className="w-full">
            <label htmlFor="username" className="inline-block mb-1 pl-1">
              Username / email:
            </label>
            <TextInput
              type="text"
              name="username"
              id="username"
              placeholder="example@gmail.com"
              className="px-3 py-2 bg-[#0E0F0F] text-white outline-none focus:bg-[#222222] duration-200 border border-slate-600 w-full "
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="inline-block mb-1 pl-1">
              Password:
            </label>
            <TextInput
              type="password"
              name="password"
              id="password"
              className="px-3 py-2 bg-[#0E0F0F] text-white outline-none focus:bg-[#222222] duration-200 border border-slate-600 w-full "
            />
          </div>

          <button className="w-full sm:py-3 py-2 hover:bg-purple-700 text-lg submit bg-purple-500 text-white  duration-100 ease-in">
            Login
          </button>

          <p className="text-center text-sm">
            Don't have an account ?
            <Link
              to={`/signup`}
              className="text-purple-600 cursor-pointer hover:opacity-70"
            >
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
