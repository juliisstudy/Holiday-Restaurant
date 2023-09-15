export default function Interaction() {
  return <Toolbar onPlay={() => alert("start")} onStop={() => alert("stop")} />;
}

function Toolbar({ onStart, onStop }) {
  return (
    <div>
      <Button onClick={onStart} btnName="Start"></Button>
      <Button onClick={onStop} btnName="Stop"></Button>
    </div>
  );
}

function Button({ onClick, btnName }) {
  return <button onClick={onClick}> {btnName}</button>;
}
