import { SVGProps } from "react";

type StaMonicaProps = SVGProps<SVGSVGElement>;

const StaMonica = (props: StaMonicaProps) => {
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_184_68)">
        <path d="M715.769 227.143H486.846V55.2857L401 -2L315.154 55.2857V227.143H86.2308L29 284.429V341.714H773V284.429L715.769 227.143ZM401 83.9286C423.892 83.9286 441.062 101.114 441.062 129.757C441.062 158.4 423.892 169.857 401 169.857C378.108 169.857 355.215 152.671 355.215 124.029C355.215 101.114 378.108 83.9286 401 83.9286ZM715.769 399H86.2308V628.143L29 714.071V800H773V714.071L715.769 628.143V399ZM257.923 714.071H200.692V456.286H257.923V714.071ZM429.615 714.071H372.385V456.286H429.615V714.071ZM601.308 714.071H544.077V456.286H601.308V714.071Z" />
      </g>
      <defs>
        <clipPath id="clip0_184_68">
          <rect width="800" height="800" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StaMonica;
