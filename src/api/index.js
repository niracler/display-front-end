import axios from 'axios';

export const flaskHost = process.env.VUE_APP_FLASK_HOST;
export const testHost = process.env.VUE_APP_TEST_HOST;
export const proHost = process.env.VUE_APP_PRO_HOST;
export const host = proHost;

//获取游戏实体信息
export const entityInfo = params => {
    return axios.get(`${flaskHost}/api/entity/`, params)
};

//获取redis信息
export const redisInfo = params => {
    return axios.get(`${flaskHost}/api/redis/`, params)
};

//获取mongodb信息
export const mongoInfo = params => {
    return axios.get(`${flaskHost}/api/mongo/`, params)
};

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