import React from "react";

const Follower = ({ avatar_url, html_url, login }) => {
  const openInNewTab = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className=" bg-slate-900 m-4 p-4 text-white ">
      <div className="max-w-sm p-6">
        <img
          src={avatar_url}
          alt=""
          className="rounded-full border-2 border-white"
        />
      </div>
      <div className="flex flex-col text-center space-y-4 mt-2 ">
        <h4 className=" capitalize text-xl">{login}</h4>

        <button
          className=" bg-green-500 py-2"
          onClick={() => openInNewTab(html_url)}
        >
          View Profile
        </button>
      </div>
    </article>
  );
};

export default Follower;
