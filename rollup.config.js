import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const tsPlugin = typescript({
  clean: true,
  tsconfig: 'tsconfig.json',
  useTsconfigDeclarationDir: true
})

const nodePlugins = [
  resolve({ preferBuiltins: true, browser: true }),
  commonjs({ sourceMap: false })
]

const minifyPlugin = terser({ output: { comments: false } })

export default {
  input: 'src/index.ts',
  output: [
    { file: 'lib/kami-wiki-render.js', format: 'cjs' },
    {
      file: 'lib/kami-wiki-render.min.js',
      format: 'cjs',
      plugins: [minifyPlugin]
    },
    { file: 'lib/kami-wiki-render.esm.js', format: 'esm' },
    { file: 'lib/kami-wiki-render.umd.js', format: 'umd', name: 'KamiWiki' }
  ],
  plugins: [json(), tsPlugin, ...nodePlugins]
}
