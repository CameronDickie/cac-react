import React, { useState } from "react";
import Modal from "react-modal";
import { ReactComponent as Close } from "../assets/svgs/close.svg";

Modal.setAppElement("#root");
function Involved() {
  const [isOpen, openModal] = useState(false);
  return (
    <div>
      <button className="bg-green-300 p-2 rounded-full text-white font-bold"
        onClick={() => {
          openModal(true);
        }}
      >
        Join Now!
      </button>
      <Modal
        style={{
          overlay: {
            width: "50%",
            height: "auto",
            position: "absolute",
            left: "25%",
          },
          content: {},
        }}
        isOpen={isOpen}
        onRequestClose={() => {
          openModal(false);
        }}
      >
        <button
          onClick={() => {
            openModal(false);
          }}
        >
          <Close />
        </button>
        <div className="divide-y text-center">
          <h2 className="text-2xl font-bold underline pb-4">Join our Team!</h2>
          <div class="flex justify-center text-center p-8">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdpdpIjhpTaV0m5GBcYAOgKcrpi7VWseBG8LbzggkuykZ0gIw/viewform?embedded=true"
              width="100%"
              height="3100px"
              title="signupform"
              frameBorder="1"
            ></iframe>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Involved;
