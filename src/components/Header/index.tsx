import { AddressBook, ClipboardText, House, TextAlignJustify, User, XCircle } from "phosphor-react";
import { useEffect, useState } from "react";
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
            {(toggleMenu || screenWidth > 500 ) && (
                            <ul>
                            <li>
                                    <a href="/">
                                        <BoxToOut>
                                            <House size={20}/>
                                            <p>Home</p>
                                        </BoxToOut>
                                    </a>
                                </li>
                                <li>
                                    <a href="/about">
                                        <BoxToOut>
                                            <User size={20}/>
                                            <p>About</p>
                                        </BoxToOut>
                                    </a>
                                </li>
                                <li>
                                    <a href="/projects">
                                        <BoxToOut>
                                            <ClipboardText size={20}/>
                                            <p>Projects</p>
                                        </BoxToOut>
                                    </a>
                                </li>
                                <li>
                                    <a href="/resume">
                                        <BoxToOut>
                                            <AddressBook size={20}/>
                                            <p>CV</p>
                                        </BoxToOut>
                                    </a>
                                </li>
                            </ul>
            )}
            <button onClick={toggleNav}>
                {toggleMenu ? <XCircle /> : <TextAlignJustify />}
            </button>
        </NavBar>
    )
}