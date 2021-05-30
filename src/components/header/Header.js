import React, { useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2';

import './Header.css'

function Header() {
    const [light, SetLight] = useState(true)

    const changeTheme = () => {
        // SetLight(!light)

        if (light) {
            trans()
            document.documentElement.setAttribute('data-theme', 'dark')

            SetLight(false)
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'light')

            SetLight(true)
        }

    }


    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }
    return (
        <header className="header">
            <nav className=" header__nav container flex flex-jc-sb flex-ai-c">


                <p>Where in the world?</p>


                <div className="header__theme flex flex-ai-c" onClick={changeTheme}>
                    <Brightness2Icon className="header__icon" />
                    <p>Dark Mode</p>

                </div>

            </nav>

        </header>
    )
}

export default Header
