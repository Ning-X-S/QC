import './index.css';

function Text(props: any) {
  return (
    <span className='q-text'>
      {props.text}
    </span>
  )
}

export default Text;