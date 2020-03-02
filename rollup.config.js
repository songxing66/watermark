import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import babel from 'rollup-plugin-babel';
export default {
  input: 'src/main.js',
  output: {
    file: './dist/watermark.min.js',
    name: 'watermark',
    format: 'umd'
  },
  name: 'watermark',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ]
};
