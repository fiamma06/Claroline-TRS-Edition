$(document).ready(function(){registerCollapseBehavior()});registerCollapseBehavior=function(){$(".collapsed .collapsible-wrapper").hide();$(".collapsible a.doCollapse").click(function(){var a=$(this).parents(".collapsible:first")[0];if($(a).is(".collapsed")){$(a).removeClass("collapsed");$(".collapsible-wrapper",a).slideDown({duration:"fast",easing:"linear",complete:function(){collapseScrollIntoView(this.parentNode);this.parentNode.animating=false},step:function(){collapseScrollIntoView(this.parentNode)}})}else{$(a).addClass("collapsed");$(".collapsible-wrapper",a).slideUp("fast")}return false})};collapseScrollIntoView=function(b){var a=self.innerHeight||document.documentElement.clientHeight||$("body")[0].clientHeight||0;var e=self.pageYOffset||document.documentElement.scrollTop||$("body")[0].scrollTop||0;var d=$(b).offset().top;var c=55;if(d+b.offsetHeight+c>a+e){if(b.offsetHeight>a){window.scrollTo(0,d)}else{window.scrollTo(0,d+b.offsetHeight-a+c)}}};