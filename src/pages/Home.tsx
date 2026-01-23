import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">TaskFlow</div>
          <div className="nav-links">
            <Link to="/" className="nav-link active">ホーム</Link>
            <Link to="/about" className="nav-link">会社概要</Link>
            <Link to="/contact" className="nav-link">お問い合わせ</Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              タスク管理を、<br />
              もっとシンプルに。
            </h1>
            <p className="hero-subtitle">
              TaskFlowは、チームの生産性を向上させる次世代のタスク管理SaaSです。
              <br />
              直感的なUIと強力な機能で、あなたの仕事を効率化します。
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                無料で始める
              </Link>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="section-title">主な機能</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h3 className="feature-title">直感的なタスク管理</h3>
                <p className="feature-description">
                  ドラッグ&ドロップで簡単にタスクを整理。視覚的にわかりやすいインターフェースで、誰でもすぐに使い始められます。
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3 className="feature-title">チームコラボレーション</h3>
                <p className="feature-description">
                  リアルタイムでチームメンバーと連携。コメント、通知、ファイル共有など、チームワークに必要な機能がすべて揃っています。
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3 className="feature-title">詳細な分析レポート</h3>
                <p className="feature-description">
                  プロジェクトの進捗状況を可視化。データドリブンな意思決定をサポートする包括的なレポート機能を提供します。
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔔</div>
                <h3 className="feature-title">スマート通知</h3>
                <p className="feature-description">
                  重要な更新を逃さない。カスタマイズ可能な通知設定で、必要な情報だけを受け取れます。
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3 className="feature-title">セキュアなデータ保護</h3>
                <p className="feature-description">
                  Enterpriseレベルのセキュリティで、あなたのデータを安全に保護。GDPR準拠で安心してご利用いただけます。
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3 className="feature-title">マルチデバイス対応</h3>
                <p className="feature-description">
                  PC、スマートフォン、タブレット。どこからでもアクセス可能。オフラインでも作業を続けられます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2 className="cta-title">今すぐ始めませんか？</h2>
            <p className="cta-subtitle">
              14日間の無料トライアルで、TaskFlowのすべての機能をお試しいただけます。
              <br />
              クレジットカードは不要です。
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              無料トライアルを開始
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 TaskFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
