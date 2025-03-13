let panorama, viewer;
const imageContainer = document.querySelector(".image-container");

// Initialize Panolens Viewer with 360 image
panorama = new PANOLENS.ImagePanorama("images/logo1.png");
viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.8,
  controlBar: false
});
viewer.add(panorama);


