import { makeAutoObservable, action } from 'mobx';

import service from './articleStore.service';
import ArticleType from './articleStore.model';

class ArticleStore {
  articles: Array<ArticleType>;

  selectedArticle: ArticleType;

  isLoading: boolean;

  error: {
    has: boolean;
    message: string;
  };

  query: string;

  isQuerying: boolean;

  page: number;

  perPage: number;

  constructor() {
    makeAutoObservable(this, {
      setArticles: action.bound,
      setIsLoading: action.bound,
      setError: action.bound,
      clearError: action.bound,
      setQuery: action.bound,
      setIsQuerying: action.bound,
      setSelectedArticle: action.bound,
      nextPage: action.bound,
      goFirstPage: action.bound,
      loadArticles: action.bound,
      loadArticle: action.bound,
    });

    this.articles = [];
    this.selectedArticle = {} as ArticleType;
    this.isLoading = false;
    this.error = {
      has: false,
      message: '',
    };
    this.query = '';
    this.isQuerying = false;
    this.page = 1;
    this.perPage = 3;
  }

  setArticles(articles: Array<ArticleType>): void {
    this.articles = articles;
  }

  setIsLoading(value: boolean): void {
    this.isLoading = value;
  }

  setError(message: string): void {
    this.error.has = true;
    this.error.message = message;
  }

  clearError(): void {
    this.error.has = false;
    this.error.message = '';
  }

  setQuery(value: string): void {
    this.query = value;
  }

  setIsQuerying(value: boolean) {
    this.isQuerying = value;
  }

  setSelectedArticle(article: ArticleType): void {
    this.selectedArticle = article;
  }

  goFirstPage(): void {
    this.page = 1;
  }

  nextPage(): void {
    this.page += 1;
  }

  get offset(): number {
    return this.page * this.perPage;
  }

  get canNextPage(): boolean {
    return (
      this.offset < this.filteredCount && this.perPage < this.filteredCount
    );
  }

  get filtered(): Array<ArticleType> {
    if (this.query.length > 3) {
      if (!this.isQuerying) {
        this.goFirstPage();
      }

      this.setIsQuerying(true);

      return this.articles.filter((article) =>
        article.title.match(new RegExp(this.query, 'i')),
      );
    }

    if (this.isQuerying) {
      this.goFirstPage();
    }

    this.setIsQuerying(false);

    return this.articles;
  }

  get paginated() {
    return this.filtered.slice(0, this.offset);
  }

  get selected(): ArticleType {
    return this.selectedArticle;
  }

  get count(): number {
    return this.articles.length;
  }

  get filteredCount(): number {
    return this.filtered.length;
  }

  loadArticles(limit = 30): void {
    this.setIsLoading(true);

    service
      .getArticles(limit)
      .then((articles) => {
        this.setArticles(articles);
      })
      .catch((error: Error) => {
        this.setError(error.message);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  }

  loadArticle(id: number): void {
    this.setIsLoading(true);

    service
      .getArticle(id)
      .then((article) => {
        this.setSelectedArticle(article);
      })
      .catch((error: Error) => {
        this.setError(error.message);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  }
}

export default new ArticleStore();
