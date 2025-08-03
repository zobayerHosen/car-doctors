import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const navItems = () => {
        return (
            <>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li>
                    <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </>
        )
    };

    // note: main ui
    return (
        <div className="shadow-sm navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52">
                        {navItems()}
                    </ul>
                </div>
                <Link href="/" className="">
                    <Image src="/assets/logo.svg" alt="Logo" width={108} height={88} />
                </Link>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {navItems()}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};
export default Navbar;