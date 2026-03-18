import './About.css';

function About() {
  return (
    <div className="about">
      <header className="header">
        <nav className="nav">
          <a href="../" className="nav-brand">TaskFlow</a>
          <div className="nav-links">
            <a href="../" className="nav-link">ホーム</a>
            <a href="../about/" className="nav-link active">会社概要</a>
            <a href="../contact/" className="nav-link">お問い合わせ</a>
          </div>
        </nav>
      </header>

      <main className="about-main">
        <div className="container">
          <div className="about-hero">
            <h1 className="about-title">会社概要</h1>
            <p className="about-subtitle">
              TaskFlowは、チームの生産性向上を目指すSaaS企業です。
            </p>
          </div>

          <section className="about-section">
            <h2 className="section-title">基本情報</h2>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">会社名</div>
                <div className="info-value">株式会社TaskFlow</div>
              </div>
              <div className="info-item">
                <div className="info-label">設立</div>
                <div className="info-value">2020年4月</div>
              </div>
              <div className="info-item">
                <div className="info-label">代表取締役</div>
                <div className="info-value">山田 太郎</div>
              </div>
              <div className="info-item">
                <div className="info-label">所在地</div>
                <div className="info-value">
                  東京都渋谷区XX-X-X<br />
                  渋谷ビル 5F
                </div>
              </div>
              <div className="info-item">
                <div className="info-label">資本金</div>
                <div className="info-value">5,000万円</div>
              </div>
              <div className="info-item">
                <div className="info-label">従業員数</div>
                <div className="info-value">45名（2024年4月現在）</div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2 className="section-title">事業内容</h2>
            <div className="business-content">
              <p className="business-text">
                株式会社TaskFlowは、クラウドベースのタスク管理SaaS「TaskFlow」の開発・提供を主な事業としています。
                企業やチームの生産性向上を支援し、より効率的な業務遂行を実現するためのソリューションを提供しています。
              </p>
              <div className="business-items">
                <div className="business-item">
                  <div className="business-icon">💼</div>
                  <h3>タスク管理SaaSの開発・提供</h3>
                  <p>クラウドベースのタスク管理プラットフォーム「TaskFlow」の開発と運営</p>
                </div>
                <div className="business-item">
                  <div className="business-icon">🔧</div>
                  <h3>カスタマイズ開発</h3>
                  <p>企業のニーズに合わせたカスタマイズ開発サービス</p>
                </div>
                <div className="business-item">
                  <div className="business-icon">📚</div>
                  <h3>コンサルティング</h3>
                  <p>プロジェクト管理やチーム運営に関するコンサルティングサービス</p>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2 className="section-title">ミッション・ビジョン</h2>
            <div className="mission-vision">
              <div className="mission-card">
                <h3 className="mission-title">ミッション</h3>
                <p className="mission-text">
                  世界中のチームが、より効率的に、より創造的に働ける環境を提供する。
                  私たちは、優れたツールを通じて、人々の可能性を最大限に引き出すことを目指します。
                </p>
              </div>
              <div className="vision-card">
                <h3 className="vision-title">ビジョン</h3>
                <p className="vision-text">
                  2025年までに、日本国内の10,000社以上の企業にTaskFlowを導入していただき、
                  日本の働き方改革に貢献することを目指しています。
                </p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2 className="section-title">沿革</h2>
            <div className="history-timeline">
              <div className="timeline-item">
                <div className="timeline-year">2020年4月</div>
                <div className="timeline-content">
                  <h3>株式会社TaskFlow設立</h3>
                  <p>東京都渋谷区にて創業。初期メンバー5名でスタート。</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2020年10月</div>
                <div className="timeline-content">
                  <h3>TaskFlow β版リリース</h3>
                  <p>ベータ版をリリースし、100社にご利用いただく。</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2021年6月</div>
                <div className="timeline-content">
                  <h3>正式版リリース</h3>
                  <p>TaskFlow正式版をリリース。シリーズAラウンドで資金調達を実施。</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2022年3月</div>
                <div className="timeline-content">
                  <h3>ユーザー数1,000社突破</h3>
                  <p>導入企業数が1,000社を突破。従業員数も20名に拡大。</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2023年9月</div>
                <div className="timeline-content">
                  <h3>シリーズBラウンド実施</h3>
                  <p>シリーズBラウンドで資金調達を実施。事業拡大を加速。</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024年4月</div>
                <div className="timeline-content">
                  <h3>ユーザー数5,000社突破</h3>
                  <p>導入企業数が5,000社を突破。従業員数45名に成長。</p>
                </div>
              </div>
            </div>
          </section>
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

export default About;
