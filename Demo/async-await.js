function myname(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ userroll: id });
        }, 2000);
    });
}
const myfun = async() => {
    console.log("giau");
    const best = await myname("yash");
    console.log(best);
    console.log("sanjay");
};
myfun();

const hlo = async() => {
    console.log("This is one function");
    const how = await myname("Async program");
    console.log(how);
    console.log("Final program");
};
hlo();