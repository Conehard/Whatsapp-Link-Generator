interface GeneratorFormTextareaProps {
    label: string;
    placeholder: string;
    value?: string;
    onGeneratorFormTextareaChange: (value: string) => void;
}

export function GeneratorFormTextarea({onGeneratorFormTextareaChange, label, placeholder, value}: GeneratorFormTextareaProps) {
    return <>
        <label className="w-full mt-2 text-dracula-currentline text-xs font-bold uppercase">{label}</label>
        <textarea onChange={(event) => onGeneratorFormTextareaChange(event.target.value)} placeholder={placeholder} value={value} className="text-sm placeholder-zinc-400 text-zinc-500 border-zinc-600
                   rounded focus:border-zinc-500 w-full min-h-[112px] focus:ring-zinc-500 focus:ring-1 focus: outline-none
                  resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"></textarea>
    </>
}
