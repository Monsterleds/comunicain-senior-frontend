import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import type { UserConfig } from 'vite'
import type { InlineConfig } from 'vitest'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig
})//configurando o vite para aceitar o vitest fazer tests, pode ser feito em outro arquivo