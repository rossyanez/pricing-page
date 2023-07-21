import ChevronDown from "@/icons/ChevronDown";
import { Children } from "react";

function MenuItem({ hasDropdown = false, children }) {
  if (hasDropdown) {
    return (
      <a
        href="#"
        className="font-semibold text-gray-500 flex items-center gap-2"
      >
        {children}
        <ChevronDown />
      </a>
    );
  }
  return (
    <a href="#" className="font-semibold text-gray-500">
      {children}
    </a>
  );
}

export default MenuItem;
