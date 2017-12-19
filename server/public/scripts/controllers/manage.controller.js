myApp.controller('ManageController', function (UserService) {
  console.log('ManageController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.approvedUsers = [];
  vm.pendingUsers = [];


  //basic function to test manage route and get call
  vm.getAllUsers = function () {
    UserService.getAllUsers().then(function () {
      vm.users = UserService.users.list;
      console.log('vm.users', vm.users);
    }).then(function () {
      vm.approvedUsers = [];
      vm.pendingUsers = [];
      for (var i = 0; i < vm.users.length; i++) {
        if (vm.users[i].approved === true) {
          vm.approvedUsers.push(vm.users[i]);
        } else {
          vm.pendingUsers.push(vm.users[i]);
        }
      }
    })
  }

  vm.deleteUser = function (user) {
    console.log('In deleteUser', user.username);
    UserService.userToDelete = user;
    UserService.deleteUser(user).then(function () {
      vm.getAllUsers();
    })
  }

  vm.editApproval = function (user) {
    console.log('In editApproval', user);
    user.approved = !user.approved;
    console.log('New approval value:', user.approved);
    UserService.updateApproval(user).then(function () {
      vm.getAllUsers();
    })
  }

  vm.editPriviledge = function (user) {
    console.log('In editPrivledge', user);
    user.admin = !user.admin;
    console.log('New admin value:', user.admin);
    UserService.updatePriviledges(user)
  }

});