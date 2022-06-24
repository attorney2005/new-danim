import React from "react";
import ReactDOM from "react-dom"
import './footer.scss';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <svg className="footer__logo-icon" width="73" height="19" viewBox="0 0 73 19" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.392 18H10.016L5.696 10.152L4.688 7.992H4.64L4.736 11.136V18H0.464V2.16H5.816L10.136 10.008L11.168 12.168H11.192L11.096 9.024V2.16H15.392V18ZM22.8834 18H18.0354V6H22.8834V18ZM21.9474 4.752L20.4594 2.856L18.9714 4.752H15.5874L18.1554 0.527999H22.7634L25.3314 4.752H21.9474ZM41.4787 5.76C42.6787 5.76 43.6307 6.12 44.3347 6.84C45.0387 7.56 45.3907 8.576 45.3907 9.888V18H40.5427V11.088C40.5427 10.48 40.4387 10.048 40.2307 9.792C40.0387 9.52 39.7427 9.384 39.3427 9.384C38.8307 9.384 38.4307 9.576 38.1427 9.96C37.8707 10.344 37.7347 10.912 37.7347 11.664V18H32.8867V11.088C32.8867 10.48 32.7827 10.048 32.5747 9.792C32.3827 9.52 32.0867 9.384 31.6867 9.384C31.1907 9.384 30.7987 9.576 30.5107 9.96C30.2227 10.344 30.0787 10.92 30.0787 11.688V18H25.2307V6H29.5987L29.7187 8.472C30.0867 7.592 30.6147 6.92 31.3027 6.456C32.0067 5.992 32.8467 5.76 33.8227 5.76C34.7347 5.76 35.5027 5.968 36.1267 6.384C36.7667 6.8 37.2227 7.4 37.4947 8.184C37.8627 7.4 38.3907 6.8 39.0787 6.384C39.7667 5.968 40.5667 5.76 41.4787 5.76ZM59.8753 11.712C59.8753 12.288 59.8353 12.752 59.7552 13.104H51.8593C51.9553 13.776 52.1713 14.248 52.5073 14.52C52.8433 14.792 53.3153 14.928 53.9233 14.928C54.8993 14.928 55.4993 14.544 55.7233 13.776L59.6353 14.904C59.3313 15.992 58.6673 16.824 57.6433 17.4C56.6353 17.96 55.3953 18.24 53.9233 18.24C51.7473 18.24 50.0833 17.704 48.9313 16.632C47.7793 15.544 47.2033 14 47.2033 12C47.2033 10.016 47.7633 8.48 48.8833 7.392C50.0193 6.304 51.6113 5.76 53.6593 5.76C55.6593 5.76 57.1953 6.296 58.2673 7.368C59.3393 8.424 59.8753 9.872 59.8753 11.712ZM53.6833 9.048C53.1553 9.048 52.7393 9.2 52.4353 9.504C52.1473 9.808 51.9553 10.304 51.8593 10.992H55.3393C55.2593 10.336 55.0833 9.848 54.8113 9.528C54.5553 9.208 54.1793 9.048 53.6833 9.048ZM66.9794 18.24C65.5554 18.24 64.3394 18.088 63.3314 17.784C62.3394 17.48 61.5154 16.984 60.8594 16.296L63.1394 13.656C63.5554 14.152 64.0674 14.536 64.6754 14.808C65.2834 15.064 65.9554 15.192 66.6914 15.192C67.1074 15.192 67.4434 15.144 67.6994 15.048C67.9554 14.952 68.0834 14.808 68.0834 14.616C68.0834 14.44 67.9394 14.288 67.6514 14.16C67.3634 14.016 66.8514 13.864 66.1154 13.704C64.3554 13.368 63.0834 12.888 62.2994 12.264C61.5314 11.64 61.1474 10.832 61.1474 9.84C61.1474 9.152 61.3714 8.496 61.8194 7.872C62.2834 7.248 62.9714 6.744 63.8834 6.36C64.8114 5.96 65.9554 5.76 67.3154 5.76C69.9234 5.76 71.8034 6.424 72.9554 7.752L70.7714 10.128C70.0194 9.248 68.9314 8.808 67.5074 8.808C67.0114 8.808 66.6354 8.872 66.3794 9C66.1234 9.112 65.9954 9.264 65.9954 9.456C65.9954 9.616 66.1314 9.76 66.4034 9.888C66.6914 10 67.1634 10.112 67.8194 10.224C69.6274 10.496 70.9314 10.944 71.7314 11.568C72.5474 12.176 72.9554 13.024 72.9554 14.112C72.9554 15.312 72.4514 16.304 71.4434 17.088C70.4354 17.856 68.9474 18.24 66.9794 18.24Z"
            fill="white"/>
        </svg>
      </div>
      <ul className="footer__menu">
        <li className="footer__menu-item"><a className="footer__menu-link">Shop</a></li>
        <li className="footer__menu-item"><a className="footer__menu-link">Delivery</a></li>
        <li className="footer__menu-item"><a className="footer__menu-link">Service</a></li>
        <li className="footer__menu-item"><a className="footer__menu-link">Sitemap</a></li>
        <li className="footer__menu-item"><a className="footer__menu-link">Contacts</a></li>
      </ul>
      <ul className="footer__social-list">
        <li className="footer__social-item">
          <a className="footer__social-link">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.58268 11.5H10.1868L11.2285 7.5H7.58268V5.5C7.58268 4.47 7.58268 3.5 9.66602 3.5H11.2285V0.14C10.8889 0.0970001 9.60664 0 8.25247 0C5.42435 0 3.41602 1.657 3.41602 4.7V7.5H0.291016V11.5H3.41602V20H7.58268V11.5Z"
                fill="white"/>
            </svg>
          </a>
        </li>
        <li className="footer__social-item">
          <a className="footer__social-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z"
                fill="white"/>
            </svg>
          </a>
        </li>
        <li className="footer__social-item">
          <a className="footer__social-link">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.9277 0.094077C9.43524 -0.235068 6.90293 0.312629 4.79833 1.63604C2.69372 2.95944 1.15897 4.96918 0.477463 7.29414C-0.204044 9.61911 0.0137216 12.1023 1.09055 14.2851C2.16738 16.468 4.03054 18.2031 6.336 19.1701C6.27366 18.4019 6.33088 17.6291 6.5058 16.8771C6.6985 16.0381 7.8558 11.4141 7.8558 11.4141C7.62535 10.9182 7.51018 10.38 7.5183 9.83708C7.5183 8.35208 8.41101 7.24408 9.52142 7.24408C9.72091 7.24129 9.91868 7.27977 10.1013 7.35691C10.2839 7.43404 10.4471 7.54802 10.5797 7.6911C10.7123 7.83418 10.8113 8.00299 10.8699 8.18607C10.9285 8.36914 10.9454 8.56219 10.9193 8.75208C10.9193 9.65208 10.3173 11.0141 10.0027 12.2921C9.9405 12.5265 9.93656 12.7716 9.99116 13.0077C10.0458 13.2438 10.1574 13.4643 10.317 13.6514C10.4766 13.8385 10.6798 13.987 10.9102 14.0849C11.1406 14.1828 11.3917 14.2274 11.6433 14.2151C13.6204 14.2151 14.9454 11.7841 14.9454 8.91408C14.9454 6.71408 13.4277 5.06608 10.6298 5.06608C9.96035 5.04111 9.29265 5.147 8.66718 5.37733C8.04172 5.60766 7.47154 5.95762 6.99127 6.40597C6.51099 6.85431 6.13065 7.39168 5.87332 7.98545C5.61599 8.57922 5.48706 9.21701 5.49434 9.86008C5.46451 10.5734 5.70424 11.273 6.16934 11.8301C6.25625 11.8924 6.31971 11.9801 6.35014 12.08C6.38058 12.1799 6.37635 12.2867 6.33809 12.3841C6.29017 12.5681 6.16934 13.0071 6.12142 13.1681C6.11145 13.2227 6.08827 13.2743 6.05374 13.3187C6.0192 13.3631 5.97428 13.3991 5.9226 13.4238C5.87091 13.4486 5.81391 13.4613 5.75617 13.461C5.69843 13.4607 5.64157 13.4473 5.59017 13.4221C4.1485 12.8681 3.46934 11.3451 3.46934 9.60608C3.46934 6.75908 5.95267 3.35108 10.9214 3.35108C14.8756 3.35108 17.5048 6.12808 17.5048 9.09808C17.5048 13.0071 15.237 15.9461 11.886 15.9461C11.3852 15.9614 10.8884 15.8553 10.4416 15.6375C9.99475 15.4198 9.61236 15.0973 9.32976 14.7001C9.32976 14.7001 8.72767 17.0161 8.60892 17.4541C8.36652 18.2108 8.00883 18.9289 7.54746 19.5851C8.50892 19.8651 9.50788 20.0051 10.512 20.0011C11.8804 20.0021 13.2354 19.7441 14.4997 19.2417C15.764 18.7392 16.9126 18.0024 17.8798 17.0732C18.847 16.144 19.6138 15.0408 20.1363 13.8268C20.6587 12.6127 20.9266 11.3117 20.9245 9.99808C20.9233 7.58308 20.0118 5.25007 18.3585 3.42986C16.7052 1.60964 14.4218 0.425141 11.9298 0.095077L11.9277 0.094077Z"
                fill="white"/>
            </svg>
          </a>
        </li>
        <li className="footer__social-item">
          <a className="footer__social-link">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.1623 2.65593C20.3989 2.99362 19.5893 3.2154 18.7603 3.31393C19.6341 2.79136 20.288 1.96894 20.6003 0.999927C19.7803 1.48793 18.8813 1.82993 17.9443 2.01493C17.3149 1.34151 16.4807 0.89489 15.5713 0.744511C14.6618 0.594133 13.7282 0.748418 12.9156 1.18338C12.1029 1.61834 11.4567 2.30961 11.0774 3.14972C10.6981 3.98983 10.607 4.93171 10.8183 5.82893C9.15541 5.74558 7.52863 5.31345 6.04358 4.56059C4.55854 3.80773 3.24843 2.75097 2.1983 1.45893C1.82659 2.09738 1.63125 2.82315 1.6323 3.56193C1.6323 5.01193 2.3703 6.29293 3.4923 7.04293C2.82831 7.02202 2.17893 6.84271 1.5983 6.51993V6.57193C1.5985 7.53763 1.93267 8.47354 2.54414 9.22099C3.15562 9.96843 4.00678 10.4814 4.9533 10.6729C4.33691 10.84 3.6906 10.8646 3.0633 10.7449C3.33016 11.5762 3.8503 12.3031 4.55089 12.824C5.25147 13.3449 6.09743 13.6337 6.9703 13.6499C6.10278 14.3313 5.10947 14.8349 4.04718 15.1321C2.98488 15.4293 1.87442 15.5142 0.779297 15.3819C2.69099 16.6114 4.91639 17.264 7.1893 17.2619C14.8823 17.2619 19.0893 10.8889 19.0893 5.36193C19.0893 5.18193 19.0843 4.99993 19.0763 4.82193C19.8952 4.23009 20.6019 3.49695 21.1633 2.65693L21.1623 2.65593Z"
                fill="white"/>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  )
}
