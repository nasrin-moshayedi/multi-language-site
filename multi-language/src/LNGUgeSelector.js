import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div onChange={changeLanguage}>
        <select onClick={changeLanguage} >
            <option value={"en"}>
                English
            </option>
            <option value={"zh-hk"}>
                Traditional Chinese
            </option>
        </select>
      {/*<input type="radio" value="en" name="language" defaultChecked /> English*/}
      {/*<input type="radio" value="zh-hk" name="language"/> Traditional Chinese*/}
    </div>
  )
};

export default LanguageSelector
