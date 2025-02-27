import { useState, useRef, useEffect } from "react";
import "./ExamplesSect.css";
import Image from "next/image";

const ExamplesSect = ({ masterClassData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const modalRef = useRef(null);

  const closeModal = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  // Масштабирование колёсиком
  const handleWheelZoom = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      setZoom((prev) => Math.max(1, Math.min(5, prev + e.deltaY * -0.01)));
    }
  };

  useEffect(() => {
    if (window != undefined) {
      if (selectedImage) {
        window.addEventListener("wheel", handleWheelZoom, { passive: false });
      } else {
        window.removeEventListener("wheel", handleWheelZoom);
      }
      return () => window.removeEventListener("wheel", handleWheelZoom);
    }
  }, [selectedImage]);

  return (
    <section className="examples">
      <div className="examples__container">
        <h2>Examples of finished product</h2>
        <div className="gallery">
          {masterClassData.example.map((exampl, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={`http://drive.google.com/uc?export=view&id=${exampl.path}`}
                alt={exampl.text_en}
                width={200}
                height={120}
                className="gallery-image"
                onClick={() => setSelectedImage(exampl.path)}
              />
              <span onClick={() => setSelectedImage(exampl.path)} className="zoom-icon">
                <Image
                  src={"/images/zoom-in.png"}
                  alt="zoom button"
                  width={24}
                  height={24}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {selectedImage && (
        <div className="img-modal" onClick={closeModal}>
          <div className="modal-content" ref={modalRef}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <span onClick={closeModal} className="modal-close">
              <Image
                src={"/images/close.svg"}
                alt="close button"
                width={64}
                height={64}
              />
            </span>
            <Image
              src={`http://drive.google.com/uc?export=view&id=${selectedImage}`}
              alt="Full Size"
              width={800}
              height={600}
              className="modal-image"
              style={{ transform: `scale(${zoom})` }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ExamplesSect;

