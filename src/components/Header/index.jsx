// import { useState } from "react"
import { Link } from "react-router-dom"
const navItems = [
    {
        link: 'About',
        href: '/about'
    },
    {
        link: 'Work',
        href: '/work'
    },
    {
        link: 'Contact',
        href: '/contact'
    },
    {
        link: 'NotFound',
        href: '/notfound'
    }
]
const Header = () => {
    // const[open, setOpen] = useState(false)
    return (
        <header className=" h-[78px] md:flex items-center justify-between text-black max-w-[1280px] mx-auto md:static md:pt-6 pt-4 font-epilogue px-6 lg:px-0">
            <div className="flex justify-between items-center">
                <Link to='/' className="flex items-center">
                    <img src="images/logo.webp" alt="logo" className="w-14" />
                    <span className="ml-3 text-2xl font-bold from-green to-orange bg-gradient-to-r bg-clip-text text-transparent">
                        Visual Designer
                    </span>
                </Link>
                <div className="md:hidden block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            <ul className="md:flex md:space-x-6 absolute top-20 py-2 md:py-0 w-full md:static md:w-auto z-50">
                {
                    navItems.map((navItem, index) => (
                        <li key={index} className="py-2 md:py-0">
                            <Link
                                to={navItem.href}
                                className="from-normal text-[17px]"
                            >
                                {navItem.link}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </header>



    )
}
export default Header