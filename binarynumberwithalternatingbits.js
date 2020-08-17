//Objective is to see whether a number, in binary form, has alternating bits

let n = 7


//O(1) solution since the number if bits is fixed
//We use bit manipulation to compare bit by bit

//Get the first bit
let curr = n % 2
n >>= 1

while (n > 0) {
    //n % 2 gets the current bit
    //If a bit reoccurs adjacently, we return false
    if (curr == n % 2) {
        return false
    }
    
    curr = n % 2
    n >>= 1
}

return true