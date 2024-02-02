import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

export default function HomePage() {
  return (
    <div>
      <Form>
        <Form.Item label="用户名">
          <Input />
        </Form.Item>
        <Form.Item label="密码">
          <Input />
        </Form.Item>
        <Button>提交</Button>
      </Form>
    </div>
  );
}
