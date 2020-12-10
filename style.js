/* General */

@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap');

@font-face {
	font-family: 'Fira Sans', sans-serif;
	src: url('fonts/FiraSans-SemiBold.eot');
	src: local url('fonts/FiraSans-SemiBold.woff') format('woff'), url('fonts/FiraSans-SemiBold.ttf') format('truetype'), url('fonts/FiraSans-SemiBold.svg') format('svg');
	font-weight: 600; 
}

@font-face {
	font-family: 'Fira Sans', sans-serif;
	src: url('fonts/FiraSans-Regular.eot');
	src: local url('fonts/FiraSans-Regular.woff') format('woff'), url('fonts/FiraSans-Regular.ttf') format('truetype'), url('fonts/FiraSans-Regular.svg') format('svg');
	font-weight: 400; 
}

body {
    font: 400 15px 'Fira Sans', sans-serif;
    line-height: 21px;
    color: #414141;
    background-color: #eee
}

	.body_clase:not(.edit) .content-wrapper {
		padding-top: 100px;
		padding-bottom: 0;
	}


	.body_clase:not(.edit) .content-wrapper.tmpux {
		padding-top: 73px;
	}

	.body_clase.edit .content-wrapper {
		padding-top: 40px;
		padding-bottom: 40px;
	}
	body.is_app .content-wrapper,
	body.app:not(.offline-pc) .content-wrapper,
	body.user_demo .content-wrapper {
	    margin-top: 60px;
	}

	.cke_contents table {
		margin-bottom: 10px;
	}

	.is_app.body_clase {
		padding-top: 0px;
	}

	#actividad {
		margin-bottom: 0px;
		-webkit-transform: none;
		-webkit-transform-style: flat;
	}

	#actividad .carousel-inner .item-container {
		background-image: none;
		margin: 20px auto 30px;
		padding: 0px;
		padding-bottom: 90px;
		position: relative;
	}

	/* -----------------NAVBAR-----------------------*/

	#indice .units ul li a:not(.delete) {
    padding: 8px 16px 8px 5px;
	}

	#indice .unit-content {
    -webkit-border-radius: 0px 0px 8px 8px
    -moz-border-radius: 0px 0px 8px 8px
    border-radius: 0px 0px 8px 8px;
	}

	#indice .units ul li {
    background: #808080;
    color: #fff;
    -webkit-border-radius:  0px 20px 0px 0px;
    -moz-border-radius:  0px 20px 0px 0px;
    border-radius: 0px 20px 0px 0px;
    margin-bottom: 8px;
    padding: 0px;
    border-left: 15px solid #FF6600;
    }

    #indice .units ul li a .title {
    color: #fff;
	}

	#indice .units ul li.active:not(.disabled), 
	body:not(.isTablet) #indice .units ul li:hover:not(.disabled),
	 #indice .units ul li:focus:not(.disabled) {
    background: #FF6600;
	}

	#actividad .carousel-inner .item-container {
		margin-top: 0px;
	}

	#actividad .content .header .title img,
	#actividad .content .header .chapter {
		display: none;
	}

	#indice .units ul li a .number,
	#indice .unit-content .header .number
	 {
		visibility: hidden;
	}

	#indice .unit-content .header {
    height: 180px;
	}

	#actividad .content .header {
		border: none;
	}

	#actividad .content .header .title {
		margin-top: -40px;
		padding-top: 30px;
		padding-bottom: 10px;
	}

	#actividad .content .header .title h3 {
		font-family: 'Fira Sans', sans-serif;
	    color: #808080;
	    border-bottom: 2px solid #808080;
	    width: 100%;
	    text-align: right;
	}

	#actividad .content .header .title h3 span {
	    display: inline-block;
	    border-left: none;
	    padding: 6px 10px 6px 10px;
	    border-radius: 0px 10px 0px 0px;
	    color: #fff;
	    background: #808080;
	    font-weight: 600;
	    text-align: left;
	    float: left;
	    margin-top: -6px;
}

	#actividad .texto_curso,
	#actividad .pregunta .texto_curso,
	#actividad .slide_content_type_1 .pregunta .texto_curso {
		font-size: 1.6rem;
	}

	.texto_curso p:last-of-type {
		margin-bottom: 15px;
	}

	#actividad .class_slide {
    	padding: 40px 97px 0px;
	}

	#actividad .class_slide:last-of-type {
	    padding-bottom: 100px;
	}

	#actividad .slide-concatenate .class_slide {
	    padding-bottom: 20px;
	}

	#actividad .slide-concatenate:last-of-type .class_slide {
	    padding-bottom: 100px;
	}

	.body_clase .slide_main input {
		color: #555;
		background-color: #fff;
		background-image: none;
		border: 1px solid #ccc;
		border-radius: 4px;
		-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
		box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
		-webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
		transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
	}

	.body_clase .slide_main input:focus {
		border-top-color: #3AC62A;
		border-right-color: #3AC62A;
		border-bottom-color: #3AC62A;
		border-left-color: #3AC62A;
		outline-width: 0px;
		outline-style: none;
		box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(133, 200, 57, 0.6);
	}

	.body_clase .slide_main input[disabled],
	.body_clase .slide_main input[readonly],
	fieldset[disabled] .body_clase .slide_main input {
		cursor: not-allowed;
		background-color: #eee;
		opacity: 1;
	}

	.body_clase .slide_main input.respuesta_ok {
		border-color: #57e900;
		background: #D1F3BD;
	}

	.body_clase .slide_main input.respuesta_ko {
		border-color: #FF3626;
		background: #FFA49D;
	}

	.body_clase .slide_main input.solucion {
		border-color: #00BDFF;
		background: #B6ECFF;
	}

	table {
		margin-bottom: 20px;
	}
