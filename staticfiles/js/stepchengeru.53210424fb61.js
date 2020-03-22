$(document).ready(function () {

    /* ------------------ Config ------------------ */

    var accordionInitialExpand, collapsibleIntialExpand, seoLinksInitialExpand, numberOfHomeSlides, transSpeed, slideDelay, slideDelayCarousel, autoScrollCarousel, mainTwitterUsername;

    /* 1) Have initial accordion panel open? */
    accordionInitialExpand = true;

    /* 2) Have initial expand/collapse panel open? */
    collapsibleIntialExpand = true;

    /* 3) Have initial SEO panel open? */
    seoLinksInitialExpand = true;

    /* 4) Set number of slides on homepage carousel. (3 or 4) */
    numberOfHomeSlides = 4;

    /* 5) Set transition speed for slides on homepage carousel */
    transSpeed = 700;

    /* 5) Set slide delay for homepage carousel */
    slideDelay = 5000;

    /* 6) Set slide delay for small carousels */
    slideDelayCarousel = 5000;

    /* 7) Set auto scroll start for small carousels */
    autoScrollCarousel = false;

    /* 8) Set Twitter username for tweets to be displated */
    mainTwitterUsername = "moneyaware";

    /* 9) Set Twitter username for tweets to be displated */
    secondaryTwitterAccount = "stepchange";

    /* ------------------ Config ------------------ */

    //Time-line fix. Rendering issues in some browsers.
    // find module content of history module and remove padding.
    $('.history').closest('.module-content').css({ "padding": "0px" });
    //Make history module full width.
    $('.history').css({ "width": "100%" });

    function changeSubTitleColour() {

        //Grab first content module and get the first <h1>.
        var title = $('body .default').first().find('h1').html();

        //If the title exists ..
        if (title) {
            //If the title has 2 lines ..
            if (title.indexOf('.') > -1) {
                //Split the title by the full stop and store each line in array.
                var splitArray = title.split(".");
                var newTitleHTML;
                //Check the second line isn't null.
                if (splitArray[1] != '') {
                    //Check for question mark or exclamation mark
                    if (splitArray[1].indexOf('?') > -1) {
                        newTitleHTML = splitArray[0] + '.<span class="sub">' + splitArray[1] + '</span>';
                    } else if (splitArray[1].indexOf('!') > -1) {
                        newTitleHTML = splitArray[0] + '.<span class="sub">' + splitArray[1] + '</span>';
                    } else {
                        //If no question mark of exclamation mark then add full stop.
                        newTitleHTML = splitArray[0] + '.<span class="sub">' + splitArray[1] + '.</span>';
                    }
                    //Add newly created HTML into initial <h1> tag.
                    $('body .default').first().find('h1').html(newTitleHTML);
                }
            }
        }
    }
    changeSubTitleColour();

    function initTabs() {
        //Find number of tabs by counting <h4>'s inside the tabs module
        var numberOfTabs = $(".tabs").children('h4').size();
        //Add mark up for the actual 'tab' buttons
        $(".tabs").prepend('<ul class="the-tabs" />');
        //Find content after each <h4> and wrap in 'tab' div. Give each div a unique id.
        $('.tabs').find('h4').not('.accordion h4, .default h4, .module h4, .second-hero-left h4, .second-hero-right h4, second-hero-bottom h4').each(function (index) {
            $(this).nextUntil('h4').wrapAll('<div class="tab" id="tabs-' + (index + 1) + '" />');
        });

        //Find each <h4> in tab module and grab the text.
        $('.tabs').find('h4').not('.accordion h4, .default h4, .module h4, .second-hero-left h4, .second-hero-right h4, second-hero-bottom h4').each(function (index) {
            var tabText = $(this).text();
            //Place inside <a> tag and place inside 'tab' buttons
            var tabHTML = '<a>' + tabText + '</a>';
            //If building the first 'tab' make it selected.
            if (index == 0) {
                $('.the-tabs').append($('<li class="selected" />').append(tabHTML));
            } else {
                $('.the-tabs').append($('<li />').append(tabHTML));
            }
            //Remove the <h4>. No longer needed.
            $(this).remove();
        });

        //For each 'tab' button add a unique class.
        $('.the-tabs li').each(function (index) {
            $(this).addClass('tablink-' + (index + 1));
        });
    }
    initTabs();

    function initExapandCollapseList() {
        //Find every instance of expand collapse panels.
        $(".expand-collapse").each(function (i) {
            //Create a definition list
            $(this).prepend('<dl class="expand-collapse" />');
            //Find each <h5> inside the expand collapse module.
            $(this).find('h5').each(function (index) {
                //Grab the text from the <h5>.
                var accordianText = $(this).text();
                //If config setting is set true.
                if (collapsibleIntialExpand) {
                    //Make first panel 'active'.
                    if (index == 0) {
                        //Add contents of <h5> into the definition title.
                        $(this).closest('.expand-collapse').find('dl').append($('<dt class="active" />').append(accordianText));
                        //Grab all contents after the <h5> and add to the definition description.
                        $(this).closest('.expand-collapse').find('dl').append($('<dd class="active" />').append($(this).nextUntil('h5')));
                    } else {
                        $(this).closest('.expand-collapse').find('dl').append($('<dt />').append(accordianText));
                        $(this).closest('.expand-collapse').find('dl').append($('<dd />').append($(this).nextUntil('h5')));
                    }
                } else {
                    //If config setting is set false don't make any active.
                    $(this).closest('.expand-collapse').find('dl').append($('<dt />').append(accordianText));
                    $(this).closest('.expand-collapse').find('dl').append($('<dd />').append($(this).nextUntil('h5')));
                }
                //Remove the <h5> as they are no longer needed.
                $(this).remove();
            });
            var expandCollpseObj = $(this).find('dl.expand-collapse');
            $(this).append(expandCollpseObj);
        });
    }
    initExapandCollapseList();


    function initAccordions() {
        // Find every instance of accordion panel.
        $(".accordion").each(function (i) {
            //Create a definition list.
            $(this).prepend('<dl class="accordion" />');
            //Find each <h5> inside the accordion panel.
            $(this).find('h5').each(function (index) {
                //Grab the text from <h5>.
                var accordianText = $(this).text();
                //If config setting is set to true.
                if (accordionInitialExpand) {
                    //Make first panel active.
                    if (index == 0) {
                        //Add contents of <h5> into the definition title.
                        $(this).closest('.accordion').find('dl').append($('<dt class="active" />').append(accordianText));
                        //Grab all contents after the <h5> and add to the definition description.
                        $(this).closest('.accordion').find('dl').append($('<dd class="active" />').append($(this).nextUntil('h5')));
                    } else {
                        $(this).closest('.accordion').find('dl').append($('<dt />').append(accordianText));
                        $(this).closest('.accordion').find('dl').append($('<dd />').append($(this).nextUntil('h5')));
                    }
                } else {
                    //If config setting is set false don't make any active.
                    $(this).closest('.accordion').find('dl').append($('<dt />').append(accordianText));
                    $(this).closest('.accordion').find('dl').append($('<dd />').append($(this).nextUntil('h5')));
                }
                //Remove the <h1> as they are no longer needed.
                $(this).remove();
            });
            var accordionObj = $(this).find('dl.accordion');
            $(this).append(accordionObj);
        });
    }
    initAccordions();


    function initseoLinks() {
        // Find every instance of seo-link panels
        $(".seo-links").each(function (i) {
            //Create a definition list.
            $(this).prepend('<dl class="accordion seo-links" />');
            //Find each <h5> inside the seo-links panel.
            $(this).find('h5').each(function (index) {
                //Grab the text from <h5>.
                var accordianText = $(this).text();
                //If config setting is set to true.
                if (seoLinksInitialExpand) {
                    //Make first panel active.
                    if (index == 0) {
                        //Add contents of <h5> into the definition title.
                        $(this).closest('.seo-links').find('dl').append($('<dt class="active" />').append(accordianText));
                        //Grab all contents after the <h5> and add to the definition description.
                        $(this).closest('.seo-links').find('dl').append($('<dd class="active" />').append($(this).nextUntil('h5')));
                    } else {
                        $(this).closest('.seo-links').find('dl').append($('<dt />').append(accordianText));
                        $(this).closest('.seo-links').find('dl').append($('<dd />').append($(this).nextUntil('h5')));
                    }
                } else {
                    //If config setting is set false don't make any active.
                    $(this).closest('.seo-links').find('dl').append($('<dt />').append(accordianText));
                    $(this).closest('.seo-links').find('dl').append($('<dd />').append($(this).nextUntil('h5')));
                }
                //Remove the <h5> as they are no longer needed.
                $(this).remove();
            });
            var seoLinksObj = $(this).find('dl.seo-links');
            $(this).append(seoLinksObj);
        });
    }
    initseoLinks();

    //Controls for tabbed content
    var isAnimating = false;
    //On tab click
    $(".tabs ul.the-tabs li a").on('click', function () {
        //Check tab isn't currently animating.
        if (!isAnimating) {
            //Now the tab is animating set to true.
            isAnimating = true;
            //Grab the tab element.
            var el = $(this);
            //Get the 'tabs' container. This is the tab buttons parent.
            var parent = el.parents('.tabs');
            //Get the tab number. Where it is in the sequence.
            var index = $(this).parent().index();
            //Remove all classes from the tabs so none are set to 'selected'.
            $(this).parent().siblings().removeClass();
            //Add 'selected' class to the clicked <a> tags parent <li>.
            $(this).parent().addClass('selected');
            //Add one to the index, as indexing starts at 0.
            index++;
            //Fade out all 'tab' content.
            $(parent).find('.tab').fadeOut(120);
            setTimeout(function () {
                //Fade in the tab content div that matches the clicked tab index.
                $('#tabs-' + index).fadeIn(120);
                setTimeout(function () {
                    //Once finished set animating to false.
                    isAnimating = false;
                }, 125);
            }, 125);

        }
        //Exit function.
        return false;
    });

    //On click of accordion defintion title.
    $(".accordion dd").not(":eq(0)").hide();
    $(".accordion dt").first().addClass("active");
    $(".accordion.seo-links dt").first().removeClass("active");
    $(".accordion dt").click(function () {
        $(this).toggleClass("active");
        $(this).next().slideToggle("500");
    });

    //On click of expand-collapse definition title.
    $(".expand-collapse dt").on('click', function () {
        //Toggle the active class. On or off.
        $(this).toggleClass('active');
        //Slide down or up the definition description.
        $(this).next('dd').slideToggle("fast");
    });

    //Mega menu active tab on hover.
    $("ul.nav li.active a").first().hover(
    //Add class on hover.
	    function () {
	        $(this).addClass('active-active-tab');
	    },
	    function () {
	        //Remove class on mouse out.
	        $(this).removeClass('active-active-tab');
	    });

    //On mega menu hover.
    $('ul.nav li.active').children('.megamenu').hover(
    //Add class.
	    function () {
	        $("ul.nav li.active a").first().addClass('active-active-tab');
	    },
	    function () {
	        //Remove class.
	        $("ul.nav li.active a").first().removeClass('active-active-tab');
	    });


    //Tooltips
    //Set pixel offsets for tool tip box
    var xOffset, yOffset;
    xOffset = -120;
    yOffset = 32;

    //On hover of tooltip element.
    $(".tooltip").hover(function (e) {
        //Get text from the 'title' attribute.
        this.t = this.title;
        this.title = "";
        //Create <p> tag with title attribute text.
        $("body").append("<p id='tooltip'>" + this.t + "</p>");
        //Get tool tip height now with included text.
        var heightForTool = $('#tooltip').height();
        //Add CSS to position tooltip above the hover element.
        $("#tooltip").css("top", (e.pageY - (yOffset + heightForTool)) + "px").css("left", (e.pageX + xOffset) + "px").fadeIn("fast");
    },
    function () {
        //On mouse out remove text from the <p> tag and place back into the 'title' attribute.
        this.title = this.t;
        //Remove the tool tip object that was placed on the page.
        $("#tooltip").remove();
    });

    $("a.tooltip").mousemove(function (e) {
        //Move the tooltip with mouse cursor.
        $("#tooltip").css("top", (e.pageY - yOffset) + "px").css("left", (e.pageX + xOffset) + "px");
    });

    //Set number of slides to 0.
    var numberOfSlides = 0;


    function setUpHeroCarousel() {
        //Find the 'active slide' in the hero caruosel and get its id.
        slideIDHero = $('.hero-carousel').children('.slide-active').attr('id');
        //If slide id is not empty.
        if (typeof slideIDHero != 'undefined') {
            //get the number.
            slideIDHero = slideIDHero.substring(6);
        }
        //If the hero carousel doesn't have any horizontal controls (it must be a vertical one)
        if ($('.hero-carousel').siblings('.horiz-controls').size() == 0) {
            //if the number of slides is 3.
            if (numberOfHomeSlides == 3) {
                //add three-slides class
                $('.hero-carousel').siblings('#banner-controls').addClass('three-slides');
                $('#banner-controls').addClass('three-slides');
                //if the number of slides is 3.
            } else if (numberOfHomeSlides == 4) {
                //add four-slides class
                $('.hero-carousel').siblings('#banner-controls').addClass('four-slides');
                $('#banner-controls').addClass('four-slides');
            } else {
                //add the default three-slides class
                $('.hero-carousel').siblings('#banner-controls').addClass('three-slides');
                $('#banner-controls').addClass('three-slides');
            }

        }

        $("#banner-controls a").each(function (index) {
            if (index == 0) {
                $(this).prepend('<span class="control-arrow slide-active">&nbsp;</span>');
            } else {
                $(this).prepend('<span class="control-arrow">&nbsp;</span>');
            }
            var idForATag = 'slide-button-' + (index + 1);
            $(this).attr('id', idForATag);
            if (index == 0) {
                $(this).addClass('slide-active');
            }
            if (numberOfHomeSlides == 3) {
                //Remove last slide button if there are 4 and its set to 3
                if ($('#banner-controls a').size() == 4) {
                    $('#banner-controls a:last-child').remove();
                }
            }
        });



        doAnimation = true;
        //Do the 'animateHeroSlide' function.
        animateHeroSlide();
    }
    setUpHeroCarousel();




    function changeSlideHero() {
        //Define what the active and previous slides are.
        activeSlideClass = 'slide-active';
        activeSlide = '.hero-carousel div.' + activeSlideClass;
        previousSlideClass = 'slide-prev';

        //Add the previous slide class to the current active slide.
        $(activeSlide).addClass(previousSlideClass);

        //reset all the active slides by removing all the active slide classes.
        $('.hero-carousel div').removeClass(activeSlideClass);
        $('#banner-controls a').removeClass(activeSlideClass);
        $('#banner-controls a span').removeClass(activeSlideClass);

        //add the active slide classes to the relevant elements
        $('.hero-carousel #slide-' + slideIDHero).addClass(activeSlideClass);
        $('#banner-controls #slide-button-' + slideIDHero).addClass(activeSlideClass);
        $('#banner-controls #slide-button-' + slideIDHero).children('.control-arrow').addClass(activeSlideClass);

        //Do the animation
        //transSpeed comes from the config.
        duration = (doAnimation == true) ? transSpeed : 200;
        $('.hero-carousel div.' + previousSlideClass).show();
        $('.hero-carousel div.' + previousSlideClass).css({
            opacity: 1
        }).stop().animate({
            opacity: 0
        }, duration);
        $('.hero-carousel div.' + previousSlideClass).css('z-index', 1);
        $('.hero-carousel div.' + activeSlideClass).show();
        $('.hero-carousel div.' + activeSlideClass).css({
            opacity: 0
        }).stop().animate({
            opacity: 1
        }, duration, function () {

            $(this).css('z-index', 2);

            $('.hero-carousel div.' + previousSlideClass).removeClass(previousSlideClass);
            if (doAnimation == true) {
                //Do the 'animateHeroSlide' function.
                animateHeroSlide();

            }
        });

    }

    var secondToLast = 0;
    var secondToLastCarousel = 0;
    function animateHeroSlide() {
        $('.hero-carousel').stop().animate({
            opacity: 1
        }, slideDelay, function () {

            if (doAnimation == true) {
                //Increase the slide by one.
                slideIDHero++;
                if (secondToLast == 1) {
                    slideIDHero = 1;
                    secondToLast = 0;
                }

                //If slide is the last.
                if ($('.hero-carousel #slide-' + slideIDHero).is(':last-child')) {
                    //make secondtolast true.
                    secondToLast = 1;
                }

                //Do changeSlideHero function.
                changeSlideHero();

            }
        });
    }
    //

    //On hover of banner controls.
    $('#banner-controls a').on('mouseover', function () {
        doAnimation = false;
        //Get id of hovered over button
        buttonID = $(this).attr('id');
        buttonID = buttonID.substring(13);
        //Get the number from that id.

        //Check if we are already displaying that slide.
        if (slideIDHero != buttonID) {
            //If not then change the slide.
            slideIDHero = buttonID;
            changeSlideHero();
        }
    });

    //Get number of timeline entries in the time module.
    var numberOfTimelineEntries = $(".time-line-holder").children('.timeline-entry').size();
    var currentEntry = 0;

    //Clicked scroll right on timeline.
    $(".scroll-right").click(function () {
        //Limit number of scrolls to the number of entries in the timeline.
        if (currentEntry < numberOfTimelineEntries) {
            //Once clicked animate the timeline left.
            $('.time-line-holder').animate({ marginLeft: "-=198px" }, "fast");
            //The current entry increases by 1.
            currentEntry++;
        }
    });

    //Clicked scroll left on timeline.
    $(".scroll-left").click(function () {
        if (currentEntry > 0) {
            //Once clicked animate the timeline right.
            $('.time-line-holder').animate({ marginLeft: "+=190px" }, "fast");
            //The current entry decreases by 1.
            currentEntry--;
        }
    });

    $('.open-lightbox-video').each(function (index) {


    });

    //Lightbox prepare on click
    $('.open-lightbox').click(function () {
        //Place backdrop on the page.
        $('.lightbox').parent().append('<div class="backdrop"></div>');
        //Animate in the backdrop and the lightbox.
        $('.backdrop, .lightbox').animate({ 'opacity': '.65' }, 300, 'linear');
        $('.lightbox').animate({ 'opacity': '1.00' }, 300, 'linear');
        $('.backdrop, .lightbox').css('display', 'block');
        //Make the backgrop stretch the full page width. Even on scroll.
        $('.backdrop').height($(document).height());
    });

    $('body').keypress(function (e) {
        //alert(e.which);
        if (e.keyCode == 27) {
            close_box();
        }
    });


    //Clicked close lightbox.
    $('.lightbox-close').on('click', function () {
        //do the close box function.
        close_box();
    });

    $('.word-cloud-lightbox-close').on('click', function () {
        $('.backdrop, .lightbox-video').animate({ 'opacity': '0' }, 300, 'linear', function () {
            $('.backdrop, .lightbox-video').css('display', 'none');
            //Remove the backdrop
            $('body .backdrop').remove();
            $('.word-cloud-lightbox').hide();
            $('.lightbox-video').hide();
        });
    });


    //Lightbox prepare on click
    $('.open-lightbox-video').click(function () {
        var linkTitle = $(this).attr("title");

        var linkTitleSub = linkTitle.substr(linkTitle.length - 5);

        var HTMLElement = "<iframe width='529' height='298' src='" + linkTitle + "' frameborder='0' allowfullscreen></iframe>";

        var lightBoxHTML = '<div class="lightbox-video" id="video-lightbox-' + linkTitleSub + '"><div class="lightbox-border"><div class="lightbox-contents module blank"><a class="lightbox-close">&times;</a><div style="text-align:center;" id="ContentPane">' + HTMLElement + '</div></div></div></div>'
        $("body").append(lightBoxHTML);

        //Place backdrop on the page.
        $('.lightbox-video').parent().append('<div class="backdrop"></div>');
        //Animate in the backdrop and the lightbox.
        $('.backdrop, #video-lightbox-' + linkTitleSub).animate({ 'opacity': '.65' }, 300, 'linear');
        $("#video-lightbox-" + linkTitleSub).animate({ 'opacity': '1.00' }, 300, 'linear');
        $('.backdrop, #video-lightbox-' + linkTitleSub).css('display', 'block');
        //Make the backgrop stretch the full page width. Even on scroll.
        $('.backdrop').height($(document).height());
    });

    //Clicked close lightbox.
    $('.lightbox-video .lightbox-close').on('click', function () {
        //do the close box function.
        close_box_video();
    });

    //Clicked the backdrop.
    $('.backdrop').on('click', function () {
        //do the close box function.
        //close_box();
        //close_box_video();
        //$('.word-cloud-lightbox').hide();
    });

    function close_box_video() {
        //Animate out the backdrop and lightbox.
        $('.backdrop, .lightbox-video').animate({ 'opacity': '0' }, 300, 'linear', function () {
            $('.backdrop, .lightbox-video').css('display', 'none');
            //Remove the backdrop
            $('body .backdrop').remove();
            $('.lightbox-video').remove();
        });
    }

    function close_box() {
        //Animate out the backdrop and lightbox.
        $('.backdrop, .lightbox').animate({ 'opacity': '0' }, 300, 'linear', function () {
            $('.backdrop, .lightbox').css('display', 'none');
            //Remove the backdrop
            $('body .backdrop').remove();
        });
    }


    //Check query string for tab
    $(function selectTab() {
        //Get the url
        var activeTab = location.href;
        //Find the number after the 'tab' in the query string.
        var activeTabId = activeTab.split('tab=')[1];
        //check tab exists
        //if the tab exists.
        if ($('#tabs-' + activeTabId).length > 0) {
            //Hide all the tabs.
            $('.tab').hide();
            //Display the relevant tab.
            $('#tabs-' + activeTabId).css('display', 'block');
            $('.the-tabs li').removeClass('selected');
            $('.tablink-' + activeTabId).addClass('selected');
        }

    });

    showActiveMenuItem();
    function showActiveMenuItem() {
        //Cycle through each menu item.
        $('.nav').children('li').children('a').each(function (index) {
            //Find the href.
            var menuHref = $(this).attr('href');
            //Find the window pathname
            var pathname = window.location.pathname;
            //Find the root level location by looking after the first slash
            pathname = pathname.split('/')[1];
            //If the pathname is empty ..
            if (!pathname) {
                //Add 'active' to the first item. (Home).
                $('.nav').find(">:first-child").addClass("active");
                //Exit function (Stop iterating)
                return false;
            } else {
                //If the menu item href isn't empty..
                if (menuHref) {
                    //Check if menu item href contains string from window location.
                    if (menuHref.indexOf(pathname) != -1) {
                        //Add the 'active' class to this menu item
                        $(this).parent('li').addClass('active');

                        //We've found our active menu item to exit function
                        return false;
                    }
                }
            }

        });
    }
    var animateNow = true;
    setUpCarouselKeyFacts();
    function setUpCarouselKeyFacts() {

        //Find each instance of a carousel.
        $(".carousel").each(function (index) {
            $(this).find('p').each(function (index) {

                //Get fact from <p> tag.
                var factContent = $(this).html();
                // if the first <p> tag.
                if (index == 0) {
                    //Create slide div. Make it active.
                    var div = $("<div id='slide-" + (index + 1) + "' class='slide slide-active'></div>");
                    $(this).closest('.carousel').append(div);
                } else {
                    //Else create slide div and don't make it active.
                    var div = $("<div id='slide-" + (index + 1) + "' class='slide'></div>");
                    $(this).closest('.carousel').append(div);
                }
                //Remove <p> tag. No longer needed.
                $(this).remove();
                //Add fact from <p> tag to div.
                $("<p></p>").html(factContent).appendTo(div);
            });

            //Add next and previous buttons to carousel panel.
            $('<a class="prev-button">Prev</a>').appendTo(this);
            $('<a class="next-button">Next</a>').appendTo(this);

        });

    }

    function tick() {
        if (autoScrollCarousel) {
            //Cycle through each carousel instance.
            $(".carousel").each(function (index) {
                //Store the carousel in a variable
                var elCar = $(this);
                //Get the first slide element in the sequence
                $(this).children('div.slide:first').animate({ 'opacity': 1 }, 200, function () {
                    //Remove the slide active class from the current slide
                    $(this).removeClass('slide-active');
                    //Do a tidy up and remove the class from any other slides.
                    $(this).siblings().removeClass('slide-active');
                    //Physically move the element to the end of the row
                    $(this).appendTo(elCar);
                    //Add the slide active class to the first slide in the row.
                    $(this).siblings('.slide:first').addClass('slide-active');
                });
            });
        }
    }
    //Set an interval
    var refreshIntervalId = setInterval(function () { tick(); }, slideDelayCarousel);

    //Clicked next
    $(".next-button").on('click', function () {
        //Stop the current interval
        clearInterval(refreshIntervalId);
        //Store the carousel in a variable.
        var elCar = $(this).closest('.carousel');
        //Get the first slide element in the sequence.
        $(elCar).children('div.slide:first').animate({ 'opacity': 1 }, 20, function () {
            //Remove the slide active class from the current slide.
            $(this).removeClass('slide-active');
            //Do a tidy up and remove the class from any other slides.
            $(this).siblings().removeClass('slide-active');
            //Physically move the element to the end of the row
            $(this).appendTo(elCar);
            //Add the slide active class to the first slide in the row.
            $(this).siblings('.slide:first').addClass('slide-active');
        });
        //Reset the interval
        refreshIntervalId = setInterval(function () { tick(); }, slideDelayCarousel);
    });

    //Clicked prev
    $(".prev-button").click(function () {
        //Stop the current interval
        clearInterval(refreshIntervalId);
        //Store the carousel in a variable.
        var elCar = $(this).closest('.carousel');
        //Get the current active slide.
        $(elCar).children('.slide-active').animate({ 'opacity': 1 }, 20, function () {
            //Remove the slide active class from the current slide.
            $(this).removeClass('slide-active');
            //Do a tidy up and remove the class from any other slides.
            $(this).siblings().removeClass('slide-active');
            //Move the current slide to the start of the sequence.
            $(this).prependTo(elCar);
            //Make the last slide in the sequence the active slide.
            $(this).nextAll(".slide:last").addClass('slide-active');

        });
        //Reset the interval
        refreshIntervalId = setInterval(function () { tick(); }, slideDelayCarousel);
    });

    //On hover of banner controls.
    $('.pod-tall, .pod-med, .pod-tall').on('mouseover', function () {
        $(this).children('.pod-overlay').fadeIn('fast');
    });

    $(".pod-tall, .pod-med, .pod-tall").mouseover(function () {
        $(this).children('.pod-overlay').show();
        $(this).children('.pod-overlay').css("display", "block");

    }).mouseout(function () {

        $(this).children('.pod-overlay').hide();

    });

    var imageURLs = [];
    $(this).find('.image-pod-link').each(function (index) {
        //iterate through testimonial pods and create lightboxes for each with an image
        var imageEl = $(this).find('img');
        var imageElHTML = imageEl.clone().wrap('<p>').parent().html();
        var imageURL = imageEl.attr('src');
        imageURLs.push(imageURL);
        imageEl.parents('p').remove();
        $(this).find('.module-content').find('p').wrap('<a class="lightbox-pod" />');
        $(this).attr("id", "lightbox-link-" + (index + 1));

        var descrip = $(this).find('.lightbox-pod').text();

        var theBox = $(this).siblings('.word-cloud-lightbox');
        theBox.attr('id', 'lightbox-' + (index + 1));
        theBox.find('.lightbox-content').append('<p>' + imageElHTML + '<br/><br/><p>' + descrip + '</p>');
        $('body').append(theBox);

        $(this).append(imageElHTML);
    });

    $(this).find('.word-cloud-pod').each(function (index) {

        var total = $(this).find('img').length;
        $(this).find('img').each(function (index) {

            var imageTitle = $(this).attr('title');

            var newHTMLObject = $(this).clone().wrap('<p>').parent().html() + "<br/><br/><p>" + imageTitle + "</p>";

            $(this).parents('.word-cloud-pod').siblings('.word-cloud-lightbox').find('.lightbox-content').append(newHTMLObject);

            $(this).remove();

        });

        var boxElement = $(this).siblings('.word-cloud-lightbox');
        boxElement.addClass('wordcloud-lightbox');
        $('body').append(boxElement);
    });

    $('.wordcloud-lightbox').each(function (index) {
        $(this).find('img').each(function (index) {
            if (index == 0) {
                $(this).nextUntil('img').andSelf().wrapAll('<div class="wordcloud-slide active" id="wordcloud-slide-' + (index + 1) + '" />');
            } else {
                $(this).nextUntil('img').andSelf().wrapAll('<div class="wordcloud-slide" id="wordcloud-slide-' + (index + 1) + '" />');
            }
        });
    });

    $(".prev-lightbox").hide();
    $(".next-lightbox").on('click', function () {
        var boxNumber = $(this).siblings('.lightbox-content').children('.active').attr('id');
        var boxNumberNumber = boxNumber.charAt(boxNumber.length - 1);
        boxNumberNumber++;
        $(this).siblings('.lightbox-content').children('.wordcloud-slide').removeClass('active');
        $(this).siblings('.lightbox-content').children('.wordcloud-slide').hide();
        $(this).siblings('.lightbox-content').children('#wordcloud-slide-' + boxNumberNumber).addClass('active');
        $(this).siblings('.lightbox-content').children('#wordcloud-slide-' + boxNumberNumber).show();
        if (boxNumberNumber == 2) {
            $(this).hide();
            $(this).siblings('.prev-lightbox').show();
        }
    });

    $(".prev-lightbox").on('click', function () {
        var boxNumber = $(this).siblings('.lightbox-content').children('.active').attr('id');
        var boxNumberNumber = boxNumber.charAt(boxNumber.length - 1);
        boxNumberNumber--;

        $(this).siblings('.lightbox-content').children('.wordcloud-slide').removeClass('active');
        $(this).siblings('.lightbox-content').children('.wordcloud-slide').hide();
        $(this).siblings('.lightbox-content').children('#wordcloud-slide-' + boxNumberNumber).addClass('active');
        $(this).siblings('.lightbox-content').children('#wordcloud-slide-' + boxNumberNumber).show();
        if (boxNumberNumber == 1) {
            $(this).hide();
            $(this).siblings('.next-lightbox').show();
        }
    });


    $(".word-cloud-pod a").on('click', function () {
        $('.wordcloud-lightbox').parent().append('<div class="backdrop"></div>');
        //Animate in the backdrop and the lightbox.
        $('.backdrop, .wordcloud-lightbox').animate({ 'opacity': '.65' }, 300, 'linear');
        $('.wordcloud-lightbox').animate({ 'opacity': '1.00' }, 300, 'linear');
        $('.backdrop, .wordcloud-lightbox').css('display', 'block');
        //Make the backgrop stretch the full page width. Even on scroll.
        $('.backdrop').height($(document).height());
    });

    $(".lightbox-pod").on('click', function () {
        var attribute = $(this).parents('.image-pod-link').attr("id");
        var attributeNumber = attribute.charAt(attribute.length - 1);
        var descrip = $(this).text();

        var attribute = $(this).parents('.image-pod-link').attr("id");
        var attributeNumber = attribute.charAt(attribute.length - 1);
        //Place backdrop on the page.
        $('#lightbox-' + attributeNumber).parent().append('<div class="backdrop"></div>');
        //Animate in the backdrop and the lightbox.
        $('.backdrop').animate({ 'opacity': '.65' }, 300, 'linear');
        $('#lightbox-' + attributeNumber).animate({ 'opacity': '1.00' }, 300, 'linear');
        $('.backdrop, #lightbox-' + attributeNumber).css('display', 'block');
        //Make the backgrop stretch the full page width. Even on scroll.
        $('.backdrop').height($(document).height());
    });


    $('section.slider').each(function () { //Initialise homepage slider
        createSlider(this);
    });
});

