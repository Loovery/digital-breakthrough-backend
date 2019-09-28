// something to show stack traces of async exceptions
function handleAsyncExceptions() {
  if (handleAsyncExceptions.hooked === false) {
    process.on('unhandledRejection', (err) => {
      throw err;
    });

    handleAsyncExceptions.hooked = true;
  }
}

handleAsyncExceptions.hooked = false;

module.exports = handleAsyncExceptions;
