'use client';

import { VideoPlayer } from '@/components/VideoPlayer';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  PiCaretDownBold,
  PiPhone,
  PiRuler,
  PiWrench,
  PiGraduationCap,
  PiShieldCheck,
  PiSpeakerHigh,
} from 'react-icons/pi';

export default function CeilingCranePage() {
  const specifications = {
    'קיבולת הרמה': '1-50 טון',
    'גובה הרמה': 'עד 30 מטר',
    'רוחב המנוף': '5-35 מטר',
    'מהירות הרמה': '0.8-8 מ/דקה',
    'מהירות נסיעה': '2-20 מ/דקה',
    'מקור חשמל': '380V/50Hz',
    'דירוג הגנה': 'IP54',
    'תקן בטיחות': 'ISO 9001:2015',
  };

  const features = [
    'מערכת בקרה מתקדמת עם פאנל דיגיטלי',
    'מנגנון בלימה כפול לבטיחות מירבית',
    'חיישני עומס ומיקום מדויקים',
    'מערכת התרעה קולית וויזואלית',
    'עמידות בתנאי מזג אוויר קיצוניים',
    'תחזוקה נוחה עם גישה קלה לרכיבים',
    'ציוד בטיחות מתקדם לעובדים',
    'אפשרות לשליטה מרחוק',
  ];

  // TODO: replace images

  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="flex flex-col w-full max-w-[960px]">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111618] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight">מנוף תקרה</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal">
              מנוף תקרה קבוע המיועד לחללים קטנים ולהרמות תכופות, ומספק עבודה חלקה ובטוחה בסביבת הבית או העסק.
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="w-full grid gap-2 sm:gap-2 sm:grid-cols-3 sm:aspect-[3/2] rounded-lg overflow-hidden">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-56 sm:h-auto sm:col-span-2 sm:row-span-2"
              style={{
                backgroundImage: `url(${"/ceiling-1.png"})`,
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-40 sm:h-auto sm:col-span-1"
              style={{
                backgroundImage: `url(${"/ceiling-2.png"})`,
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-40 sm:h-auto sm:col-span-1"
              style={{
                backgroundImage: `url(${"/ceiling-3.png"})`,
              }}
            ></div>
          </div>
        </div>

        <div className="p-4">
          <VideoPlayer src="/1761047054525.mov" poster="/poster-ceiling.png" />
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          מפרט טכני
        </h2>
        {/* TODO: use icons like pneumatic page */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pr-0 sm:pr-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#617c89] text-sm font-normal leading-normal">קיבולת הרמה</p>
              <p className="text-[#111618] text-sm font-normal leading-normal">150 ק״ג</p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pl-0 sm:pl-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#617c89] text-sm font-normal leading-normal">מידות</p>
              <p className="text-[#111618] text-sm font-normal leading-normal">מותאם אישית לגובה התקרה וגודל החדר</p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pl-0 sm:pl-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-[#617c89] text-sm font-normal leading-normal">סוג הפעלה</p>
              <p className="text-[#111618] text-sm font-normal leading-normal">חשמלית עם שלט רחוק</p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pl-0 sm:pl-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-[#617c89] text-sm font-normal leading-normal">חומרים</p>
              <p className="text-[#111618] text-sm font-normal leading-normal">אלומיניום ופלדה</p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pl-0 sm:pl-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#617c89] text-sm font-normal leading-normal">בקרה</p>
              <p className="text-[#111618] text-sm font-normal leading-normal">שלט רחוק אלחוטי</p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pl-0 sm:pl-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-[#617c89] text-sm font-normal leading-normal">מאפייני בטיחות</p>
              <p className="text-[#111618] text-sm font-normal leading-normal">כפתור עצירת חירום, הגנת עומס יתר</p>
            </motion.div>
          </div>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          יתרונות מרכזיים
        </h2>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#13a4ec] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12">
            <PiShieldCheck size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">משפר עצמאות וניידות בבית</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">
              מאפשר תנועה עצמאית ובטוחה בין קומות ללא מאמץ פיזי.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#13a4ec] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12">
            <PiShieldCheck size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">מפחית סיכון לנפילות ופגיעות</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">
              מערכת בטיחות מתקדמת למניעת תאונות ומתן שקט נפשי.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#13a4ec] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12">
            <PiRuler size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">התאמה אישית למידות החדר</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">
              ניתן להתאמה לגובה תקרה וגודל חדר שונים ללא צורך בשינויים מבניים.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#13a4ec] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12">
            <PiSpeakerHigh size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">פעולה שקטה וחלקה</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">
              מנוע שקט ותנועה חלקה ללא רעש או זעזועים.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#13a4ec] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12">
            <PiWrench size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">התקנה מקצועית והדרכה</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">
              התקנה על ידי צוות מקצועי כולל הדרכה מלאה על השימוש.
            </p>
          </div>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          תהליך רכישה וייעוץ
        </h2>
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          <div className="flex flex-col items-center gap-1 pt-3">
            <div className="text-[#13a4ec]">
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
            <div className="text-[#13a4ec]">
              <PiRuler size={24} />
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">התאמה אישית</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">הצוות שלנו יבחן את המקום ויגבש תוכנית התאמה אישית.</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#13a4ec]">
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
            <div className="text-[#13a4ec]">
              <PiGraduationCap size={24} />
            </div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">הדרכה</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">הדרכה מלאה על תפעול ובטיחות המערכת.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex px-4 py-3 mt-5 justify-center"
        >
          <Link
            href="/contact-us"
            className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#13a4ec] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">תיאום ייעוץ והדגמה בחינם</span>
          </Link>
        </motion.div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          שאלות נפוצות
        </h2>
        <div className="flex flex-col p-4 gap-3">
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">כמה עולה המנוף?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <PiCaretDownBold size={20} />
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              המחיר משתנה לפי התאמות אישיות ומורכבות ההתקנה. צרו קשר לקבלת הצעת מחיר מותאמת.
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
              <p className="text-[#111618] text-sm font-medium leading-normal">מה האחריות?</p>
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