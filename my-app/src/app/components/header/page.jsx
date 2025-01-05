import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link"
import Image from "next/image"
import search_I from "../header/images/btn-32.png" 
import favoruite_I from "../header/images/btn-32 (1).png"
import cart_I from "../header/images/a.png"
import menu_I from "../header/images/menu (1).png"
import profile_I from "./images/Vector (3).png"
import cart_MI from "./images/cart.png"
import search_MI from "./images/search-interface-symbol.png"


export default function Header(){
    return(
        <header className="header">
            <div className="banner bg-[#252B42] text-white flex items-center justify-between py-[2em] px-[4em]">
                <div className="flex items-center gap-[2em]">
                    <div className="flex items-center gap-[1em]">
                        <LuPhone className="w-[2em] h-[2em] object-cover" alt="icon"/>
                        <h3 className="text-[1.4em] font-bold font-Montserrat">(225) 555-0118</h3>
                    </div>
                    <div className="flex items-center gap-[1em]">
                        <TfiEmail className="w-[2em] bg-[#252B42] h-[2em] object-cover" alt="icon"/>
                        <h3 className="text-[1.4em] font-bold font-Montserrat">michelle.rivera@example.com</h3>
                    </div>
                </div>
                <h2 className="text-[1.4em] font-bold font-Montserrat">Follow Us  and get a chance to win 80% off</h2>
                <div className="flex items-center gap-[2em]">
                    <h2 className="text-[1.4em] font-bold font-Montserrat">Follow Us</h2>:
                    <div className="flex items-center gap-[1em]">
                        <BsFacebook className="w-[2em] h-[2em] object-cover" alt="icon"/>
                        <FaTwitter className="w-[2em] h-[2em] object-cover" alt="icon"/>
                        <IoLogoInstagram className="w-[2em] h-[2em] object-cover" alt="icon"/>
                        <BsYoutube className="w-[2em] h-[2em] object-cover" alt="icon"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-between sm:justify-center py-[2em] gap-[14.4em] items-center">
                <div className="website-name flex items-center gap-[10em]">
                    <h2 className="text-[2.4em] capitalize tracking-wide font-bold font-inter">Bandage</h2>
                    <ul className="flex justify-center items-center font-poppines gap-[1.5em] text-[1.7em] font-medium capitalize">
                        <li className="nav_item"><Link href="/">home</Link></li>
                        <li className="nav_item"><Link href="/components/productListing">shop</Link></li>
                        <li className="nav_item"><Link href="/components/aboutPage">about</Link></li>
                        <li className="nav_item"><Link href="/components/teamPage">team</Link></li>
                        <li className="nav_item"><Link href="/components/contactPage">contact</Link></li>
                        <li className="nav_item"><Link href="/components/pricingPage">pages</Link></li>
                    </ul>
                </div>
                <div className="menu hidden items-center gap-[1em]">
                    <Image className="w-[2.4em] h-[2.4em] object-cover " alt="image" src={search_MI}/>
                    <Image className="w-[2.4em] h-[2.4em] object-cover " alt="image" src={cart_MI}/>
                    <Image className="w-[2.4em] h-[2.4em] object-cover " alt="image" src={menu_I}/>
                </div>
                <div className="search-section flex justify-center items-center gap-[2.8em]">
                    <div className="flex justify-center items-center pl-[2em] py-[0.8em] rounded-md">
                        <div className="flex items-center gap-[1em]">
                            <Image src={profile_I} className="w-[2em] h-[2em] object-cover" alt="icon"/>
                            <Link href="" className="text-[1.4em] capitalize font-Montserrat font-bold text-[#23A6F0]">login</Link>/
                            <Link href="" className="text-[1.4em] capitalize font-Montserrat font-bold text-[#23A6F0]">register</Link>
                        </div>
                    </div>
                    <Image className="w-[5em] h-[5em] object-cover" alt="image" src={search_I}/>
                    <Image className="w-[5em] h-[5em] object-cover" alt="image" src={favoruite_I}/>
                    <Image className="w-[5em] h-[5em] object-cover" alt="image" src={cart_I}/>
                </div>
            </div>
        </header>
    )
}