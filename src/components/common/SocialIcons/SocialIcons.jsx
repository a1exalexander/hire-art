import PropTypes from "prop-types";
import { StyledSocIcon } from './SocialIcons.styled';

export const SOCIAL_ICON_TYPES = {
  gmail: "gmail",
  facebook: "facebook",
  insta: "insta",
  linkedin: "linkedin",
  telegram: "telegram",
};

export const SociaIcons = ({ name, fill, size }) => {
  switch (name) {
    case SOCIAL_ICON_TYPES.gmail:
      return (
        <StyledSocIcon>
          <svg
            width={size}
            height={size}
            viewBox="0 0 27 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.33366 2.66663C6.83077 2.66663 5.38943 3.26365 4.32672 4.32635C3.26401 5.38906 2.66699 6.8304 2.66699 8.33329V19C2.66699 20.5029 3.26401 21.9442 4.32672 23.0069C5.38943 24.0696 6.83077 24.6666 8.33366 24.6666H11.3337V16H9.66699C9.11471 16 8.66699 15.5522 8.66699 15C8.66699 14.4477 9.11471 14 9.66699 14H11.3337V13.6666C11.3337 12.1844 11.4889 10.5475 12.4596 9.29375C13.4762 7.98074 15.1772 7.33329 17.667 7.33329C18.2193 7.33329 18.667 7.78101 18.667 8.33329C18.667 8.88558 18.2193 9.33329 17.667 9.33329C15.4901 9.33329 14.5244 9.89385 14.041 10.5182C13.5118 11.2017 13.3337 12.2315 13.3337 13.6666V14H17.667C18.2193 14 18.667 14.4477 18.667 15C18.667 15.5522 18.2193 16 17.667 16H13.3337V24.6666H19.0003C20.5032 24.6666 21.9446 24.0696 23.0073 23.0069C24.07 21.9442 24.667 20.5029 24.667 19V8.33329C24.667 6.8304 24.07 5.38906 23.0073 4.32635C21.9446 3.26365 20.5032 2.66663 19.0003 2.66663H8.33366ZM19.0003 26.6666C21.0337 26.6666 22.9837 25.8589 24.4215 24.4211C25.8593 22.9833 26.667 21.0333 26.667 19V8.33329C26.667 6.29997 25.8593 4.34992 24.4215 2.91214C22.9837 1.47436 21.0337 0.666626 19.0003 0.666626H8.33366C6.30033 0.666626 4.35029 1.47436 2.91251 2.91214C1.47473 4.34992 0.666992 6.29997 0.666992 8.33329V19C0.666992 21.0333 1.47473 22.9833 2.91251 24.4211C4.35029 25.8589 6.30033 26.6666 8.33366 26.6666H19.0003Z"
              fill={fill}
            />
          </svg>
        </StyledSocIcon>

      );
    case SOCIAL_ICON_TYPES.facebook:
      return (
        <StyledSocIcon>
          <svg viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.33366 2.66663C6.83077 2.66663 5.38943 3.26365 4.32672 4.32635C3.26401 5.38906 2.66699 6.8304 2.66699 8.33329V19C2.66699 20.5029 3.26401 21.9442 4.32672 23.0069C5.38943 24.0696 6.83077 24.6666 8.33366 24.6666H11.3337V16H9.66699C9.11471 16 8.66699 15.5522 8.66699 15C8.66699 14.4477 9.11471 14 9.66699 14H11.3337V13.6666C11.3337 12.1844 11.4889 10.5475 12.4596 9.29375C13.4762 7.98074 15.1772 7.33329 17.667 7.33329C18.2193 7.33329 18.667 7.78101 18.667 8.33329C18.667 8.88558 18.2193 9.33329 17.667 9.33329C15.4901 9.33329 14.5244 9.89385 14.041 10.5182C13.5118 11.2017 13.3337 12.2315 13.3337 13.6666V14H17.667C18.2193 14 18.667 14.4477 18.667 15C18.667 15.5522 18.2193 16 17.667 16H13.3337V24.6666H19.0003C20.5032 24.6666 21.9446 24.0696 23.0073 23.0069C24.07 21.9442 24.667 20.5029 24.667 19V8.33329C24.667 6.8304 24.07 5.38906 23.0073 4.32635C21.9446 3.26365 20.5032 2.66663 19.0003 2.66663H8.33366ZM19.0003 26.6666C21.0337 26.6666 22.9837 25.8589 24.4215 24.4211C25.8593 22.9833 26.667 21.0333 26.667 19V8.33329C26.667 6.29997 25.8593 4.34992 24.4215 2.91214C22.9837 1.47436 21.0337 0.666626 19.0003 0.666626H8.33366C6.30033 0.666626 4.35029 1.47436 2.91251 2.91214C1.47473 4.34992 0.666992 6.29997 0.666992 8.33329V19C0.666992 21.0333 1.47473 22.9833 2.91251 24.4211C4.35029 25.8589 6.30033 26.6666 8.33366 26.6666H19.0003Z"
              fill={fill}
            />
          </svg>
        </StyledSocIcon>
      );
    case SOCIAL_ICON_TYPES.insta:
      return (
        <StyledSocIcon>
          <svg
            width={size}
            height={size}
            viewBox="0 0 27 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.33366 2.66663C6.83077 2.66663 5.38943 3.26365 4.32672 4.32635C3.26401 5.38906 2.66699 6.8304 2.66699 8.33329V19C2.66699 20.5029 3.26401 21.9442 4.32672 23.0069C5.38943 24.0696 6.83077 24.6666 8.33366 24.6666H19.0003C20.5032 24.6666 21.9446 24.0696 23.0073 23.0069C24.07 21.9442 24.667 20.5029 24.667 19V8.33329C24.667 6.8304 24.07 5.38906 23.0073 4.32635C21.9446 3.26365 20.5032 2.66663 19.0003 2.66663H8.33366ZM2.91251 2.91214C4.35029 1.47436 6.30033 0.666626 8.33366 0.666626H19.0003C21.0337 0.666626 22.9837 1.47436 24.4215 2.91214C25.8593 4.34992 26.667 6.29997 26.667 8.33329V19C26.667 21.0333 25.8593 22.9833 24.4215 24.4211C22.9837 25.8589 21.0337 26.6666 19.0003 26.6666H8.33366C6.30033 26.6666 4.35029 25.8589 2.91251 24.4211C1.47473 22.9833 0.666992 21.0333 0.666992 19V8.33329C0.666992 6.29997 1.47473 4.34992 2.91251 2.91214ZM21.6863 5.59202C22.095 5.96353 22.1251 6.59598 21.7536 7.00464L21.7403 7.0193C21.3688 7.42796 20.7363 7.45807 20.3277 7.08656C19.919 6.71506 19.8889 6.08261 20.2604 5.67395L20.2737 5.65928C20.6452 5.25063 21.2777 5.22051 21.6863 5.59202ZM9.18865 9.18828C10.3764 8.00055 11.9873 7.33329 13.667 7.33329C15.3467 7.33329 16.9576 8.00055 18.1453 9.18828C19.3331 10.376 20.0003 11.9869 20.0003 13.6666C20.0003 15.3463 19.3331 16.9572 18.1453 18.145C16.9576 19.3327 15.3467 20 13.667 20C11.9873 20 10.3764 19.3327 9.18865 18.145C8.00092 16.9572 7.33366 15.3463 7.33366 13.6666C7.33366 11.9869 8.00092 10.376 9.18865 9.18828ZM13.667 9.33329C12.5177 9.33329 11.4155 9.78984 10.6029 10.6025C9.79021 11.4152 9.33366 12.5174 9.33366 13.6666C9.33366 14.8159 9.79021 15.9181 10.6029 16.7308C11.4155 17.5434 12.5177 18 13.667 18C14.8163 18 15.9185 17.5434 16.7311 16.7308C17.5438 15.9181 18.0003 14.8159 18.0003 13.6666C18.0003 12.5174 17.5438 11.4152 16.7311 10.6025C15.9185 9.78984 14.8163 9.33329 13.667 9.33329Z"
              fill={fill}
            />
          </svg>
        </StyledSocIcon>
      );
    case SOCIAL_ICON_TYPES.linkedin:
      return (
        <StyledSocIcon>
          <svg
            width={size}
            height={size}
            viewBox="0 0 27 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.33366 2.66663C6.83077 2.66663 5.38943 3.26365 4.32672 4.32635C3.26401 5.38906 2.66699 6.8304 2.66699 8.33329V19C2.66699 20.5029 3.26401 21.9442 4.32672 23.0069C5.38943 24.0696 6.83077 24.6666 8.33366 24.6666H19.0003C20.5032 24.6666 21.9446 24.0696 23.0073 23.0069C24.07 21.9442 24.667 20.5029 24.667 19V8.33329C24.667 6.8304 24.07 5.38906 23.0073 4.32635C21.9446 3.26365 20.5032 2.66663 19.0003 2.66663H8.33366ZM2.91251 2.91214C4.35029 1.47436 6.30033 0.666626 8.33366 0.666626H19.0003C21.0337 0.666626 22.9837 1.47436 24.4215 2.91214C25.8593 4.34992 26.667 6.29997 26.667 8.33329V19C26.667 21.0333 25.8593 22.9833 24.4215 24.4211C22.9837 25.8589 21.0337 26.6666 19.0003 26.6666H8.33366C6.30033 26.6666 4.35029 25.8589 2.91251 24.4211C1.47473 22.9833 0.666992 21.0333 0.666992 19V8.33329C0.666992 6.29997 1.47473 4.34992 2.91251 2.91214ZM7.68634 6.25869C8.09499 6.6302 8.12511 7.26265 7.7536 7.6713L7.74026 7.68597C7.36875 8.09463 6.73631 8.12474 6.32765 7.75323C5.91899 7.38172 5.88888 6.74927 6.26039 6.34062L6.27372 6.32595C6.64523 5.91729 7.27768 5.88718 7.68634 6.25869ZM7.00033 9.99996C7.55261 9.99996 8.00033 10.4477 8.00033 11V20.3333C8.00033 20.8856 7.55261 21.3333 7.00033 21.3333C6.44804 21.3333 6.00033 20.8856 6.00033 20.3333V11C6.00033 10.4477 6.44804 9.99996 7.00033 9.99996ZM12.3337 9.99996C12.8859 9.99996 13.3337 10.4477 13.3337 11V12.1274C14.224 11.5308 15.2942 11.25 16.3337 11.25C17.53 11.25 18.7672 11.622 19.7238 12.4192C20.7034 13.2356 21.3337 14.4552 21.3337 16V20.3333C21.3337 20.8856 20.8859 21.3333 20.3337 21.3333C19.7814 21.3333 19.3337 20.8856 19.3337 20.3333V16C19.3337 15.0447 18.9639 14.3894 18.4435 13.9557C17.9001 13.5029 17.1373 13.25 16.3337 13.25C15.53 13.25 14.7672 13.5029 14.2238 13.9557C13.7034 14.3894 13.3337 15.0447 13.3337 16V20.3333C13.3337 20.8856 12.8859 21.3333 12.3337 21.3333C11.7814 21.3333 11.3337 20.8856 11.3337 20.3333V11C11.3337 10.4477 11.7814 9.99996 12.3337 9.99996Z"
              fill={fill}
            />
          </svg>
        </StyledSocIcon>
      );
    case SOCIAL_ICON_TYPES.telegram:
      return (
        <StyledSocIcon>
          <svg
            width={size}
            height={size}
            viewBox="0 0 27 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.0407 6.81152C22.082 6.56375 21.9868 6.31293 21.7915 6.15499C21.5962 5.99705 21.331 5.95642 21.0973 6.04865L3.44077 13.0183C3.14666 13.1344 2.96755 13.434 3.00447 13.748C3.04139 14.062 3.28509 14.3119 3.59811 14.3566L9.50475 15.2004V19.707C9.50475 19.9895 9.67521 20.244 9.93638 20.3515C10.1976 20.459 10.4978 20.3983 10.6967 20.1977L13.3069 17.565L18.6364 21.2115C18.8328 21.3459 19.0843 21.3708 19.3032 21.2775C19.5221 21.1842 19.6784 20.9857 19.7175 20.7509L22.0407 6.81152ZM12.1373 16.7648L10.8987 15.9173V18.0141L12.1373 16.7648ZM13.6156 16.0871C13.6186 16.0892 13.6216 16.0913 13.6246 16.0934L18.5221 19.4443L20.3907 8.23286L11.4215 14.586L13.6032 16.0787C13.6073 16.0815 13.6115 16.0843 13.6156 16.0871ZM6.40011 13.3488L16.2403 9.46452L10.0254 13.8667L6.40011 13.3488Z"
              fill={fill}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.333008 8.66663C0.333008 4.24835 3.91473 0.666626 8.33301 0.666626H18.333C22.7513 0.666626 26.333 4.24835 26.333 8.66663V18.6666C26.333 23.0849 22.7513 26.6666 18.333 26.6666H8.33301C3.91473 26.6666 0.333008 23.0849 0.333008 18.6666V8.66663ZM8.33301 2.66663H18.333C21.6467 2.66663 24.333 5.35292 24.333 8.66663V18.6666C24.333 21.9803 21.6467 24.6666 18.333 24.6666H8.33301C5.0193 24.6666 2.33301 21.9803 2.33301 18.6666V8.66663C2.33301 5.35292 5.0193 2.66663 8.33301 2.66663Z"
              fill={fill}
            />
          </svg>
        </StyledSocIcon>
      );
    default:
      return null;
  }
};

SociaIcons.propTypes = {
  name: PropTypes.oneOf(Object.values(SOCIAL_ICON_TYPES)).isRequired,
  fill: PropTypes.string,
  size: PropTypes.string,
};

