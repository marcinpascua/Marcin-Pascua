import React from "react";

export default function NavLinks(){
    const links = ["About", "Education", "Skills", "Achievements", "Projects"];
    
    return(
        <nav className="flex flex-row gap-10 justify-between ">
            {links.map((name,i) => (
                <a key = {i}
                href={`/${name.toLowerCase()}`}
                className="text-white text-lg hover:underline hover:decoration-orange-200  hover:text-white hover:underline-offset-2  px-3 py-1 transition-all duration-500">
                {name}</a>
            )) 
            }
        </nav>
    );
}
