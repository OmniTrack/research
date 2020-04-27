import React from 'react';
import { Section } from '../Section';

export const GettingStarted = () => {
    return <Section title="Getting Started" hashId="getting-started">

        <h4>Installation</h4>
        <p>OmniTrack for Research is free and open-source platform. Due to the ethical reasons, we allowed researchers to set up their own platform instance on the storage they want (e.g., cloud server or a machine in the lab). By following our installation guide, a researcher without technical proficiency can setup and build their first experiment app within 2 hours.</p>


        <div className="paragraph">
            <a href="https://github.com/OmniTrack/omnitrack_for_research/wiki" target="_blank">Official Documentation</a>
        </div>

        <div className="paragraph">
            If you don't have a local server machine, try this guide (<a href="https://github.com/OmniTrack/omnitrack_for_research/wiki/Setting-up-an-Azure-server" target="_blank">Setting up an Azure Server</a>) to setup an Azure VM with free credit provided to the first-time users.
        </div>

        <h4>System Requirements</h4>

        <h5>Researcher Dashboard (Server)</h5>
        <ul>
            <li>Node.JS</li>
            <li>RAM >= 1Gb</li>
        </ul>

        <h5>Participant App</h5>
        <ul>
            <li>Minimum OS level: <b>Android Kitkat</b> (API 19). <span className="warning"><b>iOS</b> is NOT supported for now.</span></li>
            <li>The device must support Google Play Service (Google is not supported in several regions including <span className="warning">China</span>)</li>
        </ul>


    </Section>
}