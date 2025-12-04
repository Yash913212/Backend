function myname(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ userroll: id })
        }, 2000);
    })
};
const myfun = async() => {
    console.log("giau");
    const best = await myname("yash");
    console.log(best);
    console.log("sanjay")
};
myfun();