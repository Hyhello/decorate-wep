/**
 * 作者：yeshengqiang
 * 时间：2018-06-30
 * 描述：news.js
 */

 import axios from '@/libs/https';

 // 获取吸音知识列表
 const getKnowledgeListApi = '/api/news/knowledge/list';

 // 获取吸音知识列表
 export const getKnowledgeList = () => axios.get(getKnowledgeListApi);
