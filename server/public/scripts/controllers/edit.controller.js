myApp.controller('EditController', function(UserService) {
    console.log('EditController created');
    var vm = this;
    vm.userService = UserService;
    vm.editedForm = {};
    vm.showEditForm = false;
    // vm.vulnerabilities = {
    //   add: false,
    //   autism: false,
    //   alcholism: false,
    //   anxiety: false,
    //   biPolar: false,
    //   depressionClinical: false,
    //   depressionSituational: false,
    //   drugUse: false,
    //   economic: false,
    //   emotionalAbuse: false,
    //   gang: false,
    //   oDD: false,
    //   labor: false,
    //   luringAdult: false,
    //   luringChild: false,
    //   missingFromCare: false,
    //   physicalAbuse: false,
    //   runaway: false,
    //   sexualAbuse: false,
    //   sexualExploitation: false,
    //   sexualMinority: false
    // }

    vm.vulnerabilities = [{ name: "ADD/ADHD", value: false }, { name: "ASD", value: false }, { name: "Alcohol use/abuse", value: false},
      { name: "Anxiety", value: false }, { name: "Bipolar Disorder", value: false},
      { name: "Depression (Clinical)", value: false }, { name: "Depression (Situational)", value: false}, 
      { name: "Drug use/abuse", value: false }, { name: "Economic exploitation (history", value: false }, 
      { name: "Emotional abuse (history)", value: false }, { name: "Gang association", value: false }, 
      { name: "ODD", value: false }, { name: "Labor Exploitation (history)", value: false }, 
      { name: "Luring/grooming by adult", value: false }, { name: "Luring/grooming by child", value: false }, 
      { name: "Missing from care", value: false }, { name: "Physical Abuse (history)", value: false },
      { name: "Runaway (history)", value: false }, { name: "Sexual Abuse (history)", value: false }, 
      { name: "Sexual exploitation (history)", value: false }, { name: "Sexual Minority", value: false }]

    vm.changeVul = function (inputVuln) {
      console.log("inputVuln", inputVuln);
      inputVuln.value = !inputVuln.value;
      console.log("inputVuln.name", inputVuln.value);
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
