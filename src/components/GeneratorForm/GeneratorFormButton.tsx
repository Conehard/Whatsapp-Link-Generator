interface GeneratorFormButtonProps {
    disabled: boolean;
    onClick: () => void;
    text: string;
}
export function GeneratorFormButton({ disabled, onClick, text }: GeneratorFormButtonProps) {
    return <>
        <button type="button" disabled={disabled} onClick={onClick}
                className="py-2 px-6 mt-2 bg-dracula-green rounded-md border-transparent text-sm leading-6
            hover:opacity-70 transition-colors focus:outline-none text-white font-bold uppercase w-full md:w-[45%]
            disabled:opacity-50">
            {text}
        </button>
    </>
}
