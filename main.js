#!/usr/bin/env zx

import { rimraf } from 'rimraf';

await rimraf('./foobar');

// await git.clone({
//     fs,
//     http,
//     dir: './foobar',
//     url: 'https://github.com/rio-cloud/create-frontend',
//     depth: 1,
// });

await $`git clone ssh://git@bitbucket.collaboration-man.com:7999/riostart/web-starter-template.git foobar`;

await rimraf('./foobar/.git');
