import { observable, configure, flow } from 'mobx';
import axios from 'axios';

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
    resultsData = [];

    @observable
    savedData = [];

    @observable
    state = 'pending';

    getData = flow(function*() {
        const api = '/test_data/data.json';
        try {
            const res = yield axios.get(api);
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
