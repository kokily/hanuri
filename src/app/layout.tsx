import '@/styles/tailwind.css';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import Script from 'next/script';
import clsx from 'clsx';
import SessionWrapper from '@/wrapper/SessionWrapper';
import QueryWrapper from '@/wrapper/QueryWrapper';
import { Header } from '@/components/common/header/Header';
import { Footer } from '@/components/common/footer/Footer';
import ToastWrapper from '@/wrapper/ToastWrapper';
import 'react-toastify/ReactToastify.css';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
});

const title = '하누리 봉사회 - 환영합니다';
const description =
  '모든 봉사를 필요로 하는 곳에 따뜻한 손길을 내밀어 적극적인 봉사활동을 하기 위해 최선을 다하고 있습니다';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://hanuri.or.kr',
    title,
    siteName: '하누리 봉사회',
    images: ['https://hanuri.or.kr/main.png'],
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="cba244e2a17e3202fdefcc52e4a367ba48a526a0"
        />
      </head>
      <body className={(clsx('font-sans'), roboto.className)}>
        <SessionWrapper>
          <QueryWrapper>
            <Header />
            {children}
            <Footer />
            <ToastWrapper />
          </QueryWrapper>
        </SessionWrapper>
      </body>
      <Script
        async
        src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
        strategy="beforeInteractive"
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BKE2LHPQG3"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-BKE2LHPQG3');
        `}
      </Script>
    </html>
  );
}
