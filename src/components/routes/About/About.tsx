import React from 'react';
import { Typography } from 'antd';

import classes from './About.module.scss';

const About: React.FC = () => (
  <div className={classes.container}>
    <Typography.Title className={classes.title}>О проекте</Typography.Title>

    <Typography.Paragraph>
      Здесь ты можешь найти самые свежие новости о космических достижениях, о
      компаниях NASA и Роскосмос.&nbsp;
      <strong>Пудь в курсе событий вместе с нами.</strong>
    </Typography.Paragraph>
  </div>
);

export default About;
