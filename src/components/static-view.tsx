"use client";

const links = {
  github: "https://github.com/omarfyi",
  linkedin: "https://linkedin.com/in/omarfyi",
  resume: "https://resume.omar.fyi",
  email: "mailto:mail@omar.fyi",
};

export default function StaticView() {
  return (
    <div className="min-h-screen bg-[#212121] text-[#EEFFFF] p-4">
      <div className="max-w-3xl mx-auto h-[calc(100vh-2rem)] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#89DDFF] mb-8">Omar Alhait</h1>
        <div className="space-y-4 text-center">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#82AAFF] hover:text-[#C3E88D] transition-colors"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#82AAFF] hover:text-[#C3E88D] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#82AAFF] hover:text-[#C3E88D] transition-colors"
          >
            Resume
          </a>
          <a
            href={links.email}
            className="block text-[#82AAFF] hover:text-[#C3E88D] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
