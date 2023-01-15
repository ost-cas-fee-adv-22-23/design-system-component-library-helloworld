import * as React from 'react';
import { FC } from 'react';

export type BrandingLogoProps = {
  orientation: 'horizontal' | 'vertical';
  color: 'purple' | 'white' | 'gradient';
};


const BrandingLogoSvGComponent: FC<BrandingLogoProps> = ({orientation, color}) => {
      switch(color) {
        case 'gradient':
              if(orientation === 'horizontal') {
                return gradientHorizontalLogo
              } else {
                return gradientVerticalLogo
              }
              break;
        case 'white':
          if(orientation === 'horizontal') {
            return whiteVerticalLogo
          } else {
            return whiteHorizontalLogo
          }
        default:
          if(orientation === 'horizontal') {
            return purpleVerticalLogo
          } else {
            return purpleHorizontalLogo
          }
      }
      return gradientHorizontalLogo;
    };

export default BrandingLogoSvGComponent;

const whiteHorizontalLogo = <svg width="335" height="64" viewBox="0 0 335 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_437_1086)">
    <path d="M37.3333 40H26.6667C25.1406 40 23.7708 40.849 23.0885 42.2135C22.4062 43.5755 22.5521 45.1823 23.4661 46.3985L28.7995 53.513C29.5625 54.5287 30.7291 55.112 32 55.112C33.2709 55.112 34.4375 54.5287 35.2005 53.5104L40.5339 46.401C41.4479 45.1823 41.5938 43.5755 40.9115 42.2135C40.2292 40.849 38.8594 40 37.3333 40Z" fill="white"/>
    <path d="M60.8958 25.7214C60.1877 23.8527 59.3084 21.9657 58.2887 20.1138C61.7077 18.3183 64 14.7352 64 10.6667C64 4.78387 59.2161 0 53.3333 0C49.492 0 45.9251 2.24267 43.9906 5.5568C40.4551 3.7544 36.4598 2.66667 32 2.66667C27.5402 2.66667 23.5451 3.75456 20.0094 5.5568C18.0749 2.24267 14.508 0 10.6667 0C4.78387 0 0 4.78387 0 10.6667C0 14.7347 2.29168 18.3177 5.70997 20.1133C4.68979 21.9653 3.81021 23.8525 3.10157 25.7214C0.109387 33.625 -2.22656 44.8281 3.64845 53.3359C8.53387 60.4115 18.0729 64 32 64C45.9271 64 55.4661 60.4115 60.3516 53.3359C66.2266 44.8281 63.888 33.625 60.8958 25.7214ZM55.9635 50.3047C52.1328 55.8542 44.0703 58.6667 32 58.6667C19.9297 58.6667 11.8672 55.8542 8.03645 50.3047C3.47656 43.7031 5.54947 34.3203 8.08853 27.612C9.33072 24.3359 16.3203 8 32 8C47.6797 8 54.6693 24.3359 55.9115 27.612C58.4505 34.3203 60.5234 43.7031 55.9635 50.3047Z" fill="white"/>
    <path d="M25.7031 33.013C28.1094 29.5911 28.3177 28.2291 27.7161 25.875C26.5755 21.4089 23.7318 20.4713 21.5495 20.4713C16.1276 20.4713 11.8984 27.789 11.8463 31.4479C11.8151 33.6458 12.7031 35.9349 14.1693 37.4218C15.1979 38.4635 16.4062 39.0156 17.6666 39.0156C21.0339 39.0156 23.6198 35.9818 25.7031 33.013Z" fill="white"/>
    <path d="M42.4505 20.4714C40.2682 20.4714 37.4245 21.4089 36.2839 25.875C35.6823 28.2292 35.8906 29.5911 38.2969 33.013C40.3802 35.9818 42.9662 39.0157 46.3333 39.0157C47.5938 39.0157 48.8021 38.4636 49.8307 37.4219C51.2969 35.9349 52.1849 33.6458 52.1536 31.4505C52.1016 27.7891 47.8724 20.4714 42.4505 20.4714Z" fill="white"/>
  </g>
  <path d="M138.88 10.496V55.424H127.936V28.48L117.888 55.424H109.056L98.944 28.416V55.424H88V10.496H100.928L113.536 41.6L126.016 10.496H138.88Z" fill="white"/>
  <path d="M178.174 19.712V55.424H167.23V50.56C166.121 52.1387 164.606 53.4187 162.686 54.4C160.809 55.3387 158.718 55.808 156.414 55.808C153.683 55.808 151.273 55.2107 149.182 54.016C147.091 52.7787 145.47 51.008 144.318 48.704C143.166 46.4 142.59 43.6907 142.59 40.576V19.712H153.47V39.104C153.47 41.4934 154.089 43.3494 155.326 44.672C156.563 45.9947 158.227 46.656 160.318 46.656C162.451 46.656 164.137 45.9947 165.374 44.672C166.611 43.3494 167.23 41.4934 167.23 39.104V19.712H178.174Z" fill="white"/>
  <path d="M227.763 19.328C232.2 19.328 235.72 20.672 238.323 23.36C240.968 26.048 242.291 29.7814 242.291 34.56V55.424H231.411V36.032C231.411 33.728 230.792 31.9574 229.555 30.72C228.36 29.44 226.696 28.8 224.563 28.8C222.43 28.8 220.744 29.44 219.507 30.72C218.312 31.9574 217.715 33.728 217.715 36.032V55.424H206.835V36.032C206.835 33.728 206.216 31.9574 204.979 30.72C203.784 29.44 202.12 28.8 199.987 28.8C197.854 28.8 196.168 29.44 194.931 30.72C193.736 31.9574 193.139 33.728 193.139 36.032V55.424H182.195V19.712H193.139V24.192C194.248 22.6987 195.699 21.5254 197.491 20.672C199.283 19.776 201.31 19.328 203.571 19.328C206.259 19.328 208.648 19.904 210.739 21.056C212.872 22.208 214.536 23.8507 215.731 25.984C216.968 24.0214 218.654 22.4214 220.787 21.184C222.92 19.9467 225.246 19.328 227.763 19.328Z" fill="white"/>
  <path d="M257.049 24.768C258.073 23.104 259.545 21.76 261.465 20.736C263.385 19.712 265.582 19.2 268.057 19.2C271.001 19.2 273.668 19.9467 276.057 21.44C278.446 22.9334 280.324 25.0667 281.689 27.84C283.097 30.6134 283.801 33.8347 283.801 37.504C283.801 41.1734 283.097 44.416 281.689 47.232C280.324 50.0054 278.446 52.16 276.057 53.696C273.668 55.1894 271.001 55.936 268.057 55.936C265.54 55.936 263.342 55.4454 261.465 54.464C259.588 53.44 258.116 52.096 257.049 50.432V55.424H246.105V8.06403H257.049V24.768ZM272.665 37.504C272.665 34.7734 271.897 32.64 270.361 31.104C268.868 29.5254 267.012 28.736 264.793 28.736C262.617 28.736 260.761 29.5254 259.225 31.104C257.732 32.6827 256.985 34.8374 256.985 37.568C256.985 40.2987 257.732 42.4534 259.225 44.032C260.761 45.6107 262.617 46.4 264.793 46.4C266.969 46.4 268.825 45.6107 270.361 44.032C271.897 42.4107 272.665 40.2347 272.665 37.504Z" fill="white"/>
  <path d="M296.646 8.06403V55.424H285.702V8.06403H296.646Z" fill="white"/>
  <path d="M334.402 36.992C334.402 38.016 334.337 39.0827 334.21 40.192H309.441C309.612 42.4107 310.316 44.1174 311.553 45.312C312.833 46.464 314.391 47.04 316.226 47.04C318.956 47.04 320.855 45.888 321.922 43.584H333.57C332.972 45.9307 331.884 48.0427 330.306 49.92C328.77 51.7974 326.828 53.2694 324.482 54.336C322.135 55.4027 319.511 55.936 316.609 55.936C313.111 55.936 309.996 55.1894 307.266 53.696C304.535 52.2027 302.402 50.0694 300.866 47.296C299.33 44.5227 298.562 41.28 298.562 37.568C298.562 33.856 299.308 30.6134 300.801 27.84C302.337 25.0667 304.471 22.9334 307.202 21.44C309.932 19.9467 313.068 19.2 316.609 19.2C320.065 19.2 323.137 19.9254 325.826 21.376C328.514 22.8267 330.604 24.896 332.098 27.584C333.633 30.272 334.402 33.408 334.402 36.992ZM323.202 34.112C323.202 32.2347 322.562 30.7414 321.282 29.632C320.002 28.5227 318.402 27.968 316.482 27.968C314.647 27.968 313.09 28.5014 311.81 29.568C310.572 30.6347 309.804 32.1494 309.506 34.112H323.202Z" fill="white"/>
  <defs>
    <clipPath id="clip0_437_1086">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>

