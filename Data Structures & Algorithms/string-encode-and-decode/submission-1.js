class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const EncodedStr = strs.map(word => `${word.length}#${word}`).join("")
        return EncodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0;
        while (i < str.length) {
           let hashIndex = str.indexOf("#", i)
            const length = str.slice(i, hashIndex )
            const word = str.slice(hashIndex + 1, hashIndex + 1 + parseInt(length))
            result.push(word)
            i = hashIndex + 1 + parseInt(length)
        }
        return result
    }
}
