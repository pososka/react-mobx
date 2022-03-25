import React from 'react';
import { Alert } from 'antd';

type ErrorProps = {
  message: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => (
  <Alert type="error" message="Ошибка" description={message} showIcon />
);

export default Error;
