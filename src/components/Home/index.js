import React from 'react';
import './../../less/style.less';
import './home.less';
import Card from './../Card';

function Home() {
    return (
        <div className="home-page">
            <div className="results-area">
                <div className="title">'Results'</div>
                <div className="block">
                    <Card area="results" />
                </div>
            </div>
            <div className="saved-properties-area">
                <div className="title">'Saved Properties'</div>
                <div className="block">
                    <Card area="saved" />
                </div>
            </div>
        </div>
    );
}
export default Home;
