import axios from 'axios';

export const testHost = 'http://plrom.niracler.com:8002';
export const proHost = 'http://plrom.niracler.com:8000';
export const host = proHost;

//获取登录后的token
export const login = params => {
    return axios.post(`${host}/login/`, params)
};

//获取文章列表信息
export const articleList = params => {
    return axios.get(`${host}/api/article/`, params)
};

//获取文章内容
export const articleDetail = params => {
    return axios.get(`${host}/api/article/`, params)
};

//获取评论列表
export const commentList = params => {
    return axios.get(`${host}/api/comment/`, params)
};

//获取常见标签列表
export const tagList = params => {
    return axios.get(`${host}/api/tag/`, params)
};

//获取验证码
export const code = params => {
    return axios.post(`${host}/api/code/`, params)
};

//注册
export const register = params => {
    return axios.post(`${host}/api/register/`, params)
};