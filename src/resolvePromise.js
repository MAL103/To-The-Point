export function resolvePromise(prms, promiseState){
  promiseState.promise= prms;
  promiseState.data= null;
  promiseState.error= null;

  // && means if prms is truthy, then do the rest
  prms && prms.then(successACB).catch(failureACB);

  function successACB(result){
    if(promiseState.promise===prms) {
      promiseState.data=result;
    }
  }

  function failureACB(error){
    if(promiseState.promise===prms) {
      promiseState.error=error;
    }
  }

}