// export { default as Button } from './button'
// export { default as Text } from './text'
import ButtonTemp from './button'
import TextTemp from "./text"
import TextEditTemp from "./textEdit"

export const Button = ButtonTemp
export const Text = TextTemp
export const TextEdit = TextEditTemp

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Button,
  Text,
  TextEdit
}
