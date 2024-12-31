import React from "react";
import "./JoinWith.css";

const JoinWith = () => {
  const groups = [
    {
      id: 1,
      name: "WhatsApp Group",
      link: "https://chat.whatsapp.com/example-link",
      icon: "/public/icons/whatsapp.png",
    },
    {
      id: 2,
      name: "Facebook Group",
      link: "https://www.facebook.com/groups/example-link",
      icon: "/public/icons/facebook.png",
    },
    {
      id: 3,
      name: "Instagram Page",
      link: "https://www.instagram.com/example-link",
      icon: "/public/icons/instagram.png",
    },
    {
      id: 4,
      name: "Tiktok Page",
      link: "https://www.tiktok.com/example-link",
      icon: "/public/icons/tik-tok.png",
    },
    {
      id: 5,
      name: "Youtube Page",
      link: "https://www.youtube.com/example-link",
      icon: "/public/icons/youtube.png",
    },
  ];

  return (
    <div className="join-with">
      <h2 className="join-title">Join Our Communities</h2>
      <p className="join-subtitle">Connect with us on your favorite platform:</p>
      <div className="group-links">
        {groups.map((group) => (
          <a
            key={group.id}
            href={group.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group-link"
          >
            <img src={group.icon} alt={group.name} className="group-icon" />
            <span className="group-name">{group.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default JoinWith;
