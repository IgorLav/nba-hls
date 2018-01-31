import React from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './latest-news.scss';

const setDelay = (i) => {
    if (i % 2 === 0) return 150;
    if (i % 3 === 0) return 200;
    return 50;
};

const latestNews = (props) => {
    const generateBlocks = (blocks) => {
        if (blocks) {
            return blocks.map((item, i) => (
                <div className={`grid-item ${item.type}`} key={item.id}>
                    <Fade bottom delay={setDelay(i + 1)} key={item.id}>
                        <div className='inner'
                             style={{backgroundImage: `url(/images/blocks/${item.image})`}}
                        >
                            <Link to={item.link} className="description">{item.title}</Link>
                        </div>
                    </Fade>
                </div>
            ));
        }
    };

    return (
        <div className="grid-menu">
            {generateBlocks(props.blocks)}
        </div>
    );
};

export default latestNews;