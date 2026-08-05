export default function Copyright({ name }) {
  const year = new Date().getFullYear();
  return (
    <p className="copyright">
      &copy; {year} {name}. All rights reserved.
    </p>
  );
}