//Home page slider

function createSlider(slider) {
    var delay = 5000;
    var currentSlide = 0;
    var totalSlides = $(".slides>div", slider).length;

    if (totalSlides <= 0) {
        var timerActive = false;
    } else var timerActive = true;
    createLinks(slider, totalSlides);

    $('.links input[type=radio]', slider).click(function (e) {
        currentSlide = $(this).index() / 2;
        timerActive = false;
        $(".slides>div", slider).css({ "left": "0px", "width": "100%", "transition": "none" });
        initialise(slider, currentSlide);
    });

    initialise(slider, currentSlide);
    var myVar = setInterval(function () {
        if (timerActive != false) {
            slide(getActive(slider, currentSlide), getNext(slider, currentSlide));
            if ((currentSlide + 1) <= (totalSlides - 1)) {
                currentSlide++;
            } else { currentSlide = 0; timerActive = false; }
            initialise(slider, currentSlide)
        }
    }, delay);

    $(slider).mouseover(function () {
        timerActive = false;
    });
}
function getLink(slider, current) {
    var active = $(".links label", slider).get(current);
    return active;
}

function getActive(slider, current) {
    var active = $(".slides>div", slider).get(current);
    return active;
}

function getNext(slider, current) {
    var totalSlides = $(".slides>div", slider).length;
    if ((current + 1) <= (totalSlides - 1)) {
        var next = $(".slides>div", slider).get(current + 1);
    } else var next = $(".slides>div", slider).get(0);
    return next;
}

