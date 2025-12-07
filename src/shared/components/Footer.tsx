import './Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <p>Loveletter {new Date().getFullYear()}</p>
        </footer>
    );
};