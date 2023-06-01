import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-only';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';


const production = !process.env.ROLLUP_WATCH;

async function serve() {
    let server;

    function toExit() {
        if (server) server.kill(0);
    }

    const execCommand = async () => {
        server = (await import('child_process')).spawn('npm', ['run', 'start', '--', '--dev'], {
            stdio: ['ignore', 'inherit', 'inherit'],
            shell: true,
        });

        process.on('SIGTERM', toExit);
        process.on('exit', toExit);
    };

    if (!production) {
        await execCommand();
    }

    return {
        writeBundle() {
            if (server) return;
            execCommand();
        },
    };
}

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js',
    },
    plugins: [
        svelte({
            compilerOptions: {
                dev: !production,
            },
        }),
        resolve({
            browser: true,
            dedupe: ['svelte'],
        }),
        commonjs(),
        json(),
        css({ output: 'bundle.css' }),
        !production && serve(),
        !production && livereload('public'),
        builtins(),
        globals(),
    ],
    watch: {
        clearScreen: false,
    },
};