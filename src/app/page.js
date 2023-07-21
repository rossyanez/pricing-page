import MenuItem from "@/components/MenuItem";
import ChevronDown from "@/icons/ChevronDown";
import HamburgerMenu from "@/icons/HamburgerMenu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center pr-3 pl-4 h-[72px] border-b border-gray-100 md:p-8 md:w-[1280px]">
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
      </nav>
      {/* Playground */}
      <div className="my-16 mx-4 md:my-24 md:px-8 md:w-[1216]">
        <h2 className="text-purple-600 text-[14px]">Pricing</h2>
        <h1 className="text-gray-900 text-[36px] font-semibold mt-3 mb-4">
          Simple, transparent pricing
        </h1>
        <p className="leading-7 text-[18px] text-gray-500">
          We believe Untitled should be accessible to all companies, no matter
          the size.
        </p>
      </div>
    </div>
  );
}