const whiteVerticalLogo = <svg width="247" height="128" viewBox="0 0 247 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_437_1089)">
    <path d="M128.535 40H117.868C116.342 40 114.972 40.849 114.29 42.2135C113.607 43.5755 113.753 45.1823 114.667 46.3985L120.001 53.513C120.764 54.5287 121.93 55.112 123.201 55.112C124.472 55.112 125.639 54.5287 126.402 53.5104L131.735 46.401C132.649 45.1823 132.795 43.5755 132.113 42.2135C131.43 40.849 130.061 40 128.535 40Z" fill="white"/>
    <path d="M152.097 25.7214C151.389 23.8527 150.51 21.9657 149.49 20.1138C152.909 18.3183 155.201 14.7352 155.201 10.6667C155.201 4.78387 150.417 0 144.535 0C140.693 0 137.126 2.24267 135.192 5.5568C131.656 3.7544 127.661 2.66667 123.201 2.66667C118.741 2.66667 114.746 3.75456 111.211 5.5568C109.276 2.24267 105.709 0 101.868 0C95.985 0 91.2012 4.78387 91.2012 10.6667C91.2012 14.7347 93.4929 18.3177 96.9111 20.1133C95.891 21.9653 95.0114 23.8525 94.3027 25.7214C91.3106 33.625 88.9746 44.8281 94.8496 53.3359C99.735 60.4115 109.274 64 123.201 64C137.128 64 146.667 60.4115 151.553 53.3359C157.428 44.8281 155.089 33.625 152.097 25.7214ZM147.165 50.3047C143.334 55.8542 135.271 58.6667 123.201 58.6667C111.131 58.6667 103.068 55.8542 99.2376 50.3047C94.6777 43.7031 96.7506 34.3203 99.2897 27.612C100.532 24.3359 107.521 8 123.201 8C138.881 8 145.87 24.3359 147.113 27.612C149.652 34.3203 151.725 43.7031 147.165 50.3047Z" fill="white"/>
    <path d="M116.904 33.013C119.311 29.5911 119.519 28.2291 118.917 25.875C117.777 21.4089 114.933 20.4713 112.751 20.4713C107.329 20.4713 103.1 27.789 103.048 31.4479C103.016 33.6458 103.904 35.9349 105.37 37.4218C106.399 38.4635 107.607 39.0156 108.868 39.0156C112.235 39.0156 114.821 35.9818 116.904 33.013Z" fill="white"/>
    <path d="M133.652 20.4714C131.469 20.4714 128.626 21.4089 127.485 25.875C126.883 28.2292 127.092 29.5911 129.498 33.013C131.581 35.9818 134.167 39.0157 137.535 39.0157C138.795 39.0157 140.003 38.4636 141.032 37.4219C142.498 35.9349 143.386 33.6458 143.355 31.4505C143.303 27.7891 139.074 20.4714 133.652 20.4714Z" fill="white"/>
  </g>
  <path d="M50.88 82.432V127.36H39.936V100.416L29.888 127.36H21.056L10.944 100.352V127.36H0V82.432H12.928L25.536 113.536L38.016 82.432H50.88Z" fill="white"/>
  <path d="M90.174 91.648V127.36H79.23V122.496C78.1207 124.075 76.606 125.355 74.686 126.336C72.8087 127.275 70.718 127.744 68.414 127.744C65.6833 127.744 63.2727 127.147 61.182 125.952C59.0913 124.715 57.47 122.944 56.318 120.64C55.166 118.336 54.59 115.627 54.59 112.512V91.648H65.47V111.04C65.47 113.429 66.0887 115.285 67.326 116.608C68.5633 117.931 70.2273 118.592 72.318 118.592C74.4513 118.592 76.1367 117.931 77.374 116.608C78.6113 115.285 79.23 113.429 79.23 111.04V91.648H90.174Z" fill="white"/>
  <path d="M139.763 91.264C144.2 91.264 147.72 92.608 150.323 95.296C152.968 97.984 154.291 101.717 154.291 106.496V127.36H143.411V107.968C143.411 105.664 142.792 103.893 141.555 102.656C140.36 101.376 138.696 100.736 136.563 100.736C134.43 100.736 132.744 101.376 131.507 102.656C130.312 103.893 129.715 105.664 129.715 107.968V127.36H118.835V107.968C118.835 105.664 118.216 103.893 116.979 102.656C115.784 101.376 114.12 100.736 111.987 100.736C109.854 100.736 108.168 101.376 106.931 102.656C105.736 103.893 105.139 105.664 105.139 107.968V127.36H94.195V91.648H105.139V96.128C106.248 94.6347 107.699 93.4613 109.491 92.608C111.283 91.712 113.31 91.264 115.571 91.264C118.259 91.264 120.648 91.84 122.739 92.992C124.872 94.144 126.536 95.7867 127.731 97.92C128.968 95.9573 130.654 94.3573 132.787 93.12C134.92 91.8827 137.246 91.264 139.763 91.264Z" fill="white"/>
  <path d="M169.049 96.704C170.073 95.04 171.545 93.696 173.465 92.672C175.385 91.648 177.582 91.136 180.057 91.136C183.001 91.136 185.668 91.8827 188.057 93.376C190.446 94.8693 192.324 97.0027 193.689 99.776C195.097 102.549 195.801 105.771 195.801 109.44C195.801 113.109 195.097 116.352 193.689 119.168C192.324 121.941 190.446 124.096 188.057 125.632C185.668 127.125 183.001 127.872 180.057 127.872C177.54 127.872 175.342 127.381 173.465 126.4C171.588 125.376 170.116 124.032 169.049 122.368V127.36H158.105V80H169.049V96.704ZM184.665 109.44C184.665 106.709 183.897 104.576 182.361 103.04C180.868 101.461 179.012 100.672 176.793 100.672C174.617 100.672 172.761 101.461 171.225 103.04C169.732 104.619 168.985 106.773 168.985 109.504C168.985 112.235 169.732 114.389 171.225 115.968C172.761 117.547 174.617 118.336 176.793 118.336C178.969 118.336 180.825 117.547 182.361 115.968C183.897 114.347 184.665 112.171 184.665 109.44Z" fill="white"/>
  <path d="M208.646 80V127.36H197.702V80H208.646Z" fill="white"/>
  <path d="M246.402 108.928C246.402 109.952 246.337 111.019 246.21 112.128H221.441C221.612 114.347 222.316 116.053 223.553 117.248C224.833 118.4 226.391 118.976 228.226 118.976C230.956 118.976 232.855 117.824 233.922 115.52H245.57C244.972 117.867 243.884 119.979 242.306 121.856C240.77 123.733 238.828 125.205 236.482 126.272C234.135 127.339 231.511 127.872 228.609 127.872C225.111 127.872 221.996 127.125 219.266 125.632C216.535 124.139 214.402 122.005 212.866 119.232C211.33 116.459 210.562 113.216 210.562 109.504C210.562 105.792 211.308 102.549 212.801 99.776C214.337 97.0027 216.471 94.8693 219.202 93.376C221.932 91.8827 225.068 91.136 228.609 91.136C232.065 91.136 235.137 91.8613 237.826 93.312C240.514 94.7627 242.604 96.832 244.098 99.52C245.633 102.208 246.402 105.344 246.402 108.928ZM235.202 106.048C235.202 104.171 234.562 102.677 233.282 101.568C232.002 100.459 230.402 99.904 228.482 99.904C226.647 99.904 225.09 100.437 223.81 101.504C222.572 102.571 221.804 104.085 221.506 106.048H235.202Z" fill="white"/>
  <defs>
    <clipPath id="clip0_437_1089">
      <rect width="64" height="64" fill="white" transform="translate(91.2012)"/>
    </clipPath>
  </defs>
