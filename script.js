const monsterButtons = document.querySelectorAll(
        ".create-monster .monster-button"
    ),
    SHOW_CLASS = "is-show",
    HIDE_CLASS = "is-hide";

let stopFlag = false;

console.log("monsterStone");
console.log("monsterButtons");
console.log(monsterButtons);

function towerHp(params) {}

function genMonster(monsterStone) {
    //몬스터 나타냄
    console.log("genMonster");
    monsterStone.classList.add(SHOW_CLASS); //몬스터에 show_class 추가
    moveMonster(monsterStone); // 몬스터 이동 함수 호출
}

function checkConnectTower(monsterStone) {
    //타워에 몬스터가 접촉했을 때
    if (monsterStone.style.transform == "") {
        //monsterStone 스타일 tansform에 아무것도 없으면
        return false; //false 리턴
    }
    const xPosition = monsterStone.style.transform.match(/(-?[0-9\.]+)/g)[0]; //xPosition은 monsterStone 스타일 transform 속성 x값
    const yPosition = monsterStone.style.transform.match(/(-?[0-9\.]+)/g)[1]; //yPosition은 monsterStone 스타일 transform 속성 y값
    console.log(parseInt(xPosition));
    if (parseInt(xPosition) < -780) {
        //정수xPosition 값이 -780보다 작으면
        stopFlag = true; //stopFlag는 true
    }
}

function addMonster() {
    //몬스터 생성
    const divTag = document.createElement("div"); //div 태그 생성해서 divTag에 부여
    const imgTag = document.createElement("img"); //img 태그 생성해서 imgTag에 부여
    const monsters = document.querySelector(".monsters"); //.monsters 클래스 가진 태그 monsters에 부여
    divTag.append(imgTag); // imgTag를 divTag 하위요소로 변경
    monsters.append(divTag); //divTag를 monsters 하위요소로 변경
    const monsterStone = divTag; // divTag를 monsterStone에 부여
    divTag.classList.add("monster-stone"); // divTag에 monster-stone 클래스 추가
    imgTag.setAttribute("src", "./images/monster.png"); //imgTag의 src속성 추가
    genMonster(monsterStone); //
}

function moveMonster(monsterStone) {
    //몬스터 이동
    setTimeout(() => {
        gsap.to(monsterStone, {
            x: "-=10", //-10씩 이동
            duration: 0.1,
        });
        checkConnectTower(monsterStone); //타워에 접촉했는지 체크하는 함수 호출
        if (!stopFlag) {
            //만약 접촉하지 않았다면
            moveMonster(monsterStone); //몬스터 이동 함수 호출
        } else {
            hideMonstaer(monsterStone); //몬스터 숨김 함수 호출
        }
    }, 100);
}

function hideMonstaer(currentMonster) {
    //몬스터 숨김
    gsap.to(currentMonster, {
        duration: 1,
        opacity: 0,
    });
}

function init() {
    console.log("init");

    if (monsterButtons) {
        Array.from(monsterButtons).forEach(function (currentMonsterButton) {
            currentMonsterButton.addEventListener("click", addMonster);
        });
    }
}
init();
