
$(document).ready(function () {

        // if (window.innerWidth > 768) {}

            let arr = ['.buttonAboutMe', '.buttonMyWork'];

            $('.buttonAboutMe').on('click', function () {
                $('#myLogo').addClass('oman-hidden').removeClass('oman-active');
                $('.fixedRDown').removeClass('displayNone');

                setTimeout( ()=> {
                    $('.romanInd').addClass('roman--i--after')
                }, 500);

                let i = 0;
                setInterval( function () {
                    if (i <arr.length){
                        $(arr[i]).addClass("opacityTrans");
                        console.log(i);
                        i++;
                    }
                }, 200);

                setTimeout( () => {
                    $('.contAboutMe').addClass("contAboutMe--active");
                    $('.meImg').addClass('meImg--after');
                }, 1000);

                setTimeout( () => {
                    $(".fixedR").removeClass('displayNone');
                }, 500)
            });



            $(".fixedR")
                .on('mouseenter', function () {
                    $('#hiddenMe').addClass('oman-active').removeClass('oman-hidden')
                })
                .on('mouseleave', function () {
                    $('#hiddenMe').removeClass('oman-active').addClass('oman-hidden')
                })
                .on('click', function () {
                    $('.contAboutMe').removeClass("contAboutMe--active");
                    $('.meImg').removeClass('meImg--after');
                    $('.fixedRDown').addClass('displayNone');

                    setTimeout( () =>{
                        $('.roman-i').removeClass('roman--i--after');
                    }, 1000);

                    setTimeout( ()=>{
                        $('.buttonAboutMe, .buttonMyWork').removeClass("opacityTrans");
                        $('#myLogo').removeClass('oman-hidden').addClass('oman-active');
                    },2000);

                    setTimeout( () => {
                        $(".fixedR").addClass('displayNone');
                    }, 1000)
            });

            $(".fixedRDown")
                .on('mouseenter', function () {
                    $('#hiddenMeDown').addClass('oman-active').removeClass('oman-hidden')
                })
                .on('mouseleave', function () {
                    $('#hiddenMeDown').removeClass('oman-active').addClass('oman-hidden')
            });



            $('.hidden-menu')
                .on('mouseenter', function () {
                $('#hidden-menu').addClass('oman-active').removeClass('oman-hidden')})
                .on('mouseleave', function () {
                    $('#hidden-menu').removeClass('oman-active').addClass('oman-hidden')
                })








});




