/* toggle between showing and hiding the navbar menu */
function myFunction1() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

/*show hide div*/

/* function myFunction() {
  var x = document.getElementById('myDIV');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
} */

/*button*/
function showInfo() {
  var x = document.getElementById('cpuInformation');
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function show() {
  var x = document.getElementById('gpuInformation');
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function show2() {
  var x = document.getElementById('mboardInformation');
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function show3() {
  var x = document.getElementById('ramInformation');
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function show4() {
  var x = document.getElementById('psuInformation');
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

/* doument.write text */

document.write("Created by Callum Eastwood");


/* photo gallery image expanding */
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
} 



