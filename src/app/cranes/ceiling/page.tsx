'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// TODO: add metadata for the page

export default function CeilingCranePage() {
  const specifications = {
    'קיבולת הרמה': '1-50 טון',
    'גובה הרמה': 'עד 30 מטר',
    'רוחב המנוף': '5-35 מטר',
    'מהירות הרמה': '0.8-8 מ/דקה',
    'מהירות נסיעה': '2-20 מ/דקה',
    'מקור חשמל': '380V/50Hz',
    'דירוג הגנה': 'IP54',
    'תקן בטיחות': 'ISO 9001:2015'
  };

  const features = [
    'מערכת בקרה מתקדמת עם פאנל דיגיטלי',
    'מנגנון בלימה כפול לבטיחות מירבית',
    'חיישני עומס ומיקום מדויקים',
    'מערכת התרעה קולית וויזואלית',
    'עמידות בתנאי מזג אוויר קיצוניים',
    'תחזוקה נוחה עם גישה קלה לרכיבים',
    'ציוד בטיחות מתקדם לעובדים',
    'אפשרות לשליטה מרחוק'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              מנוף תקרה
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              פתרון מתקדם לתעשיות כבדות עם חוזק, עמידות ואמינות מעולים
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              המנוף שלנו מתאים לכל סוגי המשקולות הכבדות ומספק ביצועים יוצאי דופן עם בטיחות מירבית
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="text-8xl mb-4">🏗️</div>
                <p className="text-gray-600 text-lg">תמונה של מנוף תקרה איכותי</p>
                <p className="text-gray-500 text-sm mt-2">(תמונה בקרוב)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  חוזק ואמינות ללא פשרות
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  מנוף התקרה שלנו מעוצב במיוחד לעמוד בדרישות הקשות ביותר של התעשייה הכבדה. 
                  עם טכנולוגיה מתקדמת וחומרים איכותיים, המנוף מספק ביצועים יוצאי דופן לאורך שנים רבות.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  המנוף מיוצר עם תקני איכות בינלאומיים ועובר בדיקות קפדניות לפני האספקה, 
                  כדי להבטיח שיגיע אליכם במצב מושלם ומוכן לפעולה מיידית.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    יתרונות מיוחדים
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      חוזק מבני יוצא דופן
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      עמידות בפני קורוזיה
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      תפעול שקט ויעיל
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      חיי שירות ארוכים
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  איכות ללא פשרות
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  כל מנוף עובר בדיקות איכות מקפידות ומיוצר עם הציוד הטכנולוגי המתקדם ביותר. 
                  אנו משתמשים רק בחומרים מהשורה הראשונה ובטכנולוגיות הייצור המתקדמות ביותר.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  הצוות המקצועי שלנו דואג לכל פרט, החל מהתכנון המדויק, דרך הייצור הקפדני, 
                  ועד להתקנה המקצועית ותמיכה טכנית מתמשכת.
                </p>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    ערבות ותמיכה
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      ערבות מלאה לשנתיים
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      תמיכה טכנית 24/7
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      שירות תחזוקה מקצועי
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      חלפים זמינים תמיד
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
              תכונות מתקדמות
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-start">
                    <span className="text-primary text-xl ml-3">✓</span>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
              מפרט טכני
            </h2>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {Object.entries(specifications).map(([key, value], index) => (
                  <div key={key} className={`p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">{key}</span>
                      <span className="text-primary font-medium">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            מעוניינים במנוף תקרה איכותי?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            צרו איתנו קשר לקבלת הצעת מחיר מותאמת אישית ולייעוץ מקצועי
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-hover"
            >
              צור קשר עכשיו
            </Link>
            <Link 
              href="/cranes/pneumatic"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors btn-hover"
            >
              ראה מנוף פנאומטי
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}