</svg>

const purpleHorizontalLogo = <svg width="335" height="64" viewBox="0 0 335 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_437_1088)">
    <path d="M37.3333 40H26.6667C25.1406 40 23.7708 40.849 23.0885 42.2135C22.4062 43.5755 22.5521 45.1823 23.4661 46.3985L28.7995 53.513C29.5625 54.5287 30.7291 55.112 32 55.112C33.2709 55.112 34.4375 54.5287 35.2005 53.5104L40.5339 46.401C41.4479 45.1823 41.5938 43.5755 40.9115 42.2135C40.2292 40.849 38.8594 40 37.3333 40Z" fill="#7C3AED"/>
    <path d="M60.8958 25.7214C60.1877 23.8527 59.3084 21.9657 58.2887 20.1138C61.7077 18.3183 64 14.7352 64 10.6667C64 4.78387 59.2161 0 53.3333 0C49.492 0 45.9251 2.24267 43.9906 5.5568C40.4551 3.7544 36.4598 2.66667 32 2.66667C27.5402 2.66667 23.5451 3.75456 20.0094 5.5568C18.0749 2.24267 14.508 0 10.6667 0C4.78387 0 0 4.78387 0 10.6667C0 14.7347 2.29168 18.3177 5.70997 20.1133C4.68979 21.9653 3.81021 23.8525 3.10157 25.7214C0.109387 33.625 -2.22656 44.8281 3.64845 53.3359C8.53387 60.4115 18.0729 64 32 64C45.9271 64 55.4661 60.4115 60.3516 53.3359C66.2266 44.8281 63.888 33.625 60.8958 25.7214ZM55.9635 50.3047C52.1328 55.8542 44.0703 58.6667 32 58.6667C19.9297 58.6667 11.8672 55.8542 8.03645 50.3047C3.47656 43.7031 5.54947 34.3203 8.08853 27.612C9.33072 24.3359 16.3203 8 32 8C47.6797 8 54.6693 24.3359 55.9115 27.612C58.4505 34.3203 60.5234 43.7031 55.9635 50.3047Z" fill="#7C3AED"/>
    <path d="M25.7031 33.013C28.1094 29.5911 28.3177 28.2291 27.7161 25.875C26.5755 21.4089 23.7318 20.4713 21.5495 20.4713C16.1276 20.4713 11.8984 27.789 11.8463 31.4479C11.8151 33.6458 12.7031 35.9349 14.1693 37.4218C15.1979 38.4635 16.4062 39.0156 17.6666 39.0156C21.0339 39.0156 23.6198 35.9818 25.7031 33.013Z" fill="#7C3AED"/>
    <path d="M42.4505 20.4714C40.2682 20.4714 37.4245 21.4089 36.2839 25.875C35.6823 28.2292 35.8906 29.5911 38.2969 33.013C40.3802 35.9818 42.9662 39.0157 46.3333 39.0157C47.5938 39.0157 48.8021 38.4636 49.8307 37.4219C51.2969 35.9349 52.1849 33.6458 52.1536 31.4505C52.1016 27.7891 47.8724 20.4714 42.4505 20.4714Z" fill="#7C3AED"/>
  </g>
  <path d="M138.88 10.496V55.424H127.936V28.48L117.888 55.424H109.056L98.944 28.416V55.424H88V10.496H100.928L113.536 41.6L126.016 10.496H138.88Z" fill="#7C3AED"/>
  <path d="M178.174 19.712V55.424H167.23V50.56C166.121 52.1387 164.606 53.4187 162.686 54.4C160.809 55.3387 158.718 55.808 156.414 55.808C153.683 55.808 151.273 55.2107 149.182 54.016C147.091 52.7787 145.47 51.008 144.318 48.704C143.166 46.4 142.59 43.6907 142.59 40.576V19.712H153.47V39.104C153.47 41.4934 154.089 43.3494 155.326 44.672C156.563 45.9947 158.227 46.656 160.318 46.656C162.451 46.656 164.137 45.9947 165.374 44.672C166.611 43.3494 167.23 41.4934 167.23 39.104V19.712H178.174Z" fill="#7C3AED"/>
  <path d="M227.763 19.328C232.2 19.328 235.72 20.672 238.323 23.36C240.968 26.048 242.291 29.7814 242.291 34.56V55.424H231.411V36.032C231.411 33.728 230.792 31.9574 229.555 30.72C228.36 29.44 226.696 28.8 224.563 28.8C222.43 28.8 220.744 29.44 219.507 30.72C218.312 31.9574 217.715 33.728 217.715 36.032V55.424H206.835V36.032C206.835 33.728 206.216 31.9574 204.979 30.72C203.784 29.44 202.12 28.8 199.987 28.8C197.854 28.8 196.168 29.44 194.931 30.72C193.736 31.9574 193.139 33.728 193.139 36.032V55.424H182.195V19.712H193.139V24.192C194.248 22.6987 195.699 21.5254 197.491 20.672C199.283 19.776 201.31 19.328 203.571 19.328C206.259 19.328 208.648 19.904 210.739 21.056C212.872 22.208 214.536 23.8507 215.731 25.984C216.968 24.0214 218.654 22.4214 220.787 21.184C222.92 19.9467 225.246 19.328 227.763 19.328Z" fill="#7C3AED"/>
  <path d="M257.049 24.768C258.073 23.104 259.545 21.76 261.465 20.736C263.385 19.712 265.582 19.2 268.057 19.2C271.001 19.2 273.668 19.9467 276.057 21.44C278.446 22.9334 280.324 25.0667 281.689 27.84C283.097 30.6134 283.801 33.8347 283.801 37.504C283.801 41.1734 283.097 44.416 281.689 47.232C280.324 50.0054 278.446 52.16 276.057 53.696C273.668 55.1894 271.001 55.936 268.057 55.936C265.54 55.936 263.342 55.4454 261.465 54.464C259.588 53.44 258.116 52.096 257.049 50.432V55.424H246.105V8.06403H257.049V24.768ZM272.665 37.504C272.665 34.7734 271.897 32.64 270.361 31.104C268.868 29.5254 267.012 28.736 264.793 28.736C262.617 28.736 260.761 29.5254 259.225 31.104C257.732 32.6827 256.985 34.8374 256.985 37.568C256.985 40.2987 257.732 42.4534 259.225 44.032C260.761 45.6107 262.617 46.4 264.793 46.4C266.969 46.4 268.825 45.6107 270.361 44.032C271.897 42.4107 272.665 40.2347 272.665 37.504Z" fill="#7C3AED"/>
  <path d="M296.646 8.06403V55.424H285.702V8.06403H296.646Z" fill="#7C3AED"/>
  <path d="M334.402 36.992C334.402 38.016 334.337 39.0827 334.21 40.192H309.441C309.612 42.4107 310.316 44.1174 311.553 45.312C312.833 46.464 314.391 47.04 316.226 47.04C318.956 47.04 320.855 45.888 321.922 43.584H333.57C332.972 45.9307 331.884 48.0427 330.306 49.92C328.77 51.7974 326.828 53.2694 324.482 54.336C322.135 55.4027 319.511 55.936 316.609 55.936C313.111 55.936 309.996 55.1894 307.266 53.696C304.535 52.2027 302.402 50.0694 300.866 47.296C299.33 44.5227 298.562 41.28 298.562 37.568C298.562 33.856 299.308 30.6134 300.801 27.84C302.337 25.0667 304.471 22.9334 307.202 21.44C309.932 19.9467 313.068 19.2 316.609 19.2C320.065 19.2 323.137 19.9254 325.826 21.376C328.514 22.8267 330.604 24.896 332.098 27.584C333.633 30.272 334.402 33.408 334.402 36.992ZM323.202 34.112C323.202 32.2347 322.562 30.7414 321.282 29.632C320.002 28.5227 318.402 27.968 316.482 27.968C314.647 27.968 313.09 28.5014 311.81 29.568C310.572 30.6347 309.804 32.1494 309.506 34.112H323.202Z" fill="#7C3AED"/>
  <defs>
    <clipPath id="clip0_437_1088">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>

