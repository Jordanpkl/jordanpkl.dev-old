import Link from 'next/link'

export default function Footer() {
    var year = new Date().getFullYear();
    var firstYear = 2023;

    return (
        <nav className="fixed bottom-0 right-0 z-50" >
            <Link href="https://www.jordanpkl.dev/" className="text-right">
                <span className="text-sm font-nfont5x7 px-1 bg-black bg-opacity-40">{(firstYear < year) ? `${firstYear} -> ${year}` : year} - Jordanpkl </span>
            </Link>
        </nav>
    )
}
