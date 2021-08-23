// import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { componentItem, componentsList, iframeUrl, postmessagUrl } from './utils/contant'

const componentsArrTemp: Array<any> = [
  {
    name: '按钮',
    componentName: 'Button',
    componentStyle: {},
    componentProps: {}
  },
  {
    name: '文本',
    componentName: 'Text',
    componentStyle: {},
    componentProps: {
      text: 'asdads'
    }
  }
];

let iframeContentWindow: any = null

function App() {
  const ENV: string = process.env.NODE_ENV || 'development';
  const [componentsArr, setComponentsArr]: [Array<componentItem>, Function] = useState([]);
  const [jsxDom, setJsxDom] = useState('');
  const iframeRef: any = useRef(null);

  useEffect(() => {
    setComponentsArr(componentsList)
    setJsxDom((): any => {
      return componentsArr.map((item: any, index: number) => {
        return <div key={item.componentName}>调整组件样式的组件</div>
      })
    })
    iframeContentWindow = iframeRef.current.contentWindow
  }, [componentsArr]);

  const sendMessage = () => {
    iframeContentWindow.postMessage(
      {
        cmd: 'changePageInfo',
        params: JSON.stringify(componentsArrTemp)
      }, postmessagUrl[ENV])
  };
  
  return (
    <Fragment>
      <header>
        头部
      </header>
      <div className="main-content">
        <div className="componets-name">
          {
            componentsArr.map((item: any, index: number) => {
              return <Button
                        className="componets-name-item"
                        key={item.componentName}
                size="middle"
              onClick={() => sendMessage()}>{item.name}</Button>
            })
          }
          <Fragment>
            { jsxDom }
          </Fragment>
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
