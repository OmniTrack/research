import React from 'react';
import './Header.scss';
import { HashLink as Link } from 'react-router-hash-link';

import logo from './assets/omnitrack_for_research_logo.svg';

export const Header = (props: {}) => {
    return <header>
        <img id="logo" src={logo} />

        <div className="flex-fill" />
        <Link className="gnb-link" to="features">Features</Link>
        <Link className="gnb-link" to="getting-started">Getting Started</Link>
        <Link className="gnb-link" to="publications">Publications</Link>
        <Link className="gnb-link" to="team">Team</Link>


        <a className="github" href="https://github.com/OmniTrack/omnitrack_for_research" target="_blank">
            <div>
                <img src={require('./assets/github.svg')}/>
                <span>Github</span>
            </div>
        </a>

    </header>
}