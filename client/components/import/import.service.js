'use strict';

/*
 * Service to persist the model from the import function
 */
angular.module('tmApp')
  .factory('Import', function () {
    var object;

    function objectExists(){
      console.log(object);
      return !!object;
    }

    function saveObject(obj){
      object = obj;
    }

    function getObject(){
      return object;
    }

    return {
      objectExists: objectExists,
      saveObject: saveObject,
      getObject: getObject
    };
  });
