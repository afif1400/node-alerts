/**
 * NODE ALERT
 *
 * Cross platform CLI alerts with colors.
 * Works on macOS, Linux, and Windows.
 * Alerts: success, error, warning, info, question, and log.
 *
 * @author Afif Ahmed <https://github.com/afif1400>
 */

const chalk = require('chalk');
const sym = require('./logSymbols');
const unhandle = require('cli-handle-unhandled')

// some declarations
const greenC = chalk.green;
const redC = chalk.red;
const yellowC = chalk.yellow;
const blueC = chalk.blue;
const cyanC = chalk.cyan;
const magentaC = chalk.magenta;

// unhadled exceptions
unhandle()

// actual module
module.exports = options => {
  const defaultOptions = {
    type: 'error',
    message: 'Please provide a valid type'
  };

  const opts = { ...defaultOptions, ...options };
  const { type, message, name } = opts;
  const nameLog = name ? name : type.toUpperCase();

  switch (type) {
    case 'success':
      console.log(`\n${sym.success} ${greenC.inverse(` ${nameLog} `)} ${greenC(message)}\n`);
      break;
    case 'error':
      console.log(`\n${sym.error} ${redC.inverse(` ${nameLog} `)} ${redC(message)}\n`);
      break;
    case 'warning':
      console.log(`\n${sym.warning} ${yellowC.inverse(` ${nameLog} `)} ${yellowC(message)}\n`);
      break;
    case 'info':
      console.log(`\n${sym.info} ${blueC.inverse(` ${nameLog} `)} ${blueC(message)}\n`);
      break;
    case 'question':
      console.log(`\n${sym.question} ${magentaC.inverse(` ${nameLog} `)} ${magentaC(message)}\n`);
      break;
    case 'log':
      console.log(`\n${sym.log} ${cyanC.inverse(` ${nameLog} `)} ${cyanC(message)}\n`);
      break;
    default:
      console.log(`\n${sym.error} ${redC.inverse(` ${nameLog} `)} ${redC(message)}\n`);
      break;
  }
};
