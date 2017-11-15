myApp.controller('CoreController', function (UserService, $scope) {
  var vm = this;
  vm.userService = UserService;
  vm.chartData = UserService.chartData;
  vm.joinChartData = UserService.joinChartData;
  vm.selectedYear;

  Chart.defaults.scale.ticks.beginAtZero = true;
  Chart.defaults.scale.ticks.autoSkip = false;
  Chart.defaults.global.title.fontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
  Chart.defaults.global.defaultFontColor = '#666';
  Chart.defaults.global.defaultFontSize = 16;

  vm.getSelectedYear = function () {

    if (vm.selectedYear !== undefined) {
      selectedYear = vm.selectedYear;
      UserService.updateChartYear(selectedYear);
      
      //User Selected Year Charts 
      vm.userCaseTypeLabels = UserService.userCaseTypeLabels;
      vm.userFilteredCases = UserService.userFilteredCases;
      vm.userCountyLabels = UserService.userCountyLabels;
      vm.userFilteredCounty = UserService.userFilteredCounty;
      vm.userSchoolLabels = UserService.userSchoolLabels;
      vm.userFilteredSchool = UserService.userFilteredSchool;
      vm.userPeopleServedLabels = UserService.userPeopleServedLabels;
      vm.userFilteredPeopleServed = UserService.userFilteredPeopleServed;
      vm.userAgeLabels = UserService.userAgeLabels;
      vm.userFilteredAge = UserService.userFilteredAge;

      vm.userVulnerabilityLabels = UserService.userVulnerabilityLabels;
      vm.userFilteredVulnerability = UserService.userFilteredVulnerability;
      vm.userLawLabels = UserService.userLawLabels;
      vm.userFilteredLaw = UserService.userFilteredLaw;
      vm.userRaceLabels = UserService.userRaceLabels;
      vm.userFilteredRace = UserService.userFilteredRace;

      var ctc = document.getElementById("userCaseTypeChart");
      
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userCaseTypeLabels,
          datasets: [{
            label: 'Case Type',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredCases,
            borderWidth: 1
          }]
        },
        options: {
          title: {
              display: true,
              position: "top",
              text: "Number of Cases by Case Type (" + vm.selectedYear + ")",
              padding: 20,
              fontSize: 18
          },
          scales: {
            xAxes:[{
              scaleLabel: {
                display: true,
                labelString: 'Case Type'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userCountyChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userCountyLabels,
          datasets: [{
            label: 'MN County',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredCounty,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by MN County (" + vm.selectedYear+ ")",
            padding: 20,
            fontSize: 18
        },
          scales: {
            xAxes:[{
              scaleLabel: {
                display: true,
                labelString: 'MN County'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userSchoolChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userSchoolLabels,
          datasets: [{
            label: 'School Districts',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredSchool,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by School District (" + vm.selectedYear+ ")",
            padding: 20,
            fontSize: 18
        },
          scales: {
            xAxes:[{
              scaleLabel: {
                display: true,
                labelString: 'MN School District'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userPeopleServedChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userPeopleServedLabels,
          datasets: [{
            label: 'People Served',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredPeopleServed,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by People Served (" + vm.selectedYear+ ")",
            padding: 20,
            fontSize: 18
        },
          scales: {
            xAxes:[{
              scaleLabel: {
                display: true,
                labelString: 'People Served'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userVulnerabilityChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userVulnerabilityLabels,
          datasets: [{
            label: 'Vulnerability',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredVulnerability,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by Vulnerabilities (" + vm.selectedYear+ ")",
            padding: 20,
            fontSize: 18
        },
          scales: {
            xAxes:[{
              scaleLabel: {
                display: true,
                labelString: 'Vulnerability'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userAgeChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userAgeLabels,
          datasets: [{
            label: 'Age',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredAge,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by Age (" + vm.selectedYear+ ")",
            padding: 20,
            fontSize: 18
        },
          scales: {
            xAxes:[{
              scaleLabel: {
                display: true,
                labelString: 'Age'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userLawEnforcementChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userLawLabels,
          datasets: [{
            label: 'Law Enforcement',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredLaw,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by Law Enforcement Agencies (" + vm.selectedYear+ ")",
            padding: 20,
            fontSize: 18
        },
          scales: {
            xAxes:[{
              scaleLabel: {
                display: true,
                labelString: 'Law Enforcement Agency'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userRaceChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userRaceLabels,
          datasets: [{
            label: 'Race/ Ethnicity',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredRace,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by Race/ Ethnicity (" + vm.selectedYear+ ")",
            padding: 20,
            fontSize: 18
        },
          scales: {
            xAxes:[{
              scaleLabel: {
                display: true,
                labelString: 'Race/Ethnicity'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

    } else {
      return "Please select an Year";
    }
  };

  vm.getChartData = function () {
    UserService.getChartData()
      .then(function () {
        //Global Charts
        vm.mainChartYears = UserService.mainChartYears;
        vm.filteredYears = UserService.filteredYears;
        vm.startCaseLabel = UserService.startCaseLabel;
        vm.filteredStartCase = UserService.filteredStartCase;
        vm.referralLabel = UserService.referralLabel;
        vm.filteredReferral = UserService.filteredReferral;
        vm.stateOverallLabel = UserService.stateOverallLabel;
        vm.filteredStateOverall = UserService.filteredStateOverall;
        vm.countiesOverallLabel = UserService.countiesOverallLabel;
        vm.filteredCountiesOverall = UserService.filteredCountiesOverall;
        vm.districtOverallLabel = UserService.districtOverallLabel;
        vm.filteredDistrictsOverall = UserService.filteredDistrictsOverall;
        vm.peopleServedOverallLabel = UserService.peopleServedOverallLabel;
        vm.filteredPeopleServedOverall = UserService.filteredPeopleServedOverall;
        vm.ageOverallLabel = UserService.ageOverallLabel;
        vm.filteredAgeOverall = UserService.filteredAgeOverall;
        vm.genderOverallLabel = UserService.genderOverallLabel;
        vm.filteredGenderOverall = UserService.filteredGenderOverall;

        var ctx = document.getElementById("mainBarChart");
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: vm.mainChartYears,
            datasets: [{
              label: 'Number of Cases per year',
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredYears,
              borderWidth: 1
            }]
          },
          options: {
            
            title: {
              display: true,
              position: "top",
              text: "Number of Cases per year",
              padding: 20,
              fontSize: 18
          },
            scales: {
              xAxes:[{
                scaleLabel: {
                  display: true,
                  labelString: 'Year'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (value % 1 === 0) { return value; } }
                }
              }]
            }
          }
        });

        var ctc = document.getElementById("startCaseTypeChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.startCaseLabel,
            datasets: [{
              label: 'Overall Start Case Type',
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredStartCase,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by Start Case Type",
              padding: 20,
              fontSize: 18
          },
            scales: {
              xAxes:[{
                scaleLabel: {
                  display: true,
                  labelString: 'Case Type'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (value % 1 === 0) { return value; } }
                }
              }]
            }
          }
        });

        var ctc = document.getElementById("stateOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.stateOverallLabel,
            datasets: [{
              label: 'Cases by State',
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredStateOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by State",
              padding: 20,
              fontSize: 18
          },
            scales: {
              xAxes:[{
                scaleLabel: {
                  display: true,
                  labelString: 'State'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (value % 1 === 0) { return value; } }
                }
              }]
            }
          }
        });

        var ctc = document.getElementById("countiesOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.countiesOverallLabel,
            datasets: [{
              label: 'Cases by Counties',
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredCountiesOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by MN County",
              padding: 20,
              fontSize: 18
          },
            scales: {
              xAxes:[{
                scaleLabel: {
                  display: true,
                  labelString: 'MN County'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (value % 1 === 0) { return value; } }
                }
              }]
            }
          }
        });

        var ctc = document.getElementById("districtOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.districtOverallLabel,
            datasets: [{
              label: 'Cases by MN School District',
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredDistrictsOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by MN School District",
              padding: 20,
              fontSize: 18
          },
            scales: {
              xAxes:[{
                scaleLabel: {
                  display: true,
                  labelString: 'MN School District'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (value % 1 === 0) { return value; } }
                }
              }]
            }
          }
        });

        var ctc = document.getElementById("peopleServedOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.peopleServedOverallLabel,
            datasets: [{
              label: 'Number of Cases by People Served',
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredPeopleServedOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by People Served",
              padding: 20,
              fontSize: 18
          },
            scales: {
              xAxes:[{
                scaleLabel: {
                  display: true,
                  labelString: 'People Served'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (value % 1 === 0) { return value; } }
                }
              }]
            }
          }
        });

        var ctc = document.getElementById("ageOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.ageOverallLabel,
            datasets: [{
              label: 'Number of Cases by Age',
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredAgeOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by Age",
              padding: 20,
              fontSize: 18
          },
            scales: {
              xAxes:[{
                scaleLabel: {
                  display: true,
                  labelString: 'Age'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (value % 1 === 0) { return value; } }
                }
              }]
            }
          }
        });

        var ctc = document.getElementById("genderOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.genderOverallLabel,
            datasets: [{
              label: 'Number of Cases by Gender',
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredGenderOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by Gender",
              padding: 20,
              fontSize: 18
          },
            scales: {
              xAxes:[{
                scaleLabel: {
                  display: true,
                  labelString: 'Gender'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (value % 1 === 0) { return value; } }
                }
              }]
            }
          }
        });

        var ctc = document.getElementById("referralsChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.referralLabel,
            datasets: [{
              label: 'Referrals by Source',
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredReferral,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by Referral Source",
              padding: 20,
              fontSize: 18
          },
            scales: {
              xAxes:[{
                scaleLabel: {
                  display: true,
                  labelString: 'Referral Source'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (value % 1 === 0) { return value; } }
                }
              }]
            }
          }
        });

      });

    vm.getJoinTableData = function () {
      UserService.getJoinTableData()
        .then(function () {
          vm.vulnerabilitiesOverallLabel = UserService.vulnerabilitiesOverallLabel;
          vm.filteredVulnerabilitiesOverall = UserService.filteredVulnerabilitiesOverall;
          vm.lawEnforcementOverallLabel = UserService.lawEnforcementOverallLabel;
          vm.filteredLawEnforcementOverall = UserService.filteredLawEnforcementOverall;
          vm.raceEthnicityOverallLabel = UserService.raceEthnicityOverallLabel;
          vm.filteredRaceEthnicityOverall = UserService.filteredRaceEthnicityOverall;
          vm.stackedDenialTrue = UserService.stackedDenialTrue
          vm.stackedDenialFalse = UserService.stackedDenialFalse

          var ctc = document.getElementById("vulnerabilitiesOverallChart");
          var myChart = new Chart(ctc, {
            type: 'bar',
            data: {
              labels: vm.vulnerabilitiesOverallLabel,
              datasets: [{
                label: 'Overall Vulnerabilities',
                backgroundColor: 'rgba(20, 125, 145, 0.4)',
                borderColor: 'rgba(20, 125, 145, 0.4)',
                data: vm.filteredVulnerabilitiesOverall,
                borderWidth: 1
              }]
            },
            options: {
              title: {
                display: true,
                position: "top",
                text: "Number of Cases by Vulnerability",
                padding: 20,
                fontSize: 18
            },
              scales: {
                xAxes:[{
                  scaleLabel: {
                    display: true,
                    labelString: 'Vulnerability'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Number of Cases'
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (value % 1 === 0) { return value; } }
                  }
                }]
              }
            }
          });

          var ctc = document.getElementById("lawEnforcementOverallChart");
          var myChart = new Chart(ctc, {
            type: 'bar',
            data: {
              labels: vm.lawEnforcementOverallLabel,
              datasets: [{
                label: 'Overall Law Enforcement Agencies worked with',
                backgroundColor: 'rgba(20, 125, 145, 0.4)',
                borderColor: 'rgba(20, 125, 145, 0.4)',
                data: vm.filteredLawEnforcementOverall,
                borderWidth: 1
              }]
            },
            options: {
              title: {
                display: true,
                position: "top",
                text: "Number of Cases by Law Enforcement Agency",
                padding: 20,
                fontSize: 18
            },
              scales: {
                xAxes:[{
                  scaleLabel: {
                    display: true,
                    labelString: 'MN Law Enforcement Agency'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Number of Cases'
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (value % 1 === 0) { return value; } }
                  }
                }]
              }
            }
          });

          var ctc = document.getElementById("lawEnforcementStackedOverall");
          var myChart = new Chart(ctc, {
            type: 'bar',
            data: {
              labels: vm.lawEnforcementOverallLabel,
              datasets: [{
                label: 'Jurisdictional Denial by Law Enforcement Agency',
                backgroundColor: 'rgba(255, 102, 0, 0.4)',
                borderColor: 'rgba(255, 102, 0, 0.4)',
                data: vm.stackedDenialTrue,
                borderWidth: 1
              },
              // {
              //   label: 'Jurisdictional Denial by Law Enforcement Agency',
              //   backgroundColor: 'rgba(20, 125, 145, 0.4)',
              //   borderColor: 'rgba(20, 125, 145, 0.4)',
              //   data: vm.stackedDenialFalse,
              //   borderWidth: 1
              // }
            ]},
            options: {
              title: {
                display: true,
                position: "top",
                text: "Number of Cases by Law Enforcement Agency",
                padding: 20,
                fontSize: 18
            },
              scales: {
                xAxes:[{
                  stacked: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'MN Law Enforcement Agency'
                  }
                }],
                yAxes: [{
                  stacked: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Number of Cases'
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (value % 1 === 0) { return value; } }
                  }
                }]
              }
            }
          });

          var ctc = document.getElementById("raceEthnicityOverallChart");
          var myChart = new Chart(ctc, {
            type: 'bar',
            data: {
              labels: vm.raceEthnicityOverallLabel,
              datasets: [{
                label: 'Number of Cases by Race/Ethnicity',
                backgroundColor: 'rgba(20, 125, 145, 0.4)',
                borderColor: 'rgba(20, 125, 145, 0.4)',
                data: vm.filteredRaceEthnicityOverall,
                borderWidth: 1
              }]
            },
            options: {
              title: {
                display: true,
                position: "top",
                text: "Number of Cases by Race/ Ethnicity",
                padding: 20,
                fontSize: 18
            },
              scales: {
                xAxes:[{
                  scaleLabel: {
                    display: true,
                    labelString: 'Race/ Ethnicity'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Number of Cases'
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (value % 1 === 0) { return value; } }
                  }
                }]
              }
            }
          });

        });


    }

  };

  vm.saveChart = function (id, shouldSaveWithYear) {
    var yearString = '';
    var ctx = document.getElementById(id);

    if (shouldSaveWithYear){
      yearString = vm.selectedYear;
    }

    ctx.toBlob(function(blob){
      saveAs(blob, id + yearString)
    });
  };

})
