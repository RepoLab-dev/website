export function EmailSentence(props: { text: string; email: string }) {
  const bits = props.text.split(props.email);
  return (
    <>
      {bits.map((part, i) =>
        i < bits.length - 1 ? (
          <>
            {part}
            <a href={`mailto:${props.email}`}>{props.email}</a>
          </>
        ) : (
          part
        ),
      )}
    </>
  );
}
