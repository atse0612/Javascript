let favNumber = 8;
let baseURL = "http://numbersapi.com";

// 1.
async function numFacts1() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}
numFacts1();

// 2.
const favNumbers = [10, 14, 26];
async function numFacts2() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
}
numFacts2();

// 3.
async function numFacts3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
numFacts3();
