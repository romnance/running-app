import React from "react";
import "./Inspiration.css";

function Inspiration() {
  return (
    <div className="Inspiration-container" id="Inspiration">
      <div className="Iframe">
        <iframe
          src="https://open.spotify.com/embed/playlist/4HxDwRIvFuNlI3NOKmisHU?utm_source=generator&theme=0"
          width="50%"
          height="80"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/playlist/4B654EM0wdvQ9fqOq7hnVH?utm_source=generator&theme=0"
          width="50%"
          height="80"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <div className="Center">
        <h1 className="Glow">INSPIRATION</h1>
      </div>
    </div>
  );
}

export default Inspiration;
