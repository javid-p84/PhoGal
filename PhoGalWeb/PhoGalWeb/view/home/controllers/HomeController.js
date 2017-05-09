
angular.module("phg", []).controller('HomeController', ['$scope', function ($scope) {

    console.log("hiiiiiiiiiii");


    $scope.greeting = 'Hola!';


    $scope.mockData = function () {

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
                { url: "/x/Florida" },
                { url: "/x/Yosemite" },
                { url: "/x/a3" },
                { url: "/x/a4" },
                { url: "/x/a5" },
                { url: "/x/a6" },
                { url: "/x/a7" }
            ],

            title: "Trips"

        }

        return data;


    }
}]);