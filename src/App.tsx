// import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import { Button, Modal } from 'antd';
import { LeftOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { componentItem, componentItemTemp, componentsList, iframeUrl, postmessagUrl } from './utils/contant';
import { TextEdit } from './components';

const componentsArrTemp: Array<componentItem> = [
  {
    name: '按钮',
    componentName: 'Button',
    componentStyle: {},
    componentProps: {}
  }
];

let iframeContentWindow: any = null

function App(props: any): React.ReactElement {
  const ENV: string = process.env.NODE_ENV || 'development';
  const [componentsArr, setComponentsArr]: [Array<componentItem>, Function] = useState([]);
  const [currIndex, setCurrIndex]: [number, Function] = useState(0)
  const [currComponent, setCurrComponent]: [componentItem, Function] = useState(componentItemTemp)
  const [editComponent, setEditComponent]: [React.ReactNode, Function] = useState('');
  const iframeRef: React.MutableRefObject<HTMLIFrameElement | null> = useRef(null);

  useEffect(() => {
    setComponentsArr(componentsList)
    setCurrComponent(componentsList[0])
    iframeContentWindow = iframeRef.current?.contentWindow
  }, [componentsArr]);
  
  const sendMessage = useCallback(() => {
    iframeContentWindow.postMessage(
      {
        cmd: 'changePageInfo',
        params: JSON.stringify(componentsArrTemp)
      }, postmessagUrl[ENV])
  }, [ENV])

  const dataChange = useCallback((data: any) => {
    console.log(data)
    if (componentsArrTemp[currIndex]) {
      componentsArrTemp[currIndex] = data
      sendMessage()
    }
  }, [currIndex, sendMessage])
  
  useEffect(() => {
    setEditComponent((): any => {
      if (currComponent.componentName === 'Text') {
        return (
          <Fragment>
            <TextEdit dataChange={dataChange} componentData={currComponent}></TextEdit>
          </Fragment>
        )
      }
      return ''
    })
  }, [currComponent, dataChange]);

  const addComponent = (item: componentItem) => {
    setCurrIndex(componentsArrTemp.length)
    setCurrComponent(item);
    componentsArrTemp.push(item);
    sendMessage()
  }

  const releaseSave = (type: string) => {
    console.log(type)
  };

  const backMain = () => {
    Modal.confirm({
      title: '确认返回上一页吗？',
      icon: <ExclamationCircleOutlined />,
      content: '当前页面存在信息修改，尚未保存。',
      okText: '确认',
      cancelText: '取消',
      onCancel: () => {
        console.log('cancel')
      },
      onOk: () => {
        console.log('ok')
      }
    });
  };


  return (
    <Fragment>
      <header>
        <LeftOutlined style={{ cursor: 'pointer' }} title="返回" onClick={() => backMain()} />
        <div>
          <Button
            size="middle"
            type="primary"
            style={{ marginRight: '20px' }}
            onClick={() => releaseSave('save')}>保存</Button>
          <Button
            size="middle"
            type="primary"
            danger
            onClick={() => releaseSave('release')}>发布</Button>
        </div>
      </header>
      <div className="main-content">
        <div className="componets-name">
          {
            componentsArr.map((item: componentItem, index: number) => {
              return <Button
                        className="componets-name-item"
                        key={item.componentName}
                        size="middle"
                        onClick={() => addComponent(item)}>{item.name}</Button>
            })
          }
          <div className="edit-component-style-box">
            { editComponent }
          </div>
        </div>
        <iframe
          ref={iframeRef}
          className="iframe"
          title="目标页面"
          src={iframeUrl[ENV]} />
      </div>
    </Fragment>
  );
}

export default App;
