export interface componentItem {
  name: string,
  componentName: string,
  content?: string,
  componentStyle: { [key: string] : string },
  componentProps: { [key: string] : string }
}

export const componentsList: Array<componentItem> = [
  {
    name: '按钮',
    content: '按钮1',
    componentName: 'Button',
    componentStyle: {},
    componentProps: {}
  },
  {
    name: '按钮2',
    content: '按钮2',
    componentName: 'Text',
    componentStyle: {},
    componentProps: {}
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