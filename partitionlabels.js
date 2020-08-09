//Objective is to partition a string into as many parts as possible
//so that each letter appears in at most one part, and return a 
//list of integers representing the size of these parts

let S = "ababcbacadefegdehijhklij"


//O(n) solution that uses a character array to keep track of the last indexes
//of characters, then iterates to find the indices of the partitions

let charArr = new Array(26).fill(0)
    
//Updates as the last index that the character appeared in
for (let i = 0; i < S.length; i++) {
    charArr[S.charCodeAt(i) - 97] = i
}

let index = 0
let currIndex = 0
let result = []

for (let i = 0; i < S.length; i++) {
    //Everytime we encounter a character with a greater index, 
    //we update the last index of the partition
    index = Math.max(index, charArr[S.charCodeAt(i) - 97])
    
    //We've reached the last index for the partition
    if (i == index) {
        result.push(i - currIndex + 1)
        currIndex = i + 1
    }
}

return result