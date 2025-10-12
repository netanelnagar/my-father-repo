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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      {/* TODO: Add animation to phone view and made it fixed for desktop */}
      <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              מנופי רמון
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              מספקים מנופים איכותיים ואמינים ללקוחות בערב הסעודית
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              אמינות, איכות ושירות מקצועי הם הבסיס לעסקינו. אנו מתמחים במתן פתרונות מנוף מתקדמים עם שירות מהשורה הראשונה.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/cranes/ceiling"
                className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-hover"
              >
                מנוף תקרה
              </Link>
              <Link 
                href="/cranes/pneumatic"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors btn-hover"
              >
                מנוף פנאומטי
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              למה לבחור במנופי רמון?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              אנו מציעים פתרונות מנוף מתקדמים עם דגש על איכות, אמינות ושירות מקצועי
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-6xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-4">איכות מעולה</h3>
              <p className="text-gray-600">
                מנופים מתוצרת חברות מובילות עם תקני איכות בינלאומיים המבטיחים ביצועים מעולים ועמידות לאורך שנים.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-4">אמינות גבוהה</h3>
              <p className="text-gray-600">
                מערכות מנוף בטוחות ואמינות עם תחזוקה מקצועית ותמיכה טכנית מלאה לכל אורך השימוש.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-4">שירות מקצועי</h3>
              <p className="text-gray-600">
                צוות מומחים מנוסה המספק ייעוץ מקצועי, התקנה מדוייקת ותמיכה טכנית מתמשכת.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cranes Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              המנופים שלנו
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              מגוון מנופים איכותיים לכל הצרכים התעשייתיים שלכם
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ceiling Crane */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🏗️</div>
                  <p className="text-gray-600">תמונת מנוף תקרה</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">מנוף תקרה</h3>
                <p className="text-gray-600 mb-4">
                  מנוף תקרה איכותי המתאים לתעשיות כבדות. חוזק מעולה, עמידות גבוהה ויכולת הרמה מרשימה.
                </p>
                <Link 
                  href="/cranes/ceiling"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors btn-hover"
                  >
                  פרטים נוספים
                </Link>
              </div>
            </div>

            {/* Pneumatic Crane */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">⚙️</div>
                  <p className="text-gray-600">תמונת מנוף פנאומטי</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">מנוף פנאומטי</h3>
                <p className="text-gray-600 mb-4">
                  מנוף פנאומטי מתקדם לשימוש מדויק ובטוח. טכנולוגיה מתקדמת עם שליטה מלאה ויעילות אנרגיה.
                </p>
                <Link 
                  href="/cranes/pneumatic"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors btn-hover"
                  >
                  פרטים נוספים
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              מנהל החברה
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">יוסי רמון</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                בעל ניסיון של למעלה מ-20 שנה בתחום המנופים והציוד התעשייתי. יוסי הקים את מנופי רמון מתוך חזון להביא ללקוחות במזרח התיכון את הציוד האיכותי ביותר עם שירות אמין ומקצועי.
              </p>
              <blockquote className="text-xl italic text-primary font-medium">
                "האמינות והאיכות הם לא רק מילים - הם ההתחייבות שלנו לכל לקוח ולקוח"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: fix the css of this section, will be one line and wil aoutomatically scroll, and put default images */}
      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              המלצות לקוחות
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              מה הלקוחות שלנו אומרים על השירות והאיכות שלנו
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">טוען המלצות...</p>
            </div>
          ) : reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  rating={review.rating}
                  content={review.content}
                  imageFilename={review.image_filename}
                  createdAt={review.created_at}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">אין עדיין המלצות להצגה</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            צור איתנו קשר
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            מעוניינים במנופים איכותיים? נשמח לספק לכם פתרון מותאם בדיוק לצרכים שלכם
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">אימייל</h3>
              <p className="opacity-90">info@ramoncranes.com</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">טלפון</h3>
              <p className="opacity-90">+972-50-123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">שירות</h3>
              <p className="opacity-90">ערב הסעודית ומדינות המפרץ</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}