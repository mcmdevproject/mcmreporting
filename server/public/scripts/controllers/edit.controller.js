myApp.controller('EditController', function(UserService) {
    console.log('EditController created');
    var vm = this;
    vm.userService = UserService;
    vm.editedForm = {};
    vm.showEditForm = false;
    vm.vulnerabilities = {
      add: false,
      autism: false,
      alcholism: false,
      anxiety: false,
      biPolar: false,
      depressionClinical: false,
      depressionSituational: false,
      drugUse: false,
      economic: false,
      emotionalAbuse: false,
      gang: false,
      oDD: false,
      labor: false,
      luringAdult: false,
      luringChild: false,
      missingFromCare: false,
      physicalAbuse: false,
      runaway: false,
      sexualAbuse: false,
      sexualExploitation: false,
      sexualMinority: false
    }
    vm.states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District Of Columbia",
      "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
      "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
      "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
      "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
      "Wisconsin","Wyoming"];

    vm.getData = function (mcmNum) {
      console.log('In getData');
      console.log('MCM Number', mcmNum);
      if (mcmNum != undefined) {
        UserService.getExistingForm(mcmNum).then(function () {
          vm.showEditForm = true;
        })

      } else {
        console.log('Field is null');
      }
      
    }

    vm.updateData = function () {
      console.log('In updateData');
      vm.editedForm = {
        age: vm.age,
        gender: vm.gender,
        last_seen: vm.DateLastSeenIn,
        reported_missing: vm.DateReportedMissingtoPoliceIn,
        close_date: vm.DateClosed,
        city: vm.city,
        county: vm.county,
        state: vm.state,
        familyMembers: vm.familyMembers, // people_served ?
        start_case_type: vm.startingCaseType,
        end_case_type: vm.endingCaseType,
        school: vm.schoolDisctrict,
        disposition: vm.disposition,
        referral_type: vm.referralType
      }
      console.log('editedForm', vm.editedForm);
      UserService.updateForm(vm.editedForm);
    }


    // vm.newState = newState;

    // vm.querySearch = function (query) {
    //   var results = query ? self.states.filter(createFilterFor(query)) : self.states,
    //     deferred;
    //   if (self.simulateQuery) {
    //     deferred = $q.defer();
    //     $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
    //     return deferred.promise;
    //   } else {
    //     return results;
    //   }
    // }

    // vm.searchTextChange = function (text) {
    //   $log.info('Text changed to ' + text);
    // }

    // vm.selectedItemChange = function (item) {
    //   $log.info('Item changed to ' + JSON.stringify(item));
    // }

    // vm.loadAll = function () {
    //   var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
    //           Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
    //           Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
    //           Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
    //           North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
    //           South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
    //           Wisconsin, Wyoming';

    //   return allStates.split(/, +/g).map(function (state) {
    //     return {
    //       value: state.toLowerCase(),
    //       display: state
    //     };
    //   });
    // }

    // vm.createFilterFor = function (query) {
    //   var lowercaseQuery = angular.lowercase(query);

    //   return function filterFn(state) {
    //     return (state.value.indexOf(lowercaseQuery) === 0);
    //   };

    // }

  });
