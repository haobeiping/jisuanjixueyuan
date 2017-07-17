$(function(){
	$('.frist').hover(function(){
		$(this).find('.hidden').stop().slideToggle(300);
	}, function(){
		$(this).find('.hidden').stop().slideToggle(300);
	})

	$('.new_button').click(function() {
		$('.new_list').stop().slideToggle(300);
	}, function(){
		$('.new_list').stop().slideToggle(300);
	});

	var $notice=$('#listbox')
		setInterval(function(){
			$notice.animate({
				top:'-110px'
			},300,function(){
				$notice.append($notice.children().first());
				$notice.css('top',0);
			})
		},2000)

	
});
