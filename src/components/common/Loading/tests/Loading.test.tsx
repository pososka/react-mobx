import React from 'react';
import { render } from '@testing-library/react';

import Loading from '../Loading';

const testId = 'testingLoading';

type LoadingProps = React.ComponentProps<typeof Loading>;

const renderComponent = (props: LoadingProps = {}) => render(<Loading data-testid={testId} {...props} />);

describe('Компонент Loading', () => {
  it('должен отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
