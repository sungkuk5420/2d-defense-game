const monsterStone = document.querySelector(".monster-stone"),
    monsterButtons = document.querySelectorAll(
        ".create-monster .monster-button"
    ),
    SHOW_CLASS = "is-show",
    HIDE_CLASS = "is-hide";

let stopFlag = false;

console.log("monsterStone");
console.log(monsterStone);
console.log("monsterButtons");
console.log(monsterButtons);

function towerHp(params) {}

function genMonster() {
    console.log("genMonster");
    monsterStone.classList.add(SHOW_CLASS);
    moveMonster(monsterStone);
}

function checkConnectTower() {
    if (monsterStone.style.transform == "") {
        return false;
    }
    const xPosition = monsterStone.style.transform.match(/(-?[0-9\.]+)/g)[0];
    const yPosition = monsterStone.style.transform.match(/(-?[0-9\.]+)/g)[1];
    console.log(parseInt(xPosition));
    if (parseInt(xPosition) < -780) {
        stopFlag = true;
    }
}

function moveMonster(currentMonster) {
    setTimeout(() => {
        gsap.to(currentMonster, {
            x: "-=10",
            duration: 0.1,
        });
        checkConnectTower();
        if (!stopFlag) {
            moveMonster(currentMonster);
        } else {
            hideMonstaer(currentMonster);
        }
    }, 100);
}

function hideMonstaer(currentMonster) {
    gsap.to(currentMonster, {
        duration: 1,
        opacity: 0,
    });
}

function init() {
    console.log("init");

    if (monsterButtons) {
        Array.from(monsterButtons).forEach(function (currentMonsterButton) {
            currentMonsterButton.addEventListener("click", genMonster);
        });
    }
}
init();
