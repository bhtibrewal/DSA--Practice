

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
 function debounce(func, wait, option = { leading: false, trailing: true }) {
    let timerId = null;
    let lastArgs = null;
    return (...args) => {
      // if both leading and trailing are false then do nothing.
      if (!option.leading && !option.trailing) return;
  
      // if timer is over and leading is true
      // then immediately call supplied function
      // else capture arguments in lastArgs
      if (!timerId && option.leading) {
        func.apply(this, args);
      } else {
        lastArgs = args;
      }
  
      // clear timer so that next call is exactly after `wait` time
      clearTimeout(timerId);
  
      timerId = setTimeout(() => {
        // invoke only if lastArgs is present and trailing is true
        if (option.trailing && lastArgs) func.apply(this, lastArgs);
  
        // reset variables as they need to restart new life after calling this function 
        lastArgs = null;
        timerId = null;
      }, wait);
    }
  }
  