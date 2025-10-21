'use client';

import {
  PiHouse, PiSpeakerHigh, PiShieldCheck, PiShield, PiPhone, PiRuler, PiWrench, PiGraduationCap,
  PiCaretDownBold, 
  PiPlayFill
} from 'react-icons/pi';


export default function PneumaticCranePage() {
  const specifications = {
    'קיבולת הרמה': '0.5-10 טון',
    'גובה הרמה': 'עד 20 מטר',
    'רוחב פעולה': '360 מעלות',
    'לחץ אוויר': '6-8 בר',
    'מהירות הרמה': '1-12 מ/דקה',
    'מהירות סיבוב': '0.5-3 סל"ד',
    'צריכת אוויר': '50-200 ל/דקה',
    'תקן בטיחות': 'ISO 9001:2015'
  };

  const features = [
    'מערכת בקרה פנאומטית מדויקת',
    'תפעול שקט וללא זעזועים',
    'עמידות בסביבות מאובקות ולחות',
    'מערכת בלימה אוטומטית',
    'חיישני לחץ ומיקום מתקדמים',
    'שליטה מדויקת במהירות ובכוח',
    'תחזוקה מינימלית נדרשת',
    'אפשרות לעבודה בחללים צרים'
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[960px]">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111618] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight">מעלית פנאומטית</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal">
              מעלית פנאומטית היא פתרון חדשני לבתים עם מגבלת מקום. היא מציעה נסיעה חלקה ושקטה, עם מבנה עצמאי שאינו דורש בור או חדר מכונות –
              אידיאלית לשדרוג בתים קיימים ולבנייה חדשה.
            </p>
          </div>
        </div>

        <div className="flex w-full grow bg-white p-4">
          <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-3 sm:aspect-[3/2] rounded-lg overflow-hidden">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-56 sm:h-auto sm:col-span-2 sm:row-span-2"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3GrXOj9rVP6qLbK4TZE2NdKQvXeUzgmH9Yh9bg7QznyKyeNF54weThkfBxs0-f8o5vWy9slBPLIFwpqNw8LfbUEGOyV9ZT0eooLtCipfXoEnlhP-J0CKFtpiBQDnmrX2LOI6dVc_QefgffW1cQ_nHiRVLPIwVgRnONbJUxZ5oP3IGEkwWYlofDxM6fSv3sJp_7lS80aKMfyD5GH4MuSqsz6hmaCXUDUD8mKXop7oJsO3NzA15YlZpoSsMeSJM7eQkex4zQbRVtwMh")',
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-40 sm:h-auto sm:col-span-1"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqtYV2HPpNFK9OnLkl0Tlsl2sSwM2NfmeV0Qd8yZehoJq7ZDKnFK_LvIIEFPkP1r06a7euBVTl5T5s5Sb-mpYZeRXChAHnHotZtlMZ3rCDdzIQ-_d5d97fNWJd7ut9xjP46a2mu_zJF9xVh2rj2dnAvxmgn74M5PXsBGBOF1984vblaOHRZtJErLWWDCMf7NHDk9kNXgs6WYhXHvtIBEGCYRKMHCd4y5eAaldg2MPf1DrxT7K5EE81kGoK4WW6Hmerd1jDjOQZfA_g")',
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-40 sm:h-auto sm:col-span-1"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgk3idrgqjgrRk8Ego8FIPHrBC_6pVDHfMZwqsveYo__qQJZ9Ils8bhYryx9G35ce-171q0j7pWUifzUajOtqQC2iWEhQ82QouE3nFMFezrXK4FwmbJEVUuJbG7obMmx0ENAHm0S72DNcGecZ0Z_BorY1CLFEDlehM4pFg6BECuHO6ANtdPRn3hVt4FeEwlGl1vT-t54TQw7V4HATxuvgqchzoHnLGHyn57XK-VTNhAT2xyidsStnoSUujItiKYxbH6kZ88qAZb0bo")',
              }}
            ></div>
          </div>
        </div>

        <div className="p-4">
          <div
            className="relative flex items-center justify-center bg-[#111618] bg-cover bg-center aspect-video rounded-lg p-4"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOI1iJr23pkHi78UFZqrYivv9qwhGsKHt9xcqONJk8deZyOkdMdHRd2ev83t8yXgN4pv8qPpg7N8Uj_CqXRPjeOWvf5HZ_9RoDQ2znOXi2WGBLCMnruv7D4XSv7fakGfsIjZ9xerS5fNpNA9iigl2Lyf7s9k0J3F2v8KY9BWyT4ibVp9bKxSHhBe4nddpO08c4wtAx2zrRVystaX9LlvT33Lu3gyiNhTrvQ3KZGG2y9078cWH3oVw_z7Yq4eGeyKE3X4-MQzMo5Nev")',
            }}
          >
            <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/40 text-white" aria-label="נגן וידאו">
              <PiPlayFill size={24} />
            </button>
          </div>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          מפרט טכני
        </h2>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">קיבולת הרמה</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">250 ק״ג</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">מידות</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">קוטר חיצוני: 1000 מ״מ, קוטר פנימי: 850 מ״מ</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">סוג הפעלה</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">פנאומטי (מונע אוויר)</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">חומרים</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">אלומיניום ופוליקרבונט</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">מהירות נסיעה</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">0.15 מ׳/שנייה</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">מקור מתח</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">220V, 50Hz</p>
          </div>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          יתרונות עיקריים
        </h2>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#111618] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12">
            <PiHouse size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clמפ-1">חיסכון במקום</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">
              מבנה עצמאי ללא צורך בבור או חדר מכונות – התקנה פשוטה ועלויות מופחתות.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#111618] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12">
            <PiSpeakerHigh size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">פעולה שקטה וחלקה</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">מבטיחה חוויית שימוש נעימה ונוחה בבית.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#111618] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12">
            <PiShieldCheck size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">עמידות ואמינות</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal">חומרים איכותיים לביצועים לאורך זמן.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#111618] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12">
            <PiShield size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">בטיחות מתקדמת</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">מאפייני בטיחות להגנה מקסימלית למשתמש.</p>
          </div>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          תהליך רכישה וייעוץ
        </h2>
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          <div className="flex flex-col items-center gap-1 pt-3">
            <div className="text-[#111618]">
              <PiPhone size={24} />
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">צרו קשר</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">דברו איתנו לתיאום והתאמת פתרון מדויק לצרכים שלכם.</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]">
              <PiRuler size={24} />
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">התאמה אישית</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">נבחן את המבנה ונדגיש את הפתרון המתאים ביותר.</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]">
              <PiWrench size={24} />
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">התקנה</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">התקנה מקצועית ע״י צוות טכנאים מוסמך.</p>
          </div>

          <div className="flex flex-col items-center gap-1 pb-3">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]">
              <PiGraduationCap size={24} />
            </div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">הדרכה</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">הדרכה מלאה על תפעול ובטיחות המעלית.</p>
          </div>
        </div>

        <div className="flex px-4 py-3 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#13a4ec] text-white text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">תיאום ייעוץ והדגמה בחינם</span>
          </button>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          שאלות נפוצות
        </h2>
        <div className="flex flex-col p-4 gap-3">
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">כמה עולה מעלית פנאומטית?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <PiCaretDownBold size={20} />
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              המחיר משתנה לפי מספר הקומות, התאמות אישיות ומורכבות ההתקנה. צרו קשר לקבלת הצעת מחיר מותאמת.
            </p>
          </details>

          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">האם קיימות אפשרויות מימון?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <PiCaretDownBold size={20} />
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              כן. נוכל להציע פתרונות מימון בהתאם לצורך ולתנאים המותאמים לכל לקוח.
            </p>
          </details>

          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">כמה זמן לוקחת ההתקנה?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <PiCaretDownBold size={20} />
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              לרוב מספר ימים עד שבועות, בהתאם להכנות ולמאפייני המבנה.
            </p>
          </details>

          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">מה האחריות על המעלית?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <PiCaretDownBold size={20} />
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              אחריות יצרן מקיפה בהתאם לדגם ולהתקנה. נשמח לפרט בפגישה.
            </p>
          </details>

          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">איזו תחזוקה נדרשת?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <PiCaretDownBold size={20} />
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              תחזוקה בסיסית ובדיקות תקופתיות לשמירה על בטיחות וביצועים מיטביים.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}