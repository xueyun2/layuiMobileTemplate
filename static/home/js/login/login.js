layui.use(['public','loginApi'],function(){
    var public = layui.public
    var request = layui.loginApi
    request.login()
    // console.log()
    public.load('登录模块')
})