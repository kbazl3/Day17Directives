angular.module("directivePractice")
    .controller("mainCtrl", function($scope) {

        $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
        $scope.test = "Two way binding!"

        $scope.announceDay = function(lesson, day) {
            console.log(lesson, day);
            if (day === undefined) {
                alert("This lesson is coming soon to theaters near you!")
            } else {
            alert(lesson + " is active on " + day);
            }

        }

    });
