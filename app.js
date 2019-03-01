var drops = 900; // 600ms * 1.5

function random(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function createRain() {

	for (var i = 0; i < drops; i++) {
		var left = random(0, 1920); // 0, 100
		var top = random(-1620, 2160); // -1.5, 2

		var rain = document.getElementById('rain');
		var drop = document.createElement('div');
		drop.innerHTML = '<div id="drop-' + i + '" class="drop"></div>';
		rain.appendChild(drop);

		// $('#rain').append('<div id="drop-' + i + '" class="drop"></div>');
		$('#drop-' + i).css('left', left);
		$('#drop-' + i).css('top', top);
	}
}

createRain();