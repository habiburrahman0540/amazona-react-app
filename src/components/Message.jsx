import React from 'react'

const Message = (props) => {
    return (
        <div className={`alert alert-${props.varient} || 'info' center`}>
            {props.children}
        </div>
    )
}

export default Message
