import { observable, action, configure } from 'mobx';
import { reactLocalStorage } from 'reactjs-localstorage';

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

    @action
    updateProperty(key, value) {
        this.formvalue[key] = value;
    }
    @action
    handleConfirm() {
        let data = {
            name: '',
            type: '',
            shift: '',
            starttime: '',
            endtime: '',
            critical: 0,
            low: 0
        };
        for (let key of Object.keys(data)) {
            data[key] = this.formvalue[key];
        }
        this.localStorageValue.push(data);
        reactLocalStorage.setObject('FormValue', this.localStorageValue);
    }
    @action
    handleSubmit() {
        // console.log(reactLocalStorage.getObject('FormValue'));
    }
}

export default FormStore;
