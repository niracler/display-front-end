import axios from 'axios';

export const host = 'http://plrom.niracler.com:8000';

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