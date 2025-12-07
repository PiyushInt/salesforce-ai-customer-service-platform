import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';

const fields = [NAME_FIELD];

export default class Selector extends LightningElement {
    selectedProductId;

    // Event handler for the child list component
    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
    }

    // Current user ID
    userId = Id;

    // Wire service to get current user's record
    @wire(getRecord, { recordId: '$userId', fields })
    user;

    // Getter to extract user name
    get name() {
        return this.user.data ? getFieldValue(this.user.data, NAME_FIELD) : '';
    }
}
