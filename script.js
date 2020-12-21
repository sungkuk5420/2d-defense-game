const monsterStone = document.querySelector(".monster-stone"),
    monsterButtons = document.querySelectorAll(
        ".create-monster .monster-button"
    ),
    SHOW_CLASS = "is-show",
    HIDE_CLASS = "is-hide";

console.log("monsterStone");
console.log(monsterStone);
console.log("monsterButtons");
console.log(monsterButtons);

function towerHp(params) {}

function genMonster() {
    console.log("genMonster");
    monsterStone.classList.add(SHOW_CLASS);
    gsap.to(monsterStone, {
        x: -200,
        duration: 1.2,
        opacity: 0,
        rotate: -15,
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
