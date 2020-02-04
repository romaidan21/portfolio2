
$(document).ready(function () {


        let arr = ['.buttonAboutMe', '.buttonMyWork'];
        let click = false;

        window.onscroll = function () {

            if (click){
                if (!window.pageYOffset){
                    $('.cont-img').removeClass('cont-img-onscroll');
                    $('#fixed--half-opacity').removeClass('fixed--half-opacity');
                    $('i, .home-p').removeClass('white');
                    $('#hiddenMe').addClass('oman-active').removeClass('oman-hidden');
                    $('.work-active').removeClass('work-active--onscroll');
                    $('.cont-site').removeClass('margin-top');
                    $('.work-btn--about-me').removeClass('about-btn-down').addClass('about-btn-center');

                } else {
                    $('.cont-img').addClass('cont-img-onscroll');
                    $('#fixed--half-opacity').addClass('fixed--half-opacity');
                    $('i, .home-p').addClass('white');
                    $('#hiddenMe').addClass('oman-hidden').removeClass('oman-active');
                    $('.work-active').addClass('work-active--onscroll');
                    $('.cont-site').addClass('margin-top');
                    $('.work-btn--about-me').addClass('about-btn-down').removeClass('about-btn-center');


                }
            } else {

                console.log(click);
                if (!window.pageYOffset){
                    setTimeout(()=>{
                        $('.about-btn--work').removeClass('work-btn-down').addClass('work-btn-center');
                    },300)
                } else {
                    setTimeout(()=>{
                        $('.about-btn--work').addClass('work-btn-down').removeClass('work-btn-center');
                    },300)
                }

            }
        };

        $('#close-menu--about')
            .on('click', function () {
            $('.about--center-cont').removeClass('displayNone');
            $('.work-active').removeClass('work-active--onscroll');
            $('.contAboutMe').addClass("contAboutMe--active");
            $('.cont-img').addClass("cont-img--50");
            $('.centerRoman').addClass("displayNone");
            $(".fixedR, .fixedRDown").removeClass('displayNone');
        });

        $('#close-menu--work')
            .on('click', function () {
            click = true;
            console.log(click);
            $(".page-work").removeClass('displayNone');
            $('.cont-site').removeClass('opacityTrans margin-before');
            $('#fixedR-top, .home-p').addClass('red').removeClass('g-black');
            $('.work-active').removeClass('displayNone').addClass('work-letter');
            $('.centerRoman').addClass("displayNone");
            $(".fixedR, .fixedRDown").removeClass('displayNone');
        });


        $('.buttonAboutMe, .buttonMyWork')
            .on('click', function () {
        let i = 0;
        setInterval( function () {
            if (i <arr.length){
                $(arr[i]).addClass("opacityTrans");
                i++;
            }}, 200);

        $('#myLogo').addClass('oman-hidden').removeClass('oman-active');
        $('i').removeClass('white');

        setTimeout( ()=> {
            $('#myLogo').addClass('displayNone');
            $('.romanInd').addClass('roman--i--after');
            $(".fixedR, .fixedRDown").removeClass('displayNone');

        }, 700);


    });

        $('.buttonAboutMe')
            .on('click', function () {
            $('.about--center-cont').removeClass('displayNone');
            $('.cont-img').addClass('right');
            $('.work-active').removeClass('work-active--onscroll');
            $('#about-btn--work').removeClass('displayNone');


            setTimeout( () => {
                $('.contAboutMe').addClass("contAboutMe--active");
                $('.cont-img').addClass("cont-img--50");
                $('#about-btn--work').removeClass("right-5");

            }, 1200);
        });

        $('.buttonMyWork')
            .on('click', function () {
        click = true;
        console.log(click);

        $(".page-work").removeClass('displayNone');
        $('.cont-site').removeClass('opacityTrans');
        $('#fixedR-top, .home-p').addClass('red').removeClass('g-black');

        setTimeout( ()=> {
            $('.work-active').removeClass('displayNone');

            setTimeout( ()=>{
                $('.work-active').addClass('work-letter');
                $('.work-btn--about-me').removeClass('left-5')
            },500);

            setTimeout( ()=>{
                $('.cont-site').removeClass('margin-before')},1000);
        }, 1500);
    });

        $('#work-btn--about-me, #close-menu--about')
            .on('click', function () {
            click = false;

            $('.cont-img').removeClass('cont-img-onscroll');
            $('.work-active').removeClass('work-letter work-active--onscroll');
            $('#fixed--half-opacity').removeClass('fixed--half-opacity');
            $('i').removeClass('white');
            $('.cont-site').addClass('opacityTrans');
            $(".fixedRDown").addClass('opacityTrans');
            $('#work-btn--about-me').addClass('left-5');
            $('#about-btn--work').removeClass('displayNone');
            $('.home-p').removeClass('white');
            $('.link-in-me').addClass('opacity');
            $('#fixedR-top, .home-p').removeClass('red').addClass('g-black');



                setTimeout( () => {
                $('.contAboutMe').addClass("contAboutMe--active");
                $('.cont-img').addClass("cont-img--50 right");
                $('.about--center-cont').removeClass('displayNone');
                $('.cont-site').removeClass('margin-top').addClass('margin-before');
                $(".fixedRDown").removeClass('opacityTrans');
                $('#work-btn--about-me').addClass('about-btn-center').removeClass('about-btn-down');

                setTimeout( ()=>{
                    $('#about-btn--work').removeClass('right-5');
                    $('.link-in-me').removeClass('opacity');

                },1000);
            }, 1000);

            setTimeout( ()=> {
                $('.page-work').addClass('displayNone');
                $('#hiddenMe').removeClass('oman-active').addClass('oman-hidden');
            }, 500);
        });

        $('#about-btn--work, #close-menu--work')
            .on('click', function () {
            click = true;

            $('.contAboutMe').removeClass("contAboutMe--active");
            $('.about--center-cont').addClass('displayNone');
            $('.cont-img').removeClass('cont-img-onscroll cont-img--50');
            $('.cont-site').removeClass('margin-top');
            $('#about-btn--work').addClass('right-5');
            $('#fixedR-top, .home-p').addClass('red').removeClass('g-black');


                setTimeout( () =>{
                $(".page-work").removeClass('displayNone');
                $('.cont-site').removeClass('opacityTrans');
            }, 500);

            setTimeout( () =>{
                $('#work-btn--about-me').addClass('about-btn-center').removeClass('about-btn-down');
                $('#about-btn--work').addClass('displayNone work-btn-center').removeClass('work-btn-down');
                $('.work-active').addClass('work-letter');
            }, 1000);

            setTimeout( ()=>{
                $('.cont-img').removeClass('right');
                $('.work-btn--about-me').removeClass('left-5');
                $('.cont-site').removeClass('margin-before')
            },2500);
        });



        $(".close-R, .home-p, #close-menu--home")
            .on('click', function () {

                click = false;

                $('.contAboutMe').removeClass("contAboutMe--active");
                $('.about--center-cont').addClass('displayNone');
                $('.work-active').removeClass('work-letter work-active--onscroll');
                $('.cont-img').removeClass('cont-img-onscroll cont-img--50');
                $('#fixed--half-opacity').removeClass('fixed--half-opacity');
                $('i, .home-p').removeClass('white');
                $('.cont-site').addClass('opacityTrans');
                $('#work-btn--about-me').addClass('left-5');
                $('#about-btn--work').addClass('right-5');
                $('#hiddenMe').addClass('oman-hidden').removeClass('oman-active');
                $('#fixedR-top, .home-p').removeClass('red').addClass('g-black');
                $('.centerRoman').removeClass("displayNone");

                setTimeout( () =>{
                    $('.page-work').addClass('displayNone');
                    $('#bigR').removeClass('displayNone');
                    $('#myLogo').removeClass('displayNone');
                }, 500);

                setTimeout( () =>{
                    $('.roman-i').removeClass('roman--i--after');
                    $('#work-btn--about-me').addClass('about-btn-center').removeClass('about-btn-down');
                    $('.cont-site').addClass('margin-before').removeClass('margin-top');
                    $('#about-btn--work').addClass('displayNone');
                    $(".fixedR").addClass('displayNone');
                }, 1000);

                setTimeout( ()=>{
                    $('.cont-img').removeClass('right');
                    $('.buttonAboutMe, .buttonMyWork').removeClass("opacityTrans");
                    $('#myLogo').removeClass('oman-hidden').addClass('oman-active');
                },2000);

        });

        $("#fixedR-top, .home-p")
            .on('mouseenter', function () {
                    $('#hiddenMe').addClass('oman-active').removeClass('oman-hidden')})
            .on('mouseleave', function () {
                    $('#hiddenMe').removeClass('oman-active').addClass('oman-hidden')});

        $(".fixedRDown")
            .on('mouseenter', function () {
                    $('.hiddenMeDown').addClass('oman-active').removeClass('oman-hidden')})
            .on('mouseleave', function () {
                    $('.hiddenMeDown').removeClass('oman-active').addClass('oman-hidden')});


        $('.hidden-menu--btn-menu')
            .on('click', function () {
            $('.close-menu').removeClass('scale');
        });

        $('.close-menu--btn-close, #close-menu--home, #close-menu--work, #close-menu--about')
            .on('click', function () {
            $('.close-menu').addClass('scale');
        });





        let card = $(".meImg");

        $(document).on("mousemove",function(e) {
            let ax = -($(window).innerWidth()/2- e.pageX)/50;
            card.attr("style", "transform: rotateY("+ax+"deg)");
        });




});






// Roman Maidan 2020
