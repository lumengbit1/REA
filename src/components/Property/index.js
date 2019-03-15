import React from 'react';
import './../../less/style.less';
import './property.less';

function Property(props) {
    const { color, logo, id, mainImage, price } = props;
    return (
        <>
            <div className="results-header" style={{ backgroundColor: color }}>
                <span className="logo">
                    <img className="logo-img" src={logo} alt="logo" />
                </span>
                <span className="id">ID:{id}</span>
            </div>
            <div className="results-content">
                <img className="content-img" src={mainImage} alt="image" />
            </div>
            <div className="results-footer">
                <span>{price}</span>
            </div>
            {/* <button className="btn-results">Click</button> */}
        </>
    );
}
export default Property;
