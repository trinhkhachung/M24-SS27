import React from 'react'

export default function Ex2() {
    let number = 10;
    return (
        <div>
            <ul>
                <li>{number}+{number}={number + number}</li>
                <li>{number}-{number}={number - number}</li>
                <li>{number}/{number}={number / number}</li>
                <li>{number}*{number}={number * number}</li>
            </ul>
        </div>
    )
}
