class LoggerService {
    warn(prefix, data) {
        console.warn(this._prefix('warn', prefix), JSON.stringify(data))
    }
    info(prefix, data) {
        console.info(this._prefix('info', prefix), JSON.stringify(data))
    }
    trace(prefix, data) {
        console.trace(this._prefix('trace', prefix), JSON.stringify(data))
    }
    error(prefix, data) {
        console.error(this._prefix('error', prefix), JSON.stringify(data))
    }
    _prefix(type, prefix) {
        return `${process.env.prefixApp}::${type}::${prefix}`
    }
}
module.exports = new LoggerService()