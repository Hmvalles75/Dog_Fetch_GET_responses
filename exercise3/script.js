'use strict';

function watchBreedForm() {
  $('#breedForm').submit(event => {
    event.preventDefault();
    const breedType = $('.js-breed-image').val();
    $('.js-results').html('');
    $('.js-breed-image').val('');
    getDogImage(breedType);
  });
}

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayBreedResults(responseJson))
    .catch (error => 
      console.log(error.message)
    );
}


function displayBreedResults(responseJson) {
  const imgString = `<img src="${responseJson.message}" class="js-results-img">`;
  console.log(imgString);
  if (responseJson.status ==='error') {
    $('.js-reults').html(`
    <p>${responseJson.message}</p>
    `);
  } else {
    $('.js-results').html(imgString);
  }
}



$(function() {
  console.log('App loaded! Waiting for submit!');
  watchBreedForm();
});
