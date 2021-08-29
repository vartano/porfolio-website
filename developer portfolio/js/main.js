	  $(document).ready(function() {
	    $(".name,.developer,.intro").lettering();

	    anime({
	    	targets:'.home .person-overlay',
	    	translateY:1500,
	    	delay:1000,
	    	duration:1500,
	    	easing:'easeInSine',
	    })

	    anime({
	    	targets:'.home .person img',
	    	opacity:1,
	    	delay:1500,
	    	duration:1500,
	    	easing:'easeInSine',
	    })

	    anime({
	    	targets:'.developer span',
	    	opacity:1,
	    	delay:anime.stagger(100,{start:3000}),
	    	duration:1500,
	    	easing:'easeInSine',
	    })

	      anime({
	    	targets:'.name,.intro,.name span',
	    	opacity:1,
	    	delay:anime.stagger(100,{start:4500}),
	    	duration:1500,
	    	easing:'easeInSine',
	    })


	  });


	

	