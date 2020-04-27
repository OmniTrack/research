import React from 'react';
import './Team.scss';
import { Section } from '../Section';

const blee = {
    name: "Bongshin Lee",
    title: "Sr. Principal Researcher",
    affiliation: "Microsoft Research",
    email: "bongshin (at) microsoft.com",
    web: "http://bongshiny.com",
    thumb: require("../assets/author_bongshin.png")
}

const echoe = {
    name: "Eun Kyoung Choe",
    title: "Assistant Professor",
    affiliation: "University of Maryland",
    email: "choe (at) umd.edu",
    web: "http://eunkyoungchoe.com",
    thumb: require("../assets/choe_portrait.png")
}

const jseo = {
    name: "Jinwook Seo",
    title: "Professor",
    affiliation: "Seoul Nat'l University",
    email: "jseo (at) snu.ac.kr",
    web: "http://hcil.snu.ac.kr/people/jinwook-seo",
    thumb: require("../assets/jseo_portrait.jpg")
}

const yhkim = {
    name: "Young-Ho Kim",
    title: "Postdoc",
    affiliation: "University of Maryland",
    email: "yghokim (at) umd.edu",
    web: "http://younghokim.net",
    thumb: require("../assets/yhkim_portrait.jpg")
}


const team = [yhkim, blee, jseo, echoe]

export const Team = () => {
    return <Section title="The OmniTrack Team" hashId="team">
        <div className="members">
            {
                team.map(member => {
                    return <div key={member.email} className="member">

                        <a href={member.web} target="_blank">
                            <div className="member_content">
                                <div className="thumb">
                                    <img src={member.thumb} />
                                </div>
                                <div className="information">
                                    <div className="name">
                                        {member.name}
                                    </div>
                                    <div className="description">
                                        {member.title}<br />
                                        {member.affiliation}<br />
                                        <span className="email">
                                            {member.email}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                })
            }
        </div>
    </Section>
}