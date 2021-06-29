import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Frontend and Backend developer</h1>
                <Typed 
                    className="typed-text"
                    strings={["Diseño Web", "Desarrollo fullstack", "Perito judicial Informático", "Ethical hacking"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                    <a href ="#" className="btn-main-offer">Contacta conmigo!</a>
                    
            </div>
        </div>

    )
}

export default Header;