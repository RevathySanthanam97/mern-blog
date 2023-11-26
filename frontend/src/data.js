import Twitter from './media/images/twitter.svg';
import Facebook from './media/images/facebook.svg';
import Instagram from './media/images/instagram.svg';
import Whatsapp from './media/images/whatsapp.svg';

export const SocialLinks = [{
  label: 'Connect with Mail',
  link: 'mailto:revathysanthanam1997@gmail.com?subject=Query: Blog Creation&body=Hi! I would like to get in touch.',
  className: 'email',
}, {
  label: 'Dial Us',
  link: 'tel:7904335202',
  className: 'contact',
}, {
  img: Whatsapp,
  link: 'https://api.whatsapp.com/send?phone=7904335202'
}, {
  img: Twitter,
  link: 'https://twitter.com/'
}, {
  img: Facebook,
  link: 'https://www.facebook.com/'
}, {
  img: Instagram,
  link: 'https://www.instagram.com/'
}];

export const Navlinks = [{
  link: '/',
  title: 'Home',
}, {
  link: '/about-us',
  title: 'About Us',
}, {
  link: '/contact',
  title: 'Contact',
}, {
  link: '/create-blog',
  title: 'Create Blog',
}, {
  link: '/blog-list',
  title: 'Blog List',
}];