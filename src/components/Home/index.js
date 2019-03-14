import React from 'react';
import './../../less/style.less';
import './home.less';
import Results from './../Results';

function Home() {
    return (
        <div className="home-page">
            <div className="results-area">
                <div className="result">
                    <Results />
                </div>
            </div>
            <div className="saved-properties-area">
                <div className="saved-properties" />
            </div>
        </div>
    );
}
export default Home;
