/*
  Radmin不对外开发用于小染子产品开发
  版权所有：忆信 QQ：732279717
  未经作者授权切勿使用后果自负
 */
layui.define(function(exports){

    var $=layui.$,
        element = layui.element,
        dropdown = layui.dropdown;

    changeMobile();
    changePc();
    window.onresize = function(){
        changeMobile();
        changePc();
    };
    function changeMobile(){
        if(document.body.clientWidth<=992){
            $("#mobiles").show();
            $("#mobile").hide();
            $("#assembly1").hide();
            $("#assembly2").hide();
            $("#mobile").attr("class","layui-nav layui-nav-tree navbar");
        }
    }

    function changePc(){
        if(document.body.clientWidth>992){
            $("#mobiles").hide();
            $("#mobile").show();
            $("#assembly1").show();
            $("#assembly2").show();
            $("#mobile").attr("class","layui-nav navbar");
        }
    }

    $('#navs').on('click', function() {
        if($("#mobiles").find("i").attr("class")=='layui-icon layui-icon-spread-left icon-color'){
            $("#navs").attr("class","layui-icon layui-icon-shrink-right icon-color");
            $("#mobile").show();
        }else{
            $("#navs").attr("class","layui-icon layui-icon-spread-left icon-color");
            $("#mobile").hide();
        }
    });

    $("li>a").click(function () {
        $("#iframeMain").attr("src",$(this).attr("r-href"));
    });

    $("dd>a").click(function () {
        $("#iframeMain").attr("src",$(this).attr("r-href"));
    });

    $("#layui-v").html('layui-v'+layui.v);

    var radmin='1.0.0';
    $("#radmin-v").html('Radmin-v'+radmin);

    exports('index', {});
});