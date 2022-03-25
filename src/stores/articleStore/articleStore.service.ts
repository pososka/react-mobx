import axios from 'axios';

import ArticleType from './articleStore.model';

const baseApiUrl = 'https://api.spaceflightnewsapi.net/v3';

const service = {
  getArticles(limit: number): Promise<Array<ArticleType>> {
    return axios
      .get(`${baseApiUrl}/articles`, { params: { _limit: limit } })
      .then((response) => response.data);
  },

  getArticle(id: number): Promise<ArticleType> {
    return axios
      .get(`${baseApiUrl}/articles/${id}`)
      .then((response) => response.data);
  },
};

export default service;
