const Modal = ({ children, isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "is-open" : ""}`}>
      <div className="close" onClick={onClose}></div>
      <div className="modal-background"></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export { Modal };
