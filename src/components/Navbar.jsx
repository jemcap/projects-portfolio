import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 flex">
      <div className="navbar-start">
        <a href="/" className="font-bold text-xl">
          capitoj.dev
        </a>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-8">
          <Navlinks />
        </ul>
      </div>
      <div className="dropdown flex lg:hidden navbar-end">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <Navlinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
