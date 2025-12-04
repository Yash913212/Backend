//to handle promises we have to use .then() and .catch() methods

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "success" });
        }, 2000);
    });
}

getData()
    .then((result) => {
        console.log("Promise resolved:", result);
    })
    .catch((error) => {
        console.log("Promise rejected:", error);
    });