const purpleVerticalLogo = <svg width="247" height="128" viewBox="0 0 247 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_437_1087)">
    <path d="M128.535 40H117.868C116.342 40 114.972 40.849 114.29 42.2135C113.607 43.5755 113.753 45.1823 114.667 46.3985L120.001 53.513C120.764 54.5287 121.93 55.112 123.201 55.112C124.472 55.112 125.639 54.5287 126.402 53.5104L131.735 46.401C132.649 45.1823 132.795 43.5755 132.113 42.2135C131.43 40.849 130.061 40 128.535 40Z" fill="#7C3AED"/>
    <path d="M152.097 25.7214C151.389 23.8527 150.51 21.9657 149.49 20.1138C152.909 18.3183 155.201 14.7352 155.201 10.6667C155.201 4.78387 150.417 0 144.535 0C140.693 0 137.126 2.24267 135.192 5.5568C131.656 3.7544 127.661 2.66667 123.201 2.66667C118.741 2.66667 114.746 3.75456 111.211 5.5568C109.276 2.24267 105.709 0 101.868 0C95.985 0 91.2012 4.78387 91.2012 10.6667C91.2012 14.7347 93.4929 18.3177 96.9111 20.1133C95.891 21.9653 95.0114 23.8525 94.3027 25.7214C91.3106 33.625 88.9746 44.8281 94.8496 53.3359C99.735 60.4115 109.274 64 123.201 64C137.128 64 146.667 60.4115 151.553 53.3359C157.428 44.8281 155.089 33.625 152.097 25.7214ZM147.165 50.3047C143.334 55.8542 135.271 58.6667 123.201 58.6667C111.131 58.6667 103.068 55.8542 99.2376 50.3047C94.6777 43.7031 96.7506 34.3203 99.2897 27.612C100.532 24.3359 107.521 8 123.201 8C138.881 8 145.87 24.3359 147.113 27.612C149.652 34.3203 151.725 43.7031 147.165 50.3047Z" fill="#7C3AED"/>
    <path d="M116.904 33.013C119.311 29.5911 119.519 28.2291 118.917 25.875C117.777 21.4089 114.933 20.4713 112.751 20.4713C107.329 20.4713 103.1 27.789 103.048 31.4479C103.016 33.6458 103.904 35.9349 105.37 37.4218C106.399 38.4635 107.607 39.0156 108.868 39.0156C112.235 39.0156 114.821 35.9818 116.904 33.013Z" fill="#7C3AED"/>
    <path d="M133.652 20.4714C131.469 20.4714 128.626 21.4089 127.485 25.875C126.883 28.2292 127.092 29.5911 129.498 33.013C131.581 35.9818 134.167 39.0157 137.535 39.0157C138.795 39.0157 140.003 38.4636 141.032 37.4219C142.498 35.9349 143.386 33.6458 143.355 31.4505C143.303 27.7891 139.074 20.4714 133.652 20.4714Z" fill="#7C3AED"/>
  </g>
  <path d="M50.88 82.432V127.36H39.936V100.416L29.888 127.36H21.056L10.944 100.352V127.36H0V82.432H12.928L25.536 113.536L38.016 82.432H50.88Z" fill="#7C3AED"/>
  <path d="M90.174 91.648V127.36H79.23V122.496C78.1207 124.075 76.606 125.355 74.686 126.336C72.8087 127.275 70.718 127.744 68.414 127.744C65.6833 127.744 63.2727 127.147 61.182 125.952C59.0913 124.715 57.47 122.944 56.318 120.64C55.166 118.336 54.59 115.627 54.59 112.512V91.648H65.47V111.04C65.47 113.429 66.0887 115.285 67.326 116.608C68.5633 117.931 70.2273 118.592 72.318 118.592C74.4513 118.592 76.1367 117.931 77.374 116.608C78.6113 115.285 79.23 113.429 79.23 111.04V91.648H90.174Z" fill="#7C3AED"/>
  <path d="M139.763 91.264C144.2 91.264 147.72 92.608 150.323 95.296C152.968 97.984 154.291 101.717 154.291 106.496V127.36H143.411V107.968C143.411 105.664 142.792 103.893 141.555 102.656C140.36 101.376 138.696 100.736 136.563 100.736C134.43 100.736 132.744 101.376 131.507 102.656C130.312 103.893 129.715 105.664 129.715 107.968V127.36H118.835V107.968C118.835 105.664 118.216 103.893 116.979 102.656C115.784 101.376 114.12 100.736 111.987 100.736C109.854 100.736 108.168 101.376 106.931 102.656C105.736 103.893 105.139 105.664 105.139 107.968V127.36H94.195V91.648H105.139V96.128C106.248 94.6347 107.699 93.4613 109.491 92.608C111.283 91.712 113.31 91.264 115.571 91.264C118.259 91.264 120.648 91.84 122.739 92.992C124.872 94.144 126.536 95.7867 127.731 97.92C128.968 95.9573 130.654 94.3573 132.787 93.12C134.92 91.8827 137.246 91.264 139.763 91.264Z" fill="#7C3AED"/>
  <path d="M169.049 96.704C170.073 95.04 171.545 93.696 173.465 92.672C175.385 91.648 177.582 91.136 180.057 91.136C183.001 91.136 185.668 91.8827 188.057 93.376C190.446 94.8693 192.324 97.0027 193.689 99.776C195.097 102.549 195.801 105.771 195.801 109.44C195.801 113.109 195.097 116.352 193.689 119.168C192.324 121.941 190.446 124.096 188.057 125.632C185.668 127.125 183.001 127.872 180.057 127.872C177.54 127.872 175.342 127.381 173.465 126.4C171.588 125.376 170.116 124.032 169.049 122.368V127.36H158.105V80H169.049V96.704ZM184.665 109.44C184.665 106.709 183.897 104.576 182.361 103.04C180.868 101.461 179.012 100.672 176.793 100.672C174.617 100.672 172.761 101.461 171.225 103.04C169.732 104.619 168.985 106.773 168.985 109.504C168.985 112.235 169.732 114.389 171.225 115.968C172.761 117.547 174.617 118.336 176.793 118.336C178.969 118.336 180.825 117.547 182.361 115.968C183.897 114.347 184.665 112.171 184.665 109.44Z" fill="#7C3AED"/>
  <path d="M208.646 80V127.36H197.702V80H208.646Z" fill="#7C3AED"/>
  <path d="M246.402 108.928C246.402 109.952 246.338 111.019 246.21 112.128H221.441C221.612 114.347 222.316 116.053 223.553 117.248C224.833 118.4 226.391 118.976 228.226 118.976C230.956 118.976 232.855 117.824 233.922 115.52H245.57C244.972 117.867 243.884 119.979 242.306 121.856C240.77 123.733 238.828 125.205 236.482 126.272C234.135 127.339 231.511 127.872 228.609 127.872C225.111 127.872 221.996 127.125 219.266 125.632C216.535 124.139 214.402 122.005 212.866 119.232C211.33 116.459 210.562 113.216 210.562 109.504C210.562 105.792 211.308 102.549 212.801 99.776C214.337 97.0027 216.471 94.8693 219.202 93.376C221.932 91.8827 225.068 91.136 228.609 91.136C232.065 91.136 235.138 91.8613 237.826 93.312C240.514 94.7627 242.604 96.832 244.098 99.52C245.634 102.208 246.402 105.344 246.402 108.928ZM235.202 106.048C235.202 104.171 234.562 102.677 233.282 101.568C232.002 100.459 230.402 99.904 228.482 99.904C226.647 99.904 225.09 100.437 223.81 101.504C222.572 102.571 221.804 104.085 221.506 106.048H235.202Z" fill="#7C3AED"/>
  <defs>
    <clipPath id="clip0_437_1087">
      <rect width="64" height="64" fill="white" transform="translate(91.2012)"/>
    </clipPath>
  </defs>
