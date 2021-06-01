// An empty array means the number is prime

export const getPrimeFactors = num => {
  if (typeof num !== 'number' || num < 1) {
    throw new Error('Must be a positive integer greater than 0');
  } else if (num > Number.MAX_SAFE_INTEGER) {
    throw new Error('Number is too large to calculate safely in JavaScript');
  }

  let divisor = num;
  const primes = [];

  while (!primes.includes(1)) {
    primes.push(
      (num => {
        for (let i = 2; i <= num; i++) {
          if (num % i === 0) {
            return i;
          }
        }

        return 1;
      })(divisor),
    );
    divisor = divisor / primes[primes.length - 1];
  }

  return primes.filter(prime => prime !== num && prime !== 1);
};
