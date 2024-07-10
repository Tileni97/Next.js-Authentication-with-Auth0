import { getSession } from "@auth0/nextjs-auth0";

const ProfileServer = ({ user }) => {
  if (!user) {
    return <div>No user logged in</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context.req, context.res);
  const user = session?.user || null;

  return {
    props: {
      user,
    },
  };
};

export default ProfileServer;
