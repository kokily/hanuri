import type { Hanuri as HanuriModel } from "@prisma/client";
import { HanuriHeader } from "./hanuri-header";
import { HanuriThumbnail } from "./hanuri-thumbnail";
import { HanuriBody } from "./hanuri-body";

interface HanuriProps {
  hanuri: HanuriModel;
  canEdit: boolean;
}

export function Hanuri({ hanuri, canEdit }: HanuriProps) {
  return (
    <section className="from-purple-25 bg-gradient-to-b to-white px-4 pt-10 sm:px-6 md:pt-32 lg:px-8">
      <HanuriHeader
        id={hanuri.id}
        title={hanuri.title}
        tags={hanuri.tags}
        date={hanuri.date}
        createdAt={hanuri.createdAt}
        canEdit={canEdit}
      />

      <HanuriThumbnail thumbnail={hanuri.thumbnail} title={hanuri.title} />

      <HanuriBody body={hanuri.body} title={hanuri.title} />
    </section>
  );
}
