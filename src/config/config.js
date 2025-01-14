const fs = require('fs');
const path = require('path');

const dotenv = fs.readFileSync(path.resolve(__dirname, '.env'), 'utf-8')
  .split('\n')
  .reduce((env, line) => {
    const [key, value] = line.split('=');
    env[key.trim()] = value.trim();
    return env;
  }, {});

fs.writeFileSync(
  path.resolve(__dirname, 'public/config.js'),
  `window.env = ${JSON.stringify(dotenv)};`
);
