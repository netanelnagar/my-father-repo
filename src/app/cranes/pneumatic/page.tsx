'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// TODO: add metadata for the page

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
    'עמידות בסביבות מאבקות ולחות',
    'מערכת בלימה אוטומטית',
    'חיישני לחץ ומיקום מתקדמים',
    'שליטה מדויקת במהירות ובכוח',
    'תחזוקה מינימלית נדרשת',
    'אפשרות לעבודה בחללים צרים'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              מנוף פנאומטי
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              טכנולוגיה מתקדמת לשליטה מדויקת עם יעילות אנרגיה גבוהה
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              המנוף הפנאומטי מתאים לעבודות דיוק גבוה ומספק ביצועים מעולים בסביבות תובעניות
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
                <div className="text-8xl mb-4">⚙️</div>
                <p className="text-gray-600 text-lg">תמונה של מנוף פנאומטי מתקדם</p>
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
                  טכנולוגיה פנאומטית מתקדמת
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  המנוף הפנאומטי שלנו מציע שליטה מדויקת יוצאת דופן הודות לטכנולוגיה פנאומטית מתקדמת. 
                  המערכת מבטיחה תפעול חלק, מדויק ובטוח בכל תנאי הסביבה.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  המנוף מיועד לעבודות דיוק גבוה ומתאים במיוחד לסביבות תעשייתיות בהן נדרשת שליטה מלאה 
                  במהירות ובכוח ההרמה, עם יכולת עצירה מיידית ומדויקת.
                </p>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    יתרונות הטכנולוגיה הפנאומטית
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      שליטה מדויקת במהירות
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      תפעול שקט וחלק
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      עמידות בסביבות קשות
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      יעילות אנרגיה גבוהה
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  עמידות וביצועים
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  המנוף הפנאומטי מיוצר מחומרים מתקדמים ועמידים המתאימים לשימוש בסביבות תובעניות. 
                  המערכת הפנאומטית מבטיחה ביצועים עקביים גם בתנאי לחות גבוהה או סביבות מאבקות.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  עם תחזוקה מינימלית נדרשת ואמינות גבוהה, המנוף מספק פתרון חסכוני ויעיל לטווח הארוך, 
                  עם תמיכה טכנית מלאה וזמינות חלקי חילוף.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    שירות ותמיכה
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      הדרכת הפעלה מקצועית
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      תמיכה טכנית מתמשכת
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      שירות תחזוקה מקצועי
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 ml-2">✓</span>
                      ערבות איכות מקיפה
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
                    <span className="text-green-600 text-xl ml-3">✓</span>
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
                      <span className="text-green-600 font-medium">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
              יישומים מומלצים
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold mb-2">ייצור ועיבוד</h3>
                <p className="text-gray-600">מתאים לקווי ייצור המצריכים דיוק גבוה ושליטה מלאה</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-2">אחזקה ותיקונים</h3>
                <p className="text-gray-600">אידיאלי לעבודות אחזקה המצריכות מיקום מדויק של חלקים</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-semibold mb-2">מחסנים ולוגיסטיקה</h3>
                <p className="text-gray-600">מעולה לטיפול בחומרים רגישים או עדינים</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            מעוניינים במנוף פנאומטי מתקדם?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            קבלו ייעוץ מקצועי והצעת מחיר מותאמת לדרישות הספציפיות שלכם
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-hover"
            >
              צור קשר עכשיו
            </Link>
            <Link 
              href="/cranes/ceiling"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors btn-hover"
            >
              ראה מנוף תקרה
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}