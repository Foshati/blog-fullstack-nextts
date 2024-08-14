import { LayoutDashboard, Menu } from 'lucide-react';
import NavbarList from './NavbarList';
import UserAvatar from './user-avatar/user-avatar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/libs/next-auth';
import MusicIco from '../../ui/PlayMusic/playMusic';
import Logo from './Logo';
import Link from 'next/link';

async function Header() {
  const session = await getServerSession(authOptions);
  // console.log('Session:', session);
  // console.log('User Role:', session?.user?.userRole);

  return (
    <header className='sticky top-0 left-0 z-50 w-full mx-auto transition-all bg-black bg-opacity-50 isSticky'>
      <div className='bg-black bg-opacity-50 navbar'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden btn-circle'>
              <Menu />
            </div>
            <div className='ml-4'>
              <NavbarList />
            </div>
          </div>
          {/* Logo */}
          <div className='cursor-not-allowed pointer-events-none user-select-none '>
            <Logo />
          </div>
        </div>
        <div className='hidden navbar-center lg:flex'>
          <NavbarList />
        </div>
        <div className='flex gap-4 navbar-end'>
          {session?.user.userRole === 'ADMIN' && (
            <Link className='btn btn-ghost btn-circle' href='/admin'>
              <LayoutDashboard />
            </Link>
          )}

          {/* MusicIco */}
          <div className='lg:tooltip lg:tooltip-bottom' data-tip='Playing music'>
            <button className='btn btn-ghost btn-circle'>
              <MusicIco />
            </button>
          </div>
          {/* AuthNavbar */}
          <div>
            <UserAvatar session={session} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
