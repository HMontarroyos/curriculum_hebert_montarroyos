import {
  FaGithub,
  FaNpm,
  FaLinkedin,
  FaEnvelope,
  FaHeading,
  FaCodepen,
  FaDev,
  FaMedium,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaQuora,
} from "react-icons/fa";

export const SocialMedias = [
  { link: "https://github.com/HMontarroyos", icon: FaGithub },
  { link: "https://www.npmjs.com/~hmontarroyos", icon: FaNpm },
  {
    link: "https://www.linkedin.com/in/hebertmontarroyos-developer/",
    icon: FaLinkedin,
  },
  { link: "mailto:hebertmontarroyos@hotmail.com", icon: FaEnvelope },
  { link: "https://www.holopin.io/@hmontarroyos#", icon: FaHeading },
  { link: "https://codepen.io/hmontarroyos", icon: FaCodepen },
  { link: "https://dev.to/hmontarroyos", icon: FaDev },
  { link: "https://medium.com/@hebertmontarroyos", icon: FaMedium },
  { link: "https://www.instagram.com/hmontarroyosdev/", icon: FaInstagram },
  { link: "https://twitter.com/HMontarroyosDev", icon: FaTwitter },
  { link: "https://www.facebook.com/hmontarroyosdev", icon: FaFacebook },
  { link: "https://www.quora.com/profile/Hebert-Montarroyos", icon: FaQuora },
];

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {SocialMedias.map(({ link, icon: Icon }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-portfolio-text/10 hover:bg-primary text-portfolio-text hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}

