import React, { useState, useEffect, useRef} from 'react'

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [showDropdown, setShowDropdown] = useState(false)

    const ref = useRef()

    useEffect(() => {
        document.body.addEventListener('click',(event)=> {
            // console.log(event.target)
            if (ref.current.contains(event.target)) {
                return
            }
            setShowDropdown(false)
        })
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
                <label className="label">Select a Color</label>
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
