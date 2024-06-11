import lightYellowBlob from '/public/svg/blob-light-yellow.svg';
import lightPurpleBlob from '/public/svg/blob-light-purple.svg';
import lightRoseBlob from '/public/svg/blob-light-rose.svg';
import chairman from '/public/chairman.jpg';
import general from '/public/general.jpg';
import { AboutHeader } from './section/AboutHeader';
import { AboutFeature } from './section/AboutFeature';

const bgBlobs = [lightYellowBlob, lightPurpleBlob, lightRoseBlob];

export function About() {
  return (
    <section className="px-4 pt-10 overflow-hidden bg-purple-25 pb-28 sm:pb-36 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <AboutHeader />

        <AboutFeature
          sniffling="odd"
          tags={'하누리 봉사회장'}
          title="한태희"
          body="어려운 여건 속에서 살아가는 어려운 이웃에게 꿈과 희망을 잃지 않도록 도와주고
          지역 공동체를 이루어 함께 행복하게 살 수 있는 세상을 꿈꾸며 사랑과 희망을 주는 봉사를 하겠습니다."
          image={chairman}
          background={bgBlobs[0]}
        />
        <AboutFeature
          sniffling="even"
          tags={'하누리 사무국장'}
          title="정경숙"
          body="자원봉사는 나의 열정과 시간, 재능을 어려운 삶을 살고 있는 이웃을 위해 내어 줌으로써
            사람들과 어울려 살아가며 나눔의 마음을 배울 수 있는 유일한 행위, 소양이라 생각합니다."
          image={general}
          background={bgBlobs[1]}
        />
      </div>
    </section>
  );
}
