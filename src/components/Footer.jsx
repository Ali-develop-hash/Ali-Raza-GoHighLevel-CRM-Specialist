import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <span>&copy; {new Date().getFullYear()} Ali Raza</span>
        <span className="footer__dim">Built with GoHighLevel expertise</span>
      </div>
    </footer>
  );
}
