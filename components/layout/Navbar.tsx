export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl text-amber-400">RUG  api</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            clipRule="evenodd"
                            d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V5C20 6.65685 18.6569 8 17 8H3C1.34315 8 0 6.65685 0 5V3ZM0 12C0 10.3431 1.34315 9 3 9H17C18.6569 9 20 10.3431 20 12V14C20 15.6569 18.6569 17 17 17H3C1.34315 17 0 15.6569 0 14V12ZM0 21C0 19.3431 1.34315 18 3 18H17C18.6569 18 20 19.3431 20 21V23C20 24.6569 18.6569 26 17 26H3C1.34315 26 0 24.6569 0 23V21Z"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow"></div>
                <div>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4"
                    >
                        Docs
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4"
                    >
                        Examples
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white"
                    >
                        Blog
                    </a>
                </div>
            </div>
        </nav>
    );
}