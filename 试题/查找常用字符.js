/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let ans = A[0].split('')
  for (let i = 0, len = A.length; i < len; i++) {
    let temp = A[i].split('')
    ans = ans.filter(item => {
      let index = temp.indexOf(item)
      return index !== -1 ? temp[index] = ' ' : false 
    })
    console.log(ans)
  }
  return ans
};

let A = ["cool","lock","cook"]

const retA = commonChars(A)

console.log(retA)