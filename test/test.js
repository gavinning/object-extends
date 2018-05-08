var assert = require('assert')

require('../src/Array')

var arr1 = [1, 2, 3, 5, 4]
var arr2 = [{
        name: "lily",
        age: 18
    },
    {
        name: "john",
        age: 21
    },
    {
        name: "alice",
        age: 23
    },
    {
        name: "tom",
        age: 16
    },
    {
        name: "gavin",
        age: 30
    }
]


describe('Array', () => {
    describe('.max()', () => {

        it('筛选最大值', () => {
            assert.equal(arr1.max(), 5)
        })

        it('筛选最大值', () => {
            assert.equal(arr1.max((a, b) => a > b), 5)
        })

        it('筛选最小值', () => {
            assert.equal(arr1.max((a, b) => a < b), 1)
        })

        it('筛选年龄最大的', () => {
            assert.equal(arr2.max((a, b) => a.age > b.age), arr2[4])
        })

        it('筛选年龄最小的', () => {
            assert.equal(arr2.max((a, b) => a.age < b.age), arr2[3])
        })

        it('筛选名字最长的', () => {
            assert.equal(arr2.max((a, b) => a.name.length > b.name.length), arr2[4])
        })

        it('筛选名字最短的', () => {
            assert.equal(arr2.max((a, b) => a.name.length < b.name.length), arr2[3])
        })

    })

    describe('.sorted()', () => {
        it('从小到大排序', () => {
            assert.deepEqual(arr1.sorted(), [1, 2, 3, 4, 5])
        })

        it('从小到大排序', () => {
            assert.deepEqual(arr1.sorted('<'), [1, 2, 3, 4, 5])
        })

        it('从小到大排序', () => {
            assert.deepEqual(arr1.sorted((a, b) => a < b), [1, 2, 3, 4, 5])
        })

        it('从大到小排序', () => {
            assert.deepEqual(arr1.sorted('>'), [5, 4, 3, 2, 1])
        })

        it('从大到小排序', () => {
            assert.deepEqual(arr1.sorted((a, b) => a > b), [5, 4, 3, 2, 1])
        })
    })
})