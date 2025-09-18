export default function Footer() {
    return (
        <>
            <footer className="py-6 bg-white border-t border-gray-200 text-center text-gray-600 font-sans">
                &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
            </footer>
        </>
    )
}