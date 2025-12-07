import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class Detail extends LightningElement {
  @api productId;
  @wire(getRecord, { recordId: '$productId', fields: ['Product__c.Name', 'Product__c.MSRP__c', 'Product__c.Description__c', 'Product__c.Picture_URL__c', 'Product__c.Material__c', 'Product__c.Level__c', 'Product__c.Category__c'] })
  product;
}
