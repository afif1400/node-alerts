const chalk = require('chalk');

function isUnicodeSupported() {
	if (process.platform !== 'win32') {
		return process.env.TERM !== 'linux'; // Linux console (kernel)
	}

	return (
		Boolean(process.env.CI) ||
		Boolean(process.env.WT_SESSION) || // Windows Terminal
		process.env.ConEmuTask === '{cmd::Cmder}' || // ConEmu and cmder
		process.env.TERM_PROGRAM === 'vscode' ||
		process.env.TERM === 'xterm-256color' ||
		process.env.TERM === 'alacritty'
	);
}

const main = {
	info: chalk.blue('ℹ'),
	success: chalk.green('✔'),
	warning: chalk.yellow('⚠'),
	error: chalk.red('✖'),
	question: chalk.magenta('?'),
	log: chalk.cyan('⚙'),
};

const fallback = {
	info: chalk.blue('i'),
	success: chalk.green('√'),
	warning: chalk.yellow('‼'),
	error: chalk.red('×'),
	question: chalk.magenta('?'),
	log: chalk.cyan('⚙'),
};

const logSymbols = isUnicodeSupported() ? main : fallback;

module.exports = logSymbols;
