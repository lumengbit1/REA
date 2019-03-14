import React from 'react';
import './../../less/style.less';
import './home.less';
import Results from './../Results';
import Saved from './../Saved';

function Home() {
    return (
        <div className="home-page">
            <div className="results-area">
                <Results />
            </div>
            <div className="saved-properties-area">
                <Results />
            </div>
        </div>
    );
}
export default Home;
