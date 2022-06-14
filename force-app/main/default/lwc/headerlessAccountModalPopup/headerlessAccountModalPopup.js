import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class HeaderlessAccountModalPopup extends NavigationMixin(LightningElement) {

    @api recordId;

    @api invoke(){
        console.log('dsfds sanket');
        console.log('This is where I should be invoked.', this.recordId);

        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Sanket',
            LastName: 'Anand',
            Salutation: 'Mr.',
            Phone: '98656756',
            LeadSource: 'Other'
        });

        try{
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Contact',
                    actionName: 'new'
                },
                state: {
                    defaultFieldValues: defaultValues
                }
            });    
        }catch(err){
            console.log('The error is',err);
        }
        console.log('dsfds sanket1');
    }

}