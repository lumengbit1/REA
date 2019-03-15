import React, { useEffect } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import './../../less/style.less';
import './card.less';
import Loadable from 'react-loadable';
import classNames from 'classnames';

function Card({ rootStore, area }) {
    const propertyData = area === 'results' ? rootStore.formStore.resultsData : rootStore.formStore.savedData;
    const btnText = area === 'results' ? 'Add Property' : 'Remove Property';
    const btnClass = classNames({
        btnresults: area === 'results',
        btnsaved: area === 'saved'
    });
    const LoadableProperty = Loadable({
        loader: () => import('./../Property'),
        loading() {
            return <>Loading...</>;
        }
    });

    useEffect(() => {
        rootStore.formStore.getData();
    }, []);

    function onClick(id) {
        area === 'results' ? rootStore.formStore.addProperty(id) : rootStore.formStore.removeProperty(id);
    }

    return (
        <>
            {propertyData.map(item => {
                return (
                    <div className="property">
                        <LoadableProperty
                            price={item.price}
                            color={item.agency.brandingColors.primary}
                            logo={item.agency.logo}
                            id={item.id}
                            mainImage={item.mainImage}
                        />
                        <button
                            className={btnClass}
                            onClick={() => {
                                onClick(item.id);
                            }}
                        >
                            {btnText}
                        </button>
                    </div>
                );
            })}
        </>
    );
}
export default inject('rootStore')(observer(Card));
