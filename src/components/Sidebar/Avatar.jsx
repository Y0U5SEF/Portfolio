export default function Avatar({ name }) {
  return (
    <div className="avatar__placeholder" aria-label={`Portrait of ${name}`}>
      {name.charAt(0)}
    </div>
  );
}
