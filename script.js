const monsterStone = document.querySelector(".monster_stone"),
    createMonster = document.querySelector(".create_monster"),
    monster = createMonster.querySelector("li"),
    SHOW_CLASS = "show",
    HIDE_CLASS = "hide";

function handleClick() {
    monsterStone.classList.add(SHOW_CLASS);
}

function genMonster() {
    monster.addEventListener("click", handleClick);
}

function init() {
    genMonster();
}
init();
