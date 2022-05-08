import {useEffect, useState} from "react";

interface GeneratorFormSelectProps {
    label: string;
    emptyMessage: string;
    options: object;
    inputValue?: string;
    onGeneratorFormSelectChange: (value: string) => void;
}

export function GeneratorFormSelect({onGeneratorFormSelectChange, options, label, emptyMessage, inputValue}: GeneratorFormSelectProps) {
    const [value, setValue] = useState(inputValue || '');

    useEffect(() => {
        onGeneratorFormSelectChange(value);
    }, [value]);

    return <>
        <label className="w-full mt-2 text-dracula-currentline text-xs font-bold uppercase">{label}</label>
        <select onChange={(event) => setValue(event.target.value)} value={value} className="text-sm placeholder-zinc-400 text-zinc-500 border-zinc-600
                   rounded focus:border-zinc-500 w-full focus:ring-zinc-500 focus:ring-1 focus: outline-none
                  resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin">
            <option value="">{emptyMessage}</option>
            {
                Object.entries(options).map(([key, value]) => {
                    return <option key={key} value={key}>{value.title}</option>
                })
            }
        </select>
    </>
}
