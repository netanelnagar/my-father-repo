'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import { Review } from '@/types';
import { fakeReviews } from '@/data/fakeReviews';

export default function HomePage() {
  const [reviews, setReviews] = useState<Review[]>(fakeReviews);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      if (data.success) {
        setReviews(data.reviews || []);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };
  // TODO: replace all texts and images
  return (
     <div className="relative flex h-auto min-h-screen w-full flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-4 text-[#111618]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_535)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_535"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#111618] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">פתרונות מעליות</h2>
          </div>
          <div className="flex flex-1 justify-end gap-3 sm:gap-8">
            <div className="hidden md:flex items-center gap-6 lg:gap-9">
              <a className="text-[#111618] text-sm font-medium leading-normal" href="#">בית</a>
              <a className="text-[#111618] text-sm font-medium leading-normal" href="#">מעלית אליט</a>
              <a className="text-[#111618] text-sm font-medium leading-normal" href="#">מעלית פנאומטית</a>
              <a className="text-[#111618] text-sm font-medium leading-normal" href="#">המלצות לקוחות</a>
              <a className="text-[#111618] text-sm font-medium leading-normal" href="#">צרו קשר</a>
            </div>
            <div className="flex gap-2">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 sm:h-10 px-3 sm:px-4 bg-[#f0f3f4] text-[#111618] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">התקשרו אלינו</span>
              </button>
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 sm:h-10 bg-[#f0f3f4] text-[#111618] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2"
              >
                <div className="text-[#111618]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </header>

        <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px]">
            <div>
              <div className="sm:p-4">
                <div
                  className="flex min-h-[420px] sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 rounded-lg items-center justify-center p-4"
                  style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzCoyNW5jCa2JplnNbqCJCWhhSxK6Pmmkoo-CTAb5j-xn7uXCCWk9kjKYMM-Y_uBNht6VG0qKmsVzpOTq8Ee5gxQeSokmBIozrX8A5-DCdx9ejwCbq5-MYX7K-NLSBq4l6QPWLnZuQyP5fAuzSxfMGfcVd7eTZkSpffprCyRGshVtZqGALv5oDJIvWLsAzHzbihyhokN7cTGbQBtkGWqMLGt5erWI4BiA1FrKMNss8n__WG0WRxdhgxD0aBQQgWk64PrCcdwAH4q9f")' }}
                >
                  <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight tracking-[-0.02em] text-center">
                    בטיחות ואיכות חיים, בבית שלך
                  </h1>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#13a4ec] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em]"
                  >
                    <span className="truncate">צרו קשר לייעוץ חינם</span>
                  </button>
                </div>
              </div>
            </div>

            <h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              פתרונות המעלית שלנו
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs7OcUWOmuLtVEL-xYHPe1F3A2RaW3zqwQGVXSnvP0kQKYVu4SkOTxKPRz7XmhY3mmmfH4OC-1K61fDZ0nV-ZHTBatp9UTUHnVBXeY-pXN8R5orpQik9pm9fIM28Sg5sW9uDAv1fvEHeT2au3blyKInuZTw2cQuRGAv_8pfFcpP7iZD6hNw9Rd9Cvxoibd2khPTfMmIufeiuu4vZlurvhGoUKY8y_eJ6s2I_raje9OZlNGD9XF7a9Nr1KLcMElrMR7SgsUJ-vqRXrA")' }}
                ></div>
                <div>
                  <p className="text-[#111618] text-base font-medium leading-normal">מעלית אליט</p>
                  <p className="text-[#617c89] text-sm font-normal leading-normal">נסיעה חלקה ושקטה עם אפשרויות התאמה אישית לעיצוב הבית שלכם.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbhxcuc_09OvifxZsdUymlHhiTm_mjZyjNt453UOrkoEefZOW10gOUQLaaH0VL120q_AQ8Mer4JykBtddDjSOmKg-wbuRTiCDNZQW0tz0z7PRFw-Zu-Uw9ReaXnJ_bvnmlfRU03xyhL5Ow1La4kym9FmG1xlEeZ5QS3hc-VRAQA1vxj_QuO59a05PUlPF3q3UKoVMomHn2Hkh5hyRmpYFn8OX1dmKoDQWYunvp-5ed1onJ0pSOiPcT3zmeu4UwRaZOKXjjqA-vvg4Y")' }}
                ></div>
                <div>
                  <p className="text-[#111618] text-base font-medium leading-normal">מעלית פנאומטית</p>
                  <p className="text-[#617c89] text-sm font-normal leading-normal">פתרון קומפקטי וחסכוני במקום המבוסס על לחץ אוויר — אידיאלי לחללים קטנים.</p>
                </div>
              </div>
            </div>

            <h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              הערכים שלנו
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4">
              <div className="flex gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 items-center">
                <div className="text-[#111618]">
                  {/* Shield icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                  </svg>
                </div>
                <h2 className="text-[#111618] text-base font-bold leading-tight">אמינות</h2>
              </div>
              <div className="flex gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 items-center">
                <div className="text-[#111618]">
                  {/* Users icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                  </svg>
                </div>
                <h2 className="text-[#111618] text-base font-bold leading-tight">שירות אישי</h2>
              </div>
              <div className="flex gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 items-center">
                <div className="text-[#111618]">
                  {/* Clock icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                  </svg>
                </div>
                <h2 className="text-[#111618] text-base font-bold leading-tight">התקנה מהירה</h2>
              </div>
            </div>

            <h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              המלצות לקוחות
            </h2>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
              <div className="flex flex-col gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgTDoqAuxOnxR2lOoCXmjTWeDWQbOMMclChMz5t8wiNIYLDSKKJ-GeXQsxfLriV09eboFcxrGQDx-M3sWlEAxJrIn5R0Vx5Bzya3AJ8jz1Q_IYnxeNqweWOyp2wuG3stui5kuuwukCyNqLzMDUBE5z6p-y9RkXDTENb9s80mMChuVPw8wTUMTXQjL-4mYnP4s7A6jkycP9Ba5sEeEA2ujzdHRbd8Gm_vdIR24ngepEh9XjhVyizb-GhqcxWDBh4E43-Ey3mop8-ki9")' }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#111618] text-base font-medium leading-normal">סופיה קרטר</p>
                    <p className="text-[#617c89] text-sm font-normal leading-normal">לפני חודשיים</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-[#111618]" data-icon="Star" data-size="20px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-[#111618] text-base font-normal leading-normal">
                  המעלית שדרגה לנו את איכות החיים. ההתקנה הייתה מהירה והצוות מקצועי וסבלני. מומלץ בחום!
                </p>
              </div>
              <div className="flex flex-col gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkKvn0pJDL-TrsaJC43Y3hlFCGrfisHmR0gb08ogNnNphFLzYocM7zrM-9EIWruCmknfgqM5a6vpxbk5-C0Y99Rra4OGRUpaD1qGmaurRntMwmziK9A0UZsv4XHjK9-zc380K2Frggrez7njdzK7h2qzYDVyf-j2Fvvd-jCJfkSHqwnQ9nBSeJsr7ud6dUxPBhYdkvd50UZHdmjf2XcxOHl5Z6PJFvcyheA2-4tsGPizrbXkzllEL33_7hscjFGyEgo-pGUwGaEZZR")' }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#111618] text-base font-medium leading-normal">אית'ן בנט</p>
                    <p className="text-[#617c89] text-sm font-normal leading-normal">לפני ארבעה חודשים</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-[#111618]" data-icon="Star" data-size="20px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-[#111618] text-base font-normal leading-normal">
                  פתרון מצוין לחלל קטן. שקט, חסכוני במקום ונראה נהדר. ממליץ מאוד!
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col justify-end gap-6 px-4 py-10 sm:gap-8 sm:px-10 sm:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-[#111618] text-2xl sm:text-4xl font-bold leading-tight tracking-[-0.02em] max-w-[720px] mx-auto">
                    מוכנים לשדרג את הבית שלכם?
                  </h1>
                </div>
                <div className="flex justify-center">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#13a4ec] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] w-full sm:w-auto"
                  >
                    <span className="truncate">צרו קשר לייעוץ חינם</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-center">
          <div className="flex w-full max-w-[960px] flex-col">
            <footer className="flex flex-col gap-6 px-4 sm:px-5 py-8 sm:py-10 text-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap items-center justify-center sm:justify-around">
                <a className="text-[#617c89] text-base leading-normal min-w-40" href="#">תנאי שימוש</a>
                <a className="text-[#617c89] text-base leading-normal min-w-40" href="#">הצהרת נגישות</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#617c89]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#617c89]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#617c89]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#617c89] text-sm sm:text-base leading-normal">© 2024 פתרונות מעליות. כל הזכויות שמורות.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}