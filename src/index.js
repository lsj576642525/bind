function bind(asThis, ...args) {
    var fn = this

    function resultFn(...args2) {
        return fn.call(this instanceof resultFn ? this : asThis, ...args, ...args2)
    }
    resultFn.prototype = fn.prototype
    return resultFn
}

module.exports = bind