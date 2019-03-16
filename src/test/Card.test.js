import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import RootStore from '../stores/RootStore';
import { Provider } from 'mobx-react';
import Card from '../components/Card';
import Property from '../components/Property';
import sinon from 'sinon';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';

// Enzyme.configure({ adapter: new Adapter() });
const rootStore = new RootStore();
afterEach(cleanup);
describe('Render Test', function () {
    it('case: expect rendering correct', () => {
        const { container } = render(
            <Provider rootStore={rootStore}>
                <Card />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
describe('Function Test', function () {
    it('case: expect getData becalled', () => {
        const getData = sinon.stub(rootStore.formStore, 'getData');
        const { rerender } = render(
            <Provider rootStore={rootStore}>
                <Card />
            </Provider>
        );
        rerender(
            <Provider rootStore={rootStore}>
                <Card />
            </Provider>
        );

        expect(getData.calledOnce).toBe(true);
        getData.restore();
    });

    it('renders Property correctly', async () => {
        const { getByText } = render(<Property price="add" />);
        const price = await waitForElement(() => getByText('add'));
        expect(price).toBeInTheDocument;
    });
    it('case: expect button onclick', async () => {
        const onClick = jest.fn();
        const propertyData = {
            results: [
                {
                    price: '$726,500',
                    agency: {
                        brandingColors: {
                            primary: '#ffe512'
                        },
                        logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
                    },
                    id: '1',
                    mainImage:
                        'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
                },
                {
                    price: '$560,520',
                    agency: {
                        brandingColors: {
                            primary: '#fcfa3b'
                        },
                        logo: 'http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif'
                    },
                    id: '2',
                    mainImage:
                        'http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg'
                },
                {
                    price: '$826,500',
                    agency: {
                        brandingColors: {
                            primary: '#57B5E0'
                        },
                        logo: 'http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif'
                    },
                    id: '3',
                    mainImage:
                        'http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg'
                }
            ],

            saved: [
                {
                    price: '$526,500',
                    agency: {
                        brandingColors: {
                            primary: '#000000'
                        },
                        logo: 'http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif'
                    },
                    id: '4',
                    mainImage:
                        'http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg'
                }
            ]
        };
        const { container, getByText, getByTestId, rerender } = render(
            <Provider rootStore={rootStore}>
                <Card area="results" onClick={onClick} propertyData={propertyData} />
            </Provider>
        );
        rerender(
            <Provider rootStore={rootStore}>
                <Card area="results" onClick={onClick} propertyData={propertyData} />
            </Provider>
        );
        await waitForElement(() => getByTestId('test'));
        // fireEvent.click(() => getByTestId('test'));
        // expect()
    });
});
