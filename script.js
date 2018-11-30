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








// Check the number is power of a number

// function checkPower(n, pOf){
//     var powers = pOf;
//     var power = false;
//     while (n > powers){
//         powers = powers * pOf
//         if(powers == n){
//             power = true;
//             break;
//         }
//     }
//     console.log(power);
//     return power
// }

// checkPower(16, 2);


// Find the list of keys in a nested object


// function findKeys(obj){
//     let keys = [];

//     function k(o){
//         for(let key in o){
//             keys.push(key);
//             k(o[key]);
//         }
//     }
//     k(obj)

//     return keys
// }

// var b = {
//     a: {
//         c: {
//             d: 1
//         },
//         h :{
//             i : 3
//         }
//     },
//     e: {
//         f: {
//             g: 2
//         }
//     }
// }

// console.log(findKeys(b));





// mark the repeated characters

// function repeatedString(str){
//     let strObj = {}
//     str = str.split("");
//     for(let k of str){
//         if(strObj.hasOwnProperty(k)){
//             strObj[k] = strObj[k] + 1;
//         }else {
//             strObj[k] = 1
//         }
//     }
//     let newStr = "";
//     for(let key in strObj){
//         newStr += (key+strObj[key])
//     }
//     console.log(newStr);
// }
// repeatedString("aaaaabbccaaddcaamm");

// function getthColoumnNoByCount(count){
//     let a = (count - (count%26))/26;
//     let module = count%26;
//     let alphabets = {1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"F", 7:"G", 8:"H", 9:"I", 10:"J", 11:"K", 12:"L", 13:"M", 14:"N", 15:"O", 16:"P", 17:"Q", 18:"R", 19:"S", 20:"T", 21:"U", 
//     22:"V", 23:"W", 24:"X", 25:"Y", 26:"Z"}
//     let c = 1;
//     let newStr = "";
//     while (c <= a){
//         newStr = newStr + alphabets[1];
//         c++;
//     }
//     newStr = newStr + alphabets[module];
//     return newStr;
// }

// console.log(getthColoumnNoByCount(28));
// console.log(getthColoumnNoByCount(13));
// console.log(getthColoumnNoByCount(4294967295));



// Sample code to perform I/O:
// O(n^2)*2O(n)
// function subArr(a) {
//     let now = 0;
//     let diviser = 0;
//     let tempArr = [];
//     let finalArr = [];
//     for (let i = 0; i < a.length; i++) {
//         let prev = 0;
//         for(let j = 0; j < a.length; j++){
//             if(a[j]%a[i]==0){
//                 prev =  prev + 1
//                 if(prev > now){
//                     now = prev;
//                     diviser = a[i]
//                 }
//             }
//         }
//     }
//     for(let i = 0; i < a.length; i++){
//         if(a[i]%diviser == 0){
//             tempArr.push(a[i]);
//         }
//     }
//     console.log(tempArr)
//     tempArr.sort(function(a, b){return a-b});
//     for(let i = 0; i < tempArr.length; i++){
//         if(i==0){
//             finalArr.push(tempArr[i]);
//             continue;
//         }
//         if(tempArr[i]%finalArr[finalArr.length-1] === 0){
//             finalArr.push(tempArr[i])
//         }
//     }
//     console.log(finalArr)
//     return finalArr.length;
// }

// console.log(subArr([5, 3, 9, 15, 18, 20]));
// console.log(subArr([1, 10, 5, 9]));


// var a = new Promise(function (resolve, reject) {
//     let v = false;
//     //reject("For some reasone");
//     ((v == true) ? reject(new Error("error")) : resolve({ 'a': 1 }));
// }).then(function (v) {
//     console.log(v['a']); 
//     return { 'b': 2 };
// }).then(function (v1) {
//     console.log((v1['b']));
//     return { 'c': 3 }
// }).catch(function (e) {
//     console.log("catch", e);
//     return { 'c': 3 }
// }).then(function (v2) {
//     console.log(v2['c']);
// });


// find the minimum index value in an string
// geeksforgeeks
// set

