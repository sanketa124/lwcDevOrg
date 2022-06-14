import { LightningElement, api } from 'lwc';

export default class PrePopulateAccountHeadlessModal extends LightningElement {
    /*
    _recordId;
    set recordId(recordId){
        if(recordId != this._recordId){
            this._recordId = recordId;
        }
    }*/
    @api recordId;

    @api invoke(){
        console.log('dsfds sanket');
        console.log('This is where I should be invoked.', this.recordId);
    }

    connectedCallback() {
        console.log("recordId", this.recordId);
    }


}