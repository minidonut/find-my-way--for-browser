class AssertionError extends Error {
  name = 'AssertionError';
}

function assert(condition, message) {
  if (!condition) {
    throw new AssertionError(message);
  }
}

module.exports = assert;
