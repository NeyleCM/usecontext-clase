import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
    const {language, changeLanguage} = useLanguage();

    const handleChangeLanguage = (e) => {
        changeLanguage(e.target.value)
    }

    return (
        <>
            <label htmlFor="">Select Language: </label>
            <select value={language} onChange={handleChangeLanguage}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>

            </select>
        </>
    )
}

export default LanguageSelector