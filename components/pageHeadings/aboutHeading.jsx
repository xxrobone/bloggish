import React from 'react';
import { motion } from 'framer-motion';

import styles from './pageHeadings.module.scss';

const pathVariants = {
  hidden: {
    pathLength: 0,
    stroke: 'transparent',
    fill: 'none',
  },
  visible: {
    pathLength: 1,
    strokeWidth: 4,
    stroke: '#ee5f0c6f',
    transition: {
      duration: 1,
      when: 'afterChildren',
      staggerChildren: 0.3,
      ease: 'easeInOut',
    },
    fill: [
      '#fafafa00',
      '#fafafa00',
      '#fafafa00',
      '#fafafa00',
      '#2c2c2b25',
      '#ffffff4d',
      '#ffffff80',
      '#ffffffbd',
      '#ffffff',
    ],
  },
};

const AboutHeading = () => {
  return (
    <div>
      <motion.svg
        className={styles.heading_text}
        width='477'
        height='119'
        viewBox='0 0 477 119'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        variants={pathVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.path
          d='M88.3203 87.9688C88.3203 90.5 87.875 93.2422 86.9844 96.1953C86.0938 99.1016 84.6406 101.82 82.625 104.352C80.6562 106.836 78.0547 108.922 74.8203 110.609C71.6328 112.297 67.7422 113.141 63.1484 113.141H30.1719C27.6406 113.141 24.8984 112.695 21.9453 111.805C19.0391 110.914 16.3203 109.484 13.7891 107.516C11.3047 105.5 9.21875 102.898 7.53125 99.7109C5.84375 96.4766 5 92.5625 5 87.9688C5 85.4375 5.44531 82.6953 6.33594 79.7422C7.22656 76.7891 8.65625 74.0703 10.625 71.5859C12.6406 69.0547 15.2422 66.9453 18.4297 65.2578C21.6641 63.5703 25.5781 62.7266 30.1719 62.7266H63.1484V80.1641H30.1719C27.6875 80.1641 25.7656 80.9375 24.4062 82.4844C23.0469 83.9844 22.3672 85.8594 22.3672 88.1094C22.3672 90.5 23.1406 92.375 24.6875 93.7344C26.2812 95.0469 28.1562 95.7031 30.3125 95.7031H63.1484C65.6328 95.7031 67.5547 94.9531 68.9141 93.4531C70.2734 91.9531 70.9531 90.0781 70.9531 87.8281V62.3047C70.9531 59.9141 70.2031 58.0156 68.7031 56.6094C67.25 55.2031 65.3984 54.5 63.1484 54.5H23V37.1328H63.1484C65.6797 37.1328 68.3984 37.5781 71.3047 38.4688C74.2578 39.3594 76.9766 40.8125 79.4609 42.8281C81.9922 44.7969 84.1016 47.3984 85.7891 50.6328C87.4766 53.8203 88.3203 57.7109 88.3203 62.3047V87.9688Z'
          variants={pathVariants}
        />
        <motion.path
          d='M187.742 87.4766C187.742 89.2109 187.531 91.0391 187.109 92.9609C186.734 94.8828 186.125 96.8047 185.281 98.7266C184.438 100.602 183.336 102.406 181.977 104.141C180.664 105.875 179.047 107.422 177.125 108.781C175.25 110.094 173.07 111.148 170.586 111.945C168.102 112.742 165.289 113.141 162.148 113.141H129.172C127.438 113.141 125.609 112.953 123.688 112.578C121.766 112.156 119.844 111.523 117.922 110.68C116.047 109.836 114.242 108.758 112.508 107.445C110.773 106.086 109.227 104.469 107.867 102.594C106.555 100.672 105.5 98.4688 104.703 95.9844C103.906 93.4531 103.508 90.6172 103.508 87.4766V5H121.789V87.4766C121.789 89.7266 122.492 91.5312 123.898 92.8906C125.305 94.2031 127.062 94.8594 129.172 94.8594H162.148C164.445 94.8594 166.227 94.1797 167.492 92.8203C168.805 91.4609 169.461 89.6797 169.461 87.4766V62.7266C169.461 60.4297 168.781 58.6484 167.422 57.3828C166.062 56.0703 164.305 55.4141 162.148 55.4141H129.172V37.1328H162.148C163.883 37.1328 165.711 37.3438 167.633 37.7656C169.555 38.1406 171.453 38.75 173.328 39.5938C175.25 40.4375 177.078 41.5391 178.812 42.8984C180.547 44.2109 182.07 45.8281 183.383 47.75C184.695 49.625 185.75 51.8047 186.547 54.2891C187.344 56.7734 187.742 59.5859 187.742 62.7266V87.4766Z'
          variants={pathVariants}
        />
        <motion.path
          d='M286.039 87.4766C286.039 90.6172 285.641 93.4531 284.844 95.9844C284.047 98.4688 282.992 100.672 281.68 102.594C280.367 104.469 278.844 106.086 277.109 107.445C275.375 108.758 273.547 109.836 271.625 110.68C269.75 111.523 267.828 112.156 265.859 112.578C263.938 112.953 262.109 113.141 260.375 113.141H227.398C224.867 113.141 222.102 112.695 219.102 111.805C216.102 110.914 213.312 109.461 210.734 107.445C208.203 105.383 206.07 102.734 204.336 99.5C202.648 96.2188 201.805 92.2109 201.805 87.4766V62.7266C201.805 58.0391 202.648 54.0781 204.336 50.8438C206.07 47.5625 208.203 44.9141 210.734 42.8984C213.312 40.8359 216.102 39.3594 219.102 38.4688C222.102 37.5781 224.867 37.1328 227.398 37.1328H260.375C265.062 37.1328 269.047 37.9766 272.328 39.6641C275.609 41.3516 278.258 43.4844 280.273 46.0625C282.289 48.5938 283.742 51.3594 284.633 54.3594C285.57 57.3594 286.039 60.1484 286.039 62.7266V87.4766ZM267.758 62.8672C267.758 60.3359 267.125 58.4609 265.859 57.2422C264.594 56.0234 262.766 55.4141 260.375 55.4141H227.539C225.102 55.4141 223.25 56.0469 221.984 57.3125C220.719 58.5312 220.086 60.3359 220.086 62.7266V87.4766C220.086 89.8672 220.719 91.6953 221.984 92.9609C223.25 94.2266 225.102 94.8594 227.539 94.8594H260.375C262.859 94.8594 264.711 94.2266 265.93 92.9609C267.148 91.6953 267.758 89.8672 267.758 87.4766V62.8672Z'
          variants={pathVariants}
        />
        <motion.path
          d='M384.758 103.93C384.758 105.242 384.523 106.461 384.055 107.586C383.586 108.711 382.93 109.695 382.086 110.539C381.289 111.336 380.328 111.969 379.203 112.438C378.125 112.906 376.953 113.141 375.688 113.141H334.344C332.094 113.141 329.68 112.883 327.102 112.367C324.57 111.852 322.062 111.031 319.578 109.906C317.094 108.734 314.68 107.281 312.336 105.547C310.039 103.766 308.023 101.633 306.289 99.1484C304.555 96.6172 303.148 93.7109 302.07 90.4297C301.039 87.1484 300.523 83.4453 300.523 79.3203V37.1328H318.805V79.3203C318.805 81.7109 319.203 83.8672 320 85.7891C320.844 87.6641 321.969 89.2812 323.375 90.6406C324.781 92 326.422 93.0547 328.297 93.8047C330.219 94.5078 332.281 94.8594 334.484 94.8594H366.477V37.1328H384.758V103.93Z'
          variants={pathVariants}
        />
        <motion.path
          d='M471.031 55.4141H439.109V113.141H420.617V55.4141H396.852V37.1328H420.617V12.3125H439.109V37.1328H471.031V55.4141Z'
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
};

export default AboutHeading;
