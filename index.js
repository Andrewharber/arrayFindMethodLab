// const record = [
//     {year: "2015", result: "W"},
//     {year: "2014", result: "N/A"},
//     {year: "2013", result: "L"},


// function superbowlWin(record) {
//     for (const obj of record) {
//         if (obj.result === "W") {
//             return obj.year
//         }
//     }
// }

function superbowlWin(record) {
    const win = record.find(obj => obj.result === "W")
    return win ? win.year: undefined
}