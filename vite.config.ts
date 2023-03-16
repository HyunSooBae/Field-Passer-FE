import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // process에서 타입에러가 뜨게된다.
  // @type/node를 설치해주자
  return {
    resolve: {
      alias: [
        { find: '@src', replacement: resolve(__dirname, 'src') },
        {
          find: '@components',
          replacement: resolve(__dirname, 'src/components'),
        },
      ],
    },
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            naverClientId: env.VITE_NAVER_MAP_CLIENT_ID,
          },
        },
      }),
      tsconfigPaths(),
    ],
  };
});
