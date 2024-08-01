// script.js

document.getElementById('recommendation-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const newRecommendation = document.getElementById('new-recommendation').value;
  const recommenderName = document.getElementById('recommender-name').value;

  if (newRecommendation && recommenderName) {
    const recommendationList = document.getElementById('recommendation-list');

    const newRecommendationDiv = document.createElement('div');
    newRecommendationDiv.className = 'recommendation';
    newRecommendationDiv.innerHTML = `
      <p>${newRecommendation}</p>
      <p class="jane">- ${recommenderName}</p>
    `;

    recommendationList.appendChild(newRecommendationDiv);

    // Clear the form
    document.getElementById('new-recommendation').value = '';
    document.getElementById('recommender-name').value = '';

    // Show a confirmation message
    alert('New recommendation added successfully!');
  } else {
    alert('Please fill out both fields.');
  }
});
