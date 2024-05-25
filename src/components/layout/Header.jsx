import { FaYoutube } from "react-icons/fa";
import Button from "../common/Button";
import SearchInput from "../common/SearchInput";

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
        />
      </div>
      <div className="flex">
        <Button title="Login" />
        <Button title="Sign up" />
      </div>
    </header>
  );
}
