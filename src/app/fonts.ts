import localFont from 'next/font/local';

export const uniSans = localFont({
  src: [
    { path: '../../public/fonts/Thin/UniSansThin.woff2', weight: '100', style: 'normal' },
    { path: '../../public/fonts/Light/UniSansLight.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Regular/UniSansRegular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Bold/UniSansSemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Bold/UniSansBold.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Heavy/UniSansHeavy.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-uni-sans-next',
  display: 'swap',
});

export const uniSansBook = localFont({
  src: [{ path: '../../public/fonts/Book/UniSansBook.woff2', weight: '400', style: 'normal' }],
  variable: '--font-uni-sans-book-next',
  display: 'swap',
});

export const inter = localFont({
  src: [
    { path: '../../public/fonts/Thin/Inter-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../../public/fonts/Extralight/Inter-ExtraLight.woff2', weight: '200', style: 'normal' },
    { path: '../../public/fonts/Light/Inter-Light.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Regular/Inter-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Medium/Inter-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Semibold/Inter-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Bold/Inter-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Extrabold/Inter-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../../public/fonts/Black/Inter-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-inter-next',
  display: 'swap',
});

export const segoeUI = localFont({
  src: [
    { path: '../../public/fonts/Regular/SegoeUI.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Bold/SegoeUI-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-segoe-ui-next',
  display: 'swap',
});

export const roboto = localFont({
  src: [
    { path: '../../public/fonts/Thin/Roboto-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../../public/fonts/Light/Roboto-Light.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Regular/Roboto-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Medium/Roboto-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Bold/Roboto-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Black/Roboto-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-roboto-next',
  display: 'swap',
});
