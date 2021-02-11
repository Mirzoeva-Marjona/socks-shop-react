import React from 'react'
import styles from './footer.module.css'
import cx from 'classname'

const Footer = () => {
    return <footer className={cx(styles.footer,styles._background)}>
        <div className={cx(styles.__box,styles._gradient)}>
            <div className={cx(styles.__item,styles._zero,styles._font)}>О компании</div>
            <div className={cx(styles.__item,styles._first,styles._font)}>Контакты</div>
            <div className={cx(styles.__item,styles._second,styles._font)}>Социальные сети</div>
            <div className={cx(styles.__item,styles._third,styles._font)}>График работы</div>
            <div className={cx(styles.__medias)}>
                <div className={cx(styles.__mediaIcon)}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM25.2555 31.8761C25.2555 31.8761 25.7175 31.8257 25.9541 31.5762C26.1707 31.3476 26.1632 30.9162 26.1632 30.9162C26.1632 30.9162 26.1344 28.9018 27.0873 28.6043C28.0264 28.3118 29.2321 30.5524 30.5118 31.414C31.4784 32.0654 32.2121 31.9228 32.2121 31.9228L35.6316 31.8761C35.6316 31.8761 37.4196 31.7679 36.5719 30.3877C36.5018 30.2746 36.0773 29.3664 34.0302 27.5006C31.8853 25.5477 32.1733 25.8635 34.7551 22.4849C36.3278 20.4274 36.9563 19.1713 36.7597 18.6343C36.5732 18.1205 35.4162 18.2569 35.4162 18.2569L31.5673 18.2803C31.5673 18.2803 31.2818 18.2422 31.0702 18.3663C30.8636 18.488 30.7296 18.7719 30.7296 18.7719C30.7296 18.7719 30.1211 20.3635 29.3085 21.7179C27.5944 24.5743 26.9095 24.7254 26.629 24.5485C25.9767 24.1343 26.1394 22.8868 26.1394 22.0006C26.1394 19.2316 26.5677 18.0775 25.3068 17.7788C24.8886 17.6793 24.5806 17.6141 23.51 17.6031C22.1365 17.5896 20.9745 17.608 20.3159 17.9239C19.8777 18.134 19.5396 18.6035 19.7462 18.6306C20.0004 18.6637 20.5764 18.783 20.8819 19.191C21.2763 19.7183 21.2625 20.9006 21.2625 20.9006C21.2625 20.9006 21.4892 24.1601 20.7329 24.5644C20.2145 24.8422 19.5033 24.2756 17.9745 21.6835C17.192 20.3562 16.601 18.8887 16.601 18.8887C16.601 18.8887 16.487 18.6146 16.2829 18.4671C16.0363 18.2889 15.6919 18.2336 15.6919 18.2336L12.0346 18.2569C12.0346 18.2569 11.4849 18.2717 11.2833 18.5064C11.1043 18.7141 11.2695 19.1455 11.2695 19.1455C11.2695 19.1455 14.1331 25.7222 17.376 29.037C20.3497 32.0752 23.7254 31.8761 23.7254 31.8761H25.2555Z"
                              fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM25.2555 31.8761C25.2555 31.8761 25.7175 31.8257 25.9541 31.5762C26.1707 31.3476 26.1632 30.9162 26.1632 30.9162C26.1632 30.9162 26.1344 28.9018 27.0873 28.6043C28.0264 28.3118 29.2321 30.5524 30.5118 31.414C31.4784 32.0654 32.2121 31.9228 32.2121 31.9228L35.6316 31.8761C35.6316 31.8761 37.4196 31.7679 36.5719 30.3877C36.5018 30.2746 36.0773 29.3664 34.0302 27.5006C31.8853 25.5477 32.1733 25.8635 34.7551 22.4849C36.3278 20.4274 36.9563 19.1713 36.7597 18.6343C36.5732 18.1205 35.4162 18.2569 35.4162 18.2569L31.5673 18.2803C31.5673 18.2803 31.2818 18.2422 31.0702 18.3663C30.8636 18.488 30.7296 18.7719 30.7296 18.7719C30.7296 18.7719 30.1211 20.3635 29.3085 21.7179C27.5944 24.5743 26.9095 24.7254 26.629 24.5485C25.9767 24.1343 26.1394 22.8868 26.1394 22.0006C26.1394 19.2316 26.5677 18.0775 25.3068 17.7788C24.8886 17.6793 24.5806 17.6141 23.51 17.6031C22.1365 17.5896 20.9745 17.608 20.3159 17.9239C19.8777 18.134 19.5396 18.6035 19.7462 18.6306C20.0004 18.6637 20.5764 18.783 20.8819 19.191C21.2763 19.7183 21.2625 20.9006 21.2625 20.9006C21.2625 20.9006 21.4892 24.1601 20.7329 24.5644C20.2145 24.8422 19.5033 24.2756 17.9745 21.6835C17.192 20.3562 16.601 18.8887 16.601 18.8887C16.601 18.8887 16.487 18.6146 16.2829 18.4671C16.0363 18.2889 15.6919 18.2336 15.6919 18.2336L12.0346 18.2569C12.0346 18.2569 11.4849 18.2717 11.2833 18.5064C11.1043 18.7141 11.2695 19.1455 11.2695 19.1455C11.2695 19.1455 14.1331 25.7222 17.376 29.037C20.3497 32.0752 23.7254 31.8761 23.7254 31.8761H25.2555Z"
                              fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="24" y1="0" x2="24" y2="48"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={cx(styles.__mediaIcon)}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                            fill="white"/>
                        <path
                            d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                            fill="url(#paint0_linear)"/>
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48"
                              height="48">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                  fill="white"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M24.0012 11.2C20.5249 11.2 20.0886 11.2152 18.7233 11.2773C17.3606 11.3397 16.4305 11.5554 15.6166 11.872C14.7747 12.1989 14.0606 12.6362 13.3491 13.348C12.6371 14.0594 12.1997 14.7736 11.8717 15.6152C11.5544 16.4293 11.3384 17.3597 11.2771 18.7219C11.216 20.0872 11.2 20.5238 11.2 24.0001C11.2 27.4764 11.2155 27.9113 11.2773 29.2767C11.34 30.6394 11.5557 31.5695 11.872 32.3834C12.1992 33.2252 12.6365 33.9394 13.3483 34.6509C14.0595 35.3629 14.7736 35.8013 15.615 36.1282C16.4294 36.4447 17.3598 36.6605 18.7222 36.7229C20.0876 36.785 20.5236 36.8002 23.9996 36.8002C27.4762 36.8002 27.9111 36.785 29.2765 36.7229C30.6391 36.6605 31.5703 36.4447 32.3848 36.1282C33.2264 35.8013 33.9394 35.3629 34.6506 34.6509C35.3626 33.9394 35.8 33.2252 36.128 32.3836C36.4427 31.5695 36.6587 30.6391 36.7227 29.2769C36.784 27.9116 36.8 27.4764 36.8 24.0001C36.8 20.5238 36.784 20.0875 36.7227 18.7222C36.6587 17.3595 36.4427 16.4293 36.128 15.6155C35.8 14.7736 35.3626 14.0594 34.6506 13.348C33.9386 12.636 33.2266 12.1986 32.384 11.872C31.5679 11.5554 30.6373 11.3397 29.2746 11.2773C27.9092 11.2152 27.4746 11.2 23.9972 11.2H24.0012ZM23.5743 13.5065H23.5746L24.0012 13.5066C27.4188 13.5066 27.8239 13.5189 29.1735 13.5802C30.4215 13.6373 31.0989 13.8458 31.5501 14.021C32.1474 14.253 32.5733 14.5304 33.021 14.9784C33.469 15.4264 33.7464 15.8531 33.9789 16.4504C34.1541 16.9011 34.3629 17.5784 34.4197 18.8264C34.481 20.1758 34.4944 20.5811 34.4944 23.9972C34.4944 27.4132 34.481 27.8185 34.4197 29.1679C34.3626 30.4159 34.1541 31.0932 33.9789 31.5439C33.7469 32.1412 33.469 32.5666 33.021 33.0143C32.573 33.4623 32.1477 33.7397 31.5501 33.9717C31.0994 34.1477 30.4215 34.3557 29.1735 34.4127C27.8242 34.4741 27.4188 34.4874 24.0012 34.4874C20.5833 34.4874 20.1782 34.4741 18.8289 34.4127C17.5809 34.3551 16.9035 34.1466 16.4521 33.9714C15.8547 33.7394 15.428 33.462 14.98 33.014C14.532 32.566 14.2547 32.1404 14.0222 31.5428C13.847 31.0922 13.6382 30.4148 13.5814 29.1668C13.52 27.8175 13.5078 27.4121 13.5078 23.994C13.5078 20.5758 13.52 20.1726 13.5814 18.8232C13.6384 17.5752 13.847 16.8979 14.0222 16.4467C14.2542 15.8493 14.532 15.4227 14.98 14.9747C15.428 14.5267 15.8547 14.2493 16.4521 14.0168C16.9033 13.8408 17.5809 13.6328 18.8289 13.5754C20.0097 13.5221 20.4673 13.5061 22.8529 13.5034V13.5066C23.0758 13.5063 23.3156 13.5064 23.5743 13.5065ZM29.2978 17.1675C29.2978 16.3192 29.9858 15.632 30.8338 15.632V15.6315C31.6818 15.6315 32.3698 16.3195 32.3698 17.1675C32.3698 18.0155 31.6818 18.7035 30.8338 18.7035C29.9858 18.7035 29.2978 18.0155 29.2978 17.1675ZM24.0009 17.4267C20.3709 17.4268 17.4278 20.37 17.4278 24.0001C17.4278 27.6303 20.371 30.5722 24.0012 30.5722C27.6314 30.5722 30.5735 27.6303 30.5735 24.0001C30.5735 20.3699 27.6311 17.4267 24.0009 17.4267ZM28.2679 24.0001C28.2679 21.6435 26.3575 19.7334 24.0012 19.7334C21.6446 19.7334 19.7345 21.6435 19.7345 24.0001C19.7345 26.3564 21.6446 28.2668 24.0012 28.2668C26.3575 28.2668 28.2679 26.3564 28.2679 24.0001Z"
                                  fill="#4F4F4F"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear" x1="24" y1="0" x2="24" y2="48"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.__mediaIcon}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M24 0.0318604C10.7967 0.0318604 0.0449982 10.7352 0.0449982 23.9385C0.0449982 37.1417 10.7967 47.8451 24 47.8451C37.2033 47.8451 47.955 37.1417 47.955 23.9385C47.955 10.7352 37.2033 0.0318604 24 0.0318604ZM29.0998 32.4375C29.8937 32.4177 30.9583 32.1876 31.515 31.9231L32.9548 36.1751C32.4152 36.9672 29.9713 37.8846 27.7708 37.9222C21.249 38.034 18.7785 33.2944 18.7785 29.9581V20.2148H15.7485V16.3629C20.2905 14.7313 21.3825 10.6507 21.639 8.32577C21.6568 8.16608 21.7828 8.10314 21.855 8.10314H26.2393V15.6997H32.2307V20.215H26.2185V29.4984C26.2378 30.7604 26.703 32.5013 29.0998 32.4375Z"
                              fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M24 0.0318604C10.7967 0.0318604 0.0449982 10.7352 0.0449982 23.9385C0.0449982 37.1417 10.7967 47.8451 24 47.8451C37.2033 47.8451 47.955 37.1417 47.955 23.9385C47.955 10.7352 37.2033 0.0318604 24 0.0318604ZM29.0998 32.4375C29.8937 32.4177 30.9583 32.1876 31.515 31.9231L32.9548 36.1751C32.4152 36.9672 29.9713 37.8846 27.7708 37.9222C21.249 38.034 18.7785 33.2944 18.7785 29.9581V20.2148H15.7485V16.3629C20.2905 14.7313 21.3825 10.6507 21.639 8.32577C21.6568 8.16608 21.7828 8.10314 21.855 8.10314H26.2393V15.6997H32.2307V20.215H26.2185V29.4984C26.2378 30.7604 26.703 32.5013 29.0998 32.4375Z"
                              fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="24" y1="0.0318604" x2="24" y2="47.8451"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.__mediaIcon}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM23.2812 19.5075L23.3316 20.338L22.4922 20.2363C19.4369 19.8465 16.7677 18.5245 14.5013 16.3043L13.3934 15.2027L13.108 16.0162C12.5036 17.8296 12.8897 19.7448 14.1488 21.0328C14.8203 21.7446 14.6692 21.8463 13.5109 21.4226C13.108 21.287 12.7554 21.1854 12.7219 21.2362C12.6044 21.3548 13.0072 22.8971 13.3262 23.5072C13.7627 24.3546 14.6524 25.1851 15.6261 25.6766L16.4487 26.0664L15.475 26.0833C14.5349 26.0833 14.5013 26.1003 14.6021 26.4562C14.9378 27.5578 16.264 28.7272 17.7413 29.2357L18.7822 29.5916L17.8756 30.1339C16.5326 30.9135 14.9546 31.3542 13.3766 31.3881C12.6211 31.405 12 31.4728 12 31.5237C12 31.6931 14.0481 32.6422 15.24 33.0151C18.8157 34.1167 23.063 33.6422 26.2526 31.7609C28.5189 30.422 30.7852 27.7612 31.8428 25.1851C32.4136 23.8123 32.9844 21.304 32.9844 20.1007C32.9844 19.3211 33.0347 19.2194 33.9748 18.2872C34.5288 17.7449 35.0492 17.1517 35.15 16.9822C35.3178 16.6602 35.3011 16.6602 34.4449 16.9483C33.018 17.4568 32.8165 17.389 33.5216 16.6263C34.042 16.084 34.6631 15.101 34.6631 14.8129C34.6631 14.762 34.4113 14.8468 34.1259 14.9993C33.8238 15.1688 33.1523 15.423 32.6486 15.5756L31.7421 15.8637L30.9195 15.3044C30.4663 14.9993 29.8283 14.6604 29.4926 14.5587C28.6364 14.3214 27.327 14.3553 26.5548 14.6265C24.4563 15.3891 23.1301 17.3551 23.2812 19.5075Z"
                              fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM23.2812 19.5075L23.3316 20.338L22.4922 20.2363C19.4369 19.8465 16.7677 18.5245 14.5013 16.3043L13.3934 15.2027L13.108 16.0162C12.5036 17.8296 12.8897 19.7448 14.1488 21.0328C14.8203 21.7446 14.6692 21.8463 13.5109 21.4226C13.108 21.287 12.7554 21.1854 12.7219 21.2362C12.6044 21.3548 13.0072 22.8971 13.3262 23.5072C13.7627 24.3546 14.6524 25.1851 15.6261 25.6766L16.4487 26.0664L15.475 26.0833C14.5349 26.0833 14.5013 26.1003 14.6021 26.4562C14.9378 27.5578 16.264 28.7272 17.7413 29.2357L18.7822 29.5916L17.8756 30.1339C16.5326 30.9135 14.9546 31.3542 13.3766 31.3881C12.6211 31.405 12 31.4728 12 31.5237C12 31.6931 14.0481 32.6422 15.24 33.0151C18.8157 34.1167 23.063 33.6422 26.2526 31.7609C28.5189 30.422 30.7852 27.7612 31.8428 25.1851C32.4136 23.8123 32.9844 21.304 32.9844 20.1007C32.9844 19.3211 33.0347 19.2194 33.9748 18.2872C34.5288 17.7449 35.0492 17.1517 35.15 16.9822C35.3178 16.6602 35.3011 16.6602 34.4449 16.9483C33.018 17.4568 32.8165 17.389 33.5216 16.6263C34.042 16.084 34.6631 15.101 34.6631 14.8129C34.6631 14.762 34.4113 14.8468 34.1259 14.9993C33.8238 15.1688 33.1523 15.423 32.6486 15.5756L31.7421 15.8637L30.9195 15.3044C30.4663 14.9993 29.8283 14.6604 29.4926 14.5587C28.6364 14.3214 27.327 14.3553 26.5548 14.6265C24.4563 15.3891 23.1301 17.3551 23.2812 19.5075Z"
                              fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="24" y1="0" x2="24" y2="48"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer