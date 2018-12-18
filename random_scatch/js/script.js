window.onload = function() {
	var container = document.querySelector('div');
	var canvas = setCanvas(container);

	var button = document.querySelector('button');
	var ctx = canvas.getContext('2d');

	var idx = 0;
	button.onclick = function() {
		var leftTop = {x: 0, y: 0};
		var rightTop = {x: 300, y: 0};
		var leftBottom = {x: 0, y: 200};
		var rightBottom = {x: 300, y: 200};
		var center = {x: (canvas.width) / 2, y: (canvas.height / 2)};

		var randomPairCoordinate = [
			{begin: leftTop, end: center},
			{begin: rightTop, end: center},
			{begin: rightBottom, end: center},
			{begin: leftBottom, end: center}
		];

		clearCanvas(ctx);
		drawLine(ctx, randomPairCoordinate[idx].begin, randomPairCoordinate[idx].end);
		idx++;
		if (idx === randomPairCoordinate.length) {
			idx = 0;
		}
	};

	function clearCanvas(ctx) {
		ctx.clearRect(0, 0, 300, 200);
	}

	function drawLine(ctx, begin, end) {
		ctx.beginPath();
		ctx.moveTo(begin.x, begin.y);
		ctx.lineTo(end.x, end.y);
		ctx.stroke();
	}
};

function setCanvas(container) {
	var canvas = document.createElement('canvas');
	canvas.width = container.clientWidth;
	canvas.height = container.clientHeight;
	container.append(canvas);

	return canvas;
}
