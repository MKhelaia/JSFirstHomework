let a = 100;
let resultNew = a < 50
    ? "ნაკლებია 50-ზე"
    : a > 20
        ? "მეტია 20-ზე"
        : "Error";
console.log(resultNew);



let b = "მარიამ";
let resultNewb = b == "მარიამ"
    ? "true"
    : "false";
console.log(resultNewb);

let c = "მარიამ";
switch (c) {
    case "მარიამ":
        console.log("true");
        break;
    default:
        console.log("false");
}