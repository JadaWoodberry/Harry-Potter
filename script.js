$(".cupcake").hide();

$(".accio").click(function(){
    $(".cupcake").toggle();
});
$(".light").hide();

$(".lumos").click(function(){
$(".light").toggle();
});

$(".Sonorus").click(function(){
if($(".soundpic").css ("width")==="300px"){
    $(".soundpic").css("width","500px");}
else{
    $(".soundpic").css("width","300px");
}
});


    $(".wingardiumLeviosa").click(function(){
    
     $(".r0ck").animate({
            top: '1000px',

        });
    });

    