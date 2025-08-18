import { SVGProps } from "react";

type EmailIconProps = SVGProps<SVGSVGElement>;

const EmailIcon = (props: EmailIconProps) => {
  return (
    <svg
      viewBox="0 -2.5 20 20"
      version="1.1"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="none" fillRule="evenodd">
        <g transform="translate(-340.000000, -922.000000)" stroke="none">
          <g stroke="none" transform="translate(56.000000, 160.000000)">
            <path
              d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"
              stroke="none"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default EmailIcon;
