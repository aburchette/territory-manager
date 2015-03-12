'use strict';

// cache the entire record model in a service to prevent extra calls to endpoint
angular.module('tmApp')
  .service('RecordList', function(){
      this.list = null;
  });
