import React from 'react';
import { Section } from '../Section';
import './Publication.scss';


const papers = [
    {
        authors: "Eunkyung Jo, Austin L. Toombs, Colin M. Gray, and Hwajung Hong",
        title: "Understanding Parenting Stress through Co-designed Self-Trackers",
        description: "ACM CHI 2020. Pages 1–13.",
        doi: "https://doi.org/10.1145/3313831.3376359"
    },
    {
        authors: "Young-Ho Kim, Eun Kyoung Choe, Bongshin  Lee, and Jinwook Seo",
        title: "Understanding Personal Productivity: How Knowledge Workers Define, Evaluate, and Reflect on Their Productivity",
        description: "ACM CHI 2019. Pages 1–12.",
        doi: "https://doi.org/10.1145/3290605.3300845"
    },

    {
        authors: "Sung-In Kim, Eunkyung Jo, Myeonghan Ryu, Inha Cha, Young-Ho Kim, Heejeong Yoo, and Hwajung Hong",
        title: "Toward Becoming a Better Self: Understanding Self-Tracking Experiences of Adolescents with Autism Spectrum Disorder Using Custom Trackers",
        description: "EAI PervasiveHealth 2019. Pages 169–178.",
        doi: "https://doi.org/10.1145/3329189.3329209"
    }

]

export const Publication = () => {
    return <Section title="Publication">
        <h3 className="margin-bottom-1rem">Published Studies Conducted Using OmniTrack for Research</h3>
        {
            papers.map(p => {
                return <Paper
                    key={p.title}
                    {...p}
                />
            })
        }
    </Section>
}


const Paper = (props: {
    authors: string,
    title: string,
    description: string,
    doi?: string
}) => {
    return <div className="publication-info paragraph">
        <div className="authors">{props.authors}</div>
        <div className="title"><b>{props.title}</b></div>
        <div>
            {props.description}
            {
                props.doi != null ? <a className="doi" href={props.doi} target="_blank">DOI</a> : null
            }
        </div>

    </div>
}