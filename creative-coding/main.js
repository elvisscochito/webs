let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'silver';
/* ctx.fillRect(0, 0, 100, 100); */

/**
 * @note the explicit way to create a canvas element
 */

/* // create new shape
ctx.lineWidth = 4;
ctx.beginPath();
ctx.rect(100, 100, 400, 400);
ctx.stroke();

ctx.beginPath();
ctx.arc(300, 300, 100, 0, 2 * Math.PI);
ctx.stroke(); */

// drawn with loops (5* 5 = 25 times)
ctx.lineWidth = 4;
let width = 60;
let height = 60;
let gap = 20;
let x, y;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        // mantain the same gap between the shapes
        x = 100 + (width + gap) * i;
        y = 100 + (height + gap) * j;
        // stairs drawing
        /* let x = 100 + i * width;
        let y = 100 + i * height; */
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        // nested squares drawing
        // ctx.rect(100 + i * 10, 100 + i * 10, 400 - i * 20, 400 - i * 20);
        ctx.stroke();

        // draw circles inside the squares but just in the sequence
        /* if (i === j) {
            ctx.beginPath();
            ctx.arc(x + width / 2, y + height / 2, width / 2, 0, 2 * Math.PI);
            ctx.stroke();
        } */

        if (Math.random() > 0.5) {
            ctx.beginPath();
            ctx.rect(x + 10, y + 10, width - 20, height - 20);
            // nest circles drawing
            /* ctx.arc(x + width / 2, y + height / 2, 20, 0, 2 * Math.PI); */
            ctx.stroke();
        }
    }
}

let listBands = ["Arctic Monkeys", "The Neighborhood", "Tame Impala"];

listBands.forEach((band) => console.log(band));
