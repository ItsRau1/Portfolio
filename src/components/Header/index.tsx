import { AddressBook, ClipboardText, House, TextAlignJustify, User, XCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BoxToOut, NavBar } from "./style";

export function Header() {
        const [colorChange, setColorchange] = useState(false);

        useEffect (() => {
            window.addEventListener('scroll', changeNavbarColor);
        }, []) 

        const changeNavbarColor = () =>{
           if(window.scrollY >= 20){
             setColorchange(true);
           }
           else{
             setColorchange(false);
           }
        };

        const [toggleMenu, setToggleMenu] = useState(false)

        const [screenWidth, setScreenWidth] = useState(window.innerWidth)

        const toggleNav = () => {
            setToggleMenu(!toggleMenu)
          }

          useEffect(() => {

            const changeWidth = () => {
              setScreenWidth(window.innerWidth);
            }
        
            window.addEventListener('resize', changeWidth)
        
            return () => {
                window.removeEventListener('resize', changeWidth)
            }
          }, [])

    return (
        <NavBar className={colorChange ? 'navbarColorChange' : 'navbar'}>
            {(toggleMenu || screenWidth > 768 ) && (
                            <ul>
                            <li>
                                    <Link to="/">
                                        <BoxToOut>
                                            <House size={20}/>
                                            <p>Home</p>
                                        </BoxToOut>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about">
                                        <BoxToOut>
                                            <User size={20}/>
                                            <p>About</p>
                                        </BoxToOut>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/projects">
                                        <BoxToOut>
                                            <ClipboardText size={20}/>
                                            <p>Projects</p>
                                        </BoxToOut>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="resume">
                                        <BoxToOut>
                                            <AddressBook size={20}/>
                                            <p>CV</p>
                                        </BoxToOut>
                                    </Link>
                                </li>
                            </ul>
            )}
            <button onClick={toggleNav}>
                {toggleMenu ? <XCircle /> : <TextAlignJustify />}
            </button>
        </NavBar>
    )
}