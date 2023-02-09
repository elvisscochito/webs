import canvasSketch from "canvas-sketch";

const settings = {
	dimensions: [1080, 1080],
};

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = "black";
		context.fillRect(0, 0, width, height);
	};
};

canvasSketch(sketch, settings);
