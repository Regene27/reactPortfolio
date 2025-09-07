import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProfileImage from "./assets/images/portrait.png";

const Profile = () => {
  return (
    <div className="profile-section flex-1 flex items-center justify-center p-4">
      <div className="flex flex-row w-full shadow-lg">
        <div className="flex flex-col justify-center w-3/4 text-white">
          <div className="max-w-5xl mx-auto p-8 border">
            <h1 className="text-4xl font-bold mb-10">Regene Line</h1>
            <p className="text-xl">
              I’m a full-stack developer specializing in Ruby on Rails and
              Flutter, with a strong foundation in building scalable, secure,
              and user-focused applications. Alongside my development expertise,
              I’m actively advancing in cybersecurity—from penetration testing
              to SOC practices—giving me a unique perspective on creating
              software that is not only functional but also resilient against
              threats.
            </p>
            <br />
            <p className="text-xl">
              I thrive at the intersection of development and security,
              leveraging my coding background to understand vulnerabilities at a
              deeper level while applying security best practices in every
              project. Whether it’s architecting web apps, crafting mobile
              experiences, or analyzing systems for risks, I focus on delivering
              solutions that are both innovative and trustworthy.
            </p>
            <br />
            <p className="text-xl">
              My goal is to continue bridging software engineering and
              cybersecurity, driving projects that push boundaries in
              performance, usability, and protection.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start w-1/4 p-4">
          <img src={ProfileImage} alt="Profile" className="portrait" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
