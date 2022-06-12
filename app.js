for (let row = 0; row < window.innerHeight; row+=60) {
    for (let col = 0; col < 60; col++) {
        let star = document.createElement('div');
        star.classList.add('star')
        let size = Math.random() * 2;
        star.style.left = `${col*30}px`;
        star.style.top = `${Math.random()*50+row}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        // star.style.background = ``
        star.style.animation = `titileo ${(Math.random() * 10) + 2}s infinite`

        document.body.appendChild(star)
    }
}