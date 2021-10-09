const nums = [1, 2, 3];
console.log(Math.min.apply(null, nums));
console.log(Math.max.apply(null, nums));
console.log(Math.min(...nums));
console.log(Math.max(...nums));

(max = -Infinity), (min = +Infinity);

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
  if (nums[i] < min) {
    min = nums[i];
  }
}

console.log(max);
console.log(min);
