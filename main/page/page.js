 // Array of background images (local or URLs)
 const backgrounds = [
  'url("main/page/assets/bg_ (1).jpg")',
  'url("main/page/assets/bg_ (2).jpg")',
  'url("main/page/assets/bg_ (3).jpg")',
  'url("main/page/assets/bg_ (4).jpg")',
  'url("main/page/assets/bg_ (5).jpg")',
  'url("main/page/assets/bg_ (6).jpg")',
  'url("main/page/assets/bg_ (7).jpg")',
  'url("main/page/assets/bg_ (8).jpg")',
  'url("main/page/assets/bg_ (9).jpg")',
  'url("main/page/assets/bg_ (10).jpg")',
  'url("main/page/assets/bg_ (11).jpg")',
  'url("main/page/assets/bg_ (12).jpg")',
  'url("main/page/assets/bg_ (13).jpg")'
  
];

let currentIndex = 0;

    // Preload images to avoid flashing
    function preloadImages(images) {
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }

    // Function to change background image
    function changeBackground() {
      currentIndex = (currentIndex + 1) % backgrounds.length; // Loop through the images
      document.body.style.backgroundImage = backgrounds[currentIndex]; 
       } 
    // Change background
  
    // Initial background setup
    changeBackground();

    // Preload the images for smoother transition
    preloadImages(backgrounds);

    // Set an interval to change background every 5 or 10 minutes

    // Change every 5 minutes
    setInterval(changeBackground, 5 * 60 * 1000); 

/*_=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=_*/
// slidshow imgs

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Function to show slides
function showSlides() {
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Increment or reset slide index
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show the current slide with a different effect
  slides[slideIndex - 1].style.display = 'block';

  // Add a new random effect to the active slide
  const randomEffect = getRandomEffect();
  slides[slideIndex - 1].classList.remove('fade', 'slide-effect', 'zoom');
  slides[slideIndex - 1].classList.add(randomEffect);
}

// Function to change the slide (for next/prev buttons)
function changeSlide(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides();
}

// Function to generate a random animation effect
function getRandomEffect() {
  const effects = ['fade', 'slide-effect', 'zoom'];
  return effects[Math.floor(Math.random() * effects.length)];
}

// Show the first slide and start the automatic transition every 3 seconds
showSlides();
setInterval(showSlides, 3000); // Change slide every 3 seconds

/*_=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=_*/

// Function to handle Google Search
document.getElementById('google-btn').addEventListener('click', google);
document.getElementById('bing-btn').addEventListener('click', bing);
document.getElementById('duckduck-btn').addEventListener('click', duckduckgo);
document.getElementById('yandex-btn').addEventListener('click', yandex);
document.getElementById('yahoo-btn').addEventListener('click', yahoo);
document.getElementById('search').addEventListener('keypress', function(e) {
if (e.key === 'Enter') {
google();
}
});

/*_=__=__=__=__=__=_=__=__=__=_*/

// google search
function google() {
const Input = document.getElementById('search').value.trim();
if (Input !== '') {
window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(Input);
} else {
alert("Please enter first keywords to search.");
}
}
// bing search
function bing() {
  const Input = document.getElementById('search').value.trim();
  if (Input !== '') {
  window.location.href = 'https://www.bing.com/search?q=' + encodeURIComponent(Input);
  } else {
  alert("Please enter first keywords to search.");
  }
  }
// duckduckgo search
function duckduckgo() {
  const Input = document.getElementById('search').value.trim();
  if (Input !== '') {
  window.location.href = 'https://duckduckgo.com/?q=' + encodeURIComponent(Input);
  } else {
  alert("Please enter first keywords to search.");
  }
  }
// yandex search
function yandex() {
  const Input = document.getElementById('search').value.trim();
  if (Input !== '') {
  window.location.href = 'https://www.yandex.com/search/?text=' + encodeURIComponent(Input)+'&from=os&clid=1836588&lr=10616';
  } else {
  alert("Please enter first keywords to search.");
  }
  }
// yahoo search
function yahoo() {
  const Input = document.getElementById('search').value.trim();
  if (Input !== '') {
  window.location.href = 'https://search.yahoo.com/search?ei=UTF-8&fr=crmas_sfp&p=' + encodeURIComponent(Input);
  } else {
  alert("Please enter first keywords to search.");
   }
  }
/*_=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=_*/

   const currentDateElement = document.getElementById("date");
   const currentTimeElement = document.getElementById("time");
   
   function updateDateTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${padZero(hours % 12 || 12)}:${padZero(minutes)} - ${padZero(seconds)} ${ampm}`;
    const formattedDate = `${padZero(currentDate.getDate())}/${padZero(currentDate.getMonth() + 1)}/${currentDate.getFullYear()}`;
    
    currentTimeElement.textContent = formattedTime;
    currentDateElement.textContent = formattedDate;
    }
    
    function padZero(value) {
    return (value < 10 ? '0' : '') + value;
    }
    
    updateDateTime();
    
    setInterval(updateDateTime, 1000); 

/*_=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=_*/



/*_=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=_*/
   // Load tasks from local storage
   function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const list = document.getElementById("todo-list");
    tasks.forEach(taskText => {
    const li = document.createElement("div");
    li.innerHTML = `<div class="list-t"><li>${taskText}</li><div class="remove-btn"><img src="main/page/assets/dlt.svg" alt="Delete"></div></div>`;
   list.appendChild(li);
    // Attach event listener to remove task
    li.querySelector(".remove-btn").addEventListener("click", function() {
    removeTask(taskText);
    li.remove();
    });
    });
   }
   // Save tasks to local storage
   function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
   }
   // Remove task from local storage
   function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
   }
   // To-Do List Functionality
   document.getElementById("add-task-btn").addEventListener("click", function() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
    const list = document.getElementById("todo-list");
   const li = document.createElement("li");
    li.innerHTML = `<div class="list">${taskText}</div><div class="remove-btn"><img src="main/page/assets/dlt.svg" alt="Delete"></div>`;
    list.appendChild(li); // Add task to the bottom of the list
    taskInput.value = ""; // Clear input after adding
    saveTask(taskText); // Save task to local storage
    // Attach event listener to remove task
    li.querySelector(".remove-btn").addEventListener("click", function() {
    removeTask(taskText);
    li.remove();
    });
    } else {
    alert("Please enter a task.");
    }
   });
   // Load tasks on page load
   loadTasks();
   
/*_=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=_*/
