export function resolvePromise(prms, promiseState) {
  if(prms === null){
      return;
  }

  function dataACB(data){
      // race condition check
      if (promiseState.promise !== prms) {
          return;
      }
      promiseState.data= data;
      promiseState.error= null;
      console.log('success', promiseState.data)
  }


  function errorACB(error){
      if (promiseState.promise !== prms) {
          return;
      }
      console.log('error')
      promiseState.data= null;
      promiseState.error= error;
  }

  promiseState.promise= prms;
  promiseState.data= null;
  promiseState.error= null;

  prms.then(dataACB).catch(errorACB);
}




