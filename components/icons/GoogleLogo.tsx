import { twMerge } from 'tailwind-merge';
import { IconProps } from './IconProps';

function GoogleLogo({ className, ...props }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="-380.2 274.7 65.7 65.8"
      className={twMerge('w-8 h-8', className)}
      {...props}
    >
      <circle cx="-347.3" cy="307.6" r="32.9" fill="#e0e0e0"/>
      <circle cx="-347.3" cy="307.1" r="32.4" fill="#fff"/>
      <defs>
        <path id="a" d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
        <clipPath clipPathUnits="userSpaceOnUse">
          <path d="M0 551.986h530.973V0H0z" />
        </clipPath>
      </defs>
      <clipPath id="b">
        <use overflow="visible" xlinkHref="#a"/>
      </clipPath>
      <path fill="#fbbc05" d="M-370.8 320.3v-26l17 13z" clipPath="url(#b)"/>
      <defs>
        <path id="c" d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
      </defs>
      <clipPath id="d">
        <use overflow="visible" xlinkHref="#c"/>
      </clipPath>
      <path fill="#ea4335" d="m-370.8 294.3 17 13 7-6.1 24-3.9v-14h-48z" clipPath="url(#d)"/>
      <defs>
        <path id="e" d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
      </defs>
      <clipPath id="f">
        <use overflow="visible" xlinkHref="#e"/>
      </clipPath>
      <path fill="#34a853" d="m-370.8 320.3 30-23 7.9 1 10.1-15v48h-48z" clipPath="url(#f)"/>
      <defs>
        <path id="g" d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
      </defs>
      <clipPath id="h">
        <use overflow="visible" xlinkHref="#g"/>
      </clipPath>
      <path fill="#4285f4" d="m-322.8 331.3-31-24-4-3 35-10z" clipPath="url(#h)"/>
    </svg>
  );
}

export default GoogleLogo;