/**/

/* Navigators */
	.navigator {
		bottom: -20px;
		left: 0;
		position: absolute;
		width: 100%;
		padding: 0px 97px;
	}

	.navigator .title {
		width: calc(100% - 20px);
		font-size: 1.6rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 4.0rem;
		display: inline-block;
		vertical-align: top;
	}

	.main-navigator {
		display: none;
	}

	.navigator .left, .navigator .right {
		width: 50%;
		display: inline-block;
	}

	.navigator .right {
		text-align: right;
	}

	.navigator .slider-control.left,
	.navigator .slider-control.right {
		height: auto;
		width: 100%;
		background-color: transparent;
		border-radius: 0px;
		margin: 0px;
		opacity: 1;
		text-shadow: none;
		color: #FFCA04;
		font-size: 1.5em;
		position: relative;
		top: auto;
		left: auto;
		cursor: pointer;
	}

	.navigator .slider-control.left:before,
	.navigator .slider-control.right:after {
		font-family: 'FontAwesome';
		position: absolute;
		margin-top: -3px;
		background: #FFCA04;
		color: #ffffff;
		border-radius: 120px;
		width: 48px;
		height: 48px;
		line-height: 4.8rem;
		text-align: center;
		font-size: 4.0rem;
	}

	.navigator .slider-control.left {
		padding-left: 58px;
	}
	.navigator .slider-control.right {
		padding-right: 58px;
		left: 0px;
	}
	.navigator .slider-control.left:before {
		content: "\f104";
		left: 0;
		padding-right: 5px;
	}

	.navigator .slider-control.right:after {
		content: "\f105";
		right: 0;
		padding-left: 5px;
	}

	.navigator .slider-control span {
		position: static;
		margin: 0px;
        cursor: pointer;
	}
/**/

/* Navbar */
	.navbar-bottom {
		background: #eee;
		display: none;
	}
	.edit .navbar-bottom {
		display: block;
	}
	.slider-indicators {
	    padding-left: 100px;
	    padding-right: 100px;
	}

	.slider-indicators li,
	.edit .slider-indicators li {
		background-color: #ffca04;
		color: #ffffff ;
		opacity: 0.5;
	}

	.slider-indicators .active,
	.slider-indicators li:hover,
	.edit .slider-indicators li.active,
	.edit .slider-indicators .concat.active {
	    opacity: 1;
	}
	.edit .slider-indicators .concat.active {
		color: #ffca04 ;
	}

