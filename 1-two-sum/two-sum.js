var twoSum = function(nums, target) {
    const numToIndex = new Map(); // Create a map to store number-index pairs
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement needed
        
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i]; // If complement is found in the map, return the indices
        }
        
        numToIndex.set(nums[i], i); // Store the number and its index in the map
    }
    
    throw new Error("No two elements add up to the target.");
};
