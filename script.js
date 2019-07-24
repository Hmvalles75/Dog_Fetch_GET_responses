'use strict';


function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch (error =>alert('Something went wrong!'));
}

function displayResults(responseJson) {
  console.log(responseJson.message);
  const imgString = responseJson.message.map(link => `<img src="${link}" class="js-results-img">`).join('');
  console.log(imgString);
  $('.js-results').html(imgString);
}

function watchForm() {
  $('.numForm').submit(event => {
    event.preventDefault();
    const imgNum = parseInt($('.js-image-number').val());
    $('.js-image-number').val('');
    getDogImage(imgNum);
  });
}



$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
