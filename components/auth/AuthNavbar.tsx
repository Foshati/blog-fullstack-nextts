'use client';
import { Fingerprint } from 'lucide-react';
import { useState, useRef } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function AuthNavbar() {
  const [activeTab, setActiveTab] = useState(1);
  const modalRef = useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <main>
      <div className='btn btn-ghost btn-circle' onClick={(): void => modalRef.current?.showModal()}>
        <Fingerprint />
      </div>
      <dialog id='my_modal_3' className='modal' ref={modalRef}>
        <div className='h-auto modal-box'>
          <form method='dialog'>
            <button className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2'>✕</button>
          </form>

          <div role='tablist' className='flex justify-center tabs tabs-lifted'>
            <label className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}>
              <input
                type='radio'
                name='my_tabs_2'
                role='tab'
                aria-label='Tab 1'
                checked={activeTab === 1}
                onChange={() => setActiveTab(1)}
                className='sr-only'
              />
              <span>Sign in</span>
            </label>
            <label className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}>
              <input
                type='radio'
                name='my_tabs_2'
                role='tab'
                aria-label='Tab 2'
                checked={activeTab === 2}
                onChange={() => setActiveTab(2)}
                className='sr-only'
              />
              <span>Sign up</span>
            </label>
          </div>

          <div>
            <div>{activeTab === 1 ? <SignIn onSuccess={closeModal} /> : <SignUp onSuccess={closeModal} />}</div>
          </div>
        </div>
      </dialog>
    </main>
  );
}