/* Navbar (Breadcums) */
	.body_clase .activity-navbar {
		position: fixed;
		top: 44px;
		background: #ffffff;
		width: 100%;
		left: 0;
		height: 58px;
		box-shadow: rgba(0, 0, 0, 0.3) 0px 0 9px;
	}

	/* BK-18572 Ajustar estilo en UX */
	.body_clase .activity-navbar.tmpux {
		top: 0px;
	}

	.is_app.body_clase .activity-navbar {
		position: sticky;
		top: 0px;
	}

	#top-navigator {
		height: 44px;
		overflow: hidden;
		position: relative;
	}

	#top-navigator.show_left:before {
        background: none;
        display: none;
    }

    #top-navigator.show_right:after {
        background: none;
        display: none;
    }

	.body_clase .activity-navbar .navbar-content {
		max-width: 960px;
		margin: 0 auto;
		padding-left: 90px;
		padding-right: 50px;
	}

	.body_clase:not(.edit) .logo-publisher {
		display: block;
		content: " ";
    	background-image: url(images/schubertverlag_logo.jpg);
    	height: 43px;
   	 	background-repeat: no-repeat;
	    width: 115px;
	    margin-left: -100px;
	    margin-top: 7px;
	    margin-right: 60px;
	    float: left;
	    background-size: contain;
	}

	.body_clase:not(.edit) .slider-indicators {
		padding: 0;
		display: inline-block;
		text-align: left;
		position: relative;
		bottom: 0px;
		left: 0px;
		z-index: 0;
		background-color: #ffffff;
	    color: #00599C;
	    width: fit-content !important;
    	width: -webkit-fit-content !important;
    	width: -moz-fit-content !important;
	}


	.body_clase .activity-navbar #top-navigator .slider-indicators {
		background: transparent;
    	border-bottom: 2px dotted #007d3f;
    	border-radius: 0;
	}
	.body_clase .activity-navbar .dropdown {
		border-radius: 0px;
   		background: transparent;
	}

	.body_clase .activity-navbar .dropdown button,
	.body_clase .activity-navbar li {
		border-radius: 5px;
		border: none;
		background-color: transparent;
		color: #007d3f;
		vertical-align: middle;
		margin: 0px 5px;
		text-indent: 0px;
		line-height: 3.5rem;
		font-size: 2.0rem;
		font-weight: bold;
		cursor: pointer;
	}

	.body_clase:not(.edit) .slider-indicators:after {
		content: '';
		display: block;
		clear: both;
		visibility: hidden;
		line-height: 0;
		height: 0;
	}

	.body_clase:not(.edit) .slider-indicators li {
		width: 35px;
		height: 35px;
		background-color: transparent;
		margin: 0px;
		text-align: center;
		opacity: 0.5;
		position: relative;
		float: left;
	}

	.body_clase:not(.edit) .slider-indicators li:before,
	.body_clase:not(.edit) .slider-indicators li:after {
		content: '';
   		display: block;
    	width: 100%;
    	height: 100%;
	    background: transparent;
	    position: absolute;
	    left: 0;
	    top: 0;
	    border-top: 2px solid;
	}
	.body_clase:not(.edit) .slider-indicators li:after {
		background: rgba(255,255,255,.2);
		left: -1px;
	}

	.body_clase:not(.edit) .slider-indicators li.active,
	.body_clase .activity-navbar li:hover {
		background-color: transparent;
		opacity: 1;
	}
	.body_clase .activity-navbar #top-navigator,
	.body_clase .activity-navbar .dropdown {
		float: left;
		margin-top: 10px;
		display: block;

	}

	.body_clase .activity-navbar .dropdown button {
		width: auto;
		padding: 0px 10px;
	}

	.open > .dropdown-menu {
		display: block;
		max-height: 300px;
		overflow-y: auto;
	}

	.body_clase .activity-navbar .dropdown button {
		border: none;
	}

	.body_clase .activity-navbar .dropdown button:focus {
		outline: none;
	}

	.body_clase .activity-navbar .dropdown li {
		display: list-item;
		width: auto;
	}

	.body_clase .activity-navbar .dropdown li a {
		color: #0095DA;
		font-weight: bold;
	}

	.body_clase .activity-navbar .dropdown .caret {
		display: none;
	}
