export default function Header({ headerText }) {
  return (
    <div>
      <h1>{headerText}</h1>
      <hr className="headerLine" />
    </div>
  );
}
