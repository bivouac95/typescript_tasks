const wordlist = ['aabb', 'bhiowq', 'ppopp', 'world', 'abcdcba'];

const is_Anagram = (word: string) => {
    return word == word.split('').reverse().join('')
}

const filterAnagrams = (wordList: string[]) => {
    return wordList.filter(is_Anagram);
}

console.log(filterAnagrams(wordlist));

