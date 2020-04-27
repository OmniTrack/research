import React from 'react';

export const Section = (props: {
    title: string,
    children?: any
}) => {
    return <div className="container">
        <h1>{props.title}</h1>
        <div className="section-content">
            {props.children}
        </div>
    </div>
}