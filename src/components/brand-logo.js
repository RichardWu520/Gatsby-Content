import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
export default function GatsbyContentfulLogo() {
  // return (
  //   <svg
  //     width="82"
  //     height="24"
  //     viewBox="0 0 82 24"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       d="M13.083 0C6.48301 0 1.08301 5.4 1.08301 12C1.08301 18.6 6.48301 24 13.083 24C19.683 24 25.083 18.6 25.083 12C25.083 5.4 19.683 0 13.083 0ZM6.39729 18.6857C4.59729 16.8857 3.65444 14.4857 3.65444 12.1714L12.9973 21.4286C10.5973 21.3429 8.19729 20.4857 6.39729 18.6857ZM15.1402 21.1714L3.91158 9.94286C4.85444 5.74286 8.62587 2.57143 13.083 2.57143C16.2544 2.57143 18.9973 4.11429 20.7116 6.42857L19.4259 7.54286C17.9687 5.57143 15.6544 4.28571 13.083 4.28571C9.74015 4.28571 6.91158 6.42857 5.79729 9.42857L15.6544 19.2857C18.1402 18.4286 20.0259 16.2857 20.6259 13.7143H16.5116V12H22.5116C22.5116 16.4571 19.3402 20.2286 15.1402 21.1714Z"
  //       fill="currentColor"
  //     />
  //     <path
  //       d="M46.0628 8.6268C46.2581 8.43154 46.2581 8.11496 46.0628 7.9197L45.8299 7.68681C45.6346 7.49154 45.3181 7.49154 45.1228 7.68681L42.1032 10.7064C41.908 10.9016 41.5914 10.9016 41.3961 10.7064L38.3766 7.6868C38.1813 7.49154 37.8647 7.49154 37.6695 7.68681L37.4366 7.9197C37.2413 8.11496 37.2413 8.43154 37.4366 8.62681L40.4561 11.6464C40.6514 11.8416 40.6514 12.1582 40.4561 12.3535L37.4366 15.373C37.2413 15.5683 37.2413 15.8849 37.4366 16.0801L37.6695 16.313C37.8647 16.5083 38.1813 16.5083 38.3766 16.313L41.3961 13.2935C41.5914 13.0982 41.908 13.0982 42.1032 13.2935L45.1228 16.313C45.3181 16.5083 45.6346 16.5083 45.8299 16.313L46.0628 16.0801C46.2581 15.8849 46.2581 15.5683 46.0628 15.373L43.0432 12.3535C42.848 12.1582 42.848 11.8416 43.0432 11.6464L46.0628 8.6268Z"
  //       fill="currentColor"
  //       stroke="currentColor"
  //       strokeWidth="0.5"
  //     />
  //     <path
  //       d="M66.1256 16.478V16.478C64.9356 15.2915 64.2668 13.6803 64.2668 11.9999C64.2668 10.3195 64.9356 8.70824 66.1256 7.52174V7.52174C67.0908 6.55658 67.0908 4.99176 66.1256 4.0266C65.1604 3.06145 63.5955 3.06145 62.6303 4.0266C60.5388 6.15453 59.3627 9.01622 59.3535 11.9999C59.3832 14.9794 60.5562 17.8338 62.6303 19.9732C63.2547 20.5975 64.1647 20.8414 65.0176 20.6128C65.8705 20.3843 66.5367 19.7181 66.7652 18.8653C66.9938 18.0124 66.7499 17.1024 66.1256 16.478V16.478Z"
  //       stroke="currentColor"
  //       strokeWidth="1.5"
  //     />
  //     <path
  //       d="M66.1254 7.52183V7.52183C67.3119 6.33194 68.9233 5.66317 70.6037 5.66317C72.2841 5.66317 73.8954 6.33194 75.082 7.52183V7.52183C76.0472 8.48699 77.6121 8.48699 78.5772 7.52183C79.5424 6.55668 79.5424 4.99185 78.5772 4.02669C76.4492 1.93521 73.5875 0.759177 70.6037 0.75C67.624 0.77967 64.7696 1.95268 62.6301 4.02669C61.665 4.99185 61.665 6.55668 62.6301 7.52183C63.5953 8.48699 65.1602 8.48699 66.1254 7.52183V7.52183Z"
  //       stroke="currentColor"
  //       strokeWidth="1.5"
  //     />
  //     <path
  //       d="M75.082 16.4781V16.4781C73.8954 17.668 72.2841 18.3367 70.6037 18.3367C68.9233 18.3367 67.3119 17.668 66.1254 16.4781V16.4781C65.1602 15.5129 63.5953 15.5129 62.6301 16.4781C61.665 17.4432 61.665 19.0081 62.6301 19.9732C64.7581 22.0647 67.6199 23.2407 70.6037 23.2499C73.5833 23.2202 76.4378 22.0472 78.5772 19.9732C79.2016 19.3489 79.4455 18.4389 79.2169 17.586C78.9884 16.7331 78.3222 16.0669 77.4693 15.8384C76.6164 15.6099 75.7064 15.8537 75.082 16.4781V16.4781Z"
  //       stroke="currentColor"
  //       strokeWidth="1.5"
  //     />
  //     <path
  //       d="M66.2029 7.55427C67.1836 6.57288 67.1831 4.98229 66.2016 4.00158C65.2202 3.02087 63.6296 3.02143 62.6488 4.00282C61.6681 4.98421 61.6686 6.5748 62.6501 7.55551C63.6315 8.53622 65.2221 8.53566 66.2029 7.55427Z"
  //       stroke="currentColor"
  //       strokeWidth="1.5"
  //     />
  //     <path
  //       d="M66.1921 19.9927C67.1729 19.0114 67.1723 17.4208 66.1909 16.4401C65.2095 15.4594 63.6188 15.4599 62.6381 16.4413C61.6574 17.4227 61.6579 19.0133 62.6393 19.994C63.6208 20.9747 65.2114 20.9741 66.1921 19.9927Z"
  //       stroke="currentColor"
  //       strokeWidth="1.5"
  //     />
  //   </svg>
  // )
  // return <StaticImage src="../logo.png" />
  return (
    // <svg width="64" height="61" viewBox="0 0 64 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <mask id="path-1-inside-1_0_5" fill="white">
    //     <path d="M5 32.3878V32.3878C10.1103 28.3076 17.5606 29.1427 21.6408 34.2529L29.6181 44.2442C31.6582 46.7994 31.2407 50.5245 28.6856 52.5646V52.5646C26.1304 54.6047 22.4053 54.1872 20.3652 51.6321L5 32.3878Z" />
    //   </mask>
    //   <path d="M-23.4963 70.2918L-15.519 80.2831L74.7552 8.20536L66.7779 -1.78592L-23.4963 70.2918ZM65.5023 15.5932L50.1371 -3.65103L-40.1371 68.4267L-24.7719 87.6709L65.5023 15.5932ZM-7.35329 7.42751C15.0201 -10.4361 47.6387 -6.78019 65.5023 15.5932L-24.7719 87.6709C-2.82812 115.155 37.2408 119.646 64.7244 97.7017L-7.35329 7.42751ZM-15.519 80.2831C-33.3826 57.9097 -29.7267 25.2911 -7.35329 7.42751L64.7244 97.7017C92.2081 75.7579 96.699 35.689 74.7552 8.20536L-15.519 80.2831ZM41.0389 77.5249C21.2206 93.3485 -7.67282 90.1101 -23.4963 70.2918L66.7779 -1.78592C42.794 -31.8247 -1.00005 -36.7332 -31.0389 -12.7493L41.0389 77.5249Z" fill="url(#paint0_linear_0_5)" mask="url(#path-1-inside-1_0_5)" />
    //   <g filter="url(#filter0_d_0_5)">
    //     <mask id="path-3-inside-2_0_5" fill="white">
    //       <path d="M45 32.3878V32.3878C39.8897 28.3076 32.4394 29.1427 28.3592 34.2529L20.3819 44.2442C18.3418 46.7994 18.7593 50.5245 21.3144 52.5646V52.5646C23.8696 54.6047 27.5947 54.1872 29.6348 51.6321L45 32.3878Z" />
    //     </mask>
    //     <path d="M73.4963 70.2918L65.519 80.2831L-24.7552 8.20536L-16.7779 -1.78592L73.4963 70.2918ZM-15.5023 15.5932L-0.137098 -3.65103L90.1371 68.4267L74.7719 87.6709L-15.5023 15.5932ZM57.3533 7.42751C34.9799 -10.4361 2.36132 -6.78019 -15.5023 15.5932L74.7719 87.6709C52.8281 115.155 12.7592 119.646 -14.7244 97.7017L57.3533 7.42751ZM65.519 80.2831C83.3826 57.9097 79.7267 25.2911 57.3533 7.42751L-14.7244 97.7017C-42.2081 75.7579 -46.699 35.689 -24.7552 8.20536L65.519 80.2831ZM8.96114 77.5249C28.7794 93.3485 57.6728 90.1101 73.4963 70.2918L-16.7779 -1.78592C7.20602 -31.8247 51.0001 -36.7332 81.0389 -12.7493L8.96114 77.5249Z" fill="url(#paint1_linear_0_5)" mask="url(#path-3-inside-2_0_5)" />
    //   </g>
    //   <defs>
    //     <filter id="filter0_d_0_5" x="0.954102" y="0.248491" width="62.1797" height="60.3263" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    //       <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
    //       <feOffset dy="-11.4176" />
    //       <feGaussianBlur stdDeviation="9.06689" />
    //       <feComposite in2="hardAlpha" operator="out" />
    //       <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
    //       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_5" />
    //       <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_5" result="shape" />
    //     </filter>
    //     <linearGradient id="paint0_linear_0_5" x1="9.62647" y1="28.6939" x2="28.6856" y2="52.5646" gradientUnits="userSpaceOnUse">
    //       <stop stop-color="#245CB5" />
    //     </linearGradient>
    //     <linearGradient id="paint1_linear_0_5" x1="40.3735" y1="28.6939" x2="21.3144" y2="52.5646" gradientUnits="userSpaceOnUse">
    //       <stop stop-color="#245CB5" />
    //     </linearGradient>
    //   </defs>
    // </svg>
    <svg width="64" height="61" viewBox="0 0 64 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.25 34.5649L29.2274 44.5562C31.0952 46.8955 30.7129 50.3061 28.3736 52.1739C26.0343 54.0417 22.6237 53.6594 20.7559 51.3201L5.70946 32.4751C10.5859 28.9164 17.4467 29.8014 21.25 34.5649Z" fill="#005BBB" stroke="#FFD500" />
      <g filter="url(#filter0_d_0_5)">
        <path d="M45 32.3878V32.3878C39.8897 28.3076 32.4394 29.1427 28.3592 34.2529L20.3819 44.2442C18.3418 46.7994 18.7593 50.5245 21.3144 52.5646V52.5646C23.8696 54.6047 27.5947 54.1872 29.6348 51.6321L45 32.3878Z" fill="#005BBB" />
        <path d="M28.75 34.5649L20.7726 44.5562C18.9048 46.8955 19.2871 50.3061 21.6264 52.1739C23.9657 54.0417 27.3763 53.6594 29.2441 51.3201L44.2905 32.4751C39.4141 28.9164 32.5533 29.8014 28.75 34.5649Z" stroke="#FFD500" />
      </g>
      <defs>
        <filter id="filter0_d_0_5" x="0.954102" y="0.248491" width="62.1797" height="60.3263" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="-11.4176" />
          <feGaussianBlur stdDeviation="9.06689" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_5" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_5" result="shape" />
        </filter>
      </defs>
    </svg>


  )

}
