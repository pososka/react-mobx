import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Typography, Image } from 'antd';

import { ArticleType } from '../../../../../stores/articleStore';
import excerpt from '../../../../../utils/excerpt';
import classes from './PostItem.module.scss';

export type View = 'grid' | 'list';

type PostItemProps = {
  post: ArticleType;
  view: View;
};

const PostItem: React.FC<PostItemProps> = ({ post, view }) => {
  const className = classNames({
    [classes.component]: true,
    [classes.card]: view === 'grid',
  });

  return (
    <article className={className}>
      <div className={classes.imageWrapper}>
        <Image
          width="100%"
          height="100%"
          className={classes.image}
          src={post.imageUrl}
          alt={post.title}
        />
      </div>

      <div className={classes.body}>
        <Typography.Title level={3}>{post.title}</Typography.Title>

        <Typography.Paragraph>{excerpt(post.summary, 50)}</Typography.Paragraph>

        <Link to={`/news/single/${post.id}`}>Полная статья</Link>
      </div>
    </article>
  );
};

export default PostItem;
