import MenuItem from "@/components/MenuItem";
import CheckIcon from "@/icons/CheckIcon";
import ChevronDown from "@/icons/ChevronDown";
import HamburgerMenu from "@/icons/HamburgerMenu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-[1440]">
        <nav className="flex justify-between items-center pr-3 pl-4 h-[72px] border-b border-gray-100 md:p-8 md:w-[1280px] md:mx-auto">
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
      </div>
      <div className="w-[100%] h-[auto] my-16">
        <div className="mx-4 md:my-24 md:px-8 md:w-[1216]">
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
      {/* Playground */}
      {/* card container */}
      <div className="flex items-center flex-col gap-y-4 md:flex-row">
        <div className="flex items-center flex-col text-center border rounded-2xl mx-4 shadow-custom">
          <div className="pt-10 px-6">
            <p className="text-gray-900 text-4xl tracking-[.72px]">$10/mth</p>
            <p className="text-gray-900 text-xl mt-4">Basic plan</p>
            <p className="text-gray-500 text-base">Billed Annually</p>
          </div>
          <div>
            <ul className="text-gray-500 leading-6 flex flex-col gap-y-4 px-6 py-8">
              <li className="flex items-center gap-x-3">
                <CheckIcon /> Access to all basic features
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                Basic reporting and analytics
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                Up to 10 individual users
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                20GB individual data each user
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                Basic chat and email support
              </li>
            </ul>
          </div>
          <div className="px-6 pb-8">
            <button className="bg-purple-600 text-white w-[255] h-[24] px-4 py-3 rounded-lg border self-stretch">
              Get started
            </button>
          </div>
        </div>
        <div className="flex items-center flex-col text-center border rounded-2xl mx-4 shadow-custom">
          <div className="pt-10 px-6">
            <p className="text-gray-900 text-4xl tracking-[.72px]">$20/mth</p>
            <p className="text-gray-900 text-xl mt-4">Business plan</p>
            <p className="text-gray-500 text-base">Billed Annually</p>
          </div>
          <div>
            <ul className="text-gray-500 leading-6 flex flex-col gap-y-4 px-6 py-8">
              <li className="flex items-center gap-x-3">
                <CheckIcon /> 200+ integrations
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                Advanced reporting and analytics
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                Up to 20 individual users
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                40GB individual data each user
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                Priority chat and email support
              </li>
            </ul>
          </div>
          <div className="px-6 pb-8">
            <button className="bg-purple-600 text-white w-[255] h-[24] px-4 py-3 rounded-lg border self-stretch">
              Get started
            </button>
          </div>
        </div>
        <div className="flex items-center flex-col text-center border rounded-2xl mx-4 shadow-custom">
          <div className="pt-10 px-6">
            <p className="text-gray-900 text-4xl tracking-[.72px]">$40/mth</p>
            <p className="text-gray-900 text-xl mt-4">Enterprise plan</p>
            <p className="text-gray-500 text-base">Billed Annually</p>
          </div>
          <div>
            <ul className="text-gray-500 leading-6 flex flex-col gap-y-4 px-6 py-8">
              <li className="flex items-center gap-x-3">
                <CheckIcon /> Advanced custom fields
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                Audit log and data history
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                Unlimited individual users
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                Unlimited individual data
              </li>
              <li className="flex items-center gap-x-3 gap-y-4">
                <CheckIcon />
                Personalised+priotity service
              </li>
            </ul>
          </div>
          <div className="px-6 pb-8">
            <button className="bg-purple-600 text-white w-[255] h-[24] px-4 py-3 rounded-lg border self-stretch">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
