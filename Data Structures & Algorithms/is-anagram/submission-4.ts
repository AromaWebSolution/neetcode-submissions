class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false;
        }

        const countS = new Map();
        const countT = new Map();

        for(const char of s){
            countS.set(char, (countS.get(char) || 0) + 1);
        }

        for(const char of t){
            countT.set(char, (countT.get(char) || 0) + 1);
        }

        for(const [char, count] of countS){
            if(count !== countT.get(char)){
                return false;
            }
        }

        return true;
    }
}

const solution = new Solution();
console.log(solution.isAnagram("racecar", "carrace"));
console.log(solution.isAnagram("jar", "jam"));
console.log(solution.isAnagram("x", "x"));
