import React from 'react'

export default function Ex4() {
    const style = [
        { width: '200px', height: '200px', backgroundColor: 'red' },
        { width: '200px', height: '200px', backgroundColor: 'blue' },
        { width: '200px', height: '200px', backgroundColor: 'green' }
    ];

    return (
        <>
            <div style={{display:'flex'}}>
                {style.map(e => {
                    return (<div style={e}>{e.backgroundColor}</div>)
                })}
            </div>
        </>
    )
}
