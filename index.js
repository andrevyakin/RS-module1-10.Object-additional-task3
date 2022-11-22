const getKiller = (suspectInfo, deadPeople) => {

    return Object.entries(suspectInfo)
        .reduce((acc, el) => [...acc, [el[0], el[1]
            .filter(name => deadPeople.includes(name))
            .slice().sort().join(",") === deadPeople.slice().sort().join(",")
        ]], [])
        .filter(i => i[1])
        .map(i => i[0])
        .join(",")
        .concat(" убийца!!!");
}

console.log(
    getKiller(
        {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Peter: ["Lucy", "Kyle"]
        },
        ["Lucas", "Bill"]
    )
); // Убийца James

console.log(
    getKiller(
        {
            Brad: [],
            Megan: ["Ben", "Kevin"],
            Finn: []
        },
        ["Ben"]
    )
); // Убийца Megan
