export default function About() {
    return (
        <div className="flex flex-col items-center p-24">
            <p className="py-5 text-8xl text-transparent text-center bg-clip-text font-bold bg-gradient-to-r from-green-400 to-blue-300">
                TypeField
            </p>
            <p className="p-5">
                Built using next, tailwindcss, heroicons, daisyui and zustand.
                Checkout the repository at <a className="link" href="https://github.com/bhushan-mdn/typefield">https://github.com/bhushan-mdn/typefield</a>
            </p>
        </div>
    );
}