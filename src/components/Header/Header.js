import "./Header.css"

function Header({headerImage, title}) {
    return (
        <div className="header-holder">
            <img src={headerImage} alt={title}/>
        </div>
    )
}

export default Header;