</svg>


const gradientVerticalLogo = <svg width="247" height="128" viewBox="0 0 247 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_447_514)">
    <path d="M128.535 40H117.868C116.342 40 114.972 40.849 114.29 42.2135C113.607 43.5755 113.753 45.1823 114.667 46.3985L120.001 53.513C120.764 54.5287 121.93 55.112 123.201 55.112C124.472 55.112 125.639 54.5287 126.402 53.5104L131.735 46.401C132.649 45.1823 132.795 43.5755 132.113 42.2135C131.43 40.849 130.061 40 128.535 40Z" fill="#7C3AED"/>
    <path d="M152.097 25.7214C151.389 23.8527 150.51 21.9657 149.49 20.1138C152.909 18.3183 155.201 14.7352 155.201 10.6667C155.201 4.78387 150.417 0 144.535 0C140.693 0 137.126 2.24267 135.192 5.5568C131.656 3.7544 127.661 2.66667 123.201 2.66667C118.741 2.66667 114.746 3.75456 111.211 5.5568C109.276 2.24267 105.709 0 101.868 0C95.985 0 91.2012 4.78387 91.2012 10.6667C91.2012 14.7347 93.4929 18.3177 96.9111 20.1133C95.891 21.9653 95.0114 23.8525 94.3027 25.7214C91.3106 33.625 88.9746 44.8281 94.8496 53.3359C99.735 60.4115 109.274 64 123.201 64C137.128 64 146.667 60.4115 151.553 53.3359C157.428 44.8281 155.089 33.625 152.097 25.7214ZM147.165 50.3047C143.334 55.8542 135.271 58.6667 123.201 58.6667C111.131 58.6667 103.068 55.8542 99.2376 50.3047C94.6777 43.7031 96.7506 34.3203 99.2897 27.612C100.532 24.3359 107.521 8 123.201 8C138.881 8 145.87 24.3359 147.113 27.612C149.652 34.3203 151.725 43.7031 147.165 50.3047Z" fill="#7C3AED"/>
    <path d="M116.904 33.013C119.311 29.5911 119.519 28.2291 118.917 25.875C117.777 21.4089 114.933 20.4713 112.751 20.4713C107.329 20.4713 103.1 27.789 103.048 31.4479C103.016 33.6458 103.904 35.9349 105.37 37.4218C106.399 38.4635 107.607 39.0156 108.868 39.0156C112.235 39.0156 114.821 35.9818 116.904 33.013Z" fill="#7C3AED"/>
    <path d="M133.652 20.4714C131.469 20.4714 128.626 21.4089 127.485 25.875C126.883 28.2292 127.092 29.5911 129.498 33.013C131.581 35.9818 134.167 39.0157 137.535 39.0157C138.795 39.0157 140.003 38.4636 141.032 37.4219C142.498 35.9349 143.386 33.6458 143.355 31.4505C143.303 27.7891 139.074 20.4714 133.652 20.4714Z" fill="#7C3AED"/>
  </g>
  <path d="M50.88 82.432V127.36H39.936V100.416L29.888 127.36H21.056L10.944 100.352V127.36H0V82.432H12.928L25.536 113.536L38.016 82.432H50.88Z" fill="url(#paint0_linear_447_514)"/>
  <path d="M90.174 91.648V127.36H79.23V122.496C78.1207 124.075 76.606 125.355 74.686 126.336C72.8087 127.275 70.718 127.744 68.414 127.744C65.6833 127.744 63.2727 127.147 61.182 125.952C59.0913 124.715 57.47 122.944 56.318 120.64C55.166 118.336 54.59 115.627 54.59 112.512V91.648H65.47V111.04C65.47 113.429 66.0887 115.285 67.326 116.608C68.5633 117.931 70.2273 118.592 72.318 118.592C74.4513 118.592 76.1367 117.931 77.374 116.608C78.6113 115.285 79.23 113.429 79.23 111.04V91.648H90.174Z" fill="url(#paint1_linear_447_514)"/>
  <path d="M139.763 91.264C144.2 91.264 147.72 92.608 150.323 95.296C152.968 97.984 154.291 101.717 154.291 106.496V127.36H143.411V107.968C143.411 105.664 142.792 103.893 141.555 102.656C140.36 101.376 138.696 100.736 136.563 100.736C134.43 100.736 132.744 101.376 131.507 102.656C130.312 103.893 129.715 105.664 129.715 107.968V127.36H118.835V107.968C118.835 105.664 118.216 103.893 116.979 102.656C115.784 101.376 114.12 100.736 111.987 100.736C109.854 100.736 108.168 101.376 106.931 102.656C105.736 103.893 105.139 105.664 105.139 107.968V127.36H94.195V91.648H105.139V96.128C106.248 94.6347 107.699 93.4613 109.491 92.608C111.283 91.712 113.31 91.264 115.571 91.264C118.259 91.264 120.648 91.84 122.739 92.992C124.872 94.144 126.536 95.7867 127.731 97.92C128.968 95.9573 130.654 94.3573 132.787 93.12C134.92 91.8827 137.246 91.264 139.763 91.264Z" fill="url(#paint2_linear_447_514)"/>
  <path d="M169.049 96.704C170.073 95.04 171.545 93.696 173.465 92.672C175.385 91.648 177.582 91.136 180.057 91.136C183.001 91.136 185.668 91.8827 188.057 93.376C190.446 94.8693 192.324 97.0027 193.689 99.776C195.097 102.549 195.801 105.771 195.801 109.44C195.801 113.109 195.097 116.352 193.689 119.168C192.324 121.941 190.446 124.096 188.057 125.632C185.668 127.125 183.001 127.872 180.057 127.872C177.54 127.872 175.342 127.381 173.465 126.4C171.588 125.376 170.116 124.032 169.049 122.368V127.36H158.105V80H169.049V96.704ZM184.665 109.44C184.665 106.709 183.897 104.576 182.361 103.04C180.868 101.461 179.012 100.672 176.793 100.672C174.617 100.672 172.761 101.461 171.225 103.04C169.732 104.619 168.985 106.773 168.985 109.504C168.985 112.235 169.732 114.389 171.225 115.968C172.761 117.547 174.617 118.336 176.793 118.336C178.969 118.336 180.825 117.547 182.361 115.968C183.897 114.347 184.665 112.171 184.665 109.44Z" fill="url(#paint3_linear_447_514)"/>
  <path d="M208.646 80V127.36H197.702V80H208.646Z" fill="url(#paint4_linear_447_514)"/>
  <path d="M246.402 108.928C246.402 109.952 246.337 111.019 246.21 112.128H221.441C221.612 114.347 222.316 116.053 223.553 117.248C224.833 118.4 226.391 118.976 228.226 118.976C230.956 118.976 232.855 117.824 233.922 115.52H245.57C244.972 117.867 243.884 119.979 242.306 121.856C240.77 123.733 238.828 125.205 236.482 126.272C234.135 127.339 231.511 127.872 228.609 127.872C225.111 127.872 221.996 127.125 219.266 125.632C216.535 124.139 214.402 122.005 212.866 119.232C211.33 116.459 210.562 113.216 210.562 109.504C210.562 105.792 211.308 102.549 212.801 99.776C214.337 97.0027 216.471 94.8693 219.202 93.376C221.932 91.8827 225.068 91.136 228.609 91.136C232.065 91.136 235.137 91.8613 237.826 93.312C240.514 94.7627 242.604 96.832 244.098 99.52C245.633 102.208 246.402 105.344 246.402 108.928ZM235.202 106.048C235.202 104.171 234.562 102.677 233.282 101.568C232.002 100.459 230.402 99.904 228.482 99.904C226.647 99.904 225.09 100.437 223.81 101.504C222.572 102.571 221.804 104.085 221.506 106.048H235.202Z" fill="url(#paint5_linear_447_514)"/>
  <defs>
    <linearGradient id="paint0_linear_447_514" x1="1.83583e-06" y1="103.936" x2="246.402" y2="103.936" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="paint1_linear_447_514" x1="1.83583e-06" y1="103.936" x2="246.402" y2="103.936" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="paint2_linear_447_514" x1="1.83583e-06" y1="103.936" x2="246.402" y2="103.936" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="paint3_linear_447_514" x1="1.83583e-06" y1="103.936" x2="246.402" y2="103.936" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="paint4_linear_447_514" x1="1.83583e-06" y1="103.936" x2="246.402" y2="103.936" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="paint5_linear_447_514" x1="1.83583e-06" y1="103.936" x2="246.402" y2="103.936" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <clipPath id="clip0_447_514">
      <rect width="64" height="64" fill="white" transform="translate(91.2012)"/>
    </clipPath>
  </defs>
