
Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

https://www.codewars.com/kata/insert-dashes/train/javascript

Was trying turn the integer into a string first, then check when for odds in a loop, but was not having luck. Khaliil found .toString & .split would let us go through each position of the string, check if two variables were odd and if so .splice a '-' between them. Finally joining and returning