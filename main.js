const str = `
010-9949-0844
098sung@hanmail.net
https://www.naver.com/
abbcccdddd
The quick brown fox jump over the lazy dog.
`

console.log(
  str.match(/(?<=@).{1,}/g)
)