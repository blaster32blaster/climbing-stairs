type read = (name: number) => number;

const climbingStairs: read = (totalSteps: number) => {
  if (totalSteps <= 1)
    return totalSteps;
  if (totalSteps === 2)
    return 2;

  return climbingStairs(totalSteps - 1) + climbingStairs(totalSteps - 2);
};


let totalSteps = 3;
console.log("Number of possible ways to climb stairs = " + climbingStairs(totalSteps));