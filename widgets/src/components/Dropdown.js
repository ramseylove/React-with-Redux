import React, { useState, useEffect, useRef} from 'react'

const Dropdown = ({label, options, selected, onSelectedChange}) => {
    const [showDropdown, setShowDropdown] = useState(false)

    const ref = useRef()

    useEffect(() => {
        const dropdownListener = (event) => {
            // console.log(event.target)
            if (ref.current && ref.current.contains(event.target)) {
                return
            }
            setShowDropdown(false)
        }
        document.body.addEventListener('click', dropdownListener, {capture: true})

        return () => {
            document.body.removeEventListener('click', dropdownListener)
        }
    }, [])

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value){
            return null
        }
        return(
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })

    
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setShowDropdown(!showDropdown)} className={`ui selection dropdown ${showDropdown ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu  ${showDropdown ? 'visible transition' : ''} `}>
                        {renderedOptions}
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Dropdown
