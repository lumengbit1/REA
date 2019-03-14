import React, { useEffect } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import './../../less/style.less';
import './results.less';

function Result({ rootStore }) {
    useEffect(() => {
        rootStore.formStore.getData();
    });
    return (
        <>
            <div className="results-header" />
            <div />
            <div className="results-content" />
            <div className="results-footer" />
        </>
    );
}
export default inject('rootStore')(observer(Result));
