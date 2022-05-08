import {GeneratorFormInput} from "./GeneratorFormInput";
import {GeneratorFormButton} from "./GeneratorFormButton";
import {useState} from "react";
import {CheckCircle} from "phosphor-react";

interface GeneratorFormSuccessProps {
    link: string;
    restartForm: () => void;
}

export function GeneratorFormSuccess({link, restartForm}: GeneratorFormSuccessProps) {
    const [isCopied, setIsCopied] = useState(false);

    function copyToClipboard() {
        navigator.clipboard.writeText(link);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 5000);
    }

    return <>
        <div className="w-full">
            <div className="flex flex-row items-center justify-center">
                <CheckCircle fontSize="30" className="text-green-500 mr-2"/>
                <span>Sucesso! Copie o link e compartilhe da forma que preferir</span>
            </div>
            <GeneratorFormInput label="Link gerado:" placeholder="Link gerado"
                                onGeneratorFormInputChange={() => {
                                }}
                                inputValue={link}/>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <GeneratorFormButton disabled={isCopied} onClick={copyToClipboard}
                                     text={isCopied ? "Copiado!" : "Copiar Link"}/>
                <GeneratorFormButton disabled={false} onClick={restartForm} text="Gerar novo link"/>
            </div>
        </div>
    </>
}
