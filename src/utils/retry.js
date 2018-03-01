/**
 * Given a function, retries running the function if it errors n times, where
 * n defaults to 3.
 */
export default (fn, limit = 3) => {
  let tries = 0;
  try {
    fn();
  } catch (error) {
    if (tries < limit) {
      fn();
      ++tries;
    } else {
      throw new Error(error.message);
    }
  }
};
