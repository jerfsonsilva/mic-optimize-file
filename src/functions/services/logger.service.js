class LoggerService {
    warn(prefix, data) {
        console.warn(this._prefix('warn', prefix), data)
    }
    info(prefix, data) {
        console.info(this._prefix('info', prefix), data)
    }
    trace(prefix, data) {
        console.trace(this._prefix('trace', prefix), data)
    }
    error(prefix, data) {
        console.error(this._prefix('error', prefix), data)
    }
    _prefix(type, prefix) {
        return `${process.env.prefixApp}::${type}::${prefix}`
    }
}
module.exports = new LoggerService()