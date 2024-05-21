$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1300,
		slidesToShow: 1,
		adaptiveHeight: true,
		prevArrow:'<button type="button" class="slick-prev"><img src="../images/chevron left solid.png"></button>',
		nextArrow:'<button type="button" class="slick-next"><img src="../images/chevron right solid.png"></button>',
		responsive: [
			{
				breakpoint: 880,
				settings: {
				  arrows:false,
				  dots: true,
				  variableWidth:true

				}
			}
		]
	  });

	  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	  });


	  function toggleClass (item) {
		$(item).each(function(i){
			$(this).on('click',function(e){
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	
			})
		  })
	  }
	  
	  toggleClass('.catalog-item__link');
	  toggleClass('.catalog-item__back');


//modal  data-modal="consultation">

$('[data-modal="consultation"]').on('click', function () {
$('.overlay, #consultation').fadeIn('slow')
});

$('.modal__close').on('click',function() {
	$('.overlay, #consultation ,#order, #thanks').fadeOut('slow')
});


$('.button__mini').each(function (i) {
 $(this).on('click',function () {
	$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
	$('.overlay, #order').fadeIn('slow')
 })
});



function validateForm(form) {
	$(form).validate({
		rules:{
			name:{
				required: true,
				minlength: 2
			  },
			phone:'required',
			email: {
				required: true,
				email:true
			}
		},
		messages: {
			name: {
				required: "Пожалуйста, ведите свое имя!",
				minlength: jQuery.validator.format("Введите {0} символов!")
			  },
			phone: 'Пожалуйста, введите свой номер телефона!',
			email: {
			  required: "Пожалуйста, введите свою почту!",
			  email: "Не правильно введен адрес почты "
			}}
});
}

validateForm('#consultation-form');
validateForm('#order form');
validateForm('#consultation form');


$('input[name=phone]').mask("+7 (999) 999-99-99");


$('form').submit(function(e) {
	e.preventDefault();

	if(!$(this).valid()) {
		return;
	}

	$.ajax({
		type:"POST",
		url:"static/mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		$('#consultation, #order').fadeOut();
		$('.overlay, #thanks').fadeIn('slow')

		$('form').trigger('reset');
	});
	return false
});

//smooth scroll and pageup
$(window).scroll(function() {
if($(this).scrollTop() > 1600){
	$('.pageup').fadeIn();
} else {
	$('.pageup').fadeOut();
}
});


$("a[href^='#']").click(function() {
	let _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	return false
});


new WOW().init();


});
 