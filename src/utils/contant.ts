/* eslint-disable @typescript-eslint/consistent-type-assertions */
export interface componentItem {
  name: string,
  componentName: string,
  content?: string,
  componentStyle: { [key: string] : string },
  componentProps: { [key: string] : string }
}

export const componentItemTemp = <componentItem>{};

export const componentsList: Array<componentItem> = [
  {
    name: '按钮',
    content: '按钮',
    componentName: 'Button',
    componentStyle: {},
    componentProps: {}
  },
  {
    name: '文本',
    content: '',
    componentName: 'Text',
    componentStyle: {},
    componentProps: {
      text: '文本'
    }
  },
  {
    name: '图片',
    content: '',
    componentName: 'Picture',
    componentStyle: {},
    componentProps: {}
  }
]

export const iframeUrl: { [key: string]: string } = {
  development: 'http://localhost:7002'
}
export const postmessagUrl: { [key: string]: string } = {
  development: '*'
} 