import { AddressBook, ClipboardText, House, User } from "phosphor-react";
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


    return (
        <NavBar className={colorChange ? 'navbarColorChange' : 'navbar'}>
            <a href="/">
                <BoxToOut>
                    <House size={20}/>
                    <p>Home</p>
                </BoxToOut>
            </a>

            <a href="/about">
                <BoxToOut>
                    <User size={20}/>
                    <p>About</p>
                </BoxToOut>
            </a>

            <a href="/projects">
                <BoxToOut>
                    <ClipboardText size={20}/>
                    <p>Projects</p>
                </BoxToOut>
            </a>

            <a href="/resume">
                <BoxToOut>
                    <AddressBook size={20}/>
                    <p>CV</p>
                </BoxToOut>
            </a>
        </NavBar>
    )
}