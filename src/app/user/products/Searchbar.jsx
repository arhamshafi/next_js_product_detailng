"use client"

import React, { useState } from 'react'

function Searchbar({ prd }) {

    const [srch, setsrch] = useState("")

    const srch_handler = (e) => {
        setsrch(e.target.value)
        const filter = prd.filter(ele => ele.name.toLowerCase().includes(srch.toLowerCase()))

    }

    return (
        <input type="text" onChange={srch_handler} value={srch} className="w-[300px] h-9 bg-white rounded-2xl block mx-auto mt-10 px-3 text-md font-bold outline-none " />
    )
}

export default Searchbar
