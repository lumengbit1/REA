import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RootStore from '../stores/RootStore';
import { Provider } from 'mobx-react';
import Home from './../components/Home';

Enzyme.configure({ adapter: new Adapter() });
const rootStore = new RootStore();
describe('Render Test', function () {
    it('case: expect rendering correct', () => {
        const wrapper = render(
            <Provider rootStore={rootStore}>
                <Home />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
