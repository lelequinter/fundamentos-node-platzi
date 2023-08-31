const os = require('os');

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus().length);
// console.log(os.constants);

const SIZE = 1024;

function Kb(bytes) { return (bytes / SIZE) + 'Kb' }
function Mb(bytes) { return (bytes / SIZE / SIZE) + 'Mb' }
function Gb(bytes) { return (bytes / SIZE / SIZE / SIZE) + 'Gb' }

// console.log(Kb(os.freemem()));
// console.log(Mb(os.freemem()));
// console.log(Gb(os.freemem()));
// console.log(Gb(os.totalmem()));

// console.log(os.homedir());
// console.log(os.tmpdir());

// console.log(os.hostname());
console.log(os.networkInterfaces());