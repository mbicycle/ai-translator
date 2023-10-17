import OpenAI from "openai";

export default class TranslationService {
    private _openai: OpenAI;

    constructor(openai: OpenAI) {
        this._openai = openai;
    }
    
    public async translate(text: string, sourceLang: string, targetLang: string): Promise<string | null> {        
        const completion = await this._openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { "role": "system", "content": `You will be provided with a sentence in ${sourceLang}, and your task is to translate it into ${targetLang}.` },
                { "role": "user", "content": text }
            ]
        });

        const translatedText = completion.choices[0].message.content;

        return translatedText;
    }
}
