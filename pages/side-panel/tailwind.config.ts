import baseConfig from '@extension/tailwindcss-config';
import type { Config } from 'tailwindcss';

export default {
  ...baseConfig,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', '../../packages/ui/lib/**/*.{js,ts,jsx,tsx}'],
  // purge: {
  //   enabled: process.env.NODE_ENV === 'production',
  //   content: [
  //     './src/**/*.{js,ts,jsx,tsx}',
  //   ],
  // },
} as Config;
