import { Section } from "../Section"
import React from "react"
import './Features.scss';

export const Features = () => {
    return <Section title="What is OmniTrack for Research?" hashId="features">
        <p>OmniTrack for Research (O4R) is a free and open-source research platform for mobile-based <i>in situ</i> data collection, which streamlines the implementation and deployment of a mobile data collection tool. O4R enables researchers to rapidly translate their study design into a study app, deploy the app remotely, and monitor the data collection, <u>all without requiring any coding.</u></p>

        <div className="paragraph multi-column">
            <div className="column">
                <h4>Author Study Protocol</h4>
                <img src={require("../assets/features/plan_builder_retiree.jpg")} />
                <p>Implement a study protocol using an authoring interface on web. O4R supports between-subject design with <u>highly-personalizable</u> self-reporting schema, based on <i>semi-automated tracking</i> concept.</p>
            </div>
            <div className="column">
                <h4>Deploy Mobile App</h4>
                <img src={require("../assets/features/sleep_diary.jpg")} />
                <p>O4R builds and provides a sharable URL to install an <i>Android app</i> for study participants. The entire build process is handled by the server.</p>
            </div>
            <div className="column">
                <h4>Manage Data Collection</h4>
                <img src={require("../assets/features/experiment_overview.jpg")} />
                <p>Monitor the progress of study participant's data collection during the study period. Participants' reporting data and interaction timestamps are uploaded to the server in realtime.</p>
            </div>
        </div>
        <hr />
        <h2>What can I do with OmniTrack for Research?</h2>

        <div className="paragraph">
            <div className="column center">
                <img style={{ width: '90%', marginTop: '1rem' }} src={require("../assets/features/semi-automated-design.jpg")} />
            </div>
        </div>

        <p>O4R's tracker design space is based on the <a href="https://omnitrack.github.io/" target="_blank">OmniTrack</a> technology and its <i>semi-automated tracking</i> approach. Using <i>sensor services</i> and the <i>automated triggers</i>, you can design trackers with various level of automation. O4R is able to implement the following typical self-reporting studies but not limited to them:</p>

        <div className="paragraph multi-column">
            <div className="column">
                <h4>Diary Study</h4>

                <p>
                    Ask the study participants to log their receptiveness or circumstantial information near the time when a situation of interest occurs. You can use fine-grained, logical, and personalizable <i>reminders</i> to promote compliance. 
                </p>
            </div>
            <div className="column">
                <h4>Experience Sampling</h4>

                <p>
                    Send notifications at random moments or periodically to gather ecologically valid experience samples. In the researcher dashboard, you can personalized the EMA pings to reflect each participant's lifestyle.
                </p>
            </div>

        </div>
    </Section>
}