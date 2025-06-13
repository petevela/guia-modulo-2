function twoSum(nums, target){
    let array = [];
    let sum = 0;

    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            sum = nums[i] + nums[j];
            if(sum == target){
                array.push(target);

            }

        }

    }
    return array

}

console.log(twoSum([2,7,11,15],9));