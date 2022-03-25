import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import PostItem from '../PostItem';

describe('Компонент PostItemList', () => {
  beforeEach(() => {
    render(
      <PostItem
        post={{
          featured: false,
          id: 14135,
          imageUrl:
            'https://spacenews.com/wp-content/uploads/2018/12/ChangE5T1-2014-far-side-moon-earth-CAS-0.jpg',
          newsSite: 'SpaceNews',
          publishedAt: '2022-03-02T17:03:49.000Z',
          summary:
            'A spent rocket upper stage from Chinas 2014 Change-5 T1 mission thought set to impact the moon did not reenter the atmosphere as previously stated, according to U.S. Space Command.',
          title:
            'Moon impact: Chinese rocket stage still in space says U.S. Space Command',
          updatedAt: '2022-03-02T17:03:49.302Z',
          url: 'https://spacenews.com/moon-impact-chinese-rocket-stage-still-in-space-says-u-s-space-command/',
        }}
      />,
    );
  });

  afterEach(cleanup);

  it('должен отображать заголовок', () => {
    expect(screen.getByText(/Moon impact/i)).toBeInTheDocument();
  });

  it('должен отображать часть заголовка', () => {
    expect(screen.getByText(/spent rocket upper/i).textContent?.length).toBe(
      53,
    );
  });
});