function initialise(slider, currentSlide) {
    var active = getActive(slider, currentSlide);
    var next = getNext(slider, currentSlide)

    $(".slides>div", slider).css("z-index", "1");
    $(active).css({ "display": "block", "left": "0px", "width": "100%", "z-index": "2" });

    var width = $(active).width();
    $(next).css({ 'width': '0', "display": "block", "left": width + "px" });

    $('label', slider).removeClass('active');
    var activeLink = getLink(slider, currentSlide);
    $(activeLink).addClass('active');
}

function slide(active, next) {
    var width = $(active).width();
    $(next).css('width', width);
    $(next).css("left", "0px");
    $(active).css("left", "-" + width + "px");
}

function createLinks(slider, totalSlides) {
    var slideIndex = $(slider).index('.slider');
    var linkBlock = "<div class=\"links\"></div>";
    $(slider).append(linkBlock);
    for (var i = 0; i <= totalSlides - 1; i++) {
        var linkCircle = "<input type=\"radio\" name=\"slides\" id=\"slide-" + slideIndex + "-" + i + "\" /><label for=\"slide-" + slideIndex + "-" + i + "\">&nbsp;</label>";
        $(".links", slider).append(linkCircle);
    }
}

//End home page slider


// Social share media control
$(document).ready(function () {
    $('.newSocialTemp__startText').click(function () {
        $(".newSocialTemp__startText").addClass("newSocialTemp__startText--hide");
        $(".newSocialTemp").addClass("newSocialTemp--open");
        $(".newSocialTemp__closeText").addClass("newSocialTemp__closeText--show");
        $(".newSocialTempHolder").addClass("newSocialTempHolder--show");
    });
    $('.newSocialTemp__closeText').click(function () {
        $(".newSocialTempHolder").removeClass("newSocialTempHolder--show");
        $(".newSocialTemp__closeText").removeClass("newSocialTemp__closeText--show");
        $(".newSocialTemp").removeClass("newSocialTemp--open");
        $(".newSocialTemp__startText").removeClass("newSocialTemp__startText--hide");
    });
});