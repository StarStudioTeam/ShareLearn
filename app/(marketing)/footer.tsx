import {Button} from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/language/hr.svg"
                        alt="Croatian"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Croatian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/language/es.svg"
                        alt="Spanish"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Spanish
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/language/fr.svg"
                        alt="French"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    French
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/language/it.svg"
                        alt="Italian"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Italian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/language/jp.svg"
                        alt="Japanese"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Japanese
                </Button>
            </div>
        </footer>
    )
}
