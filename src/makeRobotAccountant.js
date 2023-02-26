'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => {
    let sum = 0;

    return (y) => {
      const errorMessage = 'Bzzz... Error!';

      if (count < 3) {
        count++;
        sum += x + y;

        return sum;
      } else if (count % 2 !== 0) {
        count++;
        sum = 0;

        return errorMessage;
      } else {
        count++;
        sum += x + y;

        return sum;
      };
    };
  };
}

module.exports = makeRobotAccountant;
