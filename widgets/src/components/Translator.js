import React, {useState} from 'react'
import Convert from './Convert'
import Dropdown from './Dropdown'


const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
    
]

const Translator = () => {
    const [language, setLanguage] = useState(options[0])
    const [inputText, setInputText] = useState('')
    
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label">Translate:</label>
                <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
            label="Select a Language"
            options={options}
            selected={language}
            onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={inputText} language={language} />
        </div>
    )
}

export default Translator
