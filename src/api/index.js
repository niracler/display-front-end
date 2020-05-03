import axios from 'axios';

export const ginHost = process.env.VUE_APP_GIN_HOST;
export const flaskHost = process.env.VUE_APP_FLASK_HOST;
export const proHost = process.env.VUE_APP_PRO_HOST;
export const mediaHost = process.env.VUE_APP_MEDIA_HOST;
export const host = proHost;

//获取用户操作
export const userOperationInfo = params => {
    return axios.get(`${ginHost}/api/v1/uo`, params)
};

//获取访问量信息
export const visitCountInfo = params => {
    return axios.get(`${ginHost}/api/v1/vc`, params)
};

//获取游戏实体信息
export const entityInfo = params => {
    return axios.get(`${ginHost}/api/v1/game`, params) //原来这里就用到了自定义插值，模板字符串以及箭头定义函数
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

//获取事件列表
export const eventList = params => {
    return axios.get(`${host}/api/event/`, params)
};

//获取事件内容
export const eventDetail = (id, params) => {
    return axios.get(`${host}/api/event/`+id+`/`, params)
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