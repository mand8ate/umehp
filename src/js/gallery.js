//js
import ImgPreviewer from "img-previewer";
//css
import "img-previewer/dist/index.css";

try {
  const galleryWrapper = document.getElementById("gallery-wrapper");

  if (galleryWrapper) {
    const imgPreviewer = new ImgPreviewer("#gallery-wrapper", {
      fillRatio: 0.9,
      // attribute that holds the image
      dataUrlKey: "src",
      // additional styles
      style: {
        modalOpacity: 0.6,
        headerOpacity: 0,
        zIndex: 99,
      },
      // zoom options
      imageZoom: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
      // detect whether the parent element of the image is hidden by the css style
      bubblingLevel: 0,
    });
  }
} catch (e) {
  console.log("skip");
}
