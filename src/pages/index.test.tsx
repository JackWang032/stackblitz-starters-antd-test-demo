import { render } from '@testing-library/react';
import HomePage from './index';
import { input } from 'ant-design-testing';

test('test', () => {
  const { container } = render(<HomePage />);
  const uname = input.query(container);
  const pwd = input.query(container, 1);
  input.fireChange(uname!, 'aaa');
  input.fireChange(pwd!, 'aaa');
  expect(uname!.value).toEqual('aaa');
});
