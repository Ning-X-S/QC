import { ChangeEvent, useState, useEffect } from 'react';
import './index.css';
import { Form, Input, Button } from 'antd';

function TextEdit(props: any): React.ReactElement {
  const [content, setContent] = useState('')

  useEffect(() => {
    let componentData = props.componentData
    componentData.content = content
    componentData.componentProps.text = content
    props.dataChange(componentData)
  }, [content, props])

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="正文"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => setContent(event.target.value)} />
      </Form.Item>

      <Form.Item
        label="文本颜色"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TextEdit;