import "@fontsource/nunito-sans";
import {WhatsappLogo} from "phosphor-react";
import {GeneratorForm} from "./GeneratorForm";
import {useState} from "react";
import {GeneratorFormSuccess} from "./GeneratorForm/GeneratorFormSuccess";

export function Generator() {
    const [success, setSuccess] = useState(false);
    const [link, setLink] = useState("");

    function handleLinkGenerated(link: string) {
        setSuccess(true);
        setLink(link);
    }

    function handleRestartForm() {
        setSuccess(false);
    }

    return <>
        <div className="flex flex-col justify-center items-center h-[100vh] w-full px-2">
            <div className="flex justify-center items-center bg-white rounded-md py-2 px-5 mb-7">
                <WhatsappLogo
                    className="text-green-500 mr-3" size="35" weight="fill"/>
                <span className="text-zinc-700 font-medium text-lg font-bold">WhatsApp Link Generator</span>
            </div>
            <div className="bg-white p-3 rounded md:min-w-[500px]">
                {success ? <GeneratorFormSuccess link={link} restartForm={handleRestartForm}/> :
                    <GeneratorForm onLinkGenerated={handleLinkGenerated}/>}
            </div>
            <footer className="text-xs text-neutral-400 mt-2">
                Feito com <span className="text-red-400">♥</span> por <a
                href="https://github.com/conehard" className="underline underline-offset-2"
                  target="_blank">conehard</a>
            </footer>
        </div>
    </>
}
