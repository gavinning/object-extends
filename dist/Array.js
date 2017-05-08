'use strict';

// 支持async语法
Array.prototype.search || Object.defineProperty(Array.prototype, 'search', {
    value: async function value(fn) {
        var arr = [];
        var length = this.length;
        for (var i = 0; i < length; i++) {
            var res = await fn(this[i], i, this);
            if (res) arr.push(this[i]);
        }
        return arr;
    }
});

Array.prototype.asyncFind || Object.defineProperty(Array.prototype, 'asyncFind', {
    value: async function value(fn) {
        var arr = [];
        var length = this.length;
        for (var i = 0; i < length; i++) {
            var res = await fn(this[i], i, this);
            if (res) arr.push(this[i]);
        }
        return arr;
    }
});

// 支持async语法
Array.prototype.each || Object.defineProperty(Array.prototype, 'each', {
    value: async function value(fn) {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            await fn(this[i], i, this);
        }
    }
});

Array.prototype.asyncMap || Object.defineProperty(Array.prototype, 'asyncMap', {
    value: async function value(fn) {
        var arr = [];
        var length = this.length;
        for (var i = 0; i < length; i++) {
            arr.push((await fn(this[i], i, this)));
        }
        return arr;
    }
});

Array.prototype.asyncFilter || Object.defineProperty(Array.prototype, 'asyncFilter', {
    value: async function value(fn) {
        var arr = [];
        var length = this.length;
        for (var i = 0; i < length; i++) {
            var res = await fn(this[i], i, this);
            if (!res) arr.push(this[i]);
        }
        return arr;
    }
});

Array.prototype.near || Object.defineProperty(Array.prototype, 'near', {
    value: function value(val) {
        return this.slice(0).sort(function (a, b) {
            return Math.abs(a - val) - Math.abs(b - val);
        })[0];
    }
});

Array.prototype.nearIndex || Object.defineProperty(Array.prototype, 'nearIndex', {
    value: function value(val) {
        return this.indexOf(this.near(val));
    }
});

Array.prototype.unique || Object.defineProperty(Array.prototype, 'unique', {
    value: function value(val) {
        return Array.from(new Set(this));
    }
});

Array.prototype.remove || Object.defineProperty(Array.prototype, 'remove', {
    value: function value(val) {
        if (typeof val === 'function') {
            var el = this.find(val);
            return this.remove(el);
        }
        var index = this.indexOf(val);
        index < 0 || this.splice(index, 1);
        return this;
    }
});