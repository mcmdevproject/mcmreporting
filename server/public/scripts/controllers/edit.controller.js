myApp.controller('EditController', function(UserService) {
    console.log('EditController created');
    var vm = this;  
    vm.userService = UserService;
    vm.editedForm = {};
    vm.showEditForm = false;
    vm.caseBeingEdited = {};
    vm.genders = ['Male', 'Female', 'Non-binary'];
    vm.remainingGendersArray = [];
    vm.case_vulnerabilities = [{
      name: "ADD/ADHD",
      value: false
    }, {
      name: "ASD",
      value: false
    }, {
      name: "Alcohol use/abuse",
      value: false
    },
    {
      name: "Anxiety",
      value: false
    }, {
      name: "BiPolarDisorder",
      value: false
    },
    {
      name: "Depression (Clinical)",
      value: false
    }, {
      name: "Depression (Situational)",
      value: false
    },
    {
      name: "Drug use/abuse",
      value: false
    }, {
      name: "Economic exploitation (history",
      value: false
    },
    {
      name: "Emotional abuse (history)",
      value: false
    }, {
      name: "Gang association",
      value: false
    },
    {
      name: "ODD",
      value: false
    }, {
      name: "Labor Exploitation (history)",
      value: false
    },
    {
      name: "Luring/grooming by adult",
      value: false
    }, {
      name: "Luring/grooming by child",
      value: false
    },
    {
      name: "Missing From Care",
      value: false
    }, {
      name: "Physical Abuse (history)",
      value: false
    },
    {
      name: "Runaway (history)",
      value: false
    }, {
      name: "Sexual Abuse (history)",
      value: false
    },
    {
      name: "Sexual exploitation (history)",
      value: false
    }, 
    {
      name: "Sexual Minority",
      value: false
    },
    {
      name: "None",
      value: false
    }
    ]

    vm.race_ethnicity = [{
      name: "African American",
      value: false
    }, 
    {
      name: "Asian Pacific Islander",
      value: false
    }, 
    {
      name: "Caucasian",
      value: false
    },
    {
      name: "Latinx",
      value: false
    }, 
    {
      name: "Native American",
      value: false
    },
    {
      name: "None",
      value: false
    }
    ]

    vm.changeVul = function (inputVuln) {
      console.log("inputVuln", inputVuln);
      inputVuln.value = !inputVuln.value;
      console.log("inputVuln.name", inputVuln.value);
    }

    vm.changeRace = function (inputRace) {
      console.log("inputVuln", inputRace);
      inputRace.value = !inputRace.value;
      console.log("inputVuln.name", inputRace.value);
    }

    UserService.getCities().then(function (response) {
      console.log('cities', response.data);
      return vm.cities = response.data;
    });

    UserService.getCounties().then(function (response) {
      return vm.counties = response.data;
    });

    UserService.getAgencies().then(function (response) {
      console.log('lawEnforcement', response.data)
      return vm.agencies = response.data;

    });

    UserService.getSchools().then(function (response) {
      console.log('schools', response.data);
      return vm.schools = response.data;
    });


    vm.getData = function (mcmNum) {
      console.log('In getData');
      console.log('MCM Number', mcmNum);
      if (mcmNum != undefined) {
        UserService.getExistingForm(mcmNum).then(function () {
        }).then(function () {
          vm.caseBeingEdited = UserService.caseBeingEdited;
          vm.age = UserService.caseBeingEdited.data[0].age;
          vm.gender = UserService.caseBeingEdited.data[0].gender;
          vm.city = UserService.caseBeingEdited.data[0].city;
          vm.county = UserService.caseBeingEdited.data[0].county;
          vm.state = UserService.caseBeingEdited.data[0].state;   
          vm.start_case_type = UserService.caseBeingEdited.data[0].start_case_type; 
          vm.end_case_type = UserService.caseBeingEdited.data[0].end_case_type;     
          vm.agency = UserService.caseBeingEdited.data[0].agency;                 
          vm.jurisdictional_denial = [];  
          vm.disposition = UserService.caseBeingEdited.data[0].disposition;
          vm.referralType = UserService.caseBeingEdited.data[0].referral_type;  
          
          vm.vulnArray = [];
          vm.raceArray = [];
          // vm.DateLastSeenIn = UserService.caseBeingEdited.data[0].last_seen;
          for (var i = 0; i < vm.caseBeingEdited.data.length; i++) {
            vm.vulnArray.push(vm.caseBeingEdited.data[i].vulnerabilities_id);
          }
          console.log("vulnArray", vm.vulnArray);  
          for (var i = 0; i < vm.caseBeingEdited.data.length; i++) {
              vm.raceArray.push(vm.caseBeingEdited.data[i].race_ethnicity_id);
          }
          console.log("raceArray", vm.raceArray); 

          for (var j = 0; j < vm.vulnArray.length; j++) {
            if (vm.vulnArray[j] == 1) {
              vm.case_vulnerabilities[0].value = true;
            } else if (vm.vulnArray[j] == 2) {
              vm.case_vulnerabilities[1].value = true;
            } else if (vm.vulnArray[j] == 3) {
              vm.case_vulnerabilities[2].value = true;
            } else if (vm.vulnArray[j] == 4) {
              vm.case_vulnerabilities[3].value = true;
            } else if (vm.vulnArray[j] == 5) {
              vm.case_vulnerabilities[4].value = true;
            } else if (vm.vulnArray[j] == 6) {
              vm.case_vulnerabilities[5].value = true;
            } else if (vm.vulnArray[j] == 7) {
              vm.case_vulnerabilities[6].value = true;
            } else if (vm.vulnArray[j] == 8) {
              vm.case_vulnerabilities[7].value = true;
            } else if (vm.vulnArray[j] == 9) {
              vm.case_vulnerabilities[8].value = true;
            } else if (vm.vulnArray[j] == 10) {
              vm.case_vulnerabilities[9].value = true;
            } else if (vm.vulnArray[j] == 11) {
              vm.case_vulnerabilities[10].value = true;
            } else if (vm.vulnArray[j] == 12) {
              vm.case_vulnerabilities[11].value = true;
            } else if (vm.vulnArray[j] == 13) {
              vm.case_vulnerabilities[12].value = true;
            } else if (vm.vulnArray[j] == 14) {
              vm.case_vulnerabilities[13].value = true;
            } else if (vm.vulnArray[j] == 15) {
              vm.case_vulnerabilities[14].value = true;
            } else if (vm.vulnArray[j] == 16) {
              vm.case_vulnerabilities[15].value = true;
            } else if (vm.vulnArray[j] == 17) {
              vm.case_vulnerabilities[16].value = true;
            } else if (vm.vulnArray[j] == 18) {
              vm.case_vulnerabilities[17].value = true;
            } else if (vm.vulnArra[j] == 19) {
              vm.case_vulnerabilities[18].value = true;
            } else if (vm.vulnArray[j] == 20) {
              vm.case_vulnerabilities[19].value = true;
            } else if (vm.vulnArray[j] == 21) {
              vm.case_vulnerabilities[20].value = true;
            }       
          }

          for (var j = 0; j < vm.raceArray.length; j++) { 
            if (vm.raceArray[j] == 1 && vm.race_ethnicity[0].value !== true) {
              vm.race_ethnicity[0].value = true;
            } else if (vm.raceArray[j] == 2 && vm.race_ethnicity[1].value !== true) {
              vm.race_ethnicity[1].value = true;
            } else if (vm.raceArray[j] == 3 && vm.race_ethnicity[2].value !== true) {
              vm.race_ethnicity[2].value = true;
            } else if (vm.raceArray[j] == 4 && vm.race_ethnicity[3].value !== true) {
              vm.race_ethnicity[3].value = true;
            } else if (vm.raceArray[j] == 5 && vm.race_ethnicity[4].value !== true) {
              vm.race_ethnicity[4].value = true;
            }
          }
          
          console.log('Add value', vm.case_vulnerabilities[0].value);
          
          
          var lastSeenYear = vm.caseBeingEdited.data[0].last_seen.slice(0,4);
          var lastSeenMonth = vm.caseBeingEdited.data[0].last_seen.slice(5,7);
          var lastSeenDay = vm.caseBeingEdited.data[0].last_seen.slice(8,10);
          lastSeenDay = parseInt(lastSeenDay) + 1;
          lastSeenDay = lastSeenDay.toString();
          console.log('stuff', lastSeenYear, lastSeenMonth, lastSeenDay);
          vm.DateLastSeenIn = new Date(lastSeenYear + '-' + lastSeenMonth + '-' + lastSeenDay);
          console.log('vm.DateLastSeenIn', vm.DateLastSeenIn);

          var reportedYear = vm.caseBeingEdited.data[0].reported_missing.slice(0,4);
          var reportedMonth = vm.caseBeingEdited.data[0].reported_missing.slice(5, 7);
          var reportedDay = vm.caseBeingEdited.data[0].reported_missing.slice(8, 10);
          reportedDay = parseInt(reportedDay) + 1;
          reportedDay = reportedDay.toString();
          console.log('stuff', reportedYear, reportedMonth, reportedDay);
          vm.DateReportedMissingtoPoliceIn = new Date(reportedYear + '-' + reportedMonth + '-' + reportedDay);
          console.log('vm.DateLastSeenIn', vm.DateReportedMissingtoPoliceIn);

          var closeYear = vm.caseBeingEdited.data[0].close_date.slice(0, 4);
          var closeMonth = vm.caseBeingEdited.data[0].close_date.slice(5, 7);
          var closeDay = vm.caseBeingEdited.data[0].close_date.slice(8, 10);
          closeDay = parseInt(closeDay) + 1;
          closeDay = closeDay.toString();
          console.log('stuff', closeYear, closeMonth, closeDay);
          vm.DateClosed = new Date(closeYear + '-' + closeMonth + '-' + closeDay);
          console.log('vm.DateClosed', vm.DateClosed);

          // vm.cityName = vm.cities[vm.caseBeingEdited.data[0].city].city_name;
          console.log('vm.city', vm.city);
          vm.city = [vm.caseBeingEdited.data[0].city_name];
          console.log('vm.city', vm.city);

          vm.county_name = [vm.caseBeingEdited.data[0].county_name];
          console.log('vm.county', vm.county_name);

          vm.familyMembers = vm.caseBeingEdited.data[0].people_served;

          for (var b = 0; b < vm.caseBeingEdited.data.length; b++) {
            var tempPoliceDept = { id: vm.caseBeingEdited.data[b].law_enforcement_id, name: vm.caseBeingEdited.data[b].agency, value: vm.caseBeingEdited.data[b].jurisdictional_denial};
            var duplicateDenials = 0
            for (var c = 0; c < vm.jurisdictional_denial.length; c++) {
              if (vm.jurisdictional_denial[c].id == tempPoliceDept.id && vm.jurisdictional_denial[c].value == tempPoliceDept.value) {
                duplicateDenials++;
              }
            }
            if (duplicateDenials === 0) {
              vm.jurisdictional_denial.push(tempPoliceDept);
             
            }
          }
          console.log('vm.jurisdictional_denial', vm.jurisdictional_denial);
          
          // vm.schoolDisctrict = 123;
          for (var p = 0; p < vm.schools.length; p++) {
            if (vm.schools[p].id === vm.caseBeingEdited.data[0].school) {
              vm.selectedSchoolDistrict = vm.schools[p];
            }
          }
          console.log('vm.schoolDistrict', vm.selectedSchoolDistrict);
          

          console.log('vm.caseBeingEdited', vm.caseBeingEdited);
        }).then(function () {
          vm.showEditForm = true;
        })

      } else {
        console.log('Field is null');
      }
      
    }

    vm.updateData = function () {
      console.log('In controller updateData');
      vm.editedForm = {
        mcm_number: vm.caseIn,
        age: vm.age,
        gender: vm.gender,
        last_seen: vm.DateLastSeenIn,
        reported_missing: vm.DateReportedMissingtoPoliceIn,
        close_date: vm.DateClosed,
        city: vm.CityMissingFormIn,
        county: vm.county,
        state: vm.state,
        familyMembers: vm.familyMembers, // people_served ?
        start_case_type: vm.startingCaseType,
        end_case_type: vm.endingCaseType,
        school: vm.schoolDisctrict,
        disposition: vm.disposition,
        referral_type: vm.referralType,
        case_vulnerabilities: [],
        race_ethnicity: [],
        case_lawenforcement_denial: vm.jurisdictional_denial
      }
      swal({
        title: 'Required fields submitted to database.',
        icon: "success",
        width: 600,
        padding: 100,
        background: '#fff url(assets/page.JPG)'

        }).then(function () {
        vm.editedForm.case_vulnerabilities = vm.case_vulnerabilities.filter(function (vulnerability) {
          return vulnerability.value == true;
        });
        if (vm.editedForm.case_vulnerabilities.length === 0) {
          vm.case_vulnerabilities[21].value = true;
          vm.editedForm.case_vulnerabilities.push(vm.case_vulnerabilities[21]);
        }
        console.log('vulnerabilities', vm.editedForm.case_vulnerabilities);
        
        
      }).then(function () {
        vm.editedForm.race_ethnicity = vm.race_ethnicity.filter(function (ethnicity) {
          return ethnicity.value == true;
        });
        if (vm.editedForm.race_ethnicity.length === 0) {
          vm.race_ethnicity[5].value = true;
          vm.editedForm.race_ethnicity.push(vm.race_ethnicity[5]);
        }
      }).then(function (){
        console.log('editedForm', vm.editedForm);
        UserService.updateForm(vm.editedForm)
      })
      
    }
  });
