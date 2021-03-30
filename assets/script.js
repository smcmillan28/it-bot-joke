const mainDiv = document.getElementById("main");
const buttonDiv = document.getElementById("buttons");
const heading = document.getElementById("heading");

const troubleshooting = ["Emails Not Sending",
    "Login Information Not Working",
    "Change Billing Info",
    "Internet Issues",
    "Change My Password",
    "Other"];

var newButtDiv = document.createElement("div");
var issueButtonOne = document.createElement("button");
issueButtonOne.setAttribute("style", "margin: 10px; border-radius: 5px;");
issueButtonOne.textContent = troubleshooting[0];
newButtDiv.appendChild(issueButtonOne);
var issueButtonTwo = document.createElement("button");
issueButtonTwo.setAttribute("style", "margin: 10px; border-radius: 5px;");
issueButtonTwo.textContent = troubleshooting[1];
newButtDiv.appendChild(issueButtonTwo);
var issueButtonThree = document.createElement("button");
issueButtonThree.setAttribute("style", "margin: 10px; border-radius: 5px;");
issueButtonThree.textContent = troubleshooting[2];
newButtDiv.appendChild(issueButtonThree);
var issueButtonFour = document.createElement("button");
issueButtonFour.setAttribute("style", "margin: 10px; border-radius: 5px;");
issueButtonFour.textContent = troubleshooting[3];
newButtDiv.appendChild(issueButtonFour);
var issueButtonFive = document.createElement("button");
issueButtonFive.setAttribute("style", "margin: 10px; border-radius: 5px;");
issueButtonFive.textContent = troubleshooting[4];
newButtDiv.appendChild(issueButtonFive);
var issueButtonSix = document.createElement("button");
issueButtonSix.setAttribute("style", "margin: 10px; border-radius: 5px;");
issueButtonSix.textContent = troubleshooting[5];
newButtDiv.appendChild(issueButtonSix);
buttonDiv.appendChild(newButtDiv);

const reload = () => {
    location.reload();
}

const yesRestart = () => {
    heading.textContent = "Please try restarting your computer again. Thank you!";
    buttonDiv.textContent = "";
    var returnBtn = document.createElement("button");
    returnBtn.setAttribute("style", "margin: 10px; border-radius: 5px;");
    returnBtn.textContent = "Return To Main Menu";
    buttonDiv.appendChild(returnBtn);
    returnBtn.addEventListener("click", reload);
};

const noRestart = () => {
    heading.textContent = "Please try restarting your computer. Thank you!"
    buttonDiv.textContent = "";
    var returnBtn = document.createElement("button");
    returnBtn.setAttribute("style", "margin: 10px; border-radius: 5px;");
    returnBtn.textContent = "Return To Main Menu";
    buttonDiv.appendChild(returnBtn);
    returnBtn.addEventListener("click", reload);
}

const restartComp = (event) => {
    event.preventDefault();
    heading.textContent = "";
    buttonDiv.textContent = "";
    var buttDivTwo = document.createElement("div");
    var newHeader = document.createElement("h2");
    newHeader.textContent = "Have you tried restarting your computer?";
    buttDivTwo.appendChild(newHeader);
    var yesBtn = document.createElement("button");
    yesBtn.setAttribute("style", "margin: 10px; border-radius: 5px;");
    yesBtn.setAttribute("id", "yes");
    yesBtn.textContent = "Yes";
    buttDivTwo.appendChild(yesBtn);
    var noBtn = document.createElement("button");
    noBtn.setAttribute("style", "margin: 10px; border-radius: 5px;");
    noBtn.setAttribute("id", "no");
    noBtn.textContent = "No";
    buttDivTwo.appendChild(noBtn);
    buttonDiv.appendChild(buttDivTwo);
    document.querySelector("#yes").addEventListener("click", yesRestart);
    document.querySelector("#no").addEventListener("click", noRestart);
};

issueButtonOne.addEventListener("click", restartComp);
issueButtonTwo.addEventListener("click", restartComp);
issueButtonThree.addEventListener("click", restartComp);
issueButtonFour.addEventListener("click", restartComp);
issueButtonFive.addEventListener("click", restartComp);
issueButtonSix.addEventListener("click", restartComp);

