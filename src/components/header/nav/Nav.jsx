import MenuItem from "@/components/MenuItem";
import HamburgerMenu from "@/icons/HamburgerMenu";
import Image from "next/image";

function Nav() {
  return (
    <header className="flex flex-col md:items-center justify-center border-b border-gray-100 md:h-[80px] md:w-[1440px]">
      <div className="flex justify-between items-center pr-3 pl-4 h-[72px] md:px-8 md:w-[1280px]">
        <div className="flex items-center gap-10">
          <div className="flex gap-2.5 items-center">
            <Image width="32" height="32" src="/logo/logo.svg" alt="logo" />
            <Image
              width="100"
              height="32"
              src="/logo/logotype.svg"
              alt="untitled logo"
            />
          </div>
          <nav>
            <ul className="items-center gap-8 hidden md:flex">
              <li>
                <MenuItem>Home</MenuItem>
              </li>
              <li>
                <MenuItem hasDropdown>Products</MenuItem>
              </li>
              <li>
                <MenuItem hasDropdown>Resources</MenuItem>
              </li>
              <li>
                <MenuItem>Pricing</MenuItem>
              </li>
            </ul>
          </nav>
        </div>
        <button className="p-2 block md:hidden">
          <HamburgerMenu />
        </button>
        <div className="items-center gap-3 hidden md:flex">
          <button className="font-semibold text-gray-500 py-2.5 px-[18px]">
            Log in
          </button>
          <button className="font-semibold py-2.5 px-[18px] text-white bg-purple-600 rounded-lg border border-purple-600">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
