import React, { useEffect } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import './../../less/style.less';
import './results.less';
import Property from './../Property';

function Result({ rootStore }) {
    useEffect(() => {
        rootStore.formStore.getData();
    });
    return (
        <>
            {rootStore.formStore.resultsData.map(item => {
                return (
                    <Property
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
export default inject('rootStore')(observer(Result));
