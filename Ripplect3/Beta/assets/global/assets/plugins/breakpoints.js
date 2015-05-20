(function($){var lastSize=0;var interval=null;$.fn.resetBreakpoints=function(){$(window).unbind('resize');if(interval){clearInterval(interval);}
lastSize=0;};$.fn.setBreakpoints=function(settings){var options=jQuery.extend({distinct:true,breakpoints:new Array(320,480,768,1024)},settings);interval=setInterval(function(){var w=$(window).width();var done=false;for(var bp in options.breakpoints.sort(function(a,b){return(b-a)})){if(!done&&w>=options.breakpoints[bp]&&lastSize<options.breakpoints[bp]){if(options.distinct){for(var x in options.breakpoints.sort(function(a,b){return(b-a)})){if($('body').hasClass('breakpoint-'+ options.breakpoints[x])){$('body').removeClass('breakpoint-'+ options.breakpoints[x]);$(window).trigger('exitBreakpoint'+ options.breakpoints[x]);}}
done=true;}
$('body').addClass('breakpoint-'+ options.breakpoints[bp]);$(window).trigger('enterBreakpoint'+ options.breakpoints[bp]);}
if(w<options.breakpoints[bp]&&lastSize>=options.breakpoints[bp]){$('body').removeClass('breakpoint-'+ options.breakpoints[bp]);$(window).trigger('exitBreakpoint'+ options.breakpoints[bp]);}
if(options.distinct&&w>=options.breakpoints[bp]&&w<options.breakpoints[bp-1]&&lastSize>w&&lastSize>0&&!$('body').hasClass('breakpoint-'+ options.breakpoints[bp])// and we aren't already in this breakpoint
					) {					
					$('body').addClass('breakpoint-' + options.breakpoints[bp]);
					$(window).trigger('enterBreakpoint' + options.breakpoints[bp]);

				}						
			}
			
			// set up for next call
			if (lastSize != w) {
				lastSize = w;
			}
		},250);
	};
	
})(jQuery);
