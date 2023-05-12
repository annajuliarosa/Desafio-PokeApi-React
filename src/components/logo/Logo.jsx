import React from 'react'

export default function Logo(props) {
    return (
        <div className='logo'>
            <img src={props.url} alt={props.alt} />
        </div>
    )
}