// function findMin(str1, str2){
//     let prev = str1.length;
//     let now = str1.length;
//     let character;
//     for(let i = 0; i < str2.length; i++){
//         let ind = str1.indexOf(str2[i]);
//         if(ind < prev && ind >= 0){
//             prev = ind;
//             character = str2[i]
//         }
//     }
//     if(character){
//         return character
//     } else {
//         console.log("Character didnot found");
//         return "";
//     }
// }
// console.log(findMin("geeksforgeeks", "set"));
// console.log(findMin("adcffaet", "onkl"));


// Decript the given string

// function descriptString(str, k){
//     console.log(str);
//     let newStr = ""
//     let lastVal = "";
//     let no = "";
//     for(let i = 0; i < str.length; i++){
//         if(str[i] % 1 == 0){
//             if(i < str.length && str[i+1] % 1 == 0){
//                 no = no + str[i];
//                 continue;
//             }
//             if(no != ""){
//                 no = no + str[i]
//             } else {
//                 no = str[i];
//             }
//             for(let j = 1; j <= no; j++){
//                 newStr = newStr + lastVal
//             }
//             lastVal = "";
//             no = ""
//         } else {
//             lastVal = lastVal + str[i]
//         }
//     }
//     console.log(newStr)
//     return newStr[k-1]
// }
// console.log(descriptString("ab4c2ed3", 9));
// console.log(descriptString("a2b2c3", 5));
// console.log(descriptString("ab4c12ed3", 21));



// O(1)
// 4 examples

// Sum 
// function sum(a,b){
//     return a+b
// }
// console.log(sum(5,4));

// // Get Attribute from array index
// function ArrIndex(arr, i){
//     return arr[i-1];
// }
// console.log(ArrIndex([1,23,4,5], 3))

// // Insert Value to the array
// function ArrInsertion(arr, val){
//    arr.push(val);
//    return arr
// }
// console.log(ArrInsertion([1,2,3,4], 5))



// O(n)

// get all the values of an array
// function getArrval(arr){
//     for(let a of arr){
//         console.log(a);
//     }
// }
// getArrval([1,2,3,4]);


// Find the second minimum in an array

// function findSecondMin(arr) {
//     let firstMin = arr[0];
//     let secondMin;
//     for (let val of arr) {
//         if (val < firstMin) {
//             secondMin = firstMin;
//             firstMin = val;
//         } else if (val < secondMin) {
//             secondMin = val;
//         }
//     }
//     console.log(firstMin);
//     console.log(secondMin);
// }
// findSecondMin([5, 6, 4, 1, 8, 4, 3, 8, 7, 9, 10]);


// Reverse as string
// function reverseStr(str){
//     let newStr = ""
//     for(let i = str.length-1; i >= 0; i--){
//         newStr = newStr + str[i]
//     }
//     return newStr
// }
// console.log(reverseStr("abcd"));



// First Repeated character

// function firstRepeated(str){
//     let repeated;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == str[i+1]){
//             repeated = str[i];
//             break;
//         }
//     }
//     return repeated
// }
// console.log(firstRepeated("geeksforgeeks"));
// console.log(firstRepeated("hello geeks"));



// O(n^2)

//  bubble sort
// selection sort
// insertion sort
// traversing any array




// O(log n)


// Binary Search tree

// function Node() {
//     this.node = {
//         val: null,
//         left: null,
//         right: null
//     }
//     return this.node;
// }

// let node = new Node();

// function BinarySearch() {
//     let self = this;

//     let put = function (node, value) {
//         let newNode = {
//             val: value,
//             left: null,
//             right: null
//         }
//         if (node.val == null) {
//             node.val = value
//             return node;
//         }
//         if (value < node.val) {
//             if (node.left == null) {
//                 node.left = newNode;
//             } else {
//                 this.put(node.left, value);
//             }
//         } else if (value > node.val) {
//             if (node.right == null) {
//                 node.right = newNode;
//             } else {
//                 this.put(node.right, value);
//             }
//         }
//         return node;
//     }

//     let contains = function (node, value) {
//         if (node.val == value) {
//             return true
//         } else if (node.val > value) {
//             if (node.left == null) {
//                 return false;
//             }
//             return this.contains(node.left, value);
//         } else if (node.val < value) {
//             if (node.right == null) {
//                 return false;
//             }
//             return this.contains(node.right, value);
//         }
//     }

