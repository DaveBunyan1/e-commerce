import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white dark:bg-neutral-950 p-4 md:px-16 lg:px-32 border-b border-stone-300 dark:border-stone-700">
      <div className="text-2xl font-semibold">
        <Link href="/">
          <span className="text-orange-500 dark:text-indigo-600 font-bold">
            <strong>T</strong>
          </span>
          echHub
        </Link>
      </div>
      <ul className="flex gap-x-16 text-gray-700 dark:text-gray-200">
        <li>
          <Link
            href="/shop"
            className="hover:text-orange-500 dark:hover:text-indigo-400 transition-colors"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-orange-500 dark:hover:text-indigo-400 transition-colors"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-orange-500 dark:hover:text-indigo-400 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* TODO:
       Add auth section once signed in */}
      <div className="flex gap-x-4">
        <Link
          href="/log-in"
          className="text-gray-700 dark:text-gray-200 hover:text-orange-500 py-1.5 dark:hover:text-indigo-400 transition-colors"
        >
          Log In
        </Link>
        <Link
          href="/sign-up"
          className="bg-orange-500 dark:bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-orange-600 dark:hover:bg-indigo-500 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
