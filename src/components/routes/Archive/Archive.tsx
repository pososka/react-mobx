import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Typography, Button, Space } from 'antd';
import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';

import PostList, { View } from './PostList';
import SearchField from '../../common/SearchField';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { articleStore } from '../../../stores/articleStore';
import { useLocalStorage } from '../../../hooks';
import classes from './Archive.module.scss';

const Archive: React.FC = () => {
  const [view, setView] = useLocalStorage<View>('display-view', 'list');
  const {
    isLoading,
    error,
    query,
    paginated,
    canNextPage,
    nextPage,
    setQuery,
    loadArticles,
  } = articleStore;

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    loadArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Typography.Title className={classes.title}>Новости</Typography.Title>

      <div className={classes.container}>
        {error.has ? (
          <Error message={error.message} />
        ) : (
          <>
            <SearchField query={query} onChange={changeHandler} />

            <Space size={0} className={classes.buttonGroup}>
              <Button
                size="large"
                type="text"
                title="Отображение списком"
                onClick={() => setView('list')}
              >
                <MenuOutlined />
              </Button>

              <Button
                size="large"
                type="text"
                title="Отображение таблицей"
                onClick={() => setView('grid')}
              >
                <AppstoreOutlined />
              </Button>
            </Space>

            <PostList articles={paginated} view={view} />

            {canNextPage && <Button onClick={nextPage}>Показать еще</Button>}
          </>
        )}
      </div>
    </>
  );
};

export default observer(Archive);
