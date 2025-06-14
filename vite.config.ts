import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base:
      // GitHub Pages用にリポジトリ名をbaseに設定
      mode === 'production' && process.env.GITHUB_REPOSITORY
        ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
        : '/',
    server: { port: 3000 },
  }
})
