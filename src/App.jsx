import "./App.css";

export default function App() {
  return (
    <>
      <div className="min-w-full bg-[#029CF6]">
        <div className="relative mx-auto flex h-[866px] w-[980px] max-w-[calc(100%-0px)] overflow-hidden mobile:h-[640px] mobile:w-[375px] mobile:flex-col desktop:h-[866px] desktop:w-[980px] desktop:flex-row">
          <div className="left w-[50%]">
            <div className="avatar relative ml-0 mt-[66px] h-[748px] w-[490px] overflow-hidden mobile:mt-0 mobile:h-[422px] mobile:w-[323px] desktop:mt-[66px] desktop:h-[748px] desktop:w-[490px]">
              {/* <div className="rounded-[100px]">
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="custom-clip-path absolute left-[-85px] top-0 h-[588px] w-[517px] bg-red-500 mobile:left-[-33px] mobile:top-[-40px] mobile:h-[364px] mobile:w-[320px] desktop:left-[-85px] desktop:top-0 desktop:h-[588px] desktop:w-[517px]"
                />
              </div> */}

              {/* Doctor 1 desktop*/}
              <div className="absolute left-[-112px] top-[-7px] mobile:hidden desktop:block">
                <svg
                  viewBox="0 0 163 199"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[180%]"
                >
                  <defs>
                    <pattern
                      id="img"
                      patternUnits="userSpaceOnUse"
                      width="100%"
                      height="100%"
                    >
                      <image
                        id="hex-image"
                        xlinkHref="https://www.mukathospital.com/wp-content/uploads/2023/07/Get-an-Appointment-with-the-Best-Heart-Doctor-Cardiologist-in-Chandigarh.jpg"
                        x="0"
                        width="100%"
                        height="100%"
                      />
                    </pattern>
                  </defs>
                  <path
                    d="M75.010,6.712 L12.934,42.153 C9.108,44.334 5.951,49.714 5.951,54.111 L5.945,124.969 C5.945,129.349 9.079,134.723 12.923,136.916 L74.975,172.339 C78.813,174.532 85.086,174.532 88.912,172.339 L151.005,136.893 C154.826,134.694 157.983,129.314 157.966,124.952 L157.989,54.088 C157.989,49.691 154.838,44.311 151.005,42.112 L88.965,6.712 C87.043,5.613 84.509,5.057 81.976,5.057 C79.448,5.057 76.926,5.613 75.010,6.712 "
                    id="hex"
                    fill="transparent"
                  />
                  <path
                    d="M75.010,6.712 L12.934,42.153 C9.108,44.334 5.951,49.714 5.951,54.111 L5.945,124.969 C5.945,129.349 9.079,134.723 12.923,136.916 L74.975,172.339 C78.813,174.532 85.086,174.532 88.912,172.339 L151.005,136.893 C154.826,134.694 157.983,129.314 157.966,124.952 L157.989,54.088 C157.989,49.691 154.838,44.311 151.005,42.112 L88.965,6.712 C87.043,5.613 84.509,5.057 81.976,5.057 C79.448,5.057 76.926,5.613 75.010,6.712 "
                    id="hex-1"
                    fill="url(#img)"
                  />
                </svg>
              </div>
              {/* Doctor 1 mobile*/}
              <div className="absolute left-[-48px] top-[-46px] mobile:block desktop:hidden">
                <svg
                  viewBox="0 0 163 199"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[115%]"
                >
                  <defs>
                    <pattern
                      id="img3"
                      patternUnits="userSpaceOnUse"
                      width="100%"
                      height="100%"
                    >
                      <image
                        id="hex-image3"
                        xlinkHref="https://www.mukathospital.com/wp-content/uploads/2023/07/Get-an-Appointment-with-the-Best-Heart-Doctor-Cardiologist-in-Chandigarh.jpg"
                        x="0"
                        width="100%"
                        height="100%"
                      />
                    </pattern>
                  </defs>
                  <path
                    d="M75.010,6.712 L12.934,42.153 C9.108,44.334 5.951,49.714 5.951,54.111 L5.945,124.969 C5.945,129.349 9.079,134.723 12.923,136.916 L74.975,172.339 C78.813,174.532 85.086,174.532 88.912,172.339 L151.005,136.893 C154.826,134.694 157.983,129.314 157.966,124.952 L157.989,54.088 C157.989,49.691 154.838,44.311 151.005,42.112 L88.965,6.712 C87.043,5.613 84.509,5.057 81.976,5.057 C79.448,5.057 76.926,5.613 75.010,6.712 "
                    id="hex3"
                    fill="transparent"
                  />
                  <path
                    d="M75.010,6.712 L12.934,42.153 C9.108,44.334 5.951,49.714 5.951,54.111 L5.945,124.969 C5.945,129.349 9.079,134.723 12.923,136.916 L74.975,172.339 C78.813,174.532 85.086,174.532 88.912,172.339 L151.005,136.893 C154.826,134.694 157.983,129.314 157.966,124.952 L157.989,54.088 C157.989,49.691 154.838,44.311 151.005,42.112 L88.965,6.712 C87.043,5.613 84.509,5.057 81.976,5.057 C79.448,5.057 76.926,5.613 75.010,6.712 "
                    id="hex-3"
                    fill="url(#img3)"
                  />
                </svg>
              </div>

              {/* <img
                src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                alt=""
                className="custom-clip-path absolute bottom-0 right-0 h-[414px] w-[365px] bg-black mobile:h-[256px] mobile:w-[226px] desktop:h-[414px] desktop:w-[365px]"
              /> */}

              {/* Doctor 2 desktop*/}
              <div className="absolute left-[91px] top-[310px] mobile:hidden desktop:block">
                <svg
                  viewBox="0 0 163 199"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[142%]"
                >
                  <defs>
                    <pattern
                      id="img2"
                      patternUnits="userSpaceOnUse"
                      width="100%"
                      height="100%"
                    >
                      <image
                        id="hex-image2"
                        xlinkHref="https://5.imimg.com/data5/LF/FK/MY-38920595/hospital-uniform-500x500.jpg"
                        x="0"
                        width="100%"
                        height="100%"
                      />
                    </pattern>
                  </defs>

                  <path
                    d="M75.010,6.712 L12.934,42.153 C9.108,44.334 5.951,49.714 5.951,54.111 L5.945,124.969 C5.945,129.349 9.079,134.723 12.923,136.916 L74.975,172.339 C78.813,174.532 85.086,174.532 88.912,172.339 L151.005,136.893 C154.826,134.694 157.983,129.314 157.966,124.952 L157.989,54.088 C157.989,49.691 154.838,44.311 151.005,42.112 L88.965,6.712 C87.043,5.613 84.509,5.057 81.976,5.057 C79.448,5.057 76.926,5.613 75.010,6.712 "
                    id="hex-2"
                    fill="url(#img2)"
                  />
                </svg>
              </div>
              {/* Doctor 2 mobile*/}
              <div className="absolute left-[75px] top-[150px] mobile:block desktop:hidden">
                <svg
                  viewBox="0 0 163 199"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[107%]"
                >
                  <defs>
                    <pattern
                      id="img4"
                      patternUnits="userSpaceOnUse"
                      width="100%"
                      height="100%"
                    >
                      <image
                        id="hex-image4"
                        xlinkHref="https://5.imimg.com/data5/LF/FK/MY-38920595/hospital-uniform-500x500.jpg"
                        x="0"
                        width="100%"
                        height="100%"
                      />
                    </pattern>
                  </defs>

                  <path
                    d="M75.010,6.712 L12.934,42.153 C9.108,44.334 5.951,49.714 5.951,54.111 L5.945,124.969 C5.945,129.349 9.079,134.723 12.923,136.916 L74.975,172.339 C78.813,174.532 85.086,174.532 88.912,172.339 L151.005,136.893 C154.826,134.694 157.983,129.314 157.966,124.952 L157.989,54.088 C157.989,49.691 154.838,44.311 151.005,42.112 L88.965,6.712 C87.043,5.613 84.509,5.057 81.976,5.057 C79.448,5.057 76.926,5.613 75.010,6.712 "
                    id="hex-4"
                    fill="url(#img4)"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="right w-[50%] pl-[58px] pr-[80px] mobile:w-full mobile:pl-[32px] mobile:pr-[32px] desktop:w-[50%] desktop:pl-[58px] desktop:pr-[80px]">
            <div className="relative z-10 mt-[156px] font-montserrat text-[28px] font-semibold leading-[44px] text-[#FFFFFF] mobile:mt-[24px] mobile:text-[16px] mobile:leading-[24px] desktop:mt-[156px] desktop:text-[28px] desktop:leading-[44px]">
              <p>
                Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá
                đơn giản. Tôi biết những người yêu mến tôi là vì sự chân thật và
                giản dị.
              </p>
            </div>

            <h1 className="relative z-10 mt-[222px] font-montserrat text-[28px] font-bold leading-[34.13px] tracking-widest text-[#FFDE05] mobile:mt-[28px] mobile:text-[14px] mobile:leading-[17.07px] desktop:mt-[222px] desktop:text-[28px] desktop:leading-[34.13px]">
              THU QUỲNH
            </h1>

            <h2 className="relative z-10 mt-[12px] font-montserrat text-[18px] font-medium leading-[21.94px] tracking-widest text-[#FFFFFF] mobile:mt-[6px] mobile:text-[12px] mobile:leading-[14.63px] desktop:mt-[12px] desktop:text-[18px] desktop:leading-[21.94px]">
              Bác sĩ
            </h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            className="absolute right-[260px] top-[604px] mobile:hidden desktop:block"
          >
            <path
              opacity="0.2"
              d="M5.99954 0H20.0005C23.3139 0 26 2.68609 26 5.99954V20.0005C26 23.3139 23.3139 26 20.0005 26H5.99954C2.68609 26 0 23.3139 0 20.0005V5.99954C0 2.68609 2.68609 0 5.99954 0Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="absolute right-[136px] top-[594px] mobile:hidden desktop:block"
          >
            <path
              opacity="0.2"
              d="M13.848 0H46.152C53.8001 0 60 6.19994 60 13.848V46.152C60 53.8001 53.8001 60 46.152 60H13.848C6.19995 60 3.8147e-06 53.8001 3.8147e-06 46.152V13.848C3.8147e-06 6.19994 6.19995 0 13.848 0Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            className="absolute right-[288px] top-[691px] mobile:hidden desktop:block"
          >
            <path
              opacity="0.3"
              d="M10.3846 0H34.6154C40.3506 0 45 4.64936 45 10.3846V34.6154C45 40.3506 40.3506 45 34.6154 45H10.3846C4.64936 45 0 40.3506 0 34.6154V10.3846C0 4.64936 4.64936 0 10.3846 0Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="106"
            height="88"
            viewBox="0 0 106 88"
            fill="none"
            className="absolute bottom-0 right-[385px] mobile:hidden desktop:block"
          >
            <path
              opacity="0.6"
              d="M104.725 36.1691H69.1166V0.560547H36.1691V36.1691H0.560547V69.1166H36.1691V104.725H69.1166V69.1166H104.725V36.1691Z"
              fill="white"
            />
            <path
              d="M69.6677 105.32H35.6085V69.6677H0V35.6085H35.6085V0H69.6677V35.6085H105.32V69.6677H69.6677V105.32ZM36.729 104.2H68.556V68.556H104.165V36.729H68.556V1.15545H36.729V36.764H1.15545V68.556H36.764L36.729 104.2Z"
              fill="#07F9FE"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute right-[35px] top-[392px] mobile:block desktop:hidden"
          >
            <path
              opacity="0.1"
              d="M5.76784 0.412109H18.3376C21.3122 0.412109 23.7236 2.784 23.7236 5.70987V18.0735C23.7236 20.9994 21.3122 23.3713 18.3376 23.3713H5.76784C2.7932 23.3713 0.381796 20.9994 0.381796 18.0735V5.70987C0.381796 2.784 2.7932 0.412109 5.76784 0.412109Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="37"
            viewBox="0 0 17 37"
            fill="none"
            className="absolute right-0 top-[421px] mobile:block desktop:hidden"
          >
            <path
              opacity="0.26"
              d="M1.23763 8.60415L15.2088 0.563891C15.558 0.363359 15.9539 0.257812 16.3568 0.257812C16.7598 0.257812 17.1557 0.363359 17.5049 0.563891L31.467 8.60415C31.8163 8.80498 32.1064 9.09398 32.3081 9.44207C32.5098 9.79017 32.6161 10.1851 32.6162 10.5871V26.6632C32.6158 27.0655 32.5094 27.4606 32.3078 27.809C32.1061 28.1574 31.8162 28.4469 31.467 28.6484L17.5049 36.6864C17.1557 36.887 16.7598 36.9925 16.3568 36.9925C15.9539 36.9925 15.558 36.887 15.2088 36.6864L1.23763 28.6484C0.888765 28.4468 0.599178 28.1572 0.397881 27.8088C0.196587 27.4604 0.0906563 27.0653 0.0907021 26.6632V10.5871C0.0903664 10.1853 0.196198 9.7904 0.397541 9.44229C0.598885 9.09417 0.888636 8.80509 1.23763 8.60415Z"
              fill="#032184"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            className="absolute right-[151px] top-[458px] mobile:block desktop:hidden"
          >
            <path
              opacity="0.3"
              d="M7.40951 -0.00585938H23.0675C26.7743 -0.00585938 29.7793 2.9596 29.7793 6.61768V22.0696C29.7793 25.7277 26.7743 28.6931 23.0675 28.6931H7.40951C3.70266 28.6931 0.697664 25.7277 0.697664 22.0696V6.61768C0.697664 2.9596 3.70266 -0.00585938 7.40951 -0.00585938Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            className="absolute right-[69px] top-[490px] mobile:block desktop:hidden"
          >
            <path
              opacity="0.59"
              d="M1.42563 6.62954L11.9416 0.601125C12.2044 0.450429 12.5025 0.371094 12.806 0.371094C13.1095 0.371094 13.4077 0.450429 13.6705 0.601125L24.1864 6.62954C24.4493 6.78052 24.6675 6.9976 24.8191 7.25893C24.9706 7.52026 25.0502 7.81662 25.0498 8.11819V20.175C25.0495 20.4765 24.9697 20.7725 24.8182 21.0338C24.6667 21.295 24.4489 21.5122 24.1864 21.6637L13.6705 27.6921C13.4077 27.8428 13.1095 27.9221 12.806 27.9221C12.5025 27.9221 12.2044 27.8428 11.9416 27.6921L1.42563 21.6637C1.16249 21.5128 0.943966 21.2958 0.792019 21.0345C0.640074 20.7732 0.560051 20.4768 0.560007 20.175V8.11594C0.559988 7.81449 0.640007 7.51836 0.791979 7.2574C0.943951 6.99644 1.16251 6.77988 1.42563 6.62954Z"
              fill="#032184"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            className="absolute right-[100px] top-[542px] mobile:block desktop:hidden"
          >
            <path
              opacity="0.2"
              d="M2.40145 0.177734H7.75894C9.02685 0.177734 10.0547 1.20557 10.0547 2.47348V7.83097C10.0547 9.09887 9.02685 10.1267 7.75894 10.1267H2.40145C1.13355 10.1267 0.105707 9.09887 0.105707 7.83097V2.47348C0.105707 1.20557 1.13355 0.177734 2.40145 0.177734Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute right-[52px] top-[538px] mobile:block desktop:hidden"
          >
            <path
              opacity="0.2"
              d="M5.84369 0.351562H18.2049C21.1315 0.351562 23.5039 2.72399 23.5039 5.65053V18.0118C23.5039 20.9383 21.1315 23.3107 18.2049 23.3107H5.84369C2.91715 23.3107 0.544724 20.9383 0.544724 18.0118V5.65053C0.544724 2.72399 2.91715 0.351562 5.84369 0.351562Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="absolute right-[110px] top-[575px] mobile:block desktop:hidden"
          >
            <path
              opacity="0.3"
              d="M4.09514 0.46875H13.3671C15.5617 0.46875 17.3408 2.24784 17.3408 4.44246V13.7144C17.3408 15.909 15.5617 17.6881 13.3671 17.6881H4.09514C1.90052 17.6881 0.121431 15.909 0.121431 13.7144V4.44246C0.121431 2.24784 1.90052 0.46875 4.09514 0.46875Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="36"
            viewBox="0 0 41 36"
            fill="none"
            className="absolute bottom-0 right-[151px] mobile:block desktop:hidden"
          >
            <path
              opacity="0.6"
              d="M40.5449 14.0197H26.871V0.345703H14.2189V14.0197H0.544922V26.6718H14.2189V40.3457H26.871V26.6718H40.5449V14.0197Z"
              fill="white"
            />
            <path
              d="M27.0044 40.3457H14.0689V26.8052H0.544922V13.8696H14.0689V0.345703H27.0044V13.8696H40.5449V26.8052H27.0044V40.3457ZM14.4944 39.9202H26.5822V26.3829H40.1061V14.2952H26.5822V0.784535H14.4944V14.3085H0.983754V26.3829H14.5077L14.4944 39.9202Z"
              fill="#07F9FE"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="114"
            height="113"
            viewBox="0 0 114 113"
            fill="none"
            className="absolute right-0 top-[22px] mobile:hidden desktop:block"
          >
            <path
              d="M129.265 27.6442H85.3124V-16.3086H44.6442V27.6442H0.691406V68.3124H44.6442V112.265H85.3124V68.3124H129.265V27.6442Z"
              fill="white"
            />
            <path
              d="M85.9932 113H43.9528V68.9932H0V26.9528H43.9528V-17H85.9932V26.9528H130V68.9932H85.9932V113ZM45.3358 111.617H84.621V67.621H128.574V28.3358H84.621V-15.5738H45.3358V28.379H1.4262V67.621H45.379L45.3358 111.617Z"
              fill="#07F9FE"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="51"
            viewBox="0 0 45 51"
            fill="none"
            className="absolute right-0 top-[120px] mobile:block desktop:hidden"
          >
            <path
              d="M50.3857 17.6585H33.567V0.839844H18.0052V17.6585H1.18652V33.2203H18.0052V50.039H33.567V33.2203H50.3857V17.6585Z"
              fill="white"
            />
            <path
              d="M33.8274 50.3191H17.7405V33.4798H0.921875V17.3929H17.7405V0.574219H33.8274V17.3929H50.6668V33.4798H33.8274V50.3191ZM18.2698 49.7899H33.3024V32.9547H50.121V17.9221H33.3024V1.11996H18.2698V17.9386H1.46762V32.9547H18.2863L18.2698 49.7899Z"
              fill="#07F9FE"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="147"
            height="166"
            viewBox="0 0 147 166"
            fill="none"
            className="absolute right-[525px] top-[87px] mobile:hidden desktop:block"
          >
            <path
              opacity="0.3"
              d="M5.19675 37.7108L68.3092 1.38538C69.8887 0.47776 71.6798 0 73.503 0C75.3261 0 77.1173 0.47776 78.6968 1.38538L141.809 37.7108C143.387 38.621 144.697 39.9285 145.608 41.5025C146.519 43.0764 146.999 44.8615 147 46.6786V119.324C146.999 121.14 146.519 122.924 145.608 124.497C144.697 126.07 143.387 127.377 141.809 128.286L78.6908 164.611C77.1121 165.521 75.3207 166 73.4971 166C71.6734 166 69.882 165.521 68.3033 164.611L5.19675 128.286C3.61704 127.378 2.30495 126.073 1.39264 124.499C0.480333 122.926 7.87327e-06 121.141 0 119.324V46.6786C0.000769252 44.8608 0.481407 43.0751 1.39359 41.501C2.30576 39.9269 3.61738 38.6198 5.19675 37.7108V37.7108Z"
              fill="#07F9FE"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="64"
            viewBox="0 0 57 64"
            fill="none"
            className="absolute right-[71px] top-[22px] mobile:block desktop:hidden"
          >
            <path
              opacity="0.3"
              d="M2.53347 14.7759L26.6836 0.875824C27.288 0.528519 27.9734 0.345703 28.6711 0.345703C29.3687 0.345703 30.0541 0.528519 30.6585 0.875824L54.8086 14.7759C55.4124 15.1241 55.9137 15.6245 56.2624 16.2268C56.611 16.829 56.7946 17.5121 56.7949 18.2074V46.0053C56.7947 46.7003 56.611 47.3831 56.2624 47.985C55.9137 48.5869 55.4124 49.0868 54.8086 49.4346L30.6562 63.3346C30.0521 63.6828 29.3666 63.8661 28.6688 63.8661C27.971 63.8661 27.2855 63.6828 26.6814 63.3346L2.53347 49.4346C1.929 49.0875 1.42692 48.5877 1.07782 47.9857C0.728725 47.3837 0.544926 46.7006 0.544922 46.0053V18.2074C0.545216 17.5118 0.729134 16.8285 1.07818 16.2262C1.42723 15.6239 1.92913 15.1237 2.53347 14.7759Z"
              fill="#07F9FE"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="60"
            viewBox="0 0 61 60"
            fill="none"
            className="absolute right-[91px] top-[210px] mobile:hidden desktop:block"
          >
            <path
              opacity="0.1"
              d="M14.0755 0H46.9245C54.6982 0 61 6.19854 61 13.8448V46.1552C61 53.8015 54.6982 60 46.9245 60H14.0755C6.30182 60 0 53.8015 0 46.1552V13.8448C0 6.19854 6.30182 0 14.0755 0Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="96"
            viewBox="0 0 43 96"
            fill="none"
            className="absolute right-0 top-[288px] mobile:hidden desktop:block"
          >
            <path
              opacity="0.26"
              d="M2.99729 21.8118L39.5086 0.799885C40.4212 0.275828 41.4558 0 42.5089 0C43.5619 0 44.5965 0.275828 45.5091 0.799885L81.9968 21.8118C82.9095 22.3366 83.6676 23.0918 84.1948 24.0015C84.722 24.9112 84.9997 25.9433 85 26.994V69.006C84.9989 70.0573 84.721 71.0899 84.1939 72.0004C83.6668 72.9109 82.9092 73.6674 81.9968 74.1941L45.5091 95.2001C44.5965 95.7242 43.5619 96 42.5089 96C41.4558 96 40.4212 95.7242 39.5086 95.2001L2.99729 74.1941C2.0856 73.6671 1.32881 72.9104 0.802757 71.9999C0.276711 71.0893 -0.00012207 70.0569 0 69.006V26.994C-0.00088501 25.9438 0.275688 24.9118 0.801865 24.0021C1.32805 23.0923 2.08526 22.3369 2.99729 21.8118Z"
              fill="#032184"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="75"
            viewBox="0 0 76 75"
            fill="none"
            className="absolute right-[394px] top-[384px] mobile:hidden desktop:block"
          >
            <path
              opacity="0.3"
              d="M17.5403 0H58.4597C68.1469 0 76 7.74973 76 17.3095V57.6905C76 67.2503 68.1469 75 58.4597 75H17.5403C7.85306 75 0 67.2503 0 57.6905V17.3095C0 7.74973 7.85306 0 17.5403 0Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="72"
            viewBox="0 0 64 72"
            fill="none"
            className="absolute right-[179px] top-[466px] mobile:hidden desktop:block"
          >
            <path
              opacity="0.59"
              d="M2.26217 16.3554L29.7438 0.601147C30.4307 0.20733 31.2098 0 32.0029 0C32.7961 0 33.5753 0.20733 34.2622 0.601147L61.7437 16.3554C62.4307 16.75 63.001 17.3173 63.3971 18.0002C63.7931 18.6831 64.0011 19.4576 64 20.2457V51.7543C63.9993 52.542 63.7906 53.3158 63.3947 53.9984C62.9988 54.6811 62.4295 55.2487 61.7437 55.6446L34.2622 71.3988C33.5753 71.7927 32.7961 72 32.0029 72C31.2098 72 30.4307 71.7927 29.7438 71.3988L2.26217 55.6446C1.57448 55.2503 1.00341 54.6832 0.606323 54.0004C0.20924 53.3175 0.000110626 52.5428 0 51.7543V20.2399C-5.34058e-05 19.4521 0.209064 18.6782 0.606216 17.9962C1.00337 17.3142 1.57454 16.7483 2.26217 16.3554Z"
              fill="#032184"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="980"
            height="364"
            viewBox="0 0 980 364"
            fill="none"
            className="absolute bottom-0 mobile:hidden desktop:block"
          >
            <path
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M130.188 211.125C132.266 213.888 134.884 216.213 137.894 217.953L294.602 308.542C298.523 310.808 302.97 312 307.496 312C312.022 312 316.469 310.808 320.39 308.542L477.106 217.953C481.026 215.687 484.282 212.428 486.545 208.503C488.808 204.578 490 200.125 490 195.593V14.4106C489.999 11.2944 489.434 8.2168 488.345 5.32227C497.284 1.81738 506.831 0 516.5 0C530.028 0 543.318 3.55762 555.036 10.3164L980 255.695V364H0V287.293C3.00098 284.899 6.1875 282.724 9.53613 280.792L130.188 211.125Z"
              fill="#032184"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="376"
            height="285"
            viewBox="0 0 376 285"
            fill="none"
            className="absolute top-[356px] mobile:block desktop:hidden"
          >
            <path
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M98.3622 0.40625C98.7011 1.42447 99.1432 2.41001 99.6842 3.34696C101.086 5.774 103.101 7.78942 105.528 9.19069L202.559 65.2073C204.986 66.6079 207.74 67.3452 210.542 67.3452C213.345 67.3452 216.098 66.6079 218.526 65.2073L314.241 9.95293L375.545 45.3938V284.345H0.544922V57.3561C1.71662 56.413 2.96282 55.558 4.27414 54.8002L98.3622 0.40625Z"
              fill="#032184"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
