

let preloader = {
	loadCurtain : null,
	create : function() {
		loadCurtain = $('<aside></aside>', {
			id : "load-curtain"
		}).appendTo('body');
		$('<div></div>', {
			class: 'icon'
		}).appendTo(loadCurtain);
		$('#load-curtain').show();
	},
	destroy : function(fadeOut = 800) {
		$(window).on('load', function() {
			setTimeout(function() {
				loadCurtain.fadeOut(fadeOut);
			}, 500);
		});
	}
}

preloader.create();
preloader.destroy(1800);
