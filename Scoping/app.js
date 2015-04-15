angular.module('scope-app', [])
    .controller('NameController', 
                function($scope) {
                    $scope.name = "Ben";
});

// This is just a quick explanation of the $scope object

//It's best practice to encapsule your controllers into modules/apps, like we are here. Keep the JS global namespace clean!


// Don't forget to include controllers in each module! It's pretty simple, you can make it so that there's a ton of little ng-app modules in your JS. Angular was meant to be super modular, very similar to Django and their app schema.