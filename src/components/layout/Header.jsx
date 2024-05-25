import { FaYoutube } from "react-icons/fa";
import Button from "../common/Button";
import SearchInput from "../common/Input";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="text-white flex justify-between border-b border-b-gray-700 p-6 items-center">
      <div className="flex items-center text-2xl">
        <div className="mr-2">
          <FaYoutube className="text-4xl text-purple-500" />
        </div>
        <div className="font-bold text-md">Youtube</div>
      </div>
      <div>
        <SearchInput
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="bg-slate-800 border-2 border-slate-500 py-2 px-3 w-[30rem] rounded outline-none focus:bg-slate-700 focus:border-purple-500 transition-colors"
        />
      </div>
      <div className="flex">
        <Link to={`/login`}>
          <Button title="Login" />
        </Link>
        <Link to={`/signup`}>
          <Button title="Sign up" />
        </Link>
      </div>
    </header>
  );
}
