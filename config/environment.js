'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    intercom: {
      appId: null,
      userProperties: {
        createdAtProp: 'createdAt',
        emailProp: 'email',
        nameProp: 'name',
        userHashProp: 'hash',
        userIdProp: 'id'
      }
    }
  };
};
