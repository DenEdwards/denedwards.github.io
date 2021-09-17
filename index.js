let skills = {
	Languages: {
		JavaScript: '#000-#edd718-#000',
		HTML: '#fff-#e85326-#000',
		CSS: '#fff-#049ce4-#0474bc',
		SASS: '#fff-#c96195-#944970',
		Python: '#000-#fccc39-#3474a7',
		SQL: '#fff-#de8b00-#025c87',
		Java: '#fff-#e32e30-#0470b7',
	},
	Frameworks_and_Libraries: {
		JQuery: '#000-#fff-#0865a7',
		'Node.js': '#fff-#679f63-#333333',
		'RESTful APIs': '#fff-#000-#0e77ab',
		React: '#fff-#79d8f7-#000',
		Redux: '#fff-#7147b5-#000',
	},
	Tools: {
		'Git Collaboration': '#fff-#e74e32-#3c2c01',
		Devtools: '#fff-#407fef-#000',
		MongoDB: '#000-#419242-#b8b6b5',
		Postman: '#fff-#f56933-#b3b3b3',
		Wireframing: '#fff-#000-#0e77ab',
		'p5.js': '#fff-#e3245d-#000',
		Firebase: '#fff-#0396df-#f7c62e',
	},
};

(function () {
	function appendSkill() {}
	const date = new Date();
	const year = date.getFullYear();
	document.getElementById('year').innerText = year;

	for (var skillHeader in skills) {
		let heading = skillHeader.replace(/_/g, ' ');
		$('#skill-list').append(`<div class='${skillHeader}'></div>`);
		$(`#skill-list .${skillHeader}`).append(
			`<h3>${heading}</h3>
				<span id='list-container-${skillHeader}' class='list-container'></span>`
		);
		for (var skill in skills[skillHeader]) {
			let $skillSpan = $('<span>', { id: `${skills[skillHeader][skill]}`, class: 'skill' });
			$skillSpan.text(skill);
			$(`#list-container-${skillHeader}`).append($skillSpan);
		}
	}
})();

$('.skill').hover(
	function (event) {
		let attr = event.target.id.split('-');
		$(this).css('color', attr[0]);
		$(this).css('background-color', attr[1]);
		$(this).css('box-shadow', `10px 10px 0 ${attr[2]}`);
		$(this).css('border', `2px solid ${attr[2]}`);
	},
	function (event) {
		let attr = event.target.id.split('-');
		$(this).css('color', '#000');
		$(this).css('background-color', '#fff');
		$(this).css('box-shadow', ' 6px 6px 0 #c5c5c5');
		$(this).css('border', `2px solid #000`);
	}
);

//fade reveal
ScrollReveal({
	duration: 600,
	reset: true,
	easing: 'cubic-bezier(.694,0,.335,1)',
	scale: 1,
	viewFactor: 0.1,
}).reveal('.background');

ScrollReveal({
	duration: 600,
	reset: true,
	easing: 'cubic-bezier(.694,0,.335,1)',
	scale: 1,
	viewFactor: 0.1,
}).reveal('#skills');

ScrollReveal({
	duration: 600,
	reset: true,
	easing: 'cubic-bezier(.694,0,.335,1)',
	scale: 1,
	viewFactor: 0.001,
}).reveal('#projects');
