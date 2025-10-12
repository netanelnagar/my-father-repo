'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">מנופי רמון</h3>
            <p className="text-gray-300 mb-4">
              מספקים מנופים איכותיים ואמינים ללקוחות בערב הסעודית. 
              אמינות, איכות ושירות מקצועי הם הבסיס לעסקינו.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  בית
                </a>
              </li>
              <li>
                <a href="/cranes/ceiling" className="text-gray-300 hover:text-white transition-colors">
                  מנוף תקרה
                </a>
              </li>
              <li>
                <a href="/cranes/pneumatic" className="text-gray-300 hover:text-white transition-colors">
                  מנוף פנאומטי
                </a>
              </li>
              <li>
                <a href="/#reviews" className="text-gray-300 hover:text-white transition-colors">
                  המלצות לקוחות
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">צור קשר</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@ramoncranes.com</p>
              <p>📱 +972-50-123-4567</p>
              <p>🌍 שירות מקצועי בערב הסעודית</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 מנופי רמון. כל הזכויות שמורות.</p>
          <p className="mt-2 text-sm">מתמחים במנופי תקרה ומנופים פנאומטיים איכותיים</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;