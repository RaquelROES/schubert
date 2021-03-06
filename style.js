(function (blink) {
	'use strict';

	var schubertStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	schubertStyle.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_schubert',
		extraPlugins: ['image2'],
		ckEditorStyles: {
			name: 'schubert',
			styles: [

				{ name: 'Title 1', element: 'h4', attributes: { 'class': 'bck-title1'} },
				{ name: 'Title 2', element: 'h4', attributes: { 'class': 'bck-title2'} },
				{ name: 'Title 3', element: 'h4', attributes: { 'class': 'bck-title3'} },
				
				{ name: 'Lista ordenada 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol1' } },

				{ name: 'Table', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-center'} },
				{ name: 'Cell', element: 'td', attributes: { 'class': 'bck-td' } },

				{ name: 'Box 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				{ name: 'Box 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				{ name: 'Box 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } }
			]
		},

		//BK-15873 Recibe un scope porque es un padre de otro estilo y asi no se pierda la herencia
		init: function (scope) {
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			var that = scope || this;
			this.parent.init.call(that);
			that.addActivityTitle();
			that.addPageNumber();
			if(window.esWeb) return;
			that.removeFinalSlide();
			that.addSlideNavigators();
			that.formatCarouselindicators();
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html() + ' > ' + blink.courseInfo.unit;
			})
		},

		addPageNumber: function() {
			$('.js-slider-item').each(function(i,e) {
				var idPage = $(e).attr('id');
				var page = parseInt(idPage.replace("slider-item-", ""))+1;
				$(e).find('.header').prepend('<div class="single-pagination"><div class="page">'+page+'</div></div>');
			});
		},


		formatCarouselindicators: function () {
			var $navbarBottom = $('.navbar-bottom'),
				$carouselIndicators = $('.slider-indicators').find('li');
			$navbarBottom.find('li').tooltip('destroy');

			var dropDown = '' +
					'<div class="dropdown">' +
						'<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'Índice' +
							'<span class="caret"></span>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">';

			var navigatorIndex = 0;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = eval('t'+index+'_slide'),
					slideTitle = slide.title;

				if (slide.isConcatenate) continue;

				dropDown += '<li role="presentation"><a role="menuitem">' + (navigatorIndex+1) + '. ' + stripHTML(slideTitle) + '</a></li>';
				$navbarBottom.find('li').eq(navigatorIndex).html('<span title="'+ stripHTML(slideTitle) +'">'+(navigatorIndex+1)+'</span>');
				navigatorIndex++;

			};

			dropDown += '' +
						'</ul>' +
					'</div>';

			//BK-18572 Ajustar estilo en UX
			var tmpux = '';
			blink.hasOwnProperty('checkFromUX') && blink.checkFromUX(function() { tmpux = ' tmpux'});

			$navbarBottom
				.attr('class', 'activity-navbar'+tmpux)
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before(dropDown)
					.wrap('<div id="top-navigator"/>')
					.end()
				.find('.dropdown').find('li')
					.on('click', function (event) {
						$navbarBottom.find('ol').find('li').eq($(this).index()).trigger('click');
					});

			if (!blink.hasTouch) {
				$navbarBottom
					.find('ol').find('span')
						.tooltip({
							placement: 'bottom',
							container: 'body'
						});
			}
		},

		//BK-15873 Quitamos la funcion getEditorStyles para que la herede de parent
	};

	schubertStyle.prototype = _.extend({}, new blink.theme.styles.basic(), schubertStyle.prototype);

	blink.theme.styles.schubert = schubertStyle;

})( blink );

$(document).ready(function () {

    $('.item').find('.header').find('.title')
		.filter(function () {
			return $(this).find('.empty').length;
		}).hideBlink();

    $('.item').find('.header').find('.title')
		.filter(function () {
			return !$(this).find('.empty').length;
		})
		.each(function () {
			var $header = $(this).find('h3');
			$header.length && $header.html($header.html().replace(' ', ''));
		});

	if (!editar) {
		blink.events.on('showSlide:after', function (index) {
			poolReposition();
		});
	}

	// BK-8433 cambiamos el logo de las slides por el del dominio
	var src_logo = $('.body_clase').find('.logo_slide').attr('logo_dominio');
	if (typeof(src_logo) != 'undefined' && src_logo && src_logo != '' && src_logo.indexOf('gif1x1.gif') == -1) {
		$('.body_clase').find('.logo-publisher').css('background-image', "url('"+src_logo+"')");
	}

});

$(window).load(function() {
	if (!editar) {
		poolReposition();
	}
});
$(window).resize(function() {
	if (!editar) {
		poolReposition();
	}
});

function poolReposition() {
	$('.pool').each(function(i,e) {
		var poolContainer = $(e).width();
		var poolWidth = $(e).find('.rf-searchgamecontainer').width();
		var wordContainerWidth = poolContainer-poolWidth-20;
		if (wordContainerWidth > 150) {
			$(e).find('.rf-wordcontainer').css('width', wordContainerWidth);
		} else {
			$(e).find('.rf-wordcontainer').css('width', poolWidth);
		}
	});
}
