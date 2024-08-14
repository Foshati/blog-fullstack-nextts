import { Session } from 'next-auth';
import prismadb from '@/libs/prismadb';
import User from './user';
import AuthNavbar from '@/components/auth/AuthNavbar';

type UserAvatarProps = {
  session: Session | null;
};

const UserAvatar = async ({ session }: UserAvatarProps) => {
  if (!session?.user.userId)
    return (
      <div>
        <AuthNavbar />
      </div>
    );

  const user = await prismadb.user.findUnique({
    where: {
      id: session.user.userId,
    },
  });

  return <User name={user?.name as string} />;
};

export default UserAvatar;
