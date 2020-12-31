// function createFunction() {
//     var name = "Martin";
//     function showName() {
//       console.log(name);
//     }
//     return showName;
//   }
  
//   var myFunction = createFunction();
//   myFunction(); 

function createInnerFunction() {
  var name = "Omar";
  var showName = () => console.log(name);
  return showName;
}

var showNameFunction = createInnerFunction();
showNameFunction();











  // function createSum(x) {
  //   return function(y) {
  //     return x + y;
  //   };
  // }

  // let sum4 = createSum(4);
  // let sum10 = createSum(10);
  // console.log(sum4(3), sum10(3))
  function createSum(x) {
    return function(y) {
      return x + y;
    }
  }

  let sum4 = createSum(4);
  let sum10 = createSum(10);
  console.log(sum4(3), sum10(5));