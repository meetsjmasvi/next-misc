export default function EnvironmentVariables() {
  return (
    <>
      <h2>How to Store Environment Variables</h2>

      <p>
        This page is to demo how to store, secure and display environment
        variables in next.js <br />
        <br />
        create a file with names .env .env.development .env.production
        .env.local this always override the default sets
        <br />
        <br />
      </p>
      <p>
        Note: <br />
        Environment variable prefixed with NEXT_PUBLIC_* variables alone can be
        displayed on page.
        <br />
        <br />
        This is the value of DB_USERNAME ____
        <small style={{ color: "red" }}>
          Wont be displayed due to nextjs validation
        </small>
        <br />
        This is the value of ANALYTICS_ID:
        {process.env.NEXT_PUBLIC_ANAYLYTICS_ID}
      </p>
    </>
  );
}
