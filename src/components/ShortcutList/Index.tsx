import React, {useState} from 'react'
import './style.css'

const ShortcutList = () => {
  const [show, setShow] = useState(false)

  return (
    <button className="shortcut-list" onClick={() => setShow(!show)}>
      <div className="shortcut-list-arrow">{show ? '>' : '<'}</div>
      {show ? (<div className="shortcut-list-icons">
        <button className="shortcut-list-icon">💌</button>
        <button className="shortcut-list-icon">💌</button>
        <button className="shortcut-list-icon">💌</button>
        <button className="shortcut-list-icon">💌</button>
        <button className="shortcut-list-icon">💌</button>
        <button className="shortcut-list-icon">💌</button>
      </div>) : ''}
    </button>
  )
}

export default ShortcutList