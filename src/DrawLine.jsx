import React, { useEffect, useRef, useState } from 'react'

const DrawLine = () => {
    const [isExpand, setIsExpand] = useState(true)
    const line = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver(enteries => {
            setIsExpand(enteries[0].isIntersecting)
            if (enteries[0].isIntersecting) observer.unobserve(line.current)
        })
        observer.observe(line.current)
    })
    return <hr ref={line} className={`${isExpand && 'expand'}`} />
}

export default DrawLine
