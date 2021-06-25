import React from 'react';
import RootStore from '../stores/RootStore';
import { Provider } from 'mobx-react';
import Header from '../components/Header';
import { render, fireEvent } from 'react-testing-library';
// import { renderHook, act } from 'react-hooks-testing-library';
import sinon from 'sinon';

const rootStore = new RootStore();
describe('Render Test', function () {
    it('case: expect rendering correct', () => {
        const { container } = render(
            <Provider rootStore={rootStore}>
                <Header />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});

describe('Event Test', () => {
    it('case: expect Price Choose Click correct', () => {
        const updateProperty = sinon.stub(rootStore.formStore, 'updateProperty');
        const { getByTestId } = render(
            <Provider rootStore={rootStore}>
                <Header />
            </Provider>
        );

        fireEvent.click(getByTestId('choose'));

        expect(updateProperty.calledOnce).toBe(true);
        updateProperty.restore();
    });

    it('case: expect Reset Click correct', () => {
        const resetProperty = sinon.stub(rootStore.formStore, 'resetProperty');
        const { getByTestId } = render(
            <Provider rootStore={rootStore}>
                <Header />
            </Provider>
        );

        fireEvent.click(getByTestId('reset'));

        expect(resetProperty.calledOnce).toBe(true);
        expect(getByTestId('test').value).toBe('');
        resetProperty.restore();
    });

    it('case: expect onChange correct', () => {
        const change = sinon.stub(Header, 'getPrice');
        const { container, getByTestId } = render(
            <Provider rootStore={rootStore}>
                <Header />
            </Provider>
        );

        fireEvent.change(getByTestId('test'), { target: { value: 1 } });
        fireEvent.click(getByTestId('choose'));

        expect(change.calledOnce).toBe(true);
        change.restore();
    });
});
