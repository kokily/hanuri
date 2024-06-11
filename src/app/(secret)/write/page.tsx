'use client';

import { Write } from '@/components/write/Write';
import { useAddHanuri } from '@/helpers/client/hooks/useAddHanuri';
import { useTags } from '@/helpers/client/hooks/useTags';

export default function WritePage() {
  const props = useAddHanuri({});
  const tagProps = useTags({
    tags: props.tags,
    onChangeTags: props.onChangeTags,
  });

  return <Write writeProps={props} tagProps={tagProps} />;
}
