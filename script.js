/**
 * fetch api
 * -> fetch signature
 * -> promise
 */

// async function loadPeople(url) {
//   let result = await fetch(url);
//   let data = await result.json();

//   console.log(data);
// }

async function loadPeople(url) {
  let result;

  try {
    let response = await fetch(url);
    result = await response.json();

    console.log(result);
  } catch (error) {
    result = error.message;

    console.log(result);
  }
}

loadPeople("people.json");
