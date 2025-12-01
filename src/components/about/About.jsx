import React from 'react';
import audienceImage from '../../assets/audience.png';
import './About.css';
// 
export default function About() {
    return (
        <div id='why-DevFest' className="container bg-[#f7eedd]">
            <div className="left-panel">
                <div className="header-section">
                    <h1 className="title">
                        What is <span className="question-mark">?</span>
                        <br />
                        DevFest
                    </h1>
                </div>
                <div className="image-wrapper">
                    <div className="image-container">
                        <img src={audienceImage} alt="DevFest Audience" />
                    </div>
                </div>
            </div>
            <div className="right-panel">
                <div className="content-container">
                    <div className="text-content">
                        <p>
                            <strong>DevFest</strong> is an annual, globally recognized, decentralized tech conference hosted by <strong>Google Developer Groups (GDG)</strong> across the world. Every year, thousands of developers, learners, and tech enthusiasts come together to explore cutting-edge technologies, exchange knowledge, and connect with industry experts.
                        </p>

                        <p>
                            <strong>DevFest 2025</strong> marks the 14th global edition and the 4th edition in <strong>Patna</strong>, focused on meaningful learning, collaboration, and strengthening the developer community in <strong>Bihar</strong>. Organized by <strong>GDG Patna</strong>, this year’s <strong>DevFest</strong> brings a full day of expert sessions, workshops, lightning talks, demos, and networking—offering real-world learning and a platform for tech enthusiasts across the state to connect and grow together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}