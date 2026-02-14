# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## GitHub Pagesへのデプロイ

このプロジェクトはGitHub Pagesに自動デプロイされるように設定されています。

### デプロイ手順

1. **GitHubリポジトリの設定**
   - GitHubリポジトリの「Settings」→「Pages」に移動
   - 「Source」で「GitHub Actions」を選択

2. **リポジトリ名の確認**
   - リポジトリ名が`tracking-app`以外の場合は、`vite.config.ts`の`base`パスを変更してください
   - 例: リポジトリ名が`my-app`の場合、`base: '/my-app/'`に変更

3. **自動デプロイ**
   - `main`ブランチにプッシュすると、自動的にGitHub Actionsが実行され、GitHub Pagesにデプロイされます
   - デプロイの進捗は「Actions」タブで確認できます

4. **デプロイ後のURL**
   - デプロイが完了すると、以下のURLでアクセスできます:
   - `https://[ユーザー名].github.io/tracking-app/`

### 手動デプロイ（オプション）

GitHub Actionsを使わずに手動でデプロイする場合:

```bash
# ビルド
npm run build

# gh-pagesブランチにデプロイ（gh-pagesパッケージが必要）
npx gh-pages -d dist
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
