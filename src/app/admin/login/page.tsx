'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin/dashboard');
      } else {
        setError(data.error || 'שגיאה בהתחברות');
      }
    } catch {
      setError('שגיאה בחיבור לשרת');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-3 text-[#111618]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#111618] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">Lift Co Admin</h2>
          </div>
          <div className="flex flex-1 justify-end">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 hidden sm:block"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2gAuaZA_og_hvlnCSNoqUQ32_vRYICgvjTv0Ou44_LOUO-eBKJbldjMThgeQsGaBuCJN2FAdc5I-_3VE2TMMgz2qLRIBPaaKH0DwE3LJhbEfk9l3cJoYNoDg3wbNit1fwCDD1N6wkklJmIXjDS1emy4uSCvny8QNsWELG-j6uHzutisLtARGFZYMJ4siIh2Jb9_wjVxXRJVeFZkxp9HQP-XU_vzlwS8xiEL6kWa8PtIxd4KHYHVd9auF5DFhns8amwJSj82kMZORY")',
              }}
            />
          </div>
        </header>

        <main className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-6">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[480px] mx-auto bg-white"
            noValidate
          >
            <h2 className="text-[#111618] text-2xl sm:text-[28px] font-bold leading-tight text-center pb-2">Admin Login</h2>
            {error ? (
              <p className="text-red-600 text-sm text-center px-4 py-2" role="alert">
                {error}
              </p>
            ) : null}

            <div className="flex flex-col gap-1 px-0 sm:px-1 py-3">
              <label htmlFor="email" className="text-[#111618] text-sm font-medium leading-normal">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="username"
                style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}
                required
                placeholder="you@company.com"
                className="form-input w-full rounded-lg text-[#111618] border border-[#dbe2e6] bg-white h-12 px-4 placeholder:text-[#617c89] focus:outline-none focus:ring-2 focus:ring-[#13a4ec]/30 text-left placeholder:text-left"
                value={credentials.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1 px-0 sm:px-1 py-3">
              <label htmlFor="password" className="text-[#111618] text-sm font-medium leading-normal">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="form-input w-full rounded-lg text-[#111618] border border-[#dbe2e6] bg-white h-12 px-4 placeholder:text-[#617c89] focus:outline-none focus:ring-2 focus:ring-[#13a4ec]/30 text-left placeholder:text-left"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex px-0 sm:px-1 py-4 justify-center">
              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="flex w-full sm:w-auto min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#13a4ec] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">{loading ? 'Logging in…' : 'Login'}</span>
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}