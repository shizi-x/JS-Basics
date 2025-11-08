const getphoto = document.getElementById("getphoto");
const photos = document.getElementById("photos");
const nump = document.getElementById("nump");
const mess = document.getElementById("mess");

function displayimg() {
    const numimg = parseInt(nump.value);

    photos.innerHTML = "";

    if (isNaN(numimg) || numimg < 1 || numimg > 10) {
        mess.innerText = "Enter valid numbers between 1 and 10!";
        return;
    };

    const imgPaths = [
        "assets/beach.jpg",
        "assets/blooming.jpg",
        "assets/canoe.jpg",
        "assets/flocks.jpg",
        "assets/forest.jpg",
        "assets/moon.jpg",
        "assets/rainbow.jpg",
        "assets/tiger.jpg",
        "assets/tower.jpg",
        "assets/winter.jpg"
    ];

    for (let i = 0; i < numimg; i++) {
        const img = document.createElement("img");
        img.src = imgPaths[i];
        photos.appendChild(img);
    };
};

getphoto.addEventListener("click", displayimg);