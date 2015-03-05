'use strict';

/*
 * Service to persist the model from the import function
 */
angular.module('tmApp')
  .factory('Import', ['$rootScope', 'Record', 'Territory', 'Person', 'Config', function ($rootScope, Record, Territory, Person, Config) {
    var object;

    var databaseOptions = [
      {value: 'Record', label: 'Records', validFields: [
        { name: 'active', type: 'boolean number' },
        { name: 'territory_id', type: 'number string' },
        { name: 'contact_name', type: 'string' },
        { name: 'address', type: 'string' },
        { name: 'address2', type: 'string' },
        { name: 'city', type: 'string' },
        { name: 'state', type: 'string' },
        { name: 'phone', type: 'string number' },
        { name: 'notes', type: 'string' },
        { name: 'location', type: 'array string' }
      ]},
      {value: 'Territory', label: 'Territories', validFields: [
        { name: 'name', type: 'string' },
        { name: 'polygon', type: 'array string' },
        { name: 'locale', type: 'string' },
        { name: 'notes', type: 'string' }
      ]},
      {value: 'Person', label: 'People', validFields: [
        { name: 'name', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'active', type: 'boolean' }
      ]},
      {value: 'Config', label: 'Configuration', validFields: [
        { name: 'name', type: 'string' },
        { name: 'value', type: 'string' }
      ]}
    ];

    function modelExists(){
      return !!object;
    }

    function persistModel(obj){
      object = obj;
    }

    function getModel(){
      return object;
    }

    function importObject(whichDatabase){
      switch(whichDatabase){
        case 'Record':
          Record.saveArray({}, object,
            function(message){
              $rootScope.$broadcast('import:success', message);
            },
            function(err){
              $rootScope.$broadcast('import:error', err);
            });
          break;
        case 'Territory':
          Territory.saveArray({}, object,
            function(message){
              $rootScope.$broadcast('import:success', message);
            },
            function(err){
              $rootScope.$broadcast('import:error', err);
            });
          break;
        case 'Person':
          Person.saveArray({}, object,
            function(message){
              $rootScope.$broadcast('import:success', message);
            },
            function(err){
              $rootScope.$broadcast('import:error', err);
            });
          break;

      }
    }

    return {
      modelExists: modelExists,
      persistModel: persistModel,
      getModel: getModel,
      databaseOptions: databaseOptions,
      importObject: importObject
    };
  }]);