/**/

/* Pagination */

.js-slide-wrapper > .header .single-pagination {
	display: none;
}

/* Iconos */

#actividad .player.audio {
	background: url(images/classic_audio.png) 0 0 no-repeat;
	background-size: contain;
	width: 30px;
	height:30px;
	border-radius: 0;
	vertical-align: middle;
}

#actividad .player.video {
	background: url(images/classic_video.png) 0 0 no-repeat;
	background-size: contain;
	width: 30px;
	height:30px;
	border-radius: 0;
	vertical-align: middle;
}

#actividad .bck-file-attach img {
	display: none;
}

/*BOTONERA*/
    .btn-danger, .btn-danger[disabled] {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border: 2px solid #fc4237;
    color: #fc4237;
    background: white;
    font-weight: 700;
    }

    .btn-primary,
    .btn-primary.disabled, 
    .btn-primary.disabled:hover,
    .btn-primary.disabled:focus {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border: 2px solid #999999;
    color: #999999;
    background: white;
    font-weight: 700;
    }

    #indice .unit-content .actividades {
    border-top: 2px solid #808080;
    margin-top: 45px;
}

.title-buttons {
    text-align: left;
}

	#indice .unit-content .actividades .title-buttons .btn-primary, 
	#indice .unit-content .actividades .title-buttons .btn-primary.disabled{
	-moz-border-radius: 0px 20px 0px 0px;
    -webkit-border-radius:  0px 20px 0px 0px;
    border-radius: 0px 20px 0px 0px;
    border: 0px;
    color: #fff;
    background: #808080;
    font-weight: 700;
    top: -16px;
	}



    .btn-primary:not([disabled]):hover, .btn-primary:not([disabled]):focus, .btn-primary:not([disabled]):active, .btn-primary.active, .open .dropdown-toggle.btn-primary {
    background-color: #999999;
    border-color: #999999;
    color: white
    }

    #actividad .content .review .attemps span {
    background-color: #999999;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    }

    .btn-primary[disabled], .btn-primary[disabled]:focus {
    color: #fff;
    background-color: #428bca;
    border-color: #428bca;
    }

    .btn-solution, .btn-solution.disabled,
    .btn-solution[disabled], .btn-next, .btn-next.disabled,
    .btn-next[disabled] {
    color: #00bdff;
    background-color: white;
    border-color: #00bdff;
    border: 2px solid #00bdff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-weight: 700;
    }

    .btn-solution:hover,
    .btn-solution:focus,
    .btn-solution:active,
    .btn-next:hover, .btn-next:focus,
    .btn-next:active,
    .open .dropdown-toggle.btn-solution {
    color: #fff;
    background-color: #00bdff;
    border-color: transparent;
    }



/* CKEDITOR */

	.bck-title1,
	.bck-title2,
	.bck-title3,
	.bck-title-activity {
		font-family: 'Fira Sans', sans-serif;
	 	color: #FF6600;
	}

	.bck-title1 {
		font-size: 1.6rem;
		clear: both;
		margin-bottom: 5px;
	}

	.bck-title2 {
		font-size: 1.6rem;
		clear: both;
		margin-bottom: 5px;
	}

	.bck-title3 {
		font-size: 1.4rem;
		clear: both;
		margin-bottom: 5px;
	}


	.content hr,
	.cke_contents hr {
		border: 0;
		border-top: 1px solid #808080;
	}

