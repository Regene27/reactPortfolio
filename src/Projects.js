import React from "react";
import projectImg1 from "./assets/images/project1.png";
import projectImg2 from "./assets/images/project2.png";
import AWSCert from "./assets/images/aws.png";

// Example data structure for projects and certifications
const projects = [
  {
    title: "Subscription Service Management System",
    image: projectImg1,
    description:
      "A subscription-based service management system with invoicing feature. (Private Repository)",
    link: "https://github.com/yourusername/project1",
  },

  {
    title: "Deep Learning Sign Language Detection",
    image: projectImg2,
    description: "A deep learning model trained to detect sign languages.",
    link: "https://github.com/yourusername/project2",
  },
  // Add more projects here
];

const certifications = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    image: AWSCert,
    description:
      "Certificate of Completion for the course AWS Cloud Quest: Cloud Practitioner\n                    Issued by Amazon Web Services Training and Certification",
    link: "https://www.credly.com/badges/838f5662-0e62-4fc7-b614-49388d3e82cb",
  },
  // Add more certifications here
];

const Card = ({ title, image, description, link }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row mb-8">
    <img src={image} alt={title} className="w-full md:w-48 h-48 object-cover" />
    <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline font-semibold"
        >
          View More
        </a>
      )}
    </div>
  </div>
);

const ProjectsPage = () => (
  <section className="max-w-3xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
    {projects.map((project, idx) => (
      <Card key={idx} {...project} />
    ))}
    <h2 className="text-3xl font-bold text-white mt-12 mb-8">Certifications</h2>
    {certifications.map((cert, idx) => (
      <Card key={idx} {...cert} />
    ))}
  </section>
);

export default ProjectsPage;
