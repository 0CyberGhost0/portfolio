import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ved Prakash",
  initials: "VP",
  url: "https://vedprakash.dev", // optional - update if you have a portfolio URL
  location: "Varanasi, India",
  locationLink: "https://www.google.com/maps/place/Bhubaneswar",
  description: "Full Stack Developer",
  summary:
    "Aspiring Software Developer skilled in full-stack development with a strong foundation in problem-solving. I’ve built and contributed to several cross-platform applications using technologies like React , React Native,  Flutter, Node.js, PostgreSQL, and AWS. [I’ve solved over 1400 problems on LeetCode](https://leetcode.com/Ved07) and currently rank in the top 4% globally. I’m passionate about building scalable solutions, continuously learning new tools, and collaborating on impactful tech, [GitHub](https://github.com/CyberGhost0), [LinkedIn](https://www.linkedin.com/in/Ved0709/), or view my [Resume](https://drive.google.com/file/d/1_29NzhTQ24qsy00tCcom8gNNESbRqfHB/view?usp=drive_link).",
  avatarUrl: "/profile.png",
  skills: [
    "React Native",
    "ReactJS",
    "NextJS",
    "OOPS",
    "Node.js",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "Flutter",
    "Dart",
    "PostgreSQL",
    "Firebase",
    "Data Structures",
    "Algorithms",
    "MongoDB",
    "Socket.io",
    "Docker",
    "Git",
    "Prisma",
    "AWS",
    "Cloudflare",
    "HTML",
    "Tailwind CSS",
    "C++",
    "Java"

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "prakashved0702@gmail.com",
    emailLink: "https://mail.google.com/mail/?view=cm&fs=1&to=prakashved0702@gmail.com",
    tel: "+91-9140857282",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/0CyberGhost0",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/Ved0709/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=prakashved0702@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [

    {
      company: "Freelance App Developer",
      href: "#",
      badges: [],
      location: "Remote",
      title: "App Developer",
      logoUrl: "/freelance.png",
      start: "Jan 2024",
      end: "Jan 2025",
      description:
        "Developed and deployed multiple cross-platform mobile applications for clients using Flutter and React Native. Helped a USA-based agency build an app with 2K+ daily active users, ensuring scalability and reliability.",
    },
  ],
  education: [
    {
      school: "KIIT University",
      href: "https://kiit.ac.in/",
      degree: "B.Tech (Computer Science and Engineering)",
      logoUrl: "/kiit.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "StoreIt 📱",
      href: "#",
      active: true,
      description:
        "A modern, feature-rich mobile application built with Expo and React Native that provides a seamless file storage and management experience. It supports real-time notifications, offline access, document sharing, and a beautiful responsive UI using NativeWind.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "AWS",
        "Tailwind CSS",
        "Node.js",
        "Prisma",
        "NativeWind",
        "Zustand",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0CyberGhost0/StoreIt/",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "/storeit.png"
    },
    {
      title: "Adhyayan",
      href: "#",
      active: true,
      description:
        "Adhyayan is an educational platform similar to Coursera, built with Flutter, Node.js, MongoDB. Features include course enrollment, real-time chat, quizzes, and secure payment integration.",
      technologies: [
        "Flutter",
        "Node.js",
        "Express",
        "Cloudinary",
        "MongoDB",
        "Riverpod",
        "Razorpay"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0CyberGhost0/Adhyayan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/adhyayan.png",
      video: "",
    },
    {
      title: "Socket Doc",
      href: "#",
      active: true,
      description:
        "A real-time collaborative document editor using Flutter and Node.js, enabling multiple users to edit documents together with WebSocket-based updates.",
      technologies: [
        "Flutter",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Google Auth"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0CyberGhost0/googleDoc/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/socketdoc.png",
      video: "",
    },
    {
      title: "CodeBuddy",
      href: "#",
      active: true,
      description:
        "A voice-controlled AI assistant app using ChatGPT and DALL-E APIs. Allows users to chat and generate images with voice commands.",
      technologies: [
        "Flutter",
        "ChatGPT API",
        "DALL-E API",
        "Voice Commands"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0CyberGhost0/CodeBuddy",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "/codebuddy.png",
      video: "",
    },
  ],
  hackathons: [],
};
