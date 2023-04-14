import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-footer">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">C</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  UI Design
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Android</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Templates</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container-footer">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2017 All Rights Reserved by
              <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook social" href="#">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_0_558"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="25"
                      height="24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.538574 23.9905H24.529V0H0.538574V23.9905Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_0_558)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.205 0H1.86262C1.13129 0 0.538574 0.592719 0.538574 1.32404V22.6664C0.538574 23.3977 1.13129 23.9906 1.86262 23.9906H13.3527V14.7001H10.2262V11.0795H13.3527V8.40935C13.3527 5.31074 15.2452 3.62346 18.0094 3.62346C19.3335 3.62346 20.4715 3.72198 20.8031 3.76602V7.00431L18.886 7.00521C17.3827 7.00521 17.0916 7.71955 17.0916 8.76782V11.0795H20.6769L20.2101 14.7001H17.0916V23.9906H23.205C23.9362 23.9906 24.529 23.3977 24.529 22.6664V1.32404C24.529 0.592719 23.9362 0 23.205 0Z"
                        fill="#EBCB80"
                      />
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a className="twitter social" href="#">
                  <svg
                    width="30"
                    height="24"
                    viewBox="0 0 30 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_0_555"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="30"
                      height="24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.00634766 23.9935H29.423V0.0883789H0.00634766V23.9935Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_0_555)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M29.4231 2.91898C28.3406 3.39909 27.1771 3.72357 25.9561 3.86951C27.2024 3.12239 28.1595 1.93939 28.6103 0.52985C27.4439 1.22154 26.152 1.72393 24.777 1.99471C23.6758 0.821509 22.107 0.0883789 20.3708 0.0883789C17.037 0.0883789 14.3341 2.79112 14.3341 6.12476C14.3341 6.59787 14.3876 7.0586 14.4905 7.5004C9.47354 7.24867 5.02558 4.84544 2.04829 1.19335C1.52868 2.0849 1.231 3.12185 1.231 4.22811C1.231 6.32235 2.29679 8.17003 3.91652 9.2525C2.92692 9.22119 1.9962 8.94965 1.18224 8.49753C1.18181 8.52271 1.18181 8.548 1.18181 8.5734C1.18181 11.4982 3.2626 13.938 6.02411 14.4925C5.51752 14.6304 4.98425 14.7042 4.43365 14.7042C4.0447 14.7042 3.66651 14.6664 3.29801 14.5959C4.06612 16.9942 6.29543 18.7394 8.93693 18.7881C6.871 20.4071 4.26813 21.3722 1.44 21.3722C0.952789 21.3722 0.472251 21.3437 0 21.2879C2.67143 23.0006 5.84448 23.9999 9.25345 23.9999C20.3567 23.9999 26.4284 14.8017 26.4284 6.82474C26.4284 6.563 26.4226 6.30266 26.411 6.04382C27.5903 5.19274 28.6138 4.12953 29.4231 2.91898Z"
                        fill="#EBCB80"
                      />
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a className="dribbble social" href="#">
                  <svg
                    width="36"
                    height="23"
                    viewBox="0 0 36 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2203 9.80571V13.728H17.5837C17.3273 15.4113 15.6603 18.6635 11.2203 18.6635C7.38934 18.6635 4.2637 15.4277 4.2637 11.44C4.2637 7.45234 7.38934 4.21646 11.2203 4.21646C13.4002 4.21646 14.8588 5.16434 15.6923 5.98149L18.7378 2.99074C16.7823 1.12766 14.2497 0 11.2203 0C5.01706 0 0 5.11531 0 11.44C0 17.7647 5.01706 22.88 11.2203 22.88C17.6959 22.88 21.9917 18.2386 21.9917 11.7015C21.9917 10.9497 21.9116 10.3777 21.8154 9.80571H11.2203Z"
                      fill="#EBCB80"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M35.2636 9.80568H32.0578V6.53711H28.852V9.80568H25.6462V13.0743H28.852V16.3428H32.0578V13.0743H35.2636"
                      fill="#EBCB80"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
