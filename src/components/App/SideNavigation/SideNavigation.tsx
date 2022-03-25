import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import { HomeFilled, InfoCircleFilled } from '@ant-design/icons';

import classes from './SideNavigation.module.scss';

const SideNavigation: React.FC = () => (
  <Layout.Sider>
    <div className={classes.brand}>
      <img src="./assets/logo.svg" alt="Brand" />
      <span>Brand</span>
    </div>

    <nav className={classes.navigation}>
      <NavLink to="/news" className={classes.link}>
        <HomeFilled />
        <span>Новости</span>
      </NavLink>

      <NavLink to="/about" className={classes.link}>
        <InfoCircleFilled />
        <span>О проекте</span>
      </NavLink>
    </nav>
  </Layout.Sider>
);

export default SideNavigation;
