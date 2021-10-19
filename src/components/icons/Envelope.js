import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Envelope = () => {
  return (
    <section>
      <FontAwesomeIcon icon={faEnvelope} className='envelope-icon'/>
    </section>
  );
};

export default Envelope;
