//// BAD PRACTICE

/// Loading complete lodash library
import _ from "lodash";
// usage
const newReq = _.extend({}, req);

/// RECOMMENDED PRACTICE
import _extend from "lodash/extend";
// usage
const newReq = _extend({}, req);
