export default function HeroBackground() {
  return (
    <div className="absolute h-full min-h-[600px] md:h-[800px] w-screen rounded overflow-hidden">
      {/* <svg
        viewBox="0 0 1904 1462"
        preserveAspectRatio="none"
        className="absolute"
        style={{
          top: "-700px",
          right: "-580px",
          width: "1798px",
          height: "1400px",
        }}
      >
        <defs>
          <filter
            id="heroFilter0"
            x="447.066"
            y="150.8"
            width="1456.86"
            height="1222.02"
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
              stdDeviation="137"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="heroFilter1"
            x="0"
            y="0"
            width="1320.62"
            height="1461.25"
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
              stdDeviation="152"
              result="effect1_foregroundBlur"
            />
          </filter>
        </defs>
        <g filter="url(#heroFilter0)">
          <path
            d="M721.068 1055.3C870.294 1095.28 1023.38 1108.09 1161.82 1092.18C1300.27 1076.27 1418.15 1032.31 1501.21 965.63C1584.28 898.946 1628.98 812.386 1629.91 716.411C1630.85 620.435 1587.97 519.152 1506.47 424.8L1306.39 473.356C1363.16 539.075 1393.02 609.623 1392.37 676.474C1391.72 743.324 1360.58 803.616 1302.73 850.064C1244.87 896.512 1162.76 927.127 1066.33 938.211C969.896 949.294 863.266 940.371 759.324 912.52L721.068 1055.3Z"
            fill="#91D5FF"
          />
        </g>
        <g filter="url(#heroFilter1)">
          <path
            d="M516.472 304C413.272 370.143 340.646 474.685 314.57 594.628C288.495 714.571 311.106 840.089 377.43 943.571C443.754 1047.05 548.357 1120.02 668.228 1146.42C788.1 1172.82 913.42 1150.5 1016.62 1084.36L890.069 886.904C839.093 919.575 777.192 930.603 717.982 917.562C658.772 904.521 607.104 868.478 574.344 817.364C541.584 766.25 530.415 704.251 543.295 645.006C556.174 585.76 592.048 534.122 643.023 501.451L516.472 304Z"
            fill="#8AB3FF"
          />
        </g>
      </svg> */}
      <svg
        style={{
          top: "-700px",
          right: "-580px",
          width: "1798px",
          height: "1427px",
        }}
        className="absolute blur-[100px]"
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
        style={{ mixBlendMode: "color-burn" }}
      >
        <img
          src="/bg-grain.avif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
