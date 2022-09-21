import React from "react";

function Avatar({ url }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      loading="lazy"
      className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
      src={url}
      alt="profile picture avatar account"
    />
  );
}

export default Avatar;