/*-----------------------------------------------------------------listas------------------------------------------------------------------------*/

	.content ol,
	.cke_contents ol {
		list-style: none;
		padding: 0;
		margin: 0 0 20px 0;
	}
	.content ol li,
	.cke_contents ol li {
		counter-increment: bck-li-counter 1;
		position: relative;
		padding-left: 32px;
	}

	.content ol li:before,
	.cke_contents ol li:before {
		content: counter(bck-li-counter)'';
		position: absolute;
		margin-left: -30px;
		font-weight: bold;
		font-size: 2.0rem;
		text-align: right;
		color: #FF6600;
		margin-top: -2px;
	}

	.texto_curso ul li,
	.workspace ul li ul li,
	.cke_contents ul li {
		position: relative;
		padding-left: 18px;
		margin-bottom: 20px;
	}

	.texto_curso ul li:before,
	.workspace ul li ul li:before,
	.cke_contents ul li:before {
		background-color: #FF6600;
		height: 12px;
		width: 12px;
		margin-top: 5px;
		margin-left: -18px;
	}

	.content figure:first-child:last-child,
	.content .js--row figure,
	.cke_contents figure:first-child:last-child,
	.cke_contents .js--row figure {
		padding-left: 0;
		padding-right: 0;
		padding-top: 0;
		margin-left: 0;
		margin-right: 0;
		margin-top: 0;
	}

	.content figure figcaption,
	.cke_contents figure figcaption {
		text-align: left;
		margin-top: 10px;
	}

	.cke_contents table:not(.rf-tablegrid),
	.content table:not(.rf-tablegrid) {
		border: 1px solid #808080;
	}

	.cke_contents table:not(.rf-tablegrid) td,
	.cke_contents table:not(.rf-tablegrid) th,
	.content table:not(.rf-tablegrid) td,
	.content table:not(.rf-tablegrid) th {
		border: 1px solid #808080;
		padding: 7px;
	}

	.cke_contents table:not(.rf-tablegrid) caption,
	.content table:not(.rf-tablegrid) caption {
		margin-bottom: 10px;
	}

	.bck-td {
		background: #808080;
	}


	/*-------------------------------------------------------CAJAS------------------------------------------------*/

	.bck-box {
		margin-bottom: 30px;
	}
	.bck-box.center {
		margin-left: auto;
		margin-right: auto;
	}

	.bck-box .bck-title {
		font-size: 1.6rem;
		margin-bottom: 10px;
	}
	.bck-box .bck-title1,
	.bck-box .bck-title2 {
		border-left: 0;
		margin-left: 0;
		padding: 0;
		margin-bottom: 10px;
	}

	.bck-box.box-1 {
		border: 3px solid #0095DA;
		background: #ffffff;
		border-top: 0;
		padding: 40px;
		position: relative;
		margin-top: 80px;
	}

	.bck-box.box-1 hr {
		border: 0;
		display: block;
		border-top: 1px solid #0095DA;
	}

	.bck-box.box-1 .bck-title {
		color: #0095DA;
	}

	.bck-box.box-1 .bck-title,
	.bck-box.box-1 .bck-title1 {
		font-size: 4.0rem;
	}
	.bck-box.box-1 .bck-title2 {
		font-size: 2.5rem;
		color: #706f6f;
		margin-bottom: 10px;
	}

	.bck-box.box-2,
	.bck-box.box-3  {
		border: 3px solid #FFCA04;
		padding: 20px;
		font-size: 1.4rem;
		position: relative;
		margin-bottom: 40px;
	}

	.bck-box.box-2 {
		border-top: 0;
		margin-top: 60px;
	}
	

	
	.bck-box.box-3 {
		margin-bottom: 80px;
	}
	


	.bck-box.box-2 .bck-title,
	.bck-box.box-2 .bck-title1,
	.bck-box.box-3 .bck-title,
	.bck-box.box-3 .bck-title1 {
		color: #FFCA04;
		font-size: 2.2rem;
		margin-bottom: 20px;
		font-family: 'Fira Sans', sans-serif;
	}
	.bck-box.box-2 .bck-title2,
	.bck-box.box-3 .bck-title2 {
		color: #FFCA04;
		margin-bottom: 10px;
		font-family: 'Fira Sans', sans-serif;
		font-size: 1.6rem;
	}
	.bck-box.box-2 hr,
	.bck-box.box-3 hr {
		border: 0;
		display: block;
		border-top: 1px solid #FFCA04;
	}


