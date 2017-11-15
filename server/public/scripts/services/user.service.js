myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');
  var self = this;

  self.userObject = {};
  self.chartData = {
    data: []
  };
  self.joinChartData = {
    data: []
  };
  self.users = {};

  self.cities = {};
  self.selectedYear = '';


  self.getCities = function () {
    //on submit, posts all required fields to database
    return $http({
      method: 'GET',
      url: '/forms/cities'
    })
  };

  self.getCounties = function () {
    //on submit, posts all required fields to database
    return $http({
      method: 'GET',
      url: '/forms/counties'
    })
  };


  self.getAgencies = function () {
    return $http({
      method: 'GET',
      url: '/forms/lawEnforcement'
    })
  };

  self.getSchools = function () {
    return $http({
      method: 'GET',
      url: '/forms/schools'
    })
  };

  self.postInputData = function (newIntake) {
    return $http({
      method: 'POST',
      url: '/forms/newIntake',
      data: newIntake
    })
  };


// self.postVulnerabilities = function (vulnerabilities) {
//   return $http({
//     method: 'POST',
//     url: '/forms/newVulnerabilities',
//     data: vulnerabilities
//   })
// };




  self.getChartData = function () {
    //on page load, GET all case_data from DB to the DOM
    return $http({
        method: 'GET',
        url: '/charts'
      })
      .then(function (res) {
        //match case_data to service
        self.chartData.data = res.data;
        return self.chartData.data
      })
      .then(function (res) {
        //add a year based on intake_date
        self.addYearToRecord = res.forEach(function (element) {
          element.year = element.intake_date.slice(0, 4);
        });

        //Global Charts
        var totalsByYear = self.formatDataToChart(res, 'year');
        self.mainChartYears = totalsByYear.xAxisValues;
        self.filteredYears = totalsByYear.yAxisValues;

        var totalsByCaseTypeOverall = self.formatDataToChart(res, 'start_case_type');
        self.startCaseLabel = totalsByCaseTypeOverall.xAxisValues;
        self.filteredStartCase = totalsByCaseTypeOverall.yAxisValues;

        var totalsByStateOverall = self.formatDataToChart(res, 'state');
        self.stateOverallLabel = totalsByStateOverall.xAxisValues;
        self.filteredStateOverall = totalsByStateOverall.yAxisValues;

        var totalsByCountyOverall = self.formatDataToChart(res, 'county_name');
        self.countiesOverallLabel = totalsByCountyOverall.xAxisValues;
        self.filteredCountiesOverall = totalsByCountyOverall.yAxisValues;

        var totalsByDistrictOverall = self.formatDataToChart(res, 'school_name');
        self.districtOverallLabel = totalsByDistrictOverall.xAxisValues;
        self.filteredDistrictsOverall = totalsByDistrictOverall.yAxisValues;

        var totalsByPeopleServedOverall = self.formatDataToChart(res, 'people_served');
        self.peopleServedOverallLabel = totalsByPeopleServedOverall.xAxisValues;
        self.filteredPeopleServedOverall = totalsByPeopleServedOverall.yAxisValues;

        var totalsByAgeOverall = self.formatDataToChart(res, 'age');
        self.ageOverallLabel = totalsByAgeOverall.xAxisValues;
        self.filteredAgeOverall = totalsByAgeOverall.yAxisValues;

        var totalsByGenderOverall = self.formatDataToChart(res, 'gender');
        self.genderOverallLabel = totalsByGenderOverall.xAxisValues;
        self.filteredGenderOverall = totalsByGenderOverall.yAxisValues;

        var totalsByReferralOverall = self.formatDataToChart(res, 'referral_type');
        self.referralLabel = totalsByReferralOverall.xAxisValues;
        self.filteredReferral = totalsByReferralOverall.yAxisValues;
      });
  };

  self.getJoinTableData = function () {
    //this function gets all data from the db from the join tables (case_vulnerabilities, case_lawenforcement_denial, case_race_ethnicity)
    return $http({
        method: 'GET',
        url: '/charts/join_tables_reports'
      })
        .then(function (res) {
          self.joinChartData.data = res.data;
          return self.joinChartData.data
        })
        .then(function (res) {
          self.addYearToRecord = res.forEach(function (element) {
            element.year = element.intake_date.slice(0, 4);
          });

          //Global Charts
          var totalsByVulnerabilitiesOverall = self.formatDataToChart(res, 'vulnerability');
            self.vulnerabilitiesOverallLabel = totalsByVulnerabilitiesOverall.xAxisValues;
            self.filteredVulnerabilitiesOverall = totalsByVulnerabilitiesOverall.yAxisValues;
            
          var totalsByLawEnforcementOverall = self.formatDataToChart(res, 'agency');
            self.lawEnforcementOverallLabel = totalsByLawEnforcementOverall.xAxisValues;
            self.filteredLawEnforcementOverall = totalsByLawEnforcementOverall.yAxisValues;

          var totalsByDenialOverall = self.formatDataToChart(res, 'jurisdictional_denial');
            self.lawDenialOverallLabel = totalsByDenialOverall.xAxisValues;
            console.log('self.lawEnforcementOverallLabel',self.lawEnforcementOverallLabel);
          var something = self.getStackedChart(res,self.lawEnforcementOverallLabel,'jurisdictional_denial')
            // self.stackedDenialTrue = totalsByDenialOverall
            // self.stackedDenialFalse = totalsByDenialOverall
            
          var totalsByRaceEthnicityOverall = self.formatDataToChart(res, 'race_ethnicity');
            self.raceEthnicityOverallLabel = totalsByRaceEthnicityOverall.xAxisValues;
            self.filteredRaceEthnicityOverall = totalsByRaceEthnicityOverall.yAxisValues;

        })
  };

  self.getStackedChart = function (data, xAxisDataPoint, yAxisDataPoint) {
    console.log('data',data);
    console.log('xAxisDataPoint', xAxisDataPoint);
    console.log('yAxisDataPoint', yAxisDataPoint);

    data.forEach(function(element, yAxisDataPoint){
      console.log(data.element.yAxisDataPoint)
    //   if (data.yAxisDataPoint === true){
    //     console.log('true')
    //   } else {
    //     console.log('false')
    //   }
    })

  };

  self.getDataOfYear = function(data, year) {
    return data.filter(function(entry) {
      return entry.year === year;
    });
  };

  self.formatDataToChart = function (data, xAxisDataPoint) {
    //then create an object with an array for each year's data record
    var dataGroupedXAxisDataPoint = data.reduce(function (prev, curr) {
      const groupLabel = curr[xAxisDataPoint];

      if (!prev[groupLabel]) {
        prev[groupLabel] = [];
      }

      prev[groupLabel].push(curr);

      return prev;
    }, {});

    var xAxisValues = Object.keys(dataGroupedXAxisDataPoint);

    var yAxisValues = xAxisValues.map(function (label) {
      return dataGroupedXAxisDataPoint[label].length;
    });

    return {
      xAxisValues: xAxisValues,
      yAxisValues: yAxisValues
    };
  };

  self.updateChartYear = function (selectedYear) {
    self.selectedYear = selectedYear.toString();
    //Deep Dive into Year Charts on Main MCM table
    var dataForUserYear = self.getDataOfYear(self.chartData.data, self.selectedYear);

    var totalsByCaseType = self.formatDataToChart(dataForUserYear, 'start_case_type');
    self.userCaseTypeLabels = totalsByCaseType.xAxisValues;
    self.userFilteredCases = totalsByCaseType.yAxisValues;

    var totalsByUserCounty = self.formatDataToChart(dataForUserYear, 'county_name');
    self.userCountyLabels = totalsByUserCounty.xAxisValues;
    self.userFilteredCounty = totalsByUserCounty.yAxisValues;

    var totalsByUserSchool = self.formatDataToChart(dataForUserYear, 'school_name');
    self.userSchoolLabels = totalsByUserSchool.xAxisValues;
    self.userFilteredSchool = totalsByUserSchool.yAxisValues;

    var totalsByUserServed = self.formatDataToChart(dataForUserYear, 'people_served');
    self.userPeopleServedLabels = totalsByUserServed.xAxisValues;
    self.userFilteredPeopleServed = totalsByUserServed.yAxisValues;

    var totalsByUserAge = self.formatDataToChart(dataForUserYear, 'age');
    self.userAgeLabels = totalsByUserAge.xAxisValues;
    self.userFilteredAge = totalsByUserAge.yAxisValues;

    //Deep Dive into Year Charts on Join Charts
    var dataForJoinUserYear = self.getDataOfYear(self.joinChartData.data, self.selectedYear);

    var totalsByUserVulnerability = self.formatDataToChart(dataForJoinUserYear, 'vulnerability');
    self.userVulnerabilityLabels = totalsByUserVulnerability.xAxisValues;    
    self.userFilteredVulnerability = totalsByUserVulnerability.yAxisValues;

    var totalsByUserLaw = self.formatDataToChart(dataForJoinUserYear, 'agency');
    self.userLawLabels = totalsByUserLaw.xAxisValues;    
    self.userFilteredLaw = totalsByUserLaw.yAxisValues;

    var totalsByUserRace = self.formatDataToChart(dataForJoinUserYear, 'race_ethnicity');
    self.userRaceLabels = totalsByUserRace.xAxisValues;    
    self.userFilteredRace = totalsByUserRace.yAxisValues;

  };

  self.submitCustomFilters = function (userCustomFilters){
    console.log('service obj', userCustomFilters)
    //pending BE user filtered report query
    $http({
      method:"GET",
      url: "/charts/custom",
      data: userCustomFilters
    }).then(function (res){
      console.log('back with custom filtered data', res);
    })
  };

  self.getuser = function () {
    console.log('UserService -- getuser');
    $http({
      method: 'GET',
      url: '/user',
    }).then(function (response) {
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        self.userObject.admin = response.data.admin;
        console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
        console.log('UserService -- getuser -- User Data: ', self.userObject.admin);


      } else {
        console.log('UserService -- getuser -- failure', response);
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    });
  };

  // get the data from an existing form to edit
  self.getExistingForm = function (mcmNum) {
    console.log('In getExistingForm', mcmNum);

    //$http call to get all data from existing form
    return $http({
      method: 'GET',
      url: '/forms/caseToEdit/' + mcmNum
    }).then(function (response) {
      console.log('Response', response);
    })
  }


  self.logout = function () {
    console.log('UserService -- logout');
    $http({
      method: 'GET',
      url: '/user/logout'
    }).then(function (response) {
      console.log('UserService -- logout -- logged out');
      $location.path('/home');
    });
  };

  //gets all users back on manage page so they can be edited -shara
  self.getAllUsers = function () {
    return $http({
      method: 'GET',
      url: '/manage',
    }).then(function (response) {
      self.users.list = response.data;
      console.log('this is response in user before if', response.data);
    });
  };

  self.updateForm = function (editedForm) {
    console.log('In updateForm');
    $http({
      method: 'PUT',
      url: '/editIntake',
      data: editedForm
    }).then(function (response) {
      console.log('Response', response);
    })
  }

  // updates the admin priviledges 
  self.updatePriviledges = function (user) {
    return $http({
      method: 'PUT',
      url: '/manage',
      data: user
    }).then(function (response) {
      console.log('Response', response.data);
    })
  }

  // deletes the user from the db
  self.deleteUser = function (user) {
    console.log('this is user on delete service', user);

    return $http({
      method: 'POST',
      url: '/manage',
      data: user
    }).then(function (response) {
      console.log('Delete Response', response.data);
    })
  }












});