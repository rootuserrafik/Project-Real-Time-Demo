
const diamonds = [80, 695, 732, 75, 734, 21, 1, 5, 6];
let number = "";
let html = `<li> ${diamonds} </li>`;

for (let i = 0; i < diamonds.length; i++) {
    diamonds.sort(function (a, b) {
        return b - a;
    });
    number += diamonds[i];
}
document.getElementById('points_id').innerHTML = number;