// Bubble sort

const nums = [-4, 45, 2, 1, 45, 5.3];


for (let i = 0; i < nums.length; i++) {
	for (let j = 0; j < nums.length - 1; j++) {
		if (nums[j] > nums[j + 1]) {
			let tmp = nums[j + 1];
			nums[j + 1] = nums[j];
			nums[j] = tmp;
		}
	}
}

console.log(nums);