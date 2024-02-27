// Copyright © Sad Gabi 2024 All rights reserved

const menuBtn = document.getElementById('menuButton');
const textHeader = document.getElementById('headerText')


async function typeWriter(elementToAnimate, speed, text, i = 0) {
    return new Promise((resolve) => {
        if (i < text.length) {
            elementToAnimate.innerHTML += text.charAt(i);
            if (text.charAt(i) === '\n') {
                elementToAnimate.innerHTML += '<br>';
            }
            setTimeout(async () => {
                await typeWriter(elementToAnimate, speed, text, i + 1);
                resolve();
            }, speed);
        } else {
            resolve();
        }
    });
}

setTimeout(() => {
    (async () => {
        await typeWriter(textHeader, 50, `fight the\ncrime_`);
    })();
}, 3500);
