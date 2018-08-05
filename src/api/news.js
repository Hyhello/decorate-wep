/**
 * 作者：yeshengqiang
 * 时间：2018-06-30
 * 描述：news.js
 */

 import axios from '@/libs/https';

 // 获取吸音知识列表
 const getKnowledgeListApi = '/api/news/knowledge/list';

 // 获取客户评价列表
 const getEvaluationListApi = '/api/news/evaluation/list';

 // 获取行业新闻列表
 const getIndustryListApi = '/api/news/industry/list';

 // 获取企业新闻列表
 const getEnterpriseListApi = '/api/news/enterprise/list';

 // 获取吸音知识列表
 export const getKnowledgeList = () => axios.get(getKnowledgeListApi);

 // 获取客户评价列表
 export const getEvaluationList = () => axios.get(getEvaluationListApi);

  // 获取行业新闻列表
  export const getIndustryList = () => axios.get(getIndustryListApi);

 // 获取企业新闻列表
 export const getEnterpriseList = () => axios.get(getEnterpriseListApi);
