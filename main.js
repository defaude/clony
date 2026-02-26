import fs from 'node:fs';

import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';

await git.clone({
    fs,
    http,
    dir: './foobar',
    url: 'https://github.com/rio-cloud/create-frontend',
    depth: 1,
});
