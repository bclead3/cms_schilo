$(document).ready(function(){
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    
    // Login modal form show and hide functions
    $("#loginLink").click(function(){
        $("#loginModal").modal('show');
    });

    $("#closeLoginModal").click(function(){
        $("#loginModal").modal('hide');
    });

    $("#cancelLoginModal").click(function(){
        $("#loginModal").modal('hide');
    });

    // Reserve Table modal form show and hide functions
    $("#reserveTableButton").click(function(){
        $("#reserveModal").modal('show');
    });

    $("#closeReserveModal").click(function(){
        $("#reserveModal").modal('hide');
    });

    $("#cancelReserveModal").click(function(){
        console.log("cancel button clicked");
        $("#reserveModal").modal('hide');
    });
});