
$(document).ready(function () {

        let arr = ['.buttonAboutMe', '.buttonMyWork'];
        let click = false;




    $('#work1').on('click', function () {
        window.open("https://romaidan21.github.io/first/", "_blank")
    });
    $('#work2').on('click', function () {
        window.open("https://romaidan21.github.io/fabuwood/", "_blank")
    });


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

        $('.buttonAboutMe').on('click', function () {
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

        $('.buttonAboutMe, .buttonMyWork').on('click', function () {
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

        $('.buttonMyWork').on('click', function () {
                click = true;
                console.log(click);

                $(".page-work").removeClass('displayNone');
                $('.cont-site').removeClass('opacityTrans');


            setTimeout( ()=> {
                    $('.work-active').removeClass('displayNone');


                    setTimeout( ()=>{
                        $('.work-active').addClass('work-letter');
                        $('.work-btn--about-me').removeClass('left-5');},500);


                    setTimeout( ()=>{
                        $('.cont-site').removeClass('margin-before')},1000);


                }, 1500);

        });



        $('#work-btn--about-me').on('click', function () {
            click = false;

            $('.cont-img').removeClass('cont-img-onscroll');
            $('.work-active').removeClass('work-letter work-active--onscroll');
            $('#fixed--half-opacity').removeClass('fixed--half-opacity');
            $('i').removeClass('white');
            $('.cont-site').addClass('opacityTrans');
            $(".fixedRDown").addClass('opacityTrans');
            $(this).addClass('left-5');
            $('#about-btn--work').removeClass('displayNone');
            $('.home-p').removeClass('white');



            setTimeout( () => {
                $('.contAboutMe').addClass("contAboutMe--active");
                $('.cont-img').addClass("cont-img--50 right");
                $('.about--center-cont').removeClass('displayNone');
                $('.cont-site').removeClass('margin-top').addClass('margin-before');
                $(".fixedRDown").removeClass('opacityTrans');
                $(this).addClass('about-btn-center').removeClass('about-btn-down');

                setTimeout( ()=>{
                    $('#about-btn--work').removeClass('right-5');
                },1000);
            }, 1000);

            setTimeout( ()=> {
                $('.page-work').addClass('displayNone');
                $('#hiddenMe').removeClass('oman-active').addClass('oman-hidden');
            }, 500);
        });

        $('#about-btn--work').on('click', function () {
            click = true;

            $('.contAboutMe').removeClass("contAboutMe--active");
            $('.about--center-cont').addClass('displayNone');
            $('.cont-img').removeClass('cont-img-onscroll cont-img--50');
            $('.cont-site').removeClass('margin-top');
            $('#about-btn--work').addClass('right-5');

            setTimeout( () =>{
                $(".page-work").removeClass('displayNone');
                $('.cont-site').removeClass('opacityTrans');
            }, 500);

            setTimeout( () =>{
                $('.cont-img').removeClass('right');
                $('#work-btn--about-me').addClass('about-btn-center').removeClass('about-btn-down');
                $('#about-btn--work').addClass('displayNone work-btn-center').removeClass('work-btn-down');
                $('.work-active').addClass('work-letter');
            }, 1000);

            setTimeout( ()=>{
                $('.work-btn--about-me').removeClass('left-5');
                $('.cont-site').removeClass('margin-before')
            },1500);
        });



        $(".close-R, .home-p").on('click', function () {

                click = false;

                $('.contAboutMe').removeClass("contAboutMe--active");
                // $('.meImg').removeClass('meImg--after');
                $('.about--center-cont').addClass('displayNone');
                $('.work-active').removeClass('work-letter work-active--onscroll');
                // $('.cont-img').removeClass('cont-img-onscroll cont-img--50');
                $('#fixed--half-opacity').removeClass('fixed--half-opacity');
                $('i, .home-p').removeClass('white');
                $('.cont-site').addClass('opacityTrans');
                $('#work-btn--about-me').addClass('left-5');
                $('#about-btn--work').addClass('right-5');
                $('#hiddenMe').addClass('oman-hidden').removeClass('oman-active');

                setTimeout( () =>{
                    $('.page-work').addClass('displayNone');
                    $('#bigR').removeClass('displayNone');
                    $('#myLogo').removeClass('displayNone');
                    $('.cont-img').removeClass('cont-img-onscroll cont-img--50');

                }, 500);

                setTimeout( () =>{
                    $('.roman-i').removeClass('roman--i--after');
                    $('.cont-img').removeClass('right');
                    $('#work-btn--about-me').addClass('about-btn-center').removeClass('about-btn-down');
                    $('.cont-site').addClass('margin-before').removeClass('margin-top');
                    $('#about-btn--work').addClass('displayNone');
                    $(".fixedR").addClass('displayNone');
                }, 1000);

                setTimeout( ()=>{
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












     if (window.innerWidth < 500) {

         $('.hidden-menu')
             .on('mouseenter', function () {
                 $('#hidden-menu').addClass('oman-active').removeClass('oman-hidden')})
             .on('mouseleave', function () {
                 $('#hidden-menu').removeClass('oman-active').addClass('oman-hidden')
             })
     }











});



