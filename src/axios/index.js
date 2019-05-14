let catchHandle = (error) => {
    let msg = '';
    if (error.code == "ECONNABORTED") {
        msg = '服务端请求超时，请重试！';
    } else if (error.message == 'Network Error') {
        msg = '网络连接异常，请检查网络！';
    } else if (error.response && error.response.status == '404') {
        msg = '服务接口不存在，请联系后台人员!';
    } else {
        msg = '服务端请求失败，请重试！';
    }
    alert(msg);
}
