import './ContactComplete.css';

function ContactComplete() {
  return (
    <div className="contact-complete">
      <header className="header">
        <nav className="nav">
          <a href="../../" className="nav-brand">TaskFlow</a>
          <div className="nav-links">
            <a href="../../" className="nav-link">ホーム</a>
            <a href="../../about/" className="nav-link">会社概要</a>
            <a href="../../contact/" className="nav-link">お問い合わせ</a>
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
            <a href="../../" className="btn btn-primary">トップページへ戻る</a>
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
