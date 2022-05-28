module.exports = class LoggerService {
    constructor(prefix) {
        this.prefix = prefix
    }
    warn(data) {
        console.warn(this._prefix(title), data)
    }
    info(data) {
        console.info(this._prefix(title), data)
    }
    trace(data) {
        console.trace(this._prefix(title), data)
    }
    error(data) {
        console.error(this._prefix(title), data)
    }
    _prefix(title) {
        return `${process.env.prefixApp}::${this.prefix}::${title}::`
    }
}