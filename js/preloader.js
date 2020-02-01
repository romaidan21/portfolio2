document.body.onload = function() {

    let preloader = document.getElementById('page_preloader');
    let r = document.readyState;
    let c = 'complete';

    if (r === c){
        console.log( 'yep, its good');

        setTimeout(()=>{
            preloader.classList.add('done');
            $('.meImg').removeClass('transform-2x');


            setTimeout(()=>{
                $('.roman-i').removeClass('roman--i--after');

                setTimeout(()=>{
                    $('#myLogo').removeClass('oman-hidden').addClass('oman-active');
                },1000)

            },500)

        },1000)
    }

    // setTimeout(function() {
    //     if( !preloader.classList.contains('done'))
    //     {
    //         preloader.classList.add('done');
    //     }
    // }, 500);


};
