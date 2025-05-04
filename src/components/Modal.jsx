import { createPortal } from "react-dom";

export default function Modal({ isOpen, setIsOpen, header, footer, children }) {
  return createPortal(
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${isOpen ? "" : "hidden"}`}
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl grow rounded-lg bg-white p-4 shadow-lg"
      >
        {header}
        <div className="-mx-4 my-3 flex flex-wrap gap-4 border-y border-slate-300 px-4 py-4">
          {children}
        </div>
        {footer}
      </div>
    </div>,
    document.getElementById("portal"),
  );
}
