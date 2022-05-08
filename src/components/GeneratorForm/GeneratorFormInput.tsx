import {useEffect, useState} from "react";
import InputMask from "react-input-mask";

interface GeneratorFormInputProps {
    label: string;
    placeholder: string;
    inputValue?: string;
    mask?: string;
    onGeneratorFormInputChange: (value: string) => void;
}


export function GeneratorFormInput({onGeneratorFormInputChange, label, mask, placeholder, inputValue}: GeneratorFormInputProps) {
    const [value, setValue] = useState(inputValue || '');

    useEffect(() => {
        onGeneratorFormInputChange(value);
    }, [value]);

    return <>
        <label className="w-full mt-2 text-dracula-currentline text-xs font-bold uppercase ">{label}</label>
        {mask ?
            <InputMask mask={mask} placeholder={placeholder} value={value} onChange={event => setValue(event.target.value)}
                       className="border-solid border-[1px] h-[38px] text-sm  placeholder-zinc-400 text-zinc-500 border-zinc-600
        focus:border-zinc-500 min-w-[304px] w-full focus:ring-zinc-500 focus:ring-1 focus: outline-none placeholder: px-3
                  rounded"/>
            :
            <input type="text" placeholder={placeholder}
                   onChange={(event) => setValue(event.target.value)}
                   value={value}
                   className="text-sm placeholder-zinc-400 text-zinc-500 border-zinc-600
        focus:border-zinc-500 min-w-[304px] w-full focus:ring-zinc-500 focus:ring-1 focus: outline-none
                  rounded"/>
        }
    </>
}
