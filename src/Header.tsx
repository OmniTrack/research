import React from 'react';
import './Header.scss';
import { NavHashLink as Link } from 'react-router-hash-link';

import logo from './assets/omnitrack_for_research_logo.svg';

const navProps = {
    className: 'gnb-link',
    smooth: true,
    activeClassName: "selected"
}

export const Header = (props: {}) => {
    return <header>
        <img id="logo" src={logo} />

        <div className="flex-fill" />
        <Link {...navProps} to="features">Features</Link>
        <Link {...navProps} to="getting-started">Getting Started</Link>
        <Link {...navProps}  to="publication">Publication</Link>
        <Link {...navProps}  to="team">Team</Link>


        <a className="github" href="https://github.com/OmniTrack/omnitrack_for_research" target="_blank">
            <div>
                <img src={require('./assets/github.svg')}/>
                <span>Github</span>
            </div>
        </a>

    </header>
}