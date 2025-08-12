import Head from 'next/head';

const FontFaces = () => {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <Head>
      <style>{`
        @font-face {
          font-family: 'IBMPlexMono';
          src: url('${prefix}/fonts/IBMPlexMono-Regular.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'IBMPlexMono';
          src: url('${prefix}/fonts/IBMPlexMono-SemiBold.ttf') format('truetype');
          font-weight: 600;
          font-style: normal;
        }
        @font-face {
          font-family: 'IBMPlexMono';
          src: url('${prefix}/fonts/IBMPlexMono-Bold.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
        }
      `}</style>
    </Head>
  );
};

export default FontFaces;