//     let remove = function(node, value) {
//         if (node.val == value) {
//             if(node.left == null && node.right == null){
//                 node.val = null;
//             }
//             return node;
//         } else if (node.val > value) {
//             if (node.left == null) {
//                 console.log("value doesnot excists in binary tree");
//                 return false;
//             } else if(node.left.val == value){
//                 node.left = null;
//                 return node;
//             }
//             this.remove(node.left, value);
//         } else if (node.val < value) {
//             if (node.right == null) {
//                 console.log("value doesnot excists in binary tree");
//                 return false;
//             } else if(node.right.val == value){
//                 node.right = null;
//                 return node;
//             }
//             this.remove(node.right, value);
//         }
//     }

//     return {
//         put: put,
//         contains: contains,
//         remove: remove
//     }
// }

// let bn = new BinarySearch();
// console.log(bn.put(node, 15));
// console.log(bn.put(node, 25));
// console.log(bn.put(node, 10));
// console.log(bn.put(node, 7));
// console.log(bn.put(node, 22));
// console.log(bn.put(node, 17));
// console.log(bn.put(node, 13));
// console.log(bn.put(node, 5));
// console.log(bn.put(node, 9));
// console.log(bn.put(node, 27));
// console.log(bn.remove(node, 5));
// console.log(bn.remove(node, 27));
// console.log(node);
// console.log(bn.contains(node, 9));
// console.log(bn.contains(node, 3));
// console.log(bn.contains(node, 1));
// console.log(bn.contains(node, 5));



// O(n log n)

// MergeSort
// Bubble search



// O(2^n)







// Find the second lowest sum of elements

// function kadane(arr) {
//     let prev = 0,
//         now = 0;
//     let secondMin = 0;
//     let index1;
//     for (let i = 0; i < arr.length; i++) {
//         prev = Math.min(0, prev + arr[i]);
//         if (prev < now) {
//             secondMin = now;
//             now = prev
//             index = i;
//         } else if (prev < secondMin) {
//             secondMin = prev;
//             index = i;
//         }
//     }
//     let tempArr = []
//     for (let val of arr) {
//         if (val < 0) {
//             tempArr.push(val);
//         }
//     }
//     let tempSecond = secondMin;
//     for (let val of tempArr) {
//         if (val < tempSecond && val > now) {
//             tempSecond = val
//         }
//     }
//     console.log(now);
//     console.log(secondMin);
//     console.log(index);
//     if (tempSecond < secondMin) {
//         return [tempSecond];
//     } else {
//         let newArr = []
//         let sum = 0;
//         for (let i = index; i >= 0; i--) {
//             if (sum == secondMin) {
//                 break;
//             }
//             sum = sum + arr[i];
//             newArr.push(arr[i]);
//         }
//         return newArr.reverse();
//     }
// }
// console.log(kadane([1, -1, -4, 5, -2, -1, 6, 7, -2]));











// let obj = {
//     a : {
//         val : 1,
//         next :{
//             val : 2,
//             next : {
//                 val : 3,
//                 next : {
//                     val : 4,
//                     next : null
//                 }
//             }
//         }
//     }
// }



// let cObj = Object.assign({}, obj);
// cObj.a.next.val = 5;
// console.log(obj);

// What is object.create
// this will assign all the properties of obj into another obj as prototype, so you can access those properties in terms of inheritence using prototype chain

// If you want to inherit all the properties of an object to another object then


// Inheritence
// let obj2 = {
//     some: 5,
//     another: 6
// }

// inherit obj values to obj2

// obj2.__proto__ = obj
// console.log(obj2);


// function a(){
//     this.name = "ganpat";
//     this.lastname = "kakar"
// }

// let aproto = new a();

// inherit all the properties to new obj2 from function a

// obj2.__proto__ = new a()
// console.log(obj2);

// function b(){
//     this.showname = function(){
//         console.log(this.name, this.lastname);
//     }
// }

// b.prototype = new a();

// let bproto = new b();
// bproto.showname();

