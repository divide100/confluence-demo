var mine;
(function(){
	$('.btn-close').click(function(e) {
		$(this.parentElement.parentElement).slideUp(300);
	});
	$('.facility-img').click(function(e){
		var facilityDesc = $(this).find('.facility-desc');
		if(facilityDesc.is(':visible')) {
			facilityDesc.slideUp(300);
		}
		else {
			facilityDesc.slideDown(300);
		}
	});
})();