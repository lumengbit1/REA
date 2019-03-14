import { observable, configure, flow } from 'mobx';
import axios from 'axios';
// import { reactLocalStorage } from 'reactjs-localstorage';

configure({ enforceActions: 'always' });
class FormStore {
    @observable
    formvalue = {
        name: '',
        type: '',
        shift: '',
        starttime: '',
        endtime: '',
        critical: 0,
        low: 0
    };
    @observable
    localStorageValue = [];

    @observable
    resultsData = [];

    @observable
    savedData = [];

    @observable
    state = 'pending';

    @observable
    api = '/test_data/data.json';

    getData = flow(function*() {
        try {
            const res = yield axios.get(this.api);
            this.resultsData = res.data.results;
            this.savedData = res.data.saved;
            this.state = 'done';
        }
 catch (error) {
            this.state = 'error';
        }
    });
}

export default FormStore;
