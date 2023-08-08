import React from 'react';
import './feature.css';

const Feature = ({title , text}) => (
    <div className='gpt3_feature' id="features">
    <div className="gpt3_feature_title">
    <h1>{title}</h1>
    </div>
    <div className="gpt3_feature_text">
    <p>{text}</p>
    </div>
    </div>
)

export default Feature;