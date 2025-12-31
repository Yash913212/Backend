const getStudents = (req, res) => {
    const stdData = { name: "Aditya", roll: "951" };
    res.status(200).json({ data: stdData });
};

const addStudents = (req, res) => {
    res.status(201).json({ message: "Student Added" });
};

const deleteStudents = (req, res) => {
    res.status(203).json({ message: "Deleted" });
}


export { getStudents, addStudents, deleteStudents };