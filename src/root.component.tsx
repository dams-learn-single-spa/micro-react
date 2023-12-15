export default function Root(props) {
  return (
    <section>
      {props.name} is mounted at {new Date().toString()}!
    </section>
  );
}
