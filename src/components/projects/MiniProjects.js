import React from "react";

import Docs from "../../imgs/docs.png";
import NoDB from "../../imgs/nodb.png";

const MiniProjects = () => {
  return (
    <section>
      <section>
        <h3>Google Documents Clone</h3>
        <img src={Docs} alt="google docs clone" className="docs-img" />
        <a
          href="https://github.com/danielcope/docs-clone"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Click to view GitHub repo &#8594;</span>
        </a>
      </section>
      <section>
        <h3>DnD Characters</h3>
        <img src={NoDB} alt="DnD character viewer" className="docs-img" />
        <a
          href="https://github.com/danielcope/nodb-dnd-characters"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Click to view GitHub repo &#8594;</span>
        </a>
      </section>
    </section>
  );
};

export default MiniProjects;
