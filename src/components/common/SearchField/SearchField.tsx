import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

type SearchFormProps = {
  query: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SearchField: React.FC<SearchFormProps> = ({ query, onChange }) => (
  <Input
    value={query}
    onChange={onChange}
    placeholder="Поиск..."
    size="large"
    prefix={<SearchOutlined />}
    allowClear
  />
);

export default SearchField;
