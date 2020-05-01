const version = require('../package.json').version;
const commitHash = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString()
  .trim()
  .slice(0, 7);

console.log(`${version}-${commitHash}`);
