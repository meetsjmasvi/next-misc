export default function Settings() {
  const enablePreviewMode = async () => {
    await fetch("/api/preview?redirect=news");
  };

  const disablePreviewMode = async () => {
    await fetch("/api/disable-preview");
  };

  return (
    <>
      <h3>Settings Page</h3>
      <div>
        <button onClick={enablePreviewMode}>Enable Preview Mode</button>
        <button onClick={disablePreviewMode}>Disable Preview Mode</button>
      </div>
    </>
  );
}
