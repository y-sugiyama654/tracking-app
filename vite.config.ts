import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages用のbaseパス設定
  // 環境変数VITE_BASE_PATHが設定されている場合はそれを使用
  // それ以外の場合は、本番環境では/tracking-app/、開発環境では/を使用
  base: process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/tracking-app/' : '/'),
})
