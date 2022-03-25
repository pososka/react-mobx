import React from 'react';

import { ArticleType } from '../../../../stores/articleStore';
import PostItem, { View } from './PostItem';
import classes from './PostList.module.scss';

type PostListProps = {
  articles: ArticleType[];
  view: View;
};

const PostList: React.FC<PostListProps> = ({ articles, view }) => (
  <div className={classes.component}>
    {articles.map((article) => (
      <PostItem key={article.id} post={article} view={view} />
    ))}
  </div>
);

export default PostList;
