// Change the About Me content dynamically
document.getElementById('changeAboutMeButton').addEventListener('click', function() {
    document.getElementById('aboutMeText').textContent = 'I am constantly improving my skills in coding, data science, and technology to stay at the forefront of the industry.';
  });
  
  // Change the text content dynamically
  document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('text').textContent = 'I also love Engineering!';
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById('changeStyleButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
    document.getElementById('text').style.fontSize = '20px';
    document.getElementById('text').style.color = 'darkblue';
  });
  
  // Add an element when a button is clicked
  document.getElementById('addElementButton').addEventListener('click', function() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'This is a dynamically added element!';
    newDiv.style.padding = '10px';
    newDiv.style.marginTop = '10px';
    document.getElementById('dynamicSection').appendChild(newDiv);
  });
  
  // Remove an element when a button is clicked
  document.getElementById('removeElementButton').addEventListener('click', function() {
    const dynamicSection = document.getElementById('dynamicSection');
    if (dynamicSection.lastChild) {
      dynamicSection.removeChild(dynamicSection.lastChild);
    }
  });
  