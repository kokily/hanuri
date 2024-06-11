import { HanuriBody } from './HanuriBody';
import { HanuriHeader } from './HanuriHeader';
import { HanuriThumbnail } from './HanuriThumbnail';

interface Props {
  hanuri: HanuriType;
}

export function Hanuri({ hanuri }: Props) {
  return (
    <section className="px-4 pt-10 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-white md:pt-32">
      {hanuri ? (
        <>
          <HanuriHeader
            id={hanuri.id}
            title={hanuri.title}
            tags={hanuri.tags}
            date={hanuri.createdAt}
          />
          <HanuriThumbnail thumbnail={hanuri.thumbnail} />
          <HanuriBody body={hanuri.body} />
        </>
      ) : null}
    </section>
  );
}
