'use strict';

const zombie = {
    image         :     "img/zombie.png",
    domObj        :     null,
    spriteSize    :     100,
    numberSprite  :     10
}

const anim = {
    position      :     0,
    fps           :     7,
    id            :     null,
    timer         :     null
}

document.addEventListener("DOMContentLoaded", () => {
    zombie.domObj = document.querySelector("#zombietomb");
    walkingDead();
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