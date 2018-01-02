
angular.module("phg", []).controller('HomeController', ['$scope', '$http', function ($scope, $http) {

    $http.get('http://localhost:61979/Api/Basics').then(function (response) {

        $scope.result = response.data;
    }
    ).catch(function onError(response) {

        $scope.varerrorr = 'contact JP';
            });

    console.log("hiiiiiiiiiii");



    $scope.greeting = 'Hola!';


    $scope.data = {
        files: [
            { url: "img1.jpg" },
            { url: "img2.jpg" },
            { url: "img3.jpg" },
            { url: "img4.jpg" },
            { url: "img5.jpg" },
            { url: "img6.jpg" },
            { url: "img7.jpg" },
            { url: "img8.jpg" },
            { url: "img9.jpg" }
        ],

        subAlbums: [
            { url: "assets/florida/img1.jpg" },
            { url: "assets/Yosemite/img2.jpg" },
            { url: "/x/a3" },
            { url: "/x/a4" },
            { url: "/x/a5" },
            { url: "/x/a6" },
            { url: "/x/a7" }
        ],

        title: "Trips"

    }


}]);