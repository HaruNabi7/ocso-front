export default function Header() {
    return (
        <header className="flex h-[10vh] min-h-[70px] w-full
            items-center bg-pink-500 px-6 shadow-sm
            sm:px-10">

            <img
                src="/2560px-Oxxo_Logo.svg"
                width={100}
                alt="Logo de OXXO"
                draggable={false}
                className="h-auto select-none object-contain"
            />

        </header>
    );
}