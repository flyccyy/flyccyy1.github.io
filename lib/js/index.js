$(function(){
    $("#abouta").on("click",function(){
        $("html,body").animate({
            scrollTop:$("#about").offset().top
        },2000);
    })
    $("#notesa").on("click",function(){
        $("html,body").animate({
            scrollTop:$("#notes").offset().top
        },2000);
    })

    //点击事件
    $("#btn1").on("click",function(){
        // e.preventDefault();
        console.log(11);
        $("#myIframe").css("display","block");
        // $(this).attr("href","https://www.baidu.com");
        // $(this).attr("target","myIframe");
        $(".main").css("display","none");
    })
    $("#btn2").on("click",function(){
        $("#myIframe").css("display","block");
        $(".main").css("display","none");
    })
    $("#btnvue").on("click",function(){
        $("#myIframe").css("display","block");
        $(".main").css("display","none");
    })
})