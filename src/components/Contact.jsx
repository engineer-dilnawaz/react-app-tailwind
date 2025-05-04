import { Fragment, useState } from "react";
import Modal from "./Modal";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div>Contact</div>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={<p className="text-2xl font-bold text-red-400">Hi there</p>}
        footer={
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded bg-slate-100 px-4 py-1 font-bold"
            >
              Okay
            </button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          tenetur laudantium tempora magnam quaerat, dicta ut magni commodi,
          accusamus blanditiis dolore. Accusamus itaque adipisci eaque provident
          voluptatem quae exercitationem aliquid?
        </p>
      </Modal>
    </Fragment>
  );
}
