//calling a function inside a another function is called callbacks

// function f1(hgvhgvgvhvhghgvhgvhgvhgvhgvhgvhgvhgvhgvhgvhgv) {
//     console.log("Fun1");
//     f2()
// };

// function f2() {
//     console.log("Fun2");
// }
// f1(f2);


function getUserDetails(id, getUserSubject) {
    console.log("Getting user details by roll number", id); //api call
    getUserSubject({ userroll: "678" })
};

function getUserSubject(userRollObj, getUserMarks) {
    const userRoll = userRollObj.userroll;
    console.log("getting user subject by roll number", userRoll); //api call
    getUserMarks({ subid: "Maths-124" })
}

function getUserMarks(userSubId) {
    console.log("getting user marks with id", userSubId);
}
getUserDetails("123", function(userRoll) {
    getUserSubject(userRoll, function(userSubId) {
        getUserMarks(userSubId)
    })
});


console.log("Start");

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000); // callback executed after 2 seconds

console.log("End");