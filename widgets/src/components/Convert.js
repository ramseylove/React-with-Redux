import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BaseURL = 'https://translation.googleapis.com/language/translate/v2'
const ApiKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({ language, text }) => {
    const [convertedText, setConvertedText] = useState('')
    const [debouncedText, setDebouncedText] = useState(convertedText)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)

        }, 500)

        return () => {
            clearTimeout(timerId)
        }

    }, [text])

    useEffect(() => {
        const doTranslation = async () =>  {
            const { data } = await axios.post(
                BaseURL,
                {},
                { 
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: ApiKey,
                }}
            )
            setConvertedText(data.data.translations[0].translatedText)
        }

        doTranslation()
    }, [language, debouncedText])

    useEffect(()=> {

    })
    return (
        <div>
            {convertedText}
        </div>
    )
}

export default Convert
