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
                file: "dist/index.umd.js",
                format: "umd",
                name: "ReactConfirmation", // Global variable in browser
                globals: {
                  react: "React",
                  "react-dom": "ReactDOM",
                  "react/jsx-runtime": "ReactJSXRuntime"
                },
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json', declaration: false, emitDeclarationOnly: false, }),
            postcss({
                extract: 'dist/styles.css', // Extract CSS to a separate file
                modules: true,
            }),
            terser(),
        ],
        external: ['react', 'react-dom','react/jsx-runtime'],
    },

    // Generate TypeScript Declarations
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/types/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    }
];