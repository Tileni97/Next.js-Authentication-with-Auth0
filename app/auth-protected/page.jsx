import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import React from "react";

const AuthProtected = ({ user }) => {
  return (
    <div className="content-layout px-44">
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const session = await getSession(context.req, context.res);
    const user = session?.user || null;

    return {
      props: {
        user,
      },
    };
  },
});

export default AuthProtected;
