import React, {useState} from "react";


function Header({headerImage, title}) {
    return (
        <img src={headerImage} alt={title}/>
    )
}

export default Header;