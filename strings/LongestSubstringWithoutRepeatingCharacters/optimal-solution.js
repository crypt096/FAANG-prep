const lengthOfLongestSubstring = (s) => {
  if(s.length <= 1) {
    return s.length;
  }

  const seenChars = new Map();
  let left = 0; longest = 0;

  for(let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const prevSeenChar = seenChars.get(currentChar);
    if(prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }

    seenChars.set(currentChar, right);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}