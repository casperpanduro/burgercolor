/****************************************
		*
		* // burger color change
		*
		****************************************/

		// Determine if the background color of an element is light or dark.
		(function($){

			$.fn.burgercolor = function( options ) {
 
		        // This is the easiest way to have default options.
		        var settings = $.extend({
		            // These are the defaults.
		            offset: 0,
		        }, options );

		        $this = this;
		 
				var colorarray = [];
				var scrollTop = $(window).scrollTop() + settings.offset;
				var lastScrollTop = 0;
				setTimeout(function(){
					$this.each(function(){
						lightOrDarkDetect(this);
						var position = $(this).offset().top;

						var item = {};
						item['position'] = position;
						item['background'] = $(this).attr("data-bg");
						colorarray.push(item);
					});

					

					var next = 1;

					$(window).scroll(function(){
						scrollTop = $(window).scrollTop() + settings.offset;
						for (var i = 0; i < colorarray.length; i++) {
							if(i == colorarray.length-1) {
								next = $(document).height();

							}
							else {
								next = colorarray[i+1]['position'];	
							}


							if (scrollTop > colorarray[i]['position'] && scrollTop < next) {
								var st = $(this).scrollTop();
							    if(i == colorarray.length-1) {
						    		var pre = i;
						    	}
						    	else if(i == 0) {
						    		var pre = i+1;
						    	}
						    	else {
						    		if (st > lastScrollTop){
								       var pre = i-1;
								    } else {
								    	var pre = i+1;
								    }
						    	}
							    
							    lastScrollTop = st;
							    //console.log('now: '+colorarray[i]['background']+'. next/prev: '+colorarray[pre]['background']);

							    if(colorarray[i]['background'] != colorarray[pre]['background']) {
							    	// console.log(colorarray[i]['background']);
							    	$("body").addClass("bg-detect-"+colorarray[i]['background']).removeClass("bg-detect-"+colorarray[pre]['background']);
							    }
								
							}

						}
					});
					

				},200);
		 
		    };

		    function lightOrDarkDetect(selector) {
		    	var r,b,g,hsp
			      , a = $(selector).css('background-color');
			    
			    if (a.match(/^rgb/)) {
			      a = a.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
			      r = a[1];
			      g = a[2];
			      b = a[3];
			    } else {
			      a = +("0x" + a.slice(1).replace( // thanks to jed : http://gist.github.com/983661
			          a.length < 5 && /./g, '$&$&'
			        )
			      );
			      r = a >> 16;
			      b = a >> 8 & 255;
			      g = a & 255;
			    }
			    hsp = Math.sqrt( // HSP equation from http://alienryderflex.com/hsp.html
			      0.299 * (r * r) +
			      0.587 * (g * g) +
			      0.114 * (b * b)
			    );
			    if (hsp>127.5) {
			      $(selector).attr('data-bg', 'light');
			    } else {
			      $(selector).attr('data-bg', 'dark');
			    }
		    }
		  
		  
		  
		})(jQuery);


		// add classes to sections
		