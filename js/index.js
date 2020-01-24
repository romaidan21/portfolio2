
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
                    $('i').removeClass('white');
                    $('#hiddenMe').addClass('oman-active').removeClass('oman-hidden');
                    $('.work-active').removeClass('work-active--onscroll');
                    $('.cont-site').removeClass('margin-top');
                    $('.work-btn--about-me').removeClass('navigation-btn-down').addClass('navigation-btn-center');



                } else {
                    $('.cont-img').addClass('cont-img-onscroll');
                    $('#fixed--half-opacity').addClass('fixed--half-opacity');
                    $('i').addClass('white');
                    $('#hiddenMe').addClass('oman-hidden').removeClass('oman-active');
                    $('.work-active').addClass('work-active--onscroll');
                    $('.cont-site').addClass('margin-top');
                    $('.work-btn--about-me').addClass('navigation-btn-down').removeClass('navigation-btn-center');



                }
            } else console.log(click);
        };


        $('.buttonAboutMe').on('click', function () {
            $('.about--center-cont').removeClass('displayNone');
            $('.cont-img').addClass('right');
            $('.work-active').removeClass('work-active--onscroll');


            setTimeout( () => {
                $('.contAboutMe').addClass("contAboutMe--active");
                $('.cont-img').addClass("cont-img--50");
            }, 1000);
        });


        $('.buttonAboutMe, .buttonMyWork').on('click', function () {
            $('i').removeClass('white');
                let i = 0;
                setInterval( function () {
                    if (i <arr.length){
                        $(arr[i]).addClass("opacityTrans");
                        i++;
                    }
                }, 200);

                $('#myLogo').addClass('oman-hidden').removeClass('oman-active');

                setTimeout( ()=> {
                    $('#myLogo').addClass('displayNone');
                    $('.romanInd').addClass('roman--i--after');
                    $(".fixedR, .fixedRDown").removeClass('displayNone');


                }, 500);


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
                        $('.work-btn--about-me').removeClass('left-5');

                    },)
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



            setTimeout( () => {
                $('.contAboutMe').addClass("contAboutMe--active");
                $('.cont-img').addClass("cont-img--50 right");
                $('.about--center-cont').removeClass('displayNone');
                $('.cont-site').removeClass('margin-top');
                $(".fixedRDown").removeClass('opacityTrans');
                $(this).addClass('navigation-btn-center').removeClass('navigation-btn-down');


            }, 1000);

            setTimeout( ()=> {
                $('.page-work').addClass('displayNone');
                $('#hiddenMe').removeClass('oman-active').addClass('oman-hidden');
            }, 500);




        });







        $(".close-R")
            .on('click', function () {
                click = false;
                $('.contAboutMe').removeClass("contAboutMe--active");
                // $('.meImg').removeClass('meImg--after');
                $('.fixedRDown').addClass('displayNone');
                $('.about--center-cont').addClass('displayNone');
                $('.work-active').removeClass('work-letter work-active--onscroll');
                $('.cont-img').removeClass('cont-img-onscroll cont-img--50');
                $('#fixed--half-opacity').removeClass('fixed--half-opacity');
                $('i').removeClass('white');
                $('.cont-site').removeClass('margin-top').addClass('opacityTrans');
                $('#work-btn--about-me').addClass('left-5');


                setTimeout( () =>{
                    $('.page-work').addClass('displayNone');
                    $('#bigR').removeClass('displayNone');
                    $('#myLogo').removeClass('displayNone');

                }, 500);

                setTimeout( () =>{
                    $('.roman-i').removeClass('roman--i--after');
                    $('.cont-img').removeClass('right');
                    $('#work-btn--about-me').addClass('navigation-btn-center').removeClass('navigation-btn-down')
                }, 1000);


                setTimeout( ()=>{
                    $('.buttonAboutMe, .buttonMyWork').removeClass("opacityTrans");
                    $('#myLogo').removeClass('oman-hidden').addClass('oman-active');
                },2000);

                setTimeout( () => {
                    $(".fixedR").addClass('displayNone');
                }, 1000);

        });

        $(".fixedR-top")
            .on('mouseenter', function () {
                    $('#hiddenMe').addClass('oman-active').removeClass('oman-hidden')})
        .on('mouseleave', function () {
                    $('#hiddenMe').removeClass('oman-active').addClass('oman-hidden')});



        $(".fixedRDown")
            .on('mouseenter', function () {
                    $('.hiddenMeDown')
                        .addClass('oman-active').removeClass('oman-hidden')
                })
        .on('mouseleave', function () {
                    $('.hiddenMeDown')
                        .removeClass('oman-active').addClass('oman-hidden')});












     if (window.innerWidth < 500) {

         $('.hidden-menu')
             .on('mouseenter', function () {
                 $('#hidden-menu').addClass('oman-active').removeClass('oman-hidden')})
             .on('mouseleave', function () {
                 $('#hidden-menu').removeClass('oman-active').addClass('oman-hidden')
             })
     }











});



