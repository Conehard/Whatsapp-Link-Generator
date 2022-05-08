import {GeneratorFormInput} from "./GeneratorFormInput";
import {GeneratorFormTextarea} from "./GeneratorFormTextarea";
import {GeneratorFormSelect} from "./GeneratorFormSelect";
import {isMobile} from 'react-device-detect';
import {useEffect, useState} from "react";
import {GeneratorFormButton} from "./GeneratorFormButton";

interface GeneratorFormProps {
    onLinkGenerated: (text: string) => void;
}

const selectTypes = {
    MOBILE: {
        title: 'MOBILE'
    },
    DESKTOP: {
        title: 'DESKTOP'
    },
};

export type SelectTypes = keyof typeof selectTypes;

export function GeneratorForm({onLinkGenerated}: GeneratorFormProps) {
    const [selectedType, setSelectedType] = useState(isMobile ? 'MOBILE' : "DESKTOP");
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    function handleGenerateButtonClick() {
        const phoneNumber = phone.replace(/\D/g, '');
        let link = '';
        if (selectedType === 'MOBILE') {
            link = `https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${encodeURI(message)}`;
        } else {
            link = `https://web.whatsapp.com/send?phone=55${phoneNumber}&text=${encodeURI(message)}`;
        }
        if (link) {
            onLinkGenerated(link);
        }
    }

    return <>
        <div className="flex flex-col justify-center items-center">
            <GeneratorFormSelect label="Selecione a plataforma que você está" emptyMessage="Nenhum item selecionado"
                                 options={selectTypes}
                                 onGeneratorFormSelectChange={setSelectedType} inputValue={selectedType}/>
            <GeneratorFormInput label="Número do Celular" mask="(99) 99999-9999" inputValue={phone}
                                placeholder="Digite o número do celular"
                                onGeneratorFormInputChange={setPhone}/>
            <GeneratorFormTextarea label="Mensagem" placeholder="Digite a mensagem"
                                   onGeneratorFormTextareaChange={setMessage} value={message}/>
            <GeneratorFormButton disabled={!phone} onClick={handleGenerateButtonClick} text="Gerar Link"/>
        </div>
    </>
}
