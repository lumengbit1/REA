import React, { useEffect } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import './../../less/style.less';
import './card.less';
// import Property from './../Property';
import Loadable from 'react-loadable';

function Card({ rootStore, area }) {
    // const { area } = props;
    useEffect(() => {
        rootStore.formStore.getData();
    }, []);
    const propertyData = area === 'results' ? rootStore.formStore.resultsData : rootStore.formStore.savedData;

    const LoadableProperty = Loadable({
        loader: () => import('./../Property'),
        loading() {
            return <>Loading...</>;
        }
    });
    return (
        <>
            {propertyData.map(item => {
                return (
                    <LoadableProperty
                        price={item.price}
                        color={item.agency.brandingColors.primary}
                        logo={item.agency.logo}
                        id={item.id}
                        mainImage={item.mainImage}
                    />
                );
            })}
        </>
    );
}
export default inject('rootStore')(observer(Card));
