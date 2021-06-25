import { observable, configure, flow, action } from 'mobx';
import axios from 'axios';

configure({ enforceActions: 'always' });
class FormStore {
    @observable
    resultsData = [];

    @observable
    savedData = [];

    @observable
    resultsDataStorage = [];

    @observable
    savedDataStorage = [];

    @observable
    state = 'pending';

    @action
    addProperty(id) {
        let selectedData = this.resultsData.find(item => item.id === id);
        this.savedData.push(selectedData);
    }

    @action
    removeProperty(id) {
        this.savedData.splice(this.savedData.indexOf(this.savedData.find(item => item.id === id)), 1);
    }

    @action
    updateProperty(price) {
        let selectedResultData = [];
        let selectedSavedData = [];
        let newprice = price && price.split(',').join('');
        if (newprice >= 0) {
            this.resultsDataStorage.forEach((value, index) => {
                let str = value.price
                    .slice(1)
                    .split(',')
                    .join('');
                let propertyPrice = parseInt(str, 10);
                if (propertyPrice >= newprice) {
                    selectedResultData.push(value);
                }
            });
            this.savedDataStorage.forEach((value, index) => {
                let str = value.price
                    .slice(1)
                    .split(',')
                    .join('');
                let propertyPrice = parseInt(str, 10);
                if (propertyPrice >= newprice) {
                    selectedSavedData.push(value);
                }
            });
        }
        this.resultsData = selectedResultData;
        this.savedData = selectedSavedData;
    }

    @action
    resetProperty() {
        this.resultsData = this.resultsDataStorage;
        this.savedData = this.savedDataStorage;
    }

    @action
    filterFn(price) {}
    getData = flow(function*() {
        const api = '/test_data/data.json';
        try {
            const res = yield axios.get(api);
            this.resultsData = res.data.results;
            this.savedData = res.data.saved;
            this.resultsDataStorage = res.data.results;
            this.savedDataStorage = res.data.saved;
            this.state = 'done';
        }
 catch (error) {
            this.state = 'error';
        }
    });
}

export default FormStore;
