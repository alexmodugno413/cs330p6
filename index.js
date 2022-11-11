var project1ImageList = ["project1-image1.png", "project1-image2.png", "project1-image3.png"];
var project2ImageList = ["project2-image1.png", "project2-image2.png"];
var currentPhoto = 0;
var currentPhoto2 = 0;

function init() {
    let image = document.getElementById("project1-image");
    image.src = project1ImageList[1];
};

function nextImage() {
    let image = document.getElementById("project1-image");
    if (currentPhoto == project1ImageList.length - 1) {
        image.src = project1ImageList[0];
        currentPhoto = 0;
        return;
    }
    image.src = project1ImageList[currentPhoto+1];
    currentPhoto = currentPhoto + 1;
};

function previousImage() {
    let image = document.getElementById("project1-image");
    if (currentPhoto == 0) {
        image.src = project1ImageList[project1ImageList.length - 1];
        currentPhoto = project1ImageList.length - 1;
        return;
    }
    image.src = project1ImageList[currentPhoto-1];
    currentPhoto = currentPhoto - 1;
};

function nextImage2() {
    let image = document.getElementById("project2-image");
    if (currentPhoto == project2ImageList.length - 1) {
        image.src = project2ImageList[0];
        currentPhoto = 0;
        return;
    }
    image.src = project2ImageList[currentPhoto+1];
    currentPhoto = currentPhoto + 1;
};

function previousImage2() {
    let image = document.getElementById("project2-image");
    if (currentPhoto == 0) {
        image.src = project2ImageList[project2ImageList.length - 1];
        currentPhoto = project2ImageList.length - 1;
        return;
    }
    image.src = project2ImageList[currentPhoto-1];
    currentPhoto = currentPhoto - 1;
};

function playOrPause() {
    let video = document.getElementById("project1-video");
    let playPauseButton = document.getElementById("project1-button3info");
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = "pause";
    } else {
        video.pause();
        playPauseButton.innerHTML = "play_arrow";
    }
}

document.getElementById('submit-button').addEventListener('click', function() {
    alert('Thanks for reaching out! Just click send on the email window and I will get back to you.');
});