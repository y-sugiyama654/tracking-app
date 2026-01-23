import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信の処理（実際の実装ではAPIを呼び出す）
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact">
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav-brand">TaskFlow</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">ホーム</Link>
            <Link to="/about" className="nav-link">会社概要</Link>
            <Link to="/contact" className="nav-link active">お問い合わせ</Link>
          </div>
        </nav>
      </header>

      <main className="contact-main">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h1 className="contact-title">お問い合わせ</h1>
              <p className="contact-description">
                TaskFlowに関するご質問、お見積もり、デモのご依頼など、
                お気軽にお問い合わせください。
                担当者より2営業日以内にご返信いたします。
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📧</div>
                  <div>
                    <h3>メール</h3>
                    <p>contact@taskflow.example.com</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📞</div>
                  <div>
                    <h3>電話</h3>
                    <p>0120-XXX-XXX（平日 9:00-18:00）</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📍</div>
                  <div>
                    <h3>所在地</h3>
                    <p>東京都渋谷区XX-X-X</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h2>送信完了</h2>
                  <p>お問い合わせありがとうございます。<br />担当者よりご連絡いたします。</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">お名前 <span className="required">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="山田 太郎"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">メールアドレス <span className="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">会社名</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="株式会社サンプル"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">お問い合わせ内容 <span className="required">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit">
                    送信する
                  </button>
                </form>
              )}
            </div>
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

export default Contact;
