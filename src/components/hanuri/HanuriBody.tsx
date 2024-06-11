interface Props {
  body: string;
}

export function HanuriBody(props: Props) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mx-auto prose prose-lg mt-14 sm:mt-16 lg:mt-24 sm:prose-xl">
        <div
          className="max-2"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
      </div>
    </div>
  );
}
