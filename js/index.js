// ================================================================================
// Color Toggling

var form_blue = "rgb(111, 217, 239)";
var form_red = "rgb(255, 0, 0)";
var color_change_interval = 500;

function toggle_background_color(ele, color1, color2) {
	if ($(ele).css("background-color") === color1 ) {
		$(ele).css("background-color", color2);
	}
	else {
		$(ele).css("background-color", color1);
	}
}

function toggle_text_shadow(ele, color1, color2) {
	let prev_shadow = $(ele).css("text-shadow");
	let next_color = prev_shadow.includes(color1) ? color2 : color1;
	let new_val = next_color + " -1px 0px 0px, " + next_color + " 0px 1px 0px, " + next_color + " 1px 0px 0px, " + next_color + " 0px 1px 0px";
	
	$(ele).css("text-shadow", new_val);
}

function toggle_form_btn_background() {
	toggle_background_color("#embed_form #mc-embedded-subscribe", form_red, form_blue);
}

function toggle_form_background() {
	toggle_background_color("#embed_form", form_blue, form_red);
	toggle_text_shadow("#embed_form h2", form_blue, form_red);
	toggle_text_shadow("#embed_form label", form_blue, form_red);
}

function toggle_title_background() {
	toggle_background_color("#header_text", form_red, form_blue);
	toggle_text_shadow("#header_text h1", form_red, form_blue);
}


setInterval(toggle_form_btn_background, color_change_interval);
setInterval(toggle_form_background, color_change_interval);
setInterval(toggle_title_background, color_change_interval);

// ================================================================================
// JBOX

var correct_btn = new jBox('Modal', {
  attach: '#trigger_form_btn',
  title: 'Congratulations! You found the button!',
  content: 'You have found the button and have unlocked the secret form on this website. Do you dare to fill it?',
  addClass: "jbox_box",
  width: 500
});


var auto_trigger = new jBox('Modal', {
  title: 'Auto Triggered message',
  content: 'There is a secret in this website. Can you find it?',
  addClass: "jbox_box",
  width: 500
});

auto_trigger.open();

// Drag anywhere

/*
new jBox('Modal', {
	attach: $('#modal-drag-anywhere'),
	width: 220,
	title: 'jBox',
	overlay: false,
	createOnInit: true,
	content: 'Drag me around by clicking anywhere',
	draggable: true,
	repositionOnOpen: false,
	repositionOnContent: false
});

*/



// ================================================================================
// Form trigger button

$("#trigger_form_btn").on("click", function() {
	$("#embed_form").css("display", "block");
	correct_btn.detach();
});