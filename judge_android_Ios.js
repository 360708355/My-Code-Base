//Ios 與andriod判斷



//第一种
var userAgent = window.navigator.userAgent.toLowerCase();
	if (userAgent.match(/iphone/i) || userAgent.match(/ipad/i) || userAgent.match(/ipod/i)) {

	} else if (userAgent.match(/android/i)) {

	} else {

	}


//第二种


var Terminal = {
    // 辨别移动终端类型
    platform : function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            windows: u.indexOf('Windows NT') > -1 ,// windows
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //iPad
            mac: u.indexOf('Mac')// mac
        };
    }(),
    language : (navigator.browserLanguage || navigator.language).toLowerCase()
}

if(Terminal.platform.android){

} else if(Terminal.platform.iPhone){

}




