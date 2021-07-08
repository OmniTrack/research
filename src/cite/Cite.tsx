import React from 'react';
import { Section } from '../Section';
import "./Cite.scss";

import ReactPrismjs from '@uiw/react-prismjs';
import 'prismjs-bibtex';

const BibTexO4R = "@misc{Kim2019OmnitrackForResearch,\n\
    title        = {{OmniTrack for Research: A Research Platform for Streamlining Mobile-based In Situ Data Collection}},\n\
    author       = {Kim, Young-Ho and Lee, Bongshin and Seo, Jinwook and Choe, Eun Kyoung},\n\
    year         = 2019,\n\
    url          = {https://omnitrack.github.io/research}\n\
}"

const BibTexOmniTrack = "@article{Kim2017OmniTrack,\n\
    title        = {{OmniTrack: A Flexible Self-Tracking Approach Leveraging Semi-Automated Tracking}},\n\
    author       = {Kim, Young-Ho and Jeon, Jae Ho and Lee, Bongshin and Choe, Eun Kyoung and Seo, Jinwook},\n\
    year         = 2017,\n\
    month        = sep,\n\
    journal      = {Proc. ACM Interact. Mob. Wearable Ubiquitous Technol.},\n\
    publisher    = {ACM},\n\
    address      = {New York, NY, USA},\n\
    volume       = 1,\n\
    number       = 3,\n\
    pages        = {67:1--67:28},\n\
    doi          = {10.1145/3130930},\n\
    issn         = {2474-9567},\n\
    url          = {http://doi.acm.org/10.1145/3130930},\n\
    issue_date   = {September 2017},\n\
    articleno    = 67,\n\
    numpages     = 28,\n\
    acmid        = 3130930\n\
}"


export const Cite = () => {

    return <Section title="Citing O4R in Your Work" hashId="cite">
        <p>
            If you used <strong>OmniTrack for Research</strong> to conduct your research, we encourage you to cite the following in your publication:
        </p>
        <div className="indented">
            <div className="cite">Young-Ho Kim, Bongshin Lee, Jinwook Seo, and Eun Kyoung Choe. 2019. OmniTrack for Research: A Flexible Research Platform for Streamlining Mobile-based In Situ Data Collection. https://omnitrack.github.io/research</div>

            <ReactPrismjs language="bibtex" source={BibTexO4R} />
        </div>

        <hr />
        <p>
            If you want to refer to the idea of the tracker customization or the user interface of mobile application, you may cite our paper about the <strong>OmniTrack</strong> mobile app:
        </p>
        <div className="indented">
            <div className="cite">Young-Ho Kim, Jae Ho Jeon, Bongshin Lee, Eun Kyoung Choe, and Jinwook Seo. 2017. OmniTrack: A Flexible Self-Tracking Approach Leveraging Semi-Automated Tracking. Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. 1, 3, Article 67 (Sept. 2017), 28 pages. https://doi.org/10.1145/3130930</div>
            <ReactPrismjs language="bibtex" source={BibTexOmniTrack} />
        </div>
    </Section>

}