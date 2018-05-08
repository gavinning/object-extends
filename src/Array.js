// 支持async语法
Array.prototype.search || Object.defineProperty(Array.prototype, 'search', {
    async value(fn) {
        let arr = []
        let length = this.length
        for(let i=0; i<length; i++){
            let res = await fn(this[i], i, this)
            if(res) arr.push(this[i])
        }
        return arr
    }
})

Array.prototype.asyncFind || Object.defineProperty(Array.prototype, 'asyncFind', {
    async value(fn) {
        let arr = []
        let length = this.length
        for(let i=0; i<length; i++){
            let res = await fn(this[i], i, this)
            if(res) arr.push(this[i])
        }
        return arr
    }
})

// 支持async语法
Array.prototype.each || Object.defineProperty(Array.prototype, 'each', {
    async value(fn) {
        let length = this.length
        for(let i=0; i<length; i++){
            await fn(this[i], i, this)
        }
    }
})

// alias each
Array.prototype.asyncEach || Object.defineProperty(Array.prototype, 'asyncEach', {
    async value(fn) {
        return await this.each(fn)
    }
})

// alias each
Array.prototype.asyncForEach || Object.defineProperty(Array.prototype, 'asyncForEach', {
    async value(fn) {
        return await this.each(fn)
    }
})

Array.prototype.asyncMap || Object.defineProperty(Array.prototype, 'asyncMap', {
    async value(fn) {
        let arr = []
        let length = this.length
        for(let i=0; i<length; i++){
            arr.push(await fn(this[i], i, this))
        }
        return arr
    }
})

Array.prototype.asyncFilter || Object.defineProperty(Array.prototype, 'asyncFilter', {
    async value(fn) {
        let arr = []
        let length = this.length
        for(let i=0; i<length; i++){
            let res = await fn(this[i], i, this)
            if(!res) arr.push(this[i])
        }
        return arr
    }
})

Array.prototype.asyncSome || Object.defineProperty(Array.prototype, 'asyncSome', {
    async value(fn) {
        let map = await this.asyncMap(fn)
        return map.some(item => item === true)
    }
})

Array.prototype.asyncEvery || Object.defineProperty(Array.prototype, 'asyncEvery', {
    async value(fn) {
        let map = await this.asyncMap(fn)
        return map.every(item => item === true)
    }
})

Array.prototype.near || Object.defineProperty(Array.prototype, 'near', {
    value(val) {
        return this.slice(0).sort(function(a, b) {
            return Math.abs(a - val) - Math.abs(b - val);
        })[0];
    }
})

Array.prototype.nearIndex || Object.defineProperty(Array.prototype, 'nearIndex', {
    value(val) {
        return this.indexOf(this.near(val))
    }
})

Array.prototype.unique || Object.defineProperty(Array.prototype, 'unique', {
    value(val) {
        return Array.from(new Set(this))
    }
})

Array.prototype.remove || Object.defineProperty(Array.prototype, 'remove', {
    value(val) {
        if(typeof val === 'function'){
            let el = this.find(val)
            return this.remove(el)
        }
        let index = this.indexOf(val)
        index < 0 || this.splice(index,1)
        return this
    }
})

// 根据条件查询最大值
Array.prototype.max || Object.defineProperty(Array.prototype, 'max', {
    value(fn) {
        if (!fn || typeof fn != 'function') {
            return Math.max.apply(Math, this)
        }

        let arr = this.slice(0)
        let top = arr.shift()

        while (arr.length > 0) {
            let b = arr.shift()
            fn(top, b) ? top : top = b
        }

        return top
    }
})

// 可靠的排序方法
Array.prototype.sorted || Object.defineProperty(Array.prototype, 'sorted', {
    value(fn) {
        switch (fn) {
            case '>':
                fn = (a, b) => a > b
                break

            case '>=':
                fn = (a, b) => a >= b
                break

            case '<':
                fn = (a, b) => a < b
                break

            case '<=':
                fn = (a, b) => a <= b
                break

            default:
                break;
        }

        if (typeof fn != 'function') {
            fn = (a, b) => a < b
        }

        let ret = []
        let arr = this.slice(0)

        if (arr.length < 2) {
            return this
        }

        while (arr.length > 0) {
            let val = arr.max(fn)
            arr.remove(val)
            ret.push(val)
        }

        return ret
    }
})