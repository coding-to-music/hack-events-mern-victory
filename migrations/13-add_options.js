'use strict';

module.exports.id = 'add_options';

module.exports.up = function (done) {
  var events = this.db.collection('events');

  let options = {
    allowHighSchool: false,
    mlhProvisions: false,
    allowOutOfState: false,
    foodOption: false,
    requireResume: true,
    allowTeammates: true
  };
  events.findOneAndUpdate({alias: 'hackxx'}, {$set:{options}}, done);
};

module.exports.down = function (done) {
  var events = this.db.collection('events');

  events.update({alias: 'hackxx'}, {$unset: {options: 1}}, done);
};