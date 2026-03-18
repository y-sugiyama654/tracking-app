import { Link } from 'react-router-dom';
import './ContactComplete.css';

function ContactComplete() {
  return (
    <div className="contact-complete">
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav-brand">TaskFlow</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">ホーム</Link>
            <Link to="/about" className="nav-link">会社概要</Link>
            <Link to="/contact" className="nav-link">お問い合わせ</Link>
          </div>
        </nav>
      </header>

      <main className="complete-main">
        <div className="container">
          <div className="complete-card">
            <div className="success-icon">✓</div>
            <h1 className="complete-title">お問い合わせを受け付けました</h1>
            <p className="complete-message">
              お問い合わせいただきありがとうございます。<br />
              担当者より2営業日以内にご連絡いたします。
            </p>
            <Link to="/" className="btn btn-primary">トップページへ戻る</Link>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 TaskFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactComplete;
