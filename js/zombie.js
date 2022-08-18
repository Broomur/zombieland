'use strict';

const zombie = {
    image           :       "img/zombie.png",
    domObj          :       null,
    spriteSize      :       100,
    numberSprite    :       10,
    direction       :       1
}

const anim = {
    position        :       0,
    fps             :       7,
    id              :       null,
    timer           :       null
}

document.addEventListener("DOMContentLoaded", () => {
    zombie.domObj = document.querySelector("#zombietomb");
    //walkingDead();
});

document.addEventListener("keydown", event => {
    if (zombie.direction === 1) {
        if (event.code == "ArrowUp") zombie.domObj.style.transform += "translateY(-10px)";
        if (event.code == "ArrowDown") zombie.domObj.style.transform += "translateY(10px)";
        if (event.code == "ArrowLeft") zombie.domObj.style.transform += "translateX(-10px)";
        if (event.code == "ArrowRight") zombie.domObj.style.transform += "translateX(10px)";
        if (event.code == "Space") deadWalking();
        if (event.code == "AltLeft") walkingDead();
        if (event.code == "KeyR") zombie.domObj.style.transform += "scaleX(-1)", zombie.direction = 0;
    } else if (zombie.direction === 0) {
        if (event.code == "ArrowUp") zombie.domObj.style.transform += "translateY(-10px)";
        if (event.code == "ArrowDown") zombie.domObj.style.transform += "translateY(10px)";
        if (event.code == "ArrowLeft") zombie.domObj.style.transform += "translateX(10px)";
        if (event.code == "ArrowRight") zombie.domObj.style.transform += "translateX(-10px)";
        if (event.code == "Space") deadWalking();
        if (event.code == "AltLeft") walkingDead();
        if (event.code == "KeyR") zombie.domObj.style.transform += "scaleX(-1)", zombie.direction = 1;
    }
});

const walkingDead = () => {
    anim.timer = setTimeout(()=> {anim.id = requestAnimationFrame(walkingDead)}, 1000/anim.fps);
    zombie.domObj.style.background = `url(${zombie.image}) ${-zombie.spriteSize * anim.position}px 0px`;
    anim.position++;
    if (anim.position > zombie.numberSprite) {
        anim.position = 10;
        clearTimeout(anim.timer);
        cancelAnimationFrame(anim.id);
    }
};

const deadWalking = () => {
    anim.timer = setTimeout(()=> {anim.id = requestAnimationFrame(deadWalking)}, 1000/anim.fps);
    zombie.domObj.style.background = `url(${zombie.image}) ${-zombie.spriteSize * anim.position}px 0px`;
    anim.position --;
    if (anim.position <= 0) {
        anim.position = 0;
        clearTimeout(anim.timer);
        cancelAnimationFrame(anim.id);
        zombie.domObj.style.background = null;
    }
}