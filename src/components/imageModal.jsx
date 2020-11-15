import React, { useEffect, useState } from "react";
import Img from "gatsby-image";

const ImageModal = ({ imageIndex, imageArray }) => {
  const [showModal, setShowModal] = useState("");
  useEffect(() => {
    if (!imageIndex.index) {
      setShowModal("");
    } else {
      setShowModal("max-show");
    }
  }, [imageIndex]);

  return (
    <>
      <div
        onClick={(e) => setShowModal("")}
        className={"max-image-modal-wrapper " + showModal}
      >
        <div className="max-carousel">
          <Img
            fluid={imageArray[imageIndex.index - 1].node.childImageSharp.fluid}
          />
        </div>
      </div>
    </>
  );
};

export default ImageModal;
