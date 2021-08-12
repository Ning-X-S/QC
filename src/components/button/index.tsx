import React from 'react';
import './index.css';

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str: any) {
  return typeof str === 'string';
}

// Insert one space between two chinese characters automatically.
function insertSpace(child:  React.ReactChild, needInserted: boolean) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }
  const SPACE = needInserted ? ' ' : '';
  // strictNullChecks oops.
  if (typeof child !== 'string' && typeof child !== 'number' &&
    isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {},
      child.props.children.split('').join(SPACE));
  }
  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }
    return <span>{child}</span>;
  }
  return child;
}


function Buttun(props) {
  console.log(props)
  const iconType = null
  const iconNode = null;
  const needInserted = React.Children.count(props.children) === 1 && (!iconType || iconType === 'loading');
  console.log(needInserted)
  const kids = React.Children.map(props.children, child => insertSpace(child, needInserted));
  return (
    <button className="q-button">{kids}</button>
  )
}

export default Buttun;