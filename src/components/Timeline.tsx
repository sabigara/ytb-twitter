import Tweet from "./Tweet";

export default function Timeline() {
  return (
    <section>
      {Array(30)
        .fill(0)
        .map((_, i) => (
          <Tweet key={i} />
        ))}
    </section>
  );
}
