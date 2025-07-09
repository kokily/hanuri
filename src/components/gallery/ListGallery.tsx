import clsx from 'clsx';
import { Gallery } from './Gallery';

export function ListGallery({
  hanuries,
  onReadHanuri,
  setTarget,
  isLoading,
  isError,
}: ListGalleryType) {
  if (isLoading) {
    return (
      <section
        className={clsx(
          'relative w-full px-4 py-16 sm:py-24 sm:px-6 lg:px-8',
          'bg-gradient-to-b from-purple-25 to-white',
        )}
      >
        <div className="max-w-2xl mx-auto lg:max-w-screen-xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">로딩 중...</p>
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section
        className={clsx(
          'relative w-full px-4 py-16 sm:py-24 sm:px-6 lg:px-8',
          'bg-gradient-to-b from-purple-25 to-white',
        )}
      >
        <div className="max-w-2xl mx-auto lg:max-w-screen-xl">
          <div className="text-center">
            <p className="text-red-600">데이터를 불러오는 중 오류가 발생했습니다.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={clsx(
        'relative w-full px-4 py-16 sm:py-24 sm:px-6 lg:px-8',
        'bg-gradient-to-b from-purple-25 to-white',
      )}
    >
      <div className="max-w-2xl mx-auto lg:max-w-screen-xl">
        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8 sm:mt-16">
          {hanuries && hanuries.length > 0
            ? hanuries.map((hanuri, index) => (
                <Gallery
                  key={`${hanuri.title}-${hanuri.id}`}
                  hanuri={hanuri}
                  onReadHanuri={onReadHanuri}
                  index={index}
                />
              ))
            : (
              <div className="col-span-2 text-center py-8">
                <p className="text-gray-600">해당 연도의 게시글이 없습니다.</p>
              </div>
            )}
        </div>

        <div ref={setTarget} />
      </div>
    </section>
  );
}
