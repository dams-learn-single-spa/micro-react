import './root.component.css'
export default function Root(props) {
  return (
    <div>
      <main>
        <section>{props.name} is mounted!</section>
      </main>
      <footer>
        <p>created by { props.author }</p>      
      </footer>

    </div>
  );
}
