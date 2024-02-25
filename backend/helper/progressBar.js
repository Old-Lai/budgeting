const cliProgress = require('cli-progress');

class progressBar {
    constructor(tastName) {
        this.bar = new cliProgress.SingleBar({
            format: `${tastName} |` + '{bar}' + '| {percentage}% {status} {message}',
            hideCursor: true,
        }, cliProgress.Presets.shades_classic);
    }

    start(startValue = 100, currentValue = 0, message = '') {
        this.bar.start(startValue, currentValue, { message: message, status: ''});
    }

    increment(value = 1) {
        this.bar.increment(value);
    }

    updateValue(value) {
        this.bar.update(value);
    }

    updateMessage(message) {
        this.bar.update({ message });
    }

    updateStatus(status) {
        this.bar.update({ status });
    }

    stop(message = '', status = 'Done!') {
        if(status === 'Done!')
             this.updateValue(100);
        this.bar.update({ status, message })
        this.bar.stop();
    }
}

module.exports = progressBar;