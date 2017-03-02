$(function() {
		//JQuery
		//设定元素尺寸
		var hSearch = $(".search").height(),
			hUser = $(".slideShow").height(),
			hNav = "",
			hWin = window.innerHeight,
			wWin = window.innerWidth;
		hNav += hWin - hSearch - hUser; 
		$(".nav").css("height",hNav + "px");
		$("#page").css("width",wWin + "px");
		var hPage = $("#page").height(),
			wPage = $("#page").width();
		$("#sideNav").css("height",hPage + "px");
		$("#sideNav").css("width",wPage*0.9 + "px");
		$("#sideNav").css("left",-wPage + "px");
		$(".slideBoard").css("width",wPage + "px");
		$(".slideNav").css("width",wPage + "px");
		$("#loginBoard").css("width",wPage + "px").css("height",hPage + "px");
		//侧边栏按钮
		var sideSwitch = 0;
		$("#sideButton").on("touchstart",function() {	
			if (sideSwitch == 0) {
				$("#sideNav").css("left","0");
				$("#sideButton").css("left",wPage*0.89 + "px");
				$("#mask").css("z-index","5").css("opacity", "0.7");
				$(".midLine").css("width","1.25rem").css("opacity","0");
				$(".topLine").css("top","1.25rem").css("transform","rotateZ(45deg) scale(1.414)");
				$(".bottomLine").css("top","1.25rem").css("transform","rotateZ(-45deg) scale(1.414)");
				$("#searchButton").css("opacity","0");
				sideSwitch = 1;
			} else if (sideSwitch == 1) {
				$("#sideNav").css("left",-wPage + "px");
				$("#sideButton").css("left","0");
				$("#mask").css("opacity", "0").css("z-index","-1");	
				$(".midLine").css("width","1rem").css("opacity","1");
				$(".topLine").css("top","0.75rem").css("transform","rotateZ(0deg) scale(1)");
				$(".bottomLine").css("top","1.75rem").css("transform","rotateZ(0deg) scale(1)");
				$("#searchButton").css("opacity","1");
				sideSwitch = 0;
			}
		});
		//搜索开关
		var searchSwitch = 0;
		$("#searchButton").on("touchstart",function() {
			if (searchSwitch == 0) {
				$(".appTitle").css("opacity","0");
				$(".searchInput").css("opacity","1").css("top","1.25rem").focus();
				$(".searchOpen").css("opacity","0");
				$(".searchClose").css("opacity","1");
				searchSwitch = 1;
			} else if (searchSwitch == 1) {
				$(".appTitle").css("opacity","1");
				$(".searchInput").css("top","-1rem").css("opacity","0").blur();
				$(".searchOpen").css("opacity","1");
				$(".searchClose").css("opacity","0");
				searchSwitch = 0;
			}
		});
		//轮播图
		var slideBd = $(".slider").children(),
			sNow = "slideBoard slideNow",
			sNext = "slideBoard slideNext",
			sLast = "slideBoard slideLast",
			sReset = "slideBoard",
			i = 0;
		function resetSlide() {
			for (var j = 0;j < slideBd.length;j++) {
				$(slideBd[j]).attr("class",sReset);
			}
		}
		function changeSlide() {
			//alert("change");
			resetSlide();
			$(slideBd[i]).attr("class",sLast);
			if (i < slideBd.length - 2) {
				$(slideBd[i+1]).attr("class",sNow);
				$(slideBd[i+2]).attr("class",sNext);
				i++;
			} else if (i == slideBd.length -2) {
				$(slideBd[i+1]).attr("class",sNow);
				$(slideBd[0]).attr("class",sNext);
				i++;
			} else if (i == slideBd.length -1) {
				$(slideBd[0]).attr("class",sNow);
				$(slideBd[1]).attr("class",sNext);
				i = 0;
			}
			//alert(i);
			changeSlideDot();
			setTimeout(changeSlide,3000);
		}
		changeSlide();
		//轮播图导航
		function changeSlideDot() {
			switch (i) {
				case 0:
					$(".navDotNow").css("left","5%");
					break;
				case 1:
					$(".navDotNow").css("left","35%");
					break;
				case 2:
					$(".navDotNow").css("left","65%");
					break;
				case 3:
					$(".navDotNow").css("left","95%");		
					break;
			}
		}
		$(".navButton").on("touchstart",function() {
			window.location.href = "";
		});
		$("#loginButton").on("touchstart",function() {
			$("#loginBoard").css("z-index","20").css("opacity","1");
			$(".loginContent").css("opacity","1");
		});
		$(".loginCancle").on("touchstart",function() {
			$("#loginBoard").css("z-index","-1").css("opacity","1");
			$(".loginContent").css("opacity","0");
		})
		//localStorage.clear();
	})