import React from 'react';
import { render } from '@testing-library/react';

import SearchField from '../SearchField';

const testId = 'testingSearchField';

type SearchFieldProps = React.ComponentProps<typeof SearchField>;

const renderComponent = (
  props: SearchFieldProps = {
    query: '',
    onChange: jest.fn(),
  },
) => render(<SearchField data-testid={testId} {...props} />);

describe('Компонент SearchField', () => {
  it('должен отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
