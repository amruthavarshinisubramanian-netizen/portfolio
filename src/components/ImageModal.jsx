import { useEffect } from "react";
import { FaTimes, FaExternalLinkAlt, FaSearchPlus } from "react-icons/fa";

export default function ImageModal({ isOpen, image, title, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Screenshot preview"}
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-badge">
              <FaSearchPlus /> High-Resolution Screenshot
            </span>
            <h3 className="modal-title">{title}</h3>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close image preview"
          >
            <FaTimes />
          </button>
        </div>

        <div className="modal-image-wrapper">
          <img
            src={image}
            alt={caption || title}
            className="modal-image"
          />
        </div>

        {caption && (
          <div className="modal-caption-bar">
            <p className="modal-caption">{caption}</p>
            <a
              href={image}
              target="_blank"
              rel="noreferrer"
              className="modal-raw-link"
            >
              Open original file <FaExternalLinkAlt />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

