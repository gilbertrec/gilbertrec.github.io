import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/gilbertrec',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/gilbert.r_/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/gilbertrec/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/gilbert_rec',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:gilberto.recupito@vub.be',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
