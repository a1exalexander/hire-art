import PropTypes, { string } from "prop-types";

export const ICON_TYPES = {
  filter: "filter",
  piggyBank: "piggyBank",
  plus: "plus",
  minus: "minus",
  logoHeader: "logoHeader",
  logoFooter: "logoFooter",
  arrowDown: "arrowDown",
  pen: "pen",
  singOut: "singOut",
};

export const Icon = ({ className, name, size, color }) => {
  const props = {
    className,
  };
  if (size) {
    props.width = size;
    props.height = size;
  }
  if (color) {
    props.fill = color;
  }
  switch (name) {
    case ICON_TYPES.filter:
      return (
        <svg {...props} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.7996 2.6001H3.19961C3.04048 2.6001 2.88787 2.66331 2.77535 2.77583C2.66282 2.88836 2.59961 3.04097 2.59961 3.2001V4.7541C2.59961 5.0679 2.72741 5.3763 2.94941 5.5983L6.19961 8.8485V13.4001C6.19973 13.5023 6.22593 13.6028 6.27575 13.6921C6.32556 13.7814 6.39734 13.8564 6.48427 13.9102C6.57121 13.964 6.67044 13.9947 6.77255 13.9994C6.87467 14.0041 6.97629 13.9826 7.06781 13.9371L9.46781 12.7371C9.67121 12.6351 9.79961 12.4275 9.79961 12.2001V8.8485L13.0498 5.5983C13.2718 5.3763 13.3996 5.0679 13.3996 4.7541V3.2001C13.3996 3.04097 13.3364 2.88836 13.2239 2.77583C13.1114 2.66331 12.9587 2.6001 12.7996 2.6001ZM8.77541 8.1759C8.71961 8.23154 8.67535 8.29766 8.64519 8.37046C8.61502 8.44326 8.59953 8.5213 8.59961 8.6001V11.8293L7.39961 12.4293V8.6001C7.39969 8.5213 7.3842 8.44326 7.35403 8.37046C7.32386 8.29766 7.27961 8.23154 7.22381 8.1759L3.79961 4.7541V3.8001H12.2002L12.2014 4.7499L8.77541 8.1759Z" />
        </svg>
      );
    case ICON_TYPES.piggyBank:
      return (
        <svg {...props} viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.75 6.565C5.75 4.19484 7.63985 2.25 10 2.25C12.3602 2.25 14.25 4.19484 14.25 6.565C14.25 6.88918 14.2146 7.20626 14.1469 7.51203C14.4462 7.58096 14.7279 7.65395 14.9739 7.71815L19.2628 6.28849C19.4944 6.21128 19.7491 6.25165 19.9455 6.39668C20.1419 6.54172 20.2555 6.77328 20.2498 7.01736L20.1776 10.1337L21.7895 10.8081C22.0684 10.9248 22.25 11.1976 22.25 11.5V15C22.25 15.28 22.0941 15.5366 21.8456 15.6656L20.1176 16.5628C19.6233 17.4911 18.8805 18.2986 17.9711 18.9441L18.2938 20.0084C18.3549 20.2101 18.3679 20.4234 18.3319 20.631C18.2958 20.8386 18.2117 21.0349 18.0861 21.2042C17.9606 21.3734 17.7972 21.5109 17.609 21.6057C17.4208 21.7005 17.213 21.7499 17.0023 21.75H15.238C14.9459 21.75 14.6617 21.6553 14.428 21.48L13.2329 20.583H11.2961L10.1012 21.4798C9.86753 21.6551 9.5831 21.75 9.291 21.75H7.527C7.31627 21.7499 7.10822 21.7005 6.92 21.6057C6.73179 21.511 6.56838 21.3734 6.44286 21.2042C6.31733 21.0349 6.23318 20.8386 6.19712 20.631C6.16107 20.4234 6.17412 20.2102 6.23523 20.0085L6.55794 18.9439C4.87433 17.7474 3.75 15.9847 3.75 13.958C3.75 13.8098 3.75603 13.663 3.76788 13.5176C2.80705 13.0506 2.30282 12.227 2.04669 11.5355C1.89745 11.1325 1.82428 10.7569 1.78783 10.4835C1.76946 10.3457 1.76004 10.231 1.75519 10.1481C1.75276 10.1065 1.75146 10.0727 1.75077 10.0478L1.75013 10.0169L1.75002 10.0067L1.75001 10.0029L1.75 10.0013C1.75 10.001 1.75 10 2.5 10H1.75C1.75 9.58579 2.08579 9.25 2.5 9.25C2.91315 9.25 3.24828 9.58407 3.24999 9.99683L3.2502 10.0064C3.25049 10.0169 3.25115 10.0353 3.25263 10.0605C3.25559 10.1112 3.26179 10.1886 3.27467 10.2853C3.30072 10.4806 3.35255 10.7425 3.45331 11.0145C3.58757 11.377 3.79417 11.7264 4.12336 11.981M5.75 6.565C5.75 7.47221 6.0265 8.3172 6.50045 9.01397ZM7.79265 8.24414C9.09953 7.60993 10.6343 7.25 12.265 7.25C12.3948 7.25 12.5283 7.25575 12.6638 7.26616C12.7201 7.04278 12.75 6.80793 12.75 6.565C12.75 4.99716 11.5058 3.75 10 3.75C8.49415 3.75 7.25 4.99716 7.25 6.565C7.25 7.19588 7.45201 7.7764 7.79265 8.24414ZM18.8948 15.6819C18.9623 15.5375 19.0761 15.4135 19.2284 15.3344L20.75 14.5443V11.9992L19.1265 11.3199C18.8417 11.2007 18.6591 10.9193 18.6662 10.6106L18.7255 8.04873L15.2372 9.21151C15.0998 9.2573 14.9521 9.26235 14.812 9.22605C14.7712 9.21549 14.73 9.2048 14.6885 9.19402C13.8956 8.98815 12.9783 8.75 12.265 8.75C10.2712 8.75 8.49383 9.37097 7.23071 10.3403C5.96834 11.309 5.25 12.5947 5.25 13.958C5.25 15.5225 6.20009 16.9932 7.82833 17.9856C8.12028 18.1635 8.25493 18.5164 8.15575 18.8436L7.72942 20.25H9.24097L10.5958 19.2332C10.7257 19.1357 10.8836 19.083 11.046 19.083H13.483C13.6454 19.083 13.8033 19.1357 13.9332 19.2332L15.288 20.25H16.7996L16.3733 18.8436C16.2741 18.5163 16.4088 18.1634 16.7008 17.9855C17.6681 17.3962 18.4001 16.6323 18.8316 15.7847C18.8502 15.7482 18.8714 15.7139 18.8948 15.6819ZM16 12.75C16.0663 12.75 16.1299 12.7237 16.1768 12.6768C16.2237 12.6299 16.25 12.5663 16.25 12.5C16.25 12.4337 16.2237 12.3701 16.1768 12.3232C16.1299 12.2763 16.0663 12.25 16 12.25C15.9337 12.25 15.8701 12.2763 15.8232 12.3232C15.7763 12.3701 15.75 12.4337 15.75 12.5C15.75 12.5663 15.7763 12.6299 15.8232 12.6768C15.8701 12.7237 15.9337 12.75 16 12.75ZM15.1161 11.6161C15.3505 11.3817 15.6685 11.25 16 11.25C16.3315 11.25 16.6495 11.3817 16.8839 11.6161C17.1183 11.8505 17.25 12.1685 17.25 12.5C17.25 12.8315 17.1183 13.1495 16.8839 13.3839C16.6495 13.6183 16.3315 13.75 16 13.75C15.6685 13.75 15.3505 13.6183 15.1161 13.3839C14.8817 13.1495 14.75 12.8315 14.75 12.5C14.75 12.1685 14.8817 11.8505 15.1161 11.6161Z"
          />
        </svg>
      );
    case ICON_TYPES.plus:
      return (
        <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
          />
        </svg>
      );
    case ICON_TYPES.minus:
      return (
        <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 12H18"
            stroke="#5073EE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case ICON_TYPES.arrowDown:
      return (
        <svg {...props} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.96967 6.21967C3.67678 6.51256 3.67678 6.98744 3.96967 7.28033L8.46967 11.7803C8.76256 12.0732 9.23744 12.0732 9.53033 11.7803L14.0303 7.28033C14.3232 6.98744 14.3232 6.51256 14.0303 6.21967C13.7374 5.92678 13.2626 5.92678 12.9697 6.21967L9 10.1893L5.03033 6.21967C4.73744 5.92678 4.26256 5.92678 3.96967 6.21967Z"
          />
        </svg>
      );
    case ICON_TYPES.logoHeader:
      return (
        <svg {...props} viewBox="0 0 105 32" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M70.1876 21.6762L63.479 28.3727C58.573 33.2699 50.6119 33.1994 45.6975 28.2154C40.783 23.2313 40.7762 15.2209 45.6822 10.3238L52.3907 3.62727C57.2967 -1.26989 65.2578 -1.19944 70.1722 3.78465C75.0867 8.76874 75.0935 16.7791 70.1876 21.6762Z"
            fill="#07063D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.9011 6.92528C49.1068 6.71872 49.4051 6.63547 49.6873 6.70591L63.4168 10.1324C63.7262 10.2096 63.9641 10.4582 64.0287 10.7718L65.1936 16.4192C65.3228 16.34 65.4721 16.297 65.6259 16.297C65.8458 16.297 66.0567 16.3848 66.2122 16.541L69.0689 19.4107C69.3927 19.736 69.3927 20.2633 69.0689 20.5886L62.5027 27.1846C62.3472 27.3408 62.1363 27.4286 61.9164 27.4286C61.6965 27.4286 61.4856 27.3408 61.3301 27.1846L58.4734 24.3149C58.197 24.0373 58.1565 23.6124 58.3519 23.2917L52.7302 22.1215C52.4181 22.0566 52.1707 21.8176 52.0938 21.5068L48.6828 7.71504C48.6126 7.43153 48.6955 7.13184 48.9011 6.92528ZM59.7278 21.8769L63.7852 17.8011L62.5108 11.6227L52.1843 9.0455L56.8036 13.6857C57.1765 13.4946 57.6001 13.3882 58.0497 13.3916C59.5467 13.403 60.7658 14.6276 60.777 16.1314C60.7884 17.645 59.5724 18.8665 58.0656 18.8551C56.5686 18.8438 55.3495 17.6192 55.3383 16.1154C55.3349 15.6638 55.4408 15.2382 55.631 14.8636L51.0118 10.2234L53.5774 20.5967L59.7278 21.8769ZM57.2858 15.3712C57.1045 15.5592 56.9943 15.8169 56.9965 16.1028C57.0009 16.6965 57.4872 17.1849 58.0781 17.1894C58.6593 17.1938 59.1232 16.7277 59.1189 16.1439C59.1144 15.5503 58.6282 15.0618 58.0372 15.0574C57.7526 15.0552 57.4961 15.1659 57.3089 15.348C57.3051 15.3519 57.3013 15.3558 57.2975 15.3597C57.2936 15.3636 57.2897 15.3674 57.2858 15.3712ZM60.2322 23.726L61.9164 25.4178L67.3101 19.9996L65.6259 18.3078L60.2322 23.726Z"
            fill="white"
          />
          <path
            d="M9.76806 6.94576H11.9412V22.5421H9.76806V15.3403H2.17317V22.5421H0V6.94576H2.17317V13.4498H9.76806V6.94576ZM17.7456 22.5421H15.662V10.8392H17.7456V22.5421ZM16.6926 8.72369C16.3192 8.72369 15.9981 8.60366 15.7292 8.36361C15.4753 8.10854 15.3484 7.77096 15.3484 7.35086C15.3484 6.93076 15.4753 6.60068 15.7292 6.36062C15.9981 6.10555 16.3192 5.97802 16.6926 5.97802C17.066 5.97802 17.3797 6.10555 17.6335 6.36062C17.9024 6.60068 18.0368 6.93076 18.0368 7.35086C18.0368 7.77096 17.9024 8.10854 17.6335 8.36361C17.3797 8.60366 17.066 8.72369 16.6926 8.72369ZM25.6301 10.5917C25.8094 10.5917 26.011 10.6067 26.235 10.6367C26.474 10.6517 26.7055 10.6817 26.9296 10.7267C27.1536 10.7567 27.3552 10.7942 27.5345 10.8392C27.7286 10.8692 27.8705 10.8992 27.9601 10.9292L27.6017 12.7522C27.4374 12.6922 27.161 12.6246 26.7727 12.5496C26.3993 12.4596 25.9139 12.4146 25.3165 12.4146C24.9282 12.4146 24.5398 12.4596 24.1515 12.5496C23.7781 12.6246 23.5316 12.6772 23.4122 12.7072V22.5421H21.3286V11.3343C21.8215 11.1543 22.4338 10.9893 23.1657 10.8392C23.8976 10.6742 24.719 10.5917 25.6301 10.5917ZM29.321 16.7131C29.321 15.6779 29.4704 14.7777 29.7691 14.0125C30.0678 13.2323 30.4636 12.5871 30.9565 12.077C31.4493 11.5669 32.0169 11.1843 32.6592 10.9292C33.3014 10.6742 33.9586 10.5466 34.6307 10.5466C36.199 10.5466 37.4014 11.0418 38.2377 12.032C39.074 13.0072 39.4923 14.5001 39.4923 16.5106C39.4923 16.6006 39.4923 16.7206 39.4923 16.8707C39.4923 17.0057 39.485 17.1333 39.4699 17.2533H31.4942C31.5838 18.4686 31.9348 19.3913 32.5471 20.0215C33.1595 20.6516 34.1154 20.9667 35.4148 20.9667C36.1468 20.9667 36.7591 20.9067 37.2519 20.7866C37.7599 20.6516 38.1407 20.5241 38.3945 20.404L38.6858 22.1595C38.432 22.2945 37.9839 22.437 37.3416 22.5871C36.7142 22.7371 35.9973 22.8121 35.1908 22.8121C34.1752 22.8121 33.2939 22.6621 32.5471 22.362C31.8153 22.0469 31.2104 21.6193 30.7324 21.0792C30.2545 20.5391 29.896 19.9014 29.657 19.1662C29.433 18.4161 29.321 17.5983 29.321 16.7131ZM37.3191 15.5654C37.3342 14.6201 37.0951 13.8475 36.6022 13.2473C36.1244 12.6322 35.4596 12.3246 34.6083 12.3246C34.1303 12.3246 33.7047 12.4221 33.3313 12.6171C32.9728 12.7972 32.6666 13.0373 32.4127 13.3373C32.1588 13.6374 31.9572 13.9825 31.8078 14.3726C31.6734 14.7627 31.5838 15.1603 31.539 15.5654H37.3191Z"
            fill="#07063D"
          />
          <path
            d="M81.7851 21.203C82.278 21.203 82.711 21.1955 83.0845 21.1805C83.4727 21.1505 83.7941 21.1055 84.0479 21.0455V17.5571C83.8984 17.4821 83.652 17.4221 83.3086 17.3771C82.9799 17.317 82.5766 17.287 82.0988 17.287C81.7851 17.287 81.4491 17.3095 81.0906 17.3546C80.7472 17.3996 80.4258 17.4971 80.1272 17.6471C79.8433 17.7822 79.6046 17.9772 79.4103 18.2323C79.216 18.4723 79.1191 18.7949 79.1191 19.2C79.1191 19.9502 79.3581 20.4753 79.836 20.7754C80.3138 21.0605 80.9635 21.203 81.7851 21.203ZM81.6059 10.7154C82.4422 10.7154 83.1444 10.828 83.7118 11.053C84.2943 11.2631 84.7575 11.5706 85.1009 11.9757C85.4593 12.3658 85.7131 12.8384 85.8626 13.3936C86.0121 13.9337 86.0866 14.5339 86.0866 15.194V22.5083C85.9074 22.5383 85.6536 22.5833 85.3249 22.6433C85.0113 22.6884 84.6528 22.7334 84.2495 22.7784C83.8463 22.8234 83.4055 22.8609 82.9277 22.8909C82.4646 22.9359 82.0018 22.9584 81.5387 22.9584C80.8816 22.9584 80.2767 22.8909 79.724 22.7559C79.1712 22.6208 78.6934 22.4108 78.2901 22.1257C77.8868 21.8257 77.5732 21.4355 77.3492 20.9554C77.1251 20.4753 77.0131 19.8977 77.0131 19.2225C77.0131 18.5773 77.1402 18.0222 77.394 17.5571C77.6628 17.092 78.0213 16.7169 78.4693 16.4318C78.9174 16.1467 79.4401 15.9367 80.0376 15.8017C80.6352 15.6666 81.2625 15.5991 81.9195 15.5991C82.1285 15.5991 82.3452 15.6141 82.5692 15.6441C82.7933 15.6591 83.0023 15.6891 83.1966 15.7342C83.4055 15.7641 83.5848 15.7942 83.7342 15.8242C83.8837 15.8542 83.988 15.8767 84.0479 15.8917V15.3065C84.0479 14.9615 84.0104 14.6239 83.9359 14.2938C83.8613 13.9487 83.7269 13.6486 83.5326 13.3936C83.3383 13.1235 83.0695 12.9135 82.7261 12.7634C82.3974 12.5984 81.9643 12.5159 81.4266 12.5159C80.7395 12.5159 80.1346 12.5684 79.6119 12.6734C79.104 12.7634 78.7231 12.8609 78.4693 12.966L78.2229 11.2331C78.4917 11.113 78.9398 11.0005 79.5671 10.8955C80.1944 10.7755 80.8739 10.7154 81.6059 10.7154ZM93.8489 10.7604C94.0281 10.7604 94.2297 10.7755 94.4538 10.8055C94.6925 10.8205 94.9243 10.8505 95.1483 10.8955C95.3723 10.9255 95.574 10.963 95.7532 11.008C95.9471 11.038 96.0892 11.068 96.1789 11.098L95.8204 12.921C95.6559 12.8609 95.3797 12.7934 94.9914 12.7184C94.6179 12.6284 94.1324 12.5834 93.5352 12.5834C93.1466 12.5834 92.7584 12.6284 92.3702 12.7184C91.9967 12.7934 91.7503 12.846 91.6309 12.876V22.7109H89.5473V11.5031C90.0402 11.3231 90.6525 11.158 91.3844 11.008C92.1161 10.843 92.9377 10.7604 93.8489 10.7604ZM100.138 11.008H104.552V12.7634H100.138V18.1647C100.138 18.7499 100.183 19.2375 100.273 19.6276C100.362 20.0027 100.497 20.3028 100.676 20.5278C100.855 20.7379 101.079 20.8879 101.348 20.9779C101.617 21.068 101.931 21.113 102.289 21.113C102.916 21.113 103.417 21.0455 103.79 20.9104C104.178 20.7604 104.447 20.6554 104.597 20.5953L105 22.3283C104.791 22.4333 104.425 22.5608 103.902 22.7109C103.38 22.8759 102.782 22.9584 102.11 22.9584C101.318 22.9584 100.661 22.8609 100.138 22.6658C99.6304 22.4558 99.2198 22.1482 98.9062 21.7431C98.5925 21.338 98.3685 20.8429 98.234 20.2578C98.1147 19.6576 98.0548 18.9675 98.0548 18.1873V7.7447L100.138 7.38462V11.008Z"
            fill="#07063D"
          />
        </svg>
      );
    case ICON_TYPES.logoFooter:
      return (
        <svg {...props} viewBox="0 0 159 48" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M105.759 32.5143L95.6506 42.5591C88.2583 49.9048 76.2625 49.7992 68.8573 42.323C61.4522 34.8469 61.4419 22.8314 68.8342 15.4857L78.9428 5.4409C86.3352 -1.90484 98.3309 -1.79915 105.736 5.67698C113.141 13.1531 113.152 25.1686 105.759 32.5143Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M73.6846 10.3879C73.9945 10.0781 74.444 9.95321 74.8693 10.0589L95.5569 15.1987C96.0231 15.3145 96.3816 15.6873 96.479 16.1576L98.2343 24.6288C98.4288 24.5099 98.6539 24.4455 98.8857 24.4455C99.217 24.4455 99.5348 24.5772 99.7691 24.8115L104.074 29.116C104.562 29.6039 104.562 30.395 104.074 30.8828L94.1796 40.7769C93.9453 41.0112 93.6275 41.1429 93.2961 41.1429C92.9648 41.1429 92.647 41.0112 92.4128 40.7769L88.1082 36.4724C87.6917 36.0559 87.6307 35.4187 87.9252 34.9375L79.4543 33.1823C78.984 33.0849 78.6112 32.7264 78.4954 32.2602L73.3556 11.5726C73.2499 11.1473 73.3748 10.6978 73.6846 10.3879ZM89.9983 32.8154L96.1121 26.7016L94.1918 17.4341L78.6318 13.5682L85.5921 20.5286C86.154 20.2419 86.7924 20.0824 87.4697 20.0875C89.7254 20.1044 91.5624 21.9414 91.5793 24.1971C91.5964 26.4675 89.7642 28.2997 87.4938 28.2826C85.2381 28.2657 83.4011 26.4287 83.3842 24.173C83.3791 23.4956 83.5386 22.8573 83.8253 22.2954L76.865 15.335L80.7308 30.8951L89.9983 32.8154ZM86.3187 23.0568C86.0455 23.3388 85.8795 23.7253 85.8827 24.1542C85.8894 25.0447 86.6221 25.7774 87.5126 25.7841C88.3883 25.7907 89.0874 25.0916 89.0808 24.2159C89.0741 23.3254 88.3414 22.5927 87.451 22.586C87.022 22.5828 86.6355 22.7488 86.3535 23.022C86.3478 23.0279 86.3421 23.0337 86.3363 23.0396C86.3305 23.0454 86.3246 23.0511 86.3187 23.0568ZM90.7584 35.589L93.2961 38.1267L101.423 29.9994L98.8857 27.4617L90.7584 35.589Z"
            fill="#07063D"
          />
          <path
            d="M14.7186 10.4186H17.9931V33.8131H14.7186V23.0105H3.27455V33.8131H0V10.4186H3.27455V20.1748H14.7186V10.4186ZM26.7392 33.8131H23.5996V16.2588H26.7392V33.8131ZM25.1525 13.0855C24.5899 13.0855 24.106 12.9055 23.7009 12.5454C23.3183 12.1628 23.127 11.6564 23.127 11.0263C23.127 10.3961 23.3183 9.90102 23.7009 9.54093C24.106 9.15833 24.5899 8.96703 25.1525 8.96703C25.7152 8.96703 26.1878 9.15833 26.5704 9.54093C26.9755 9.90102 27.178 10.3961 27.178 11.0263C27.178 11.6564 26.9755 12.1628 26.5704 12.5454C26.1878 12.9055 25.7152 13.0855 25.1525 13.0855ZM38.6197 15.8875C38.8898 15.8875 39.1936 15.91 39.5312 15.955C39.8913 15.9775 40.2401 16.0225 40.5777 16.09C40.9153 16.135 41.2191 16.1913 41.4891 16.2588C41.7817 16.3038 41.9955 16.3489 42.1306 16.3938L41.5904 19.1283C41.3429 19.0382 40.9265 18.937 40.3414 18.8244C39.7787 18.6894 39.0473 18.6219 38.1471 18.6219C37.562 18.6219 36.9768 18.6894 36.3917 18.8244C35.829 18.937 35.4577 19.0158 35.2776 19.0608V33.8131H32.1381V17.0015C32.8808 16.7314 33.8035 16.4839 34.9063 16.2588C36.0091 16.0113 37.2468 15.8875 38.6197 15.8875ZM44.1811 25.0697C44.1811 23.5168 44.4062 22.1665 44.8563 21.0187C45.3064 19.8484 45.9028 18.8807 46.6455 18.1155C47.3881 17.3503 48.2433 16.7764 49.2111 16.3938C50.1788 16.0113 51.1691 15.82 52.1818 15.82C54.5449 15.82 56.3568 16.5626 57.6169 18.048C58.877 19.5108 59.5073 21.7502 59.5073 24.7659C59.5073 24.9009 59.5073 25.081 59.5073 25.306C59.5073 25.5086 59.4963 25.6999 59.4736 25.8799H47.4557C47.5907 27.7029 48.1196 29.0869 49.0423 30.0322C49.965 30.9774 51.4054 31.45 53.3633 31.45C54.4663 31.45 55.3888 31.36 56.1315 31.18C56.8969 30.9774 57.4708 30.7861 57.8532 30.6061L58.292 33.2392C57.9096 33.4418 57.2345 33.6555 56.2666 33.8806C55.3213 34.1057 54.2411 34.2182 53.0258 34.2182C51.4954 34.2182 50.1675 33.9931 49.0423 33.543C47.9395 33.0704 47.028 32.429 46.3079 31.6188C45.5877 30.8086 45.0476 29.8522 44.6875 28.7494C44.3499 27.6241 44.1811 26.3975 44.1811 25.0697ZM56.2328 23.348C56.2555 21.9302 55.8952 20.7712 55.1525 19.8709C54.4325 18.9482 53.4309 18.4869 52.148 18.4869C51.4279 18.4869 50.7865 18.6331 50.2238 18.9257C49.6837 19.1958 49.2223 19.5559 48.8397 20.006C48.4572 20.4561 48.1533 20.9737 47.9283 21.5589C47.7257 22.144 47.5907 22.7404 47.5232 23.348H56.2328Z"
            fill="white"
          />
          <path
            d="M123.234 31.8045C123.977 31.8045 124.63 31.7933 125.192 31.7707C125.777 31.7257 126.262 31.6582 126.644 31.5682V26.3357C126.419 26.2231 126.047 26.1331 125.53 26.0656C125.035 25.9755 124.427 25.9306 123.707 25.9306C123.234 25.9306 122.728 25.9643 122.188 26.0318C121.671 26.0993 121.186 26.2456 120.736 26.4707C120.309 26.6732 119.949 26.9658 119.656 27.3484C119.363 27.7085 119.217 28.1924 119.217 28.8C119.217 29.9253 119.577 30.713 120.298 31.1631C121.018 31.5907 121.996 31.8045 123.234 31.8045ZM122.964 16.0731C124.225 16.0731 125.283 16.2419 126.138 16.5795C127.015 16.8946 127.713 17.356 128.231 17.9636C128.771 18.5487 129.153 19.2577 129.378 20.0904C129.604 20.9006 129.716 21.8008 129.716 22.791V33.7625C129.446 33.8075 129.064 33.875 128.568 33.965C128.096 34.0325 127.556 34.1 126.948 34.1676C126.34 34.2351 125.676 34.2914 124.956 34.3364C124.258 34.4039 123.561 34.4376 122.863 34.4376C121.873 34.4376 120.962 34.3364 120.129 34.1338C119.296 33.9313 118.576 33.6162 117.968 33.1886C117.361 32.7385 116.888 32.1533 116.55 31.4331C116.213 30.713 116.044 29.8465 116.044 28.8338C116.044 27.866 116.235 27.0333 116.618 26.3357C117.023 25.638 117.563 25.0754 118.238 24.6477C118.913 24.2201 119.701 23.9051 120.601 23.7025C121.502 23.5 122.447 23.3987 123.437 23.3987C123.752 23.3987 124.078 23.4212 124.416 23.4662C124.754 23.4887 125.068 23.5337 125.361 23.6012C125.676 23.6462 125.946 23.6913 126.171 23.7363C126.397 23.7813 126.554 23.815 126.644 23.8375V22.9598C126.644 22.4422 126.588 21.9358 126.475 21.4407C126.363 20.9231 126.16 20.473 125.868 20.0904C125.575 19.6853 125.17 19.3702 124.652 19.1451C124.157 18.8976 123.505 18.7738 122.694 18.7738C121.659 18.7738 120.747 18.8526 119.96 19.0101C119.195 19.1451 118.621 19.2914 118.238 19.449L117.867 16.8496C118.272 16.6696 118.947 16.5008 119.892 16.3432C120.838 16.1632 121.861 16.0731 122.964 16.0731ZM141.412 16.1407C141.682 16.1407 141.986 16.1632 142.324 16.2082C142.683 16.2307 143.033 16.2757 143.37 16.3432C143.708 16.3882 144.012 16.4445 144.282 16.512C144.574 16.557 144.788 16.602 144.923 16.647L144.383 19.3815C144.135 19.2914 143.719 19.1901 143.134 19.0776C142.571 18.9426 141.839 18.8751 140.94 18.8751C140.354 18.8751 139.769 18.9426 139.184 19.0776C138.621 19.1901 138.25 19.2689 138.07 19.3139V34.0663H134.931V17.2547C135.673 16.9846 136.596 16.7371 137.699 16.512C138.801 16.2645 140.039 16.1407 141.412 16.1407ZM150.889 16.512H157.54V19.1451H150.889V27.2471C150.889 28.1248 150.957 28.8563 151.092 29.4414C151.227 30.0041 151.429 30.4542 151.7 30.7917C151.97 31.1068 152.307 31.3319 152.712 31.4669C153.117 31.6019 153.59 31.6695 154.13 31.6695C155.075 31.6695 155.829 31.5682 156.392 31.3656C156.977 31.1406 157.382 30.9831 157.607 30.893L158.215 33.4924C157.9 33.65 157.348 33.8412 156.561 34.0663C155.773 34.3138 154.873 34.4376 153.86 34.4376C152.667 34.4376 151.677 34.2914 150.889 33.9988C150.124 33.6837 149.505 33.2223 149.033 32.6147C148.56 32.007 148.222 31.2644 148.02 30.3866C147.84 29.4864 147.75 28.4512 147.75 27.2809V11.6171L150.889 11.0769V16.512Z"
            fill="white"
          />
        </svg>
      );
    case ICON_TYPES.pen:
      return (
        <svg
          {...props}
          viewBox="0 0 157 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.499 140C96.494 140 119.999 138.433 119.999 136.5C119.999 134.567 96.494 133 67.499 133C38.5041 133 14.999 134.567 14.999 136.5C14.999 138.433 38.5041 140 67.499 140Z"
            fill="#7C8698"
          />
          <g opacity="0.6">
            <path
              d="M116.231 117.561L118.547 129.732L119.495 134.708L115.429 131.787L105.329 124.507L116.231 117.561Z"
              fill="#7C8698"
            />
          </g>
          <path
            d="M118.548 129.733L119.495 134.708L115.414 131.78C116.406 131.02 117.453 130.336 118.548 129.733Z"
            fill="#364152"
          />
          <path
            d="M47.1108 9.10412L116.233 117.561L117.105 122.155L112.597 119.876L113.059 124.786L108.966 122.192L108.878 127.061L105.33 124.507L36.2159 16.0471L47.1108 9.10412Z"
            fill="#5073EE"
          />
          <path
            d="M47.1159 9.0943L36.2148 16.0425L39.599 21.3519L50.5001 14.4037L47.1159 9.0943Z"
            fill="#364152"
          />
          <g opacity="0.6">
            <path
              d="M36.6071 7.14041L38.8799 5.69175C40.0241 4.96246 41.4111 4.71757 42.7359 5.01094C44.0606 5.30431 45.2146 6.11192 45.9438 7.25611L47.124 9.10767L36.2229 16.0559L35.0428 14.2043C34.3135 13.0602 34.0686 11.6731 34.3619 10.3484C34.6553 9.02364 35.4629 7.8697 36.6071 7.14041Z"
              fill="#7C8698"
            />
          </g>
          <path
            d="M108.923 122.117C108.886 122.14 108.842 122.147 108.8 122.139C108.758 122.13 108.721 122.106 108.696 122.071L43.0727 19.1258C43.0494 19.0883 43.042 19.043 43.052 18.9999C43.0621 18.9569 43.0889 18.9196 43.1265 18.8963C43.164 18.8729 43.2093 18.8655 43.2524 18.8756C43.2954 18.8857 43.3327 18.9124 43.356 18.95L108.972 121.898C108.994 121.933 109.002 121.977 108.993 122.018C108.984 122.059 108.958 122.095 108.923 122.117Z"
            fill="#364152"
          />
          <path
            d="M112.555 119.809C112.517 119.831 112.472 119.838 112.429 119.829C112.386 119.82 112.348 119.795 112.323 119.76L46.7218 16.8191C46.6993 16.7813 46.6924 16.7362 46.7024 16.6935C46.7124 16.6507 46.7386 16.6134 46.7755 16.5895C46.7935 16.5776 46.8137 16.5695 46.8349 16.5656C46.8561 16.5618 46.8778 16.5623 46.8988 16.5671C46.9198 16.5719 46.9396 16.5809 46.957 16.5936C46.9744 16.6063 46.9891 16.6224 47.0001 16.6409L112.592 119.602C112.612 119.635 112.619 119.674 112.612 119.712C112.605 119.75 112.585 119.785 112.555 119.809Z"
            fill="#364152"
          />
        </svg>
      );
    case ICON_TYPES.singOut:
      return (
        <svg
          {...props}
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.71967 0.21967C9.01256 -0.0732233 9.48744 -0.0732233 9.78033 0.21967L13.2803 3.71967C13.5732 4.01256 13.5732 4.48744 13.2803 4.78033C12.9874 5.07322 12.5126 5.07322 12.2197 4.78033L10 2.56066V12.75C10 13.1642 9.66421 13.5 9.25 13.5C8.83579 13.5 8.5 13.1642 8.5 12.75V2.56066L6.28033 4.78033C5.98744 5.07322 5.51256 5.07322 5.21967 4.78033C4.92678 4.48744 4.92678 4.01256 5.21967 3.71967L8.71967 0.21967ZM1.25 10C1.66421 10 2 10.3358 2 10.75V16.75C2 17.4404 2.55964 18 3.25 18H15.25C15.9404 18 16.5 17.4404 16.5 16.75V10.75C16.5 10.3358 16.8358 10 17.25 10C17.6642 10 18 10.3358 18 10.75V16.75C18 18.2688 16.7688 19.5 15.25 19.5H3.25C1.73122 19.5 0.5 18.2688 0.5 16.75V10.75C0.5 10.3358 0.835786 10 1.25 10Z"
          />
        </svg>
      );
    default:
      return null;
  }
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.values(ICON_TYPES)).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};
