const uuidv4 = require('uuid/v4');
const moment = require('moment');
moment.defaultFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

function generateUUIDV4() { return uuidv4() }//Creates UUID by Random element (version 4 of uuid module).

function dateMoment() { return moment() } //Creates moment by 'YYYY-MM-DDTHH:mm:ss.SSSZ' configuration. Needs to get ".format()" in order to execute. 


module.exports = {
    generateUUIDV4,
    dateMoment
}