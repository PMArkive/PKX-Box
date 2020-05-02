const commitHash = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString()
  .trim()
  .slice(0, 7);

console.log(commitHash);
