/**
 * Given the script file callbacks.js, write a script that does the following: 
 * o Create a method resolvedPromise that is similar to
     delayedSuccess and resolves a message after a timeout of 500ms.
   o Create a method rejectedPromise that is similar to
    delayedException and rejects an error message after a timeout of
    500ms.
   o Call both promises separately and handle the resolved and reject
    results and then output to the console
 */

    const resolvedPromise = () => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              let success = { 'message': 'delayed success!' };
              resolve(success);
          }, 500);
      });
  };

  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error('error: delayed exception!');
            } catch (e) {
                reject({ error: e.message });
            }
        }, 500);
    });
};

async function handlePromises() {
  try {
      let successResult = await resolvedPromise();
      console.log(successResult);
  } catch (error) {
      console.error(error);
  }

  try {
      let errorResult = await rejectedPromise();
      console.log(errorResult);
  } catch (error) {
      console.error(error);
  }
}

handlePromises();