const uuidv4 = require('uuid/v4');
const moment = require('moment');


moment.defaultFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

const generateUUIDV4 = () => uuidv4(); // Creates UUID by Random element (version 4 of uuid module).

const dateMoment = () => moment(); // Creates moment by 'YYYY-MM-DDTHH:mm:ss.SSSZ' configuration. Needs to get ".format()" in order to execute.

module.exports = {
	generateUUIDV4,
	dateMoment,
};
