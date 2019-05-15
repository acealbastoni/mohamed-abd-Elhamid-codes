
var subscriberId= "1001";
  
var downloadedEventDate = "2019/04/01";
  var jsonEvent = JSON.parse(getData(subscriberId, downloadedEventDate));
var headers = [jsonEvent.subscriber.subscriberId, jsonEvent.subscriber.SalesForceAccount.Id, jsonEvent.subscriber.SalesForceAccount.Status__c, jsonEvent.subscriber.SalesForceAccount.Name, jsonEvent.subscriber.SalesForceAccount.First_Name__c, jsonEvent.subscriber.SalesForceAccount.Last_Name__c, jsonEvent.subscriber.SalesForceAccount.Time_Zone__c, jsonEvent.subscriber.SalesForceAccount.Birthdate__c, jsonEvent.subscriber.SalesForceAccount.Service_Start_Date__c, jsonEvent.subscriber.SalesForceAccount.Base_Station_Type__c, jsonEvent.subscriber.SalesForceAccount.Call_Center__c, jsonEvent.subscriber.SalesForceAccount.Wrist_Neck__c, jsonEvent.subscriber.SalesForceAccount.Installation_Method__c, jsonEvent.subscriber.SalesForceAccount.Subscriber_Landline_Phone_Number__c, jsonEvent.subscriber.SalesForceAccount.ShippingAddress.city, jsonEvent.subscriber.SalesForceAccount.ShippingAddress.street, jsonEvent.subscriber.SalesForceAccount.ShippingAddress.postalCode, jsonEvent.subscriber.SalesForceAccount.ShippingAddress.state, jsonEvent.subscriber.SalesForceAccount.attributes.type, jsonEvent.subscriber.SalesForceAccount.attributes.url, jsonEvent.timestamp, jsonEvent.events]//["@class"], jsonEvent.events.startTimestamp, jsonEvent.events.endTimestamp, jsonEvent.events.value, jsonEvent.events[0].type, jsonEvent.events.timestamp]
Logger.log( headers.length); 


//-------------------------------------------------------------------------
var eventGrid = [];
for (var row = 0; row < jsonEvent.events.length; row++) {
   var record = []
   var counter = 0;
   while (counter < headers.length) {
      record[row, counter] = headers[counter];
      counter++;
   }
   if (counter = 21) {
      while (counter < 25) {
         record[row, 21] = headers[21][row]["@class"];
         record[row, 22] = headers[21][row]["startTimestamp"];
         record[row, 23] = headers[21][row]["endTimestamp"];
         record[row, 24] = headers[21][row]["type"];
         record[row, 25] = headers[21][row]["value"];
         record[row, 26] = headers[21][row]["timestamp"];
         counter++;
      }
   }
   eventGrid.push(record)
}
Logger.log(eventGrid);
 //--------------------------------------------------------------------------