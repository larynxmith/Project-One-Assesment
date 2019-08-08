let displayNum = 0;
let resultNum = 0;
let inputNum = 0;

document.getElementById("add-number").addEventListener("click", function(e) {
    e.preventDefault();
    addNum(inputNum);
});
document.getElementById("subtract-number").addEventListener("click", function(e) {
    e.preventDefault();
    subtractNum(inputNum);
});
console.log("ResultNum : " + resultNum)

function addNum() {
    if(addNum) {
        inputNum = document.getElementById("input-box").value;
        console.log(inputNum);
        console.log(displayNum);
        displayNum = parseInt(displayNum) + parseInt(inputNum);
        console.log("result num : " + resultNum);
        document.getElementById("counter").textContent = displayNum;
        if (displayNum < 0) {
            document.getElementById("counter").style.color = "red";
        }
        return displayNum;
    }
}
function subtractNum() {
    if(subtractNum) {
        inputNum = document.getElementById("input-box").value;
        console.log(inputNum);
        console.log(displayNum);
        displayNum = parseInt(displayNum) - parseInt(inputNum);
        console.log("result num : " + displayNum);
        document.getElementById("counter").textContent = displayNum;
        if (displayNum < 0) {
            document.getElementById("counter").style.color = "red";
        }
        return displayNum;

    }
}