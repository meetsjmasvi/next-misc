import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();

  return (
    <>
      <h3>This is the page from NEW POST ID {router.query.postid}</h3>;
      <p>
        This is a demo page to explain how to configure re-direction in Next.js
        application. The configuration will be available under the page
        next.config.js file.
      </p>
    </>
  );
}
