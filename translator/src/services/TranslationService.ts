export default

class TranslationService {
    translate(text, sourceLang, targetLang) {
        console.log(`Translate (${sourceLang} -> ${targetLang}): ${text}`);
        
        return `Translated text: ${Date.now()}`;
    }
}
