import React from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2';

import './Header.css'

function Header() {
    return (
        <header className="header">
            <nav className=" header__nav container flex flex-jc-sb flex-ai-c">


                <p>Where in the world?</p>


                <div className="header__theme flex flex-ai-c">
                    <Brightness2Icon className="header__icon" />
                    <p>Dark Mode</p>

                </div>

            </nav>

        </header>
    )
}

export default Header
