module.exports = class LoggerService {
    constructor(prefix) {
        this.prefix = prefix
    }
    warn(data) {
        console.warn(this._prefix(), data)
    }
    info(data) {
        console.info(this._prefix(), data)
    }
    trace(data) {
        console.trace(this._prefix(), data)
    }
    error(data) {
        console.error(this._prefix(), data)
    }
    _prefix() {
        return `${process.env.prefixApp}::${this.prefix}::`
    }
}