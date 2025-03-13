import React from 'react';
import '../css/scrollableDisplay/desktop.css'

import display from '../../images/portfolio/wolfvelity/monitor.png';

const Desktop = ({content}) => {
    return (
        <div class="container">
            <div className="monitor-container">
                <img src={display} alt="Монітор" className="display-image" />
                <div className="scrollable-content">
                    <img src={content} alt="Контент" />
                </div>
            </div>
        </div>
    );
}
export default Desktop;