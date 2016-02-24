angular.module("directivePractice")
    .directive("lessonHider", function() {// set every directive up like a service/controller

        return { //directive always returns an object
            templateUrl: 'lessonHider.html', //templateUrl points to the URL
            restrict: "E", // Restrict determines how you can use the directive in your DOM and there are three options: 'E''A' 'C'. These stand for Element, Attribute, and Class.
            scope: {
                lesson: "=", //Creates two way binding between the directive and its parent scope. If you change a variable that is assigned the scope property of
                // '=' inside the directive it will be reflected on the parent controller's scope
                dayAlert: "&"
                //s used to pass expressions to your directive. The most common use for this property is to pass functins.
            },
            link: function(scope, element, attributes) { //The first parameter represents the $scope of your directive, the second is the html element that wraps
                //your directive, and the third is an object containing all the properties and values of the attributes on your directive in the DOM.
                // console.log(scope); //The scope will log out an object containing angular properties,
                // console.log(element); //the element will log out the actual DOM element itself
                // console.log(attributes); //attributes logs out your myTest attribute and value.

                scope.getSchedule //invokes getSchedule on service. serviced inject on line 34
                    .then(function (response) { //return the web response
                        console.log(response);
                        scope.schedule = response.data;
                        //assign web response to scope.schedule //can the mainCtrl see this?

                        //this forEach is going to check each object's lesson in to see if it is alredy in the lessons array on the mainCtrl
                    scope.schedule.forEach(function(scheduleDay) {
                        if (scheduleDay.lesson === scope.lesson) { //if the lesson in this array is already in the lessons array on the main Ctrl
                            element.css("text-decoration", "line-through") //cross out that lesson
                            // element.append("<input type='checkbox' checked/>")
                            scope.lessonDay = scheduleDay.weekday //assign lessonDay to the weekay property
                            return;
                        }
                        // if (scheduleDay.weekday === undefined) {
                        //     scheduleDay.weekday = "TBD";
                        // }
                    })
                })
            },
            //the controller below is specifically for this directive
            controller: function($scope, lessonService) {//this directive can access the service with it being inject here
                $scope.getSchedule = lessonService.getSchedule();

            },

    }
});
