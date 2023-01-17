export default function News({ data }) {
  return (
    <>
      <h2>News Page</h2>
      <div>{data}</div>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      data: context.preview ? context.previewData.data : "List of CMS Articles",
    },
  };
}
