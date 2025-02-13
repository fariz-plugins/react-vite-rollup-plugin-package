import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import terser  from '@rollup/plugin-terser';
import { dts } from "rollup-plugin-dts";

export default [
    // Bundle for CommonJS & ESM
    {
        input: 'src/index.ts',  
        output: [
            {
                file: 'dist/index.cjs',
                format: 'cjs',
                exports: "named",
                sourcemap: true,
            },
            {
                file: 'dist/index.js',
                format: 'esm',
                sourcemap: true,
            },
            {
                file: "dist/index.iife.js",
                format: "iife",
                name: "ReactConfirmation", // Global variable in browser
                globals: {
                  react: "React",
                  "react-dom": "ReactDOM"
                }
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                extract: true, // Extract CSS to a separate file
                modules: true,
            }),
            terser(),
        ],
        external: ['react', 'react-dom','react/jsx-runtime'],
    },

    // Generate TypeScript Declarations
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    }
];