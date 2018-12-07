var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {

    $routeProvider
        .when("/chart", {
            templateUrl: "chart.html",
            controller: "chartController"
        })
        .when("/calendar", {
            templateUrl: "calendar.html",
            controller: "calendarController"
        })
        .when("/blank", {
            templateUrl: "blank.html"
        })
        .when("/404", {
            templateUrl: "404.html"
        })
        .when("/profile", {
            templateUrl: "profile.htm"
        })
        .when("/home", {
            templateUrl: "home.html",
            controller: "homeController"
        });
});
app.controller("homeController", function ($scope) {
    $scope.page_controller = "Home";
});

app.controller("chartController", function ($scope) {
    $scope.pageName = "ChartJs";
});

app.controller("calendarController", ['$scope', '$document', '$compile',  function ($scope, $document, $compile) {
    $scope.pageName = "Calendar JS";
    $scope.eventData = [];
    $scope.editEventS = false;
    $scope.showEventpopup = false;
    $scope.dataTime = new Date();

    $scope.iseventRegistered = function () {
        for (var i = 0; i < $scope.eventData.length; i++) {
             var ab = $document.find("[data-id='"+$scope.eventData[i].eventDate+"']");
             ab.addClass("event-registered");
        }
    };

    $scope.iseventRegistered();

    $scope.nextPrevMonth = function(){
        var $el = $document.find("[id='calendar']");
        $compile($el)($scope);
        $scope.iseventRegistered();
    };

    $scope.assignEvent = function (item) {
        $scope.eventDate = $(angular.element(item)[0]).data('id');
        $scope.showEventpopup = true;
        $scope.dataTime = $scope.eventDate + " 00:00:00 AM";
        $scope.eventVal = "";
    };

    $scope.submitEvent = function () {
        if ($scope.eventForm.$valid) {
            var currentEventVal = {
                "eventDate": $scope.eventDate,
                "eventTime": $scope.dataTime,
                "eventDetail": $scope.eventVal
            };
            $scope.eventData.push(currentEventVal);
            console.log($scope.eventData);
            $scope.showEventpopup = false;
            $scope.iseventRegistered();
        }
    };
}]);










// Run length encoding

// function Encoding(str){
//     let newStr = [];
//     for(let i = 0; i < str.length; i++){
//         if(i==0){
//             newStr.push(str[i])
//             newStr.push(1)
//             continue;
//         }
//         if(str[i] == newStr[newStr.length-2]){
//             let poped = newStr.pop(newStr[newStr.length-1]);
//             newStr.push(poped + 1)
//         } else {
//             newStr.push(str[i])
//             newStr.push(1)
//         }
//     }
//     return newStr.join("");
// }
// console.log(Encoding("wwwwaaadexxxxxx"));


// Smallet sub array with sum grater than a given value

// function SmallestSubArr(arr, no){
//     let outArr = [];
//     let sum = 0;
//     let r = arr.reduce((a, b) => a + b)
//     if(r < no){
//         console.log("Totoal sum of array is not equal to no");
//         return null
//     }
//     let now = arr.length, position, tempP;
//     for(let i = 0; i < arr.length; i++){
//         let sum = 0, prev = 0;
//         if(arr[i]>no){
//             outArr.push(arr[i])
//             console.log(outArr[0]);
//             return 1
//         }
//         for(let j = i; j < arr.length; j++){
//             sum = sum + arr[j];
//             prev = prev + 1;
//             if(sum > no){
//                 if(now > prev){
//                     now = prev;
//                     position = i;
//                     prev = 0;
//                     sum = 0;
//                 }
//                 continue;
//             }
//         }
//     }
//     let tempNow = now;
//     while(tempNow > 0){
//         outArr.push(arr[position]);
//         tempNow--
//         position++
//     }
//     console.log(outArr);
//     return now;
// }

// // Total complexity
// // O(n) + O(n^2) + O(n)

// console.log(SmallestSubArr([1,4,45,6,0,19], 51));
// console.log(SmallestSubArr([1,10,5,2,7], 9));
// console.log(SmallestSubArr([1,11,100,1,0,200,3,2,1,250], 280));
// console.log(SmallestSubArr([1,2,4], 8));



// function getAllTheKeys(obj){
//     let arr = []
//     function keys(o){
//         for(let k in o){
//             if(k == "val"){
//                 arr.push(o[k]);
//                 continue;
//             }
//             keys(o[k]);
//         }
//     }
//     keys(obj)
//     console.log(arr);
//     arr.sort((a, b)=> a-b);
//     //createLinkedList(arr);
//     let list =  new LinkedList();
//     for(let v of arr){
//         list.add(v)
//     }

//     return list.head;
// }

// function LinkedList (){
//     this.head = null;
// }

// LinkedList.prototype.add = function(val){
//     var node = {
//         value : val,
//         next: null
//     };
//     var current;
//     if(this.head == null){
//         this.head = node
//     } else {
//         current = this.head
//         while(current.next){
//             current = current.next
//         }
//         current.next = node;
//     }
// }


// let o = {
//     val : 5,
//     next1: {
//         val: 7, next: {
//             val : 8, next: {
//                 val : 30, next: null
//             }
//         }
//     },
//     next2: {
//         val: 10,
//         next1: {
//             val: 20, next: null
//         }, 
//         next2: {
//             val : 19, 
//             next1: {
//                 val : 22, next: {
//                     val : 50, next: null
//                 }
//             },
//             next2: {
//                 val : 28, 
//                 next1: {
//                     val: 35, next: null
//                 },
//                 next2: null
//             }
//         }
//     }
// }


// 5 -> 6 -> 7 -> 8
// |    |
// ^    ^
// 7    10
// |
// ^
// 9



// console.log(getAllTheKeys(o))


// Second most repeated string in a sentence




// Doubly Linked list

function Node(item){
    this.item = item;
    this.prev = null;
    this.next = null
}

function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
}

DoublyLinkedList.prototype.append = function(item){
    let node = new Node(item);
    if(!this.head){
        this.head = node;
        this.tail = node;
    }else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node
    }
    return this.head;
}

DoublyLinkedList.prototype.CheckPosition = function(position){
    let current = this.head;
    while(current.item != position || !current.next){
        current = current.next;
    }
    if(current.item == position){
        return true;
    }
}

DoublyLinkedList.prototype.insertAt = function(item, position){
    let node = new Node(item);
    let foundPosition = this.CheckPosition(position);
    console.log(foundPosition);
    let current = this.head;
    if(foundPosition){
        while(current.item != position){
            current = current.next
        }
        node.next = current.next;
        current.next = node;
        node.prev = current;
        node.next.prev = node;
        return this.head;
    } else {
        console.log("Item didnot found in the doubly linked list");
        return null
    }
}

DoublyLinkedList.prototype.remove = function(item = this.tail.item){
    if(item == this.tail.item){
        let node = this.tail.prev;
        this.tail.prev.next = null;
        this.tail = node;
    }
    return this.head;
}

let doublyLink = new DoublyLinkedList();

console.log(doublyLink.append(5));
console.log(doublyLink.append(8));
console.log(doublyLink.append(4));
console.log(doublyLink.append(3));


console.log(doublyLink.insertAt(7, 8));
console.log(doublyLink.remove());
console.log(doublyLink.remove());
console.log(doublyLink.remove());