</svg>


const gradientHorizontalLogo = <svg width="335" height="64" viewBox="0 0 335 64" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_447_517)">
    <path d="M37.3333 40H26.6667C25.1406 40 23.7708 40.849 23.0885 42.2135C22.4062 43.5755 22.5521 45.1823 23.4661 46.3985L28.7995 53.513C29.5625 54.5287 30.7291 55.112 32 55.112C33.2709 55.112 34.4375 54.5287 35.2005 53.5104L40.5339 46.401C41.4479 45.1823 41.5938 43.5755 40.9115 42.2135C40.2292 40.849 38.8594 40 37.3333 40Z" fill="#7C3AED"/>
    <path d="M60.8958 25.7214C60.1877 23.8527 59.3084 21.9657 58.2887 20.1138C61.7077 18.3183 64 14.7352 64 10.6667C64 4.78387 59.2161 0 53.3333 0C49.492 0 45.9251 2.24267 43.9906 5.5568C40.4551 3.7544 36.4598 2.66667 32 2.66667C27.5402 2.66667 23.5451 3.75456 20.0094 5.5568C18.0749 2.24267 14.508 0 10.6667 0C4.78387 0 0 4.78387 0 10.6667C0 14.7347 2.29168 18.3177 5.70997 20.1133C4.68979 21.9653 3.81021 23.8525 3.10157 25.7214C0.109387 33.625 -2.22656 44.8281 3.64845 53.3359C8.53387 60.4115 18.0729 64 32 64C45.9271 64 55.4661 60.4115 60.3516 53.3359C66.2266 44.8281 63.888 33.625 60.8958 25.7214ZM55.9635 50.3047C52.1328 55.8542 44.0703 58.6667 32 58.6667C19.9297 58.6667 11.8672 55.8542 8.03645 50.3047C3.47656 43.7031 5.54947 34.3203 8.08853 27.612C9.33072 24.3359 16.3203 8 32 8C47.6797 8 54.6693 24.3359 55.9115 27.612C58.4505 34.3203 60.5234 43.7031 55.9635 50.3047Z" fill="#7C3AED"/>
    <path d="M25.7031 33.013C28.1094 29.5911 28.3177 28.2291 27.7161 25.875C26.5755 21.4089 23.7318 20.4713 21.5495 20.4713C16.1276 20.4713 11.8984 27.789 11.8463 31.4479C11.8151 33.6458 12.7031 35.9349 14.1693 37.4218C15.1979 38.4635 16.4062 39.0156 17.6666 39.0156C21.0339 39.0156 23.6198 35.9818 25.7031 33.013Z" fill="#7C3AED"/>
    <path d="M42.4505 20.4714C40.2682 20.4714 37.4245 21.4089 36.2839 25.875C35.6823 28.2292 35.8906 29.5911 38.2969 33.013C40.3802 35.9818 42.9662 39.0157 46.3333 39.0157C47.5938 39.0157 48.8021 38.4636 49.8307 37.4219C51.2969 35.9349 52.1849 33.6458 52.1536 31.4505C52.1016 27.7891 47.8724 20.4714 42.4505 20.4714Z" fill="#7C3AED"/>
  </g>
  <path d="M138.88 10.496V55.424H127.936V28.48L117.888 55.424H109.056L98.944 28.416V55.424H88V10.496H100.928L113.536 41.6L126.016 10.496H138.88Z" fill="url(#paint0_linear_447_517)"/>
  <path d="M178.174 19.712V55.424H167.23V50.56C166.121 52.1387 164.606 53.4187 162.686 54.4C160.809 55.3387 158.718 55.808 156.414 55.808C153.683 55.808 151.273 55.2107 149.182 54.016C147.091 52.7787 145.47 51.008 144.318 48.704C143.166 46.4 142.59 43.6907 142.59 40.576V19.712H153.47V39.104C153.47 41.4934 154.089 43.3494 155.326 44.672C156.563 45.9947 158.227 46.656 160.318 46.656C162.451 46.656 164.137 45.9947 165.374 44.672C166.611 43.3494 167.23 41.4934 167.23 39.104V19.712H178.174Z" fill="url(#paint1_linear_447_517)"/>
  <path d="M227.763 19.328C232.2 19.328 235.72 20.672 238.323 23.36C240.968 26.048 242.291 29.7814 242.291 34.56V55.424H231.411V36.032C231.411 33.728 230.792 31.9574 229.555 30.72C228.36 29.44 226.696 28.8 224.563 28.8C222.43 28.8 220.744 29.44 219.507 30.72C218.312 31.9574 217.715 33.728 217.715 36.032V55.424H206.835V36.032C206.835 33.728 206.216 31.9574 204.979 30.72C203.784 29.44 202.12 28.8 199.987 28.8C197.854 28.8 196.168 29.44 194.931 30.72C193.736 31.9574 193.139 33.728 193.139 36.032V55.424H182.195V19.712H193.139V24.192C194.248 22.6987 195.699 21.5254 197.491 20.672C199.283 19.776 201.31 19.328 203.571 19.328C206.259 19.328 208.648 19.904 210.739 21.056C212.872 22.208 214.536 23.8507 215.731 25.984C216.968 24.0214 218.654 22.4214 220.787 21.184C222.92 19.9467 225.246 19.328 227.763 19.328Z" fill="url(#paint2_linear_447_517)"/>
  <path d="M257.049 24.768C258.073 23.104 259.545 21.76 261.465 20.736C263.385 19.712 265.582 19.2 268.057 19.2C271.001 19.2 273.668 19.9467 276.057 21.44C278.446 22.9334 280.324 25.0667 281.689 27.84C283.097 30.6134 283.801 33.8347 283.801 37.504C283.801 41.1734 283.097 44.416 281.689 47.232C280.324 50.0054 278.446 52.16 276.057 53.696C273.668 55.1894 271.001 55.936 268.057 55.936C265.54 55.936 263.342 55.4454 261.465 54.464C259.588 53.44 258.116 52.096 257.049 50.432V55.424H246.105V8.06403H257.049V24.768ZM272.665 37.504C272.665 34.7734 271.897 32.64 270.361 31.104C268.868 29.5254 267.012 28.736 264.793 28.736C262.617 28.736 260.761 29.5254 259.225 31.104C257.732 32.6827 256.985 34.8374 256.985 37.568C256.985 40.2987 257.732 42.4534 259.225 44.032C260.761 45.6107 262.617 46.4 264.793 46.4C266.969 46.4 268.825 45.6107 270.361 44.032C271.897 42.4107 272.665 40.2347 272.665 37.504Z" fill="url(#paint3_linear_447_517)"/>
  <path d="M296.646 8.06403V55.424H285.702V8.06403H296.646Z" fill="url(#paint4_linear_447_517)"/>
  <path d="M334.402 36.992C334.402 38.016 334.337 39.0827 334.21 40.192H309.441C309.612 42.4107 310.316 44.1174 311.553 45.312C312.833 46.464 314.391 47.04 316.226 47.04C318.956 47.04 320.855 45.888 321.922 43.584H333.57C332.972 45.9307 331.884 48.0427 330.306 49.92C328.77 51.7974 326.828 53.2694 324.482 54.336C322.135 55.4027 319.511 55.936 316.609 55.936C313.111 55.936 309.996 55.1894 307.266 53.696C304.535 52.2027 302.402 50.0694 300.866 47.296C299.33 44.5227 298.562 41.28 298.562 37.568C298.562 33.856 299.308 30.6134 300.801 27.84C302.337 25.0667 304.471 22.9334 307.202 21.44C309.932 19.9467 313.068 19.2 316.609 19.2C320.065 19.2 323.137 19.9254 325.826 21.376C328.514 22.8267 330.604 24.896 332.098 27.584C333.633 30.272 334.402 33.408 334.402 36.992ZM323.202 34.112C323.202 32.2347 322.562 30.7414 321.282 29.632C320.002 28.5227 318.402 27.968 316.482 27.968C314.647 27.968 313.09 28.5014 311.81 29.568C310.572 30.6347 309.804 32.1494 309.506 34.112H323.202Z" fill="url(#paint5_linear_447_517)"/>
  <defs>
    <linearGradient id="paint0_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="paint1_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="paint2_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="paint3_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="paint4_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="paint5_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <clipPath id="clip0_447_517">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
