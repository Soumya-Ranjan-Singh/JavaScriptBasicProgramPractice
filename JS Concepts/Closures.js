/*function outer() {
    let counter= 0;
    function inner(){
        counter++;
        console.log(counter);
    }
    inner();
}
outer();
outer();*/

//This above program is giving o/p 1 no matter how many times you execute outer.
//Hence closure concept came out

function outer() {
  let counter = 0; // Closure starts here
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner; //  Closure ends here
}
const fn = outer();
fn();
fn();

//Above program will take o/p as 1 is in first execution and store
//that value so again exeucting the function will increment the counter value.
