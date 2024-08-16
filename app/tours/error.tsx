'use client'

import React from 'react'

export default function error({error}: {error: Error}) {
    console.log(error);
    return (
        <div>there was an error...</div>
    )
}
