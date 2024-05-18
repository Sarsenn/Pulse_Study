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
  });