/* BK-9830 */
.pool {
	text-align: center;
}
.rf-searchgamecontainer {
	float: none;
	display: inline-block;
	vertical-align: top;
	padding-right: 0;
}
.rf-wordcontainer {
	float: none;
	display: inline-block;
	max-width: 48%;
	vertical-align: top;
	text-align: left;
	margin-left: 10px;
	margin-right: 10px;
	font-family: 'Fira Sans', sans-serif;
    font-size: 1.6rem;
}

@media screen and (max-width: 480px) {
	.rf-wordcontainer {
		max-width: 90%;
	}
}
/**/

@media screen and (max-width: 1099px) {
    .body_clase .content-wrapper {
        max-width: 100%;
    }

    #actividad .content {
        border-radius: 0;
    }

    #actividad .carousel-inner .item-container {
        margin: 0;
        width: 100% !important;
        max-width: none;
        box-shadow: none;
    }

    .ipad #actividad .carousel-inner .item-container {
  		border-right: 1px solid #eee;
    }
}

@media screen and (max-width: 992px) {
	#actividad .class_slide {
		padding-right: 30px;
		padding-left: 30px;
	}

	#actividad .content .header .title h3 {
		margin-left: -30px;
		padding-left: 20px;
	}
	.js-slide-wrapper > .header .single-pagination {
		right: 30px;
	}
	.navigator {
		padding-left: 30px;
		padding-right: 30px;
	}
	.body_clase .publish {
		padding-left: 25px;
	}
	.body_clase:not(.edit) .logo-publisher {
		margin-left: -20px;
	}

}

@media screen and (max-width: 767px) {
    #actividad .carousel-inner .class_slide {
        padding: 40px 20px 0px;
    }

    .navigator {
        padding: 0px 20px;
    }

    .bck-img.right, img[style~="float:right"] {
        max-width: 50%
    }

    .bck-img.left, img[style~="float:left"] {
        max-width: 50%
    }
	.body_clase .activity-navbar {
		top: 88px;
	}

}

@media screen and (max-width: 579px) {
	.bck-row .col-xs-1,
	.bck-row .col-xs-2,
	.bck-row .col-xs-3,
	.bck-row .col-xs-4,
	.bck-row .col-xs-5,
	.bck-row .col-xs-6,
	.bck-row .col-xs-7,
	.bck-row .col-xs-8,
	.bck-row .col-xs-9,
	.bck-row .col-xs-10,
	.bck-row .col-xs-11,
	.bck-row .col-xs-12 {
		width: 100%;
		float: none;
		padding-bottom: 20px;
	}
}

@media screen and (max-width: 480px) {

    .bck-img.right, img[style~="float:right"] {
        width: 100%;
    }

    .bck-img.left, img[style~="float:left"] {
        width: 100%;
    }

    #actividad .carousel-inner .item-container {
		padding: 40px 20px 90px;
	}
	.body_clase .activity-navbar .navbar-content {
		padding-left: 20px;
		padding-right: 20px;
	}
	.body_clase .activity-navbar .logo-publisher:before {
		content: none;
		display: none;

	}
	#actividad .carousel-inner .item-container {
		padding-top: 13px;
	}
	.js-slide-wrapper > .header .single-pagination {
		padding-top: 15px;
		font-size: 2.4rem;
		width: 60px;
	}
	#actividad .content .header .title h3 {
		font-size: 5.0rem;
		padding-right: 20px;
		margin-bottom: 20px;
	}

}


/* Retina images */
@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) {

	.bck-box.box-1:after {
		background-image: url(images/caja1-esquina-2x.png);
		background-size: 46px 60px;
	}
	.bck-box.box-2:after {
		background-image: url(images/caja2-esquina-2x.png);
		background-size: 38px 38px;
	}
	.bck-box.box-3:after {
		background-image: url(images/caja3-flecha-2x.png);
		background-size: 70px 30px;
	}

}

/*BK-10860*/
/*
 * Me cargo todos los border que hay por debajo de un ejercicio de cÃ¡lculo y restauro los necesarios
 *
 */
div.calculo table.marco,
div.calculo table.marco * {
	border:none;
}

.content hr, .cke_contents hr {
    border-top: 1px solid #0095DA !important;
}

.body_clase .slide_main input {
    border: 1px solid #ccc !important;
}
