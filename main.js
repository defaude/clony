#!/usr/bin/env node

import fs from 'node:fs';

import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import { rimraf } from 'rimraf';

await rimraf('./foobar');

await git.clone({
    fs,
    http,
    dir: './foobar',
    url: 'https://github.com/rio-cloud/create-frontend',
    depth: 1,
});

await rimraf('./foobar/.git');
