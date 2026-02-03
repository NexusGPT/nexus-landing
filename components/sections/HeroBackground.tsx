import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute h-full min-h-[600px] w-screen rounded">
      <svg
        style={{
          width: "1798px",
          height: "1427px",
        }}
        className="absolute blur-[100px] top-[-1050px] right-[-550px] md:top-[-700px] md:right-[-580px]"
        viewBox="0 0 1798 1427"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_5011_657)">
          <path
            d="M772.575 1147.99C921.802 1187.98 1074.89 1200.79 1213.33 1184.87C1351.78 1168.96 1469.65 1125.01 1552.72 1058.32C1635.79 991.64 1680.49 905.081 1681.42 809.105C1682.35 713.13 1639.48 611.846 1557.98 517.494L1357.89 566.05C1414.66 631.77 1444.53 702.318 1443.88 769.168C1443.23 836.019 1412.09 896.311 1354.23 942.759C1296.37 989.207 1214.27 1019.82 1117.84 1030.91C1021.4 1041.99 914.774 1033.07 810.832 1005.21L772.575 1147.99Z"
            fill="#91D5FF"
          />
          <path
            d="M567.98 396.694C464.78 462.838 392.153 567.38 366.078 687.323C340.003 807.265 362.614 932.784 428.938 1036.27C495.261 1139.75 599.865 1212.71 719.736 1239.12C839.607 1265.52 964.928 1243.19 1068.13 1177.05L941.576 979.598C890.601 1012.27 828.7 1023.3 769.49 1010.26C710.28 997.215 658.612 961.173 625.852 910.059C593.091 858.944 581.923 796.945 594.802 737.7C607.682 678.455 643.556 626.817 694.531 594.146L567.98 396.694Z"
            fill="#8AB3FF"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_5011_657"
            x="-4.00195"
            y="-4"
            width="1805.29"
            height="1434.44"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2"
              result="effect1_foregroundBlur_5011_657"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0 bg-white opacity-50"
        style={{ 
          backgroundImage: "url('/bg-grain.avif')", 
          backgroundRepeat: "repeat", 
          backgroundSize: "512px 256px", 
          mixBlendMode: "color-burn" 
        }}
      /> 
    </div>
  );
}
