import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography, Image } from 'antd';

import { articleStore } from '../../../stores/articleStore';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import classes from './Single.module.scss';

const Single: React.FC = () => {
  const { id } = useParams();
  const { isLoading, error, selected, loadArticle } = articleStore;

  useEffect(() => {
    loadArticle(Number(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.container}>
      {error.has ? (
        <Error message={error.message} />
      ) : (
        <article className={classes.article}>
          <Image
            className={classes.image}
            src={selected.imageUrl}
            alt={selected.title}
          />

          <div className={classes.body}>
            <Typography.Title>{selected.title}</Typography.Title>

            <Typography.Paragraph>{selected.summary}</Typography.Paragraph>
          </div>
        </article>
      )}
    </div>
  );
};

export default observer(Single);
