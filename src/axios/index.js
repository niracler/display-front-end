//引入vue
import axios from 'axios';

//全局状态控制引入
import store from '../store/store';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.userInfo.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `Token ${store.state.userInfo.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });


// http response 拦截器
axios.interceptors.response.use(
    undefined,
    error => {
        let res = error.response;
        switch (res.status) {
            case 401:
                self.console.log('未登录 或者token过期');
                break;
            case 403:
                self.console.log('您没有该操作权限');
                break;
            case 500:
                self.console.log('服务器错误');
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

