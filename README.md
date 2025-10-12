# 🏗️ מנופי רמון - אתר חברה מקצועי

אתר מודרני לחברת מנופי רמון, המתמחה בייבוא ומכירת מנופים איכותיים ללקוחות בערב הסעודית.

## 🚀 תכונות עיקריות

### 🌐 אתר ציבורי
- **עמוד בית** מעוצב בעברית עם תמיכה מלאה ב-RTL
- **עמודי מוצר** לכל סוג מנוף (תקרה ופנאומטי)
- **חלק מנהל החברה** עם מידע אישי ומקצועי
- **מערכת הערכות לקוחות** עם דירוגים וביקורות
- **עיצוב רספונסיבי** המותאם לכל המכשירים
- **אנימציות וטרנזישנים** עדכניים

### 🔐 פאנל אדמין
- **אימות מאובטח** עם cookies וה JWT
- **העלאת קבצים** עם שמירה בתיקיית public
- **ניהול ביקורות** - הוספה ומחיקה
- **ממשק ידידותי** לניהול תוכן

### 🛠️ טכנולוגיות

- **Next.js 15** עם App Router
- **TypeScript** למבנה קוד בטוח
- **Tailwind CSS 4** עם תמיכה בעברית RTL
- **PostgreSQL** לאחסון נתונים
- **Express.js** לשרת API
- **JWT** לאימות משתמשים
- **Multer** להעלאת קבצים

## 📁 מבנה הפרויקט

```
ramon-cranes/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── login/          # דף התחברות אדמין
│   │   │   └── dashboard/      # פאנל ניהול אדמין  
│   │   ├── api/
│   │   │   ├── admin/          # API routes לאדמין
│   │   │   └── reviews/        # API לביקורות (ציבורי)
│   │   ├── cranes/
│   │   │   ├── ceiling/        # עמוד מנוף תקרה
│   │   │   └── pneumatic/      # עמוד מנוף פנאומטי
│   │   ├── globals.css         # סגנונות גלובליים + RTL
│   │   ├── layout.tsx          # Layout עברי
│   │   └── page.tsx           # עמוד בית
│   ├── components/
│   │   ├── Header.tsx          # תפריט עליון
│   │   ├── Footer.tsx          # כותרת תחתונה
│   │   └── ReviewCard.tsx      # רכיב ביקורת
│   ├── lib/
│   │   └── auth.ts            # פונקציות אימות
│   └── types/
│       └── index.ts           # טיפוסי TypeScript
├── public/
│   └── uploads/               # תיקיית תמונות שהועלו
├── server.js                  # Express server (אופציונלי)
├── setup-database.sql         # סקריפט הכנת בסיס נתונים
└── .env.local                # משתני סביבה
```

## ⚙️ הגדרת הפרויקט

### 1. התקנת החבילות
```bash
npm install
```

### 2. הגדרת בסיס הנתונים

#### א. התקנת PostgreSQL
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# macOS (עם Homebrew)
brew install postgresql
brew services start postgresql

# או השתמש ב-Docker
docker run --name postgres-ramon -e POSTGRES_PASSWORD=yourpassword -d -p 5432:5432 postgres
```

#### ב. יצירת בסיס הנתונים
```bash
# התחברות ל-PostgreSQL
sudo -u postgres psql

# יצירת בסיס נתונים
CREATE DATABASE ramon_cranes;
CREATE USER ramon_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE ramon_cranes TO ramon_user;
\q
```

#### ג. הרצת הסקריפט
```bash
psql -U ramon_user -d ramon_cranes -f setup-database.sql
```

### 3. הגדרת משתני הסביבה

ערוך את הקובץ `.env.local`:

```env
# Database Configuration
DATABASE_URL=postgresql://ramon_user:your_password@localhost:5432/ramon_cranes

# Admin Authentication
ADMIN_EMAIL=admin@ramoncranes.com
ADMIN_PASSWORD=your_secure_password

# JWT Secret (צור מחרוזת אקראית חזקה)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Configuration (אופציונלי - לשרת Express נפרד)
PORT=3001
```

### 4. הכנת תיקיות
```bash
mkdir -p public/uploads
chmod 755 public/uploads
```

## 🏃‍♂️ הרצת הפרויקט

### שיטה 1: Next.js בלבד (מומלץ)
```bash
npm run dev
```

### שיטה 2: עם Express server נפרד
```bash
# Terminal 1: Next.js
npm run dev

# Terminal 2: Express server  
npm run server

# או השניים יחד
npm run dev:full
```

הגש לאתר: http://localhost:3000

## 🔐 גישת אדמין

### דף ההתחברות
http://localhost:3000/admin/login

### פרטי התחברות
- **אימייל**: admin@ramoncranes.com (או כפי שהוגדר ב-.env)
- **סיסמה**: your_secure_password (או כפי שהוגדר ב-.env)

### פאנל אדמין
לאחר התחברות: http://localhost:3000/admin/dashboard

## 📋 פונקציונליות האדמין

### העלאת קבצים
1. כנס ללשונית "העלאת קבצים"
2. בחר קובץ תמונה (JPG, PNG, GIF, WebP - עד 5MB)
3. לחץ "העלה קובץ"
4. שמור את שם הקובץ שנוצר

### הוספת ביקורת
1. כנס ללשונית "הוספת ביקורת"
2. בחר דירוג (1-5 כוכבים)
3. כתוב את תוכן הביקורת
4. אם רוצה להוסיף תמונה - הכנס את שם הקובץ שהועלה
5. לחץ "הוסף ביקורת"

### ניהול ביקורות
1. כנס ללשונית "ביקורות"
2. ראה את כל הביקורות הקיימות
3. לחץ "מחק" כדי להסיר ביקורת

## 🚀 פריסה לייצור

### 1. הכנת המסד נתונים
```bash
# בשרת הייצור
npm run build
```

### 2. הגדרת משתני סביבה בייצור
```env
NODE_ENV=production
DATABASE_URL=postgresql://user:password@production-db:5432/ramon_cranes
ADMIN_EMAIL=admin@ramoncranes.com
ADMIN_PASSWORD=strong-production-password
JWT_SECRET=very-strong-random-key-for-production
```

### 3. הרצה בייצור
```bash
npm start
```

## 🔧 פתרון בעיות נפוצות

### שגיאת חיבור למסד נתונים
```bash
# בדוק ש-PostgreSQL רץ
sudo systemctl status postgresql

# בדוק את ה-connection string
psql postgresql://ramon_user:password@localhost:5432/ramon_cranes
```

### בעיות הרשאות בתיקיית uploads
```bash
sudo chmod -R 755 public/uploads
sudo chown -R www-data:www-data public/uploads  # לשרתי Linux
```

### שגיאות TypeScript
```bash
npm run build  # לבדיקת שגיאות
```

## 🎨 התאמה אישית

### שינוי צבעים
ערוך את `src/app/globals.css`:
```css
:root {
  --primary: #2563eb;        /* צבע ראשי */
  --primary-dark: #1d4ed8;   /* צבע ראשי כהה */
  --secondary: #64748b;       /* צבע משני */
  --accent: #f59e0b;         /* צבע הדגשה */
}
```

### הוספת מנופים
1. הוסף עמוד חדש תחת `src/app/cranes/[crane-name]/`
2. עדכן את התפריט ב-`src/components/Header.tsx`
3. עדכן את עמוד הבית `src/app/page.tsx`

## 📞 תמיכה

לשאלות ותמיכה טכנית:
- בדוק את לוגי השרת בקונסול
- ודא שכל משתני הסביבה מוגדרים נכון
- בדוק את חיבור בסיס הנתונים

## 📄 רישיון

פרויקט זה נוצר עבור מנופי רמון - כל הזכויות שמורות.

---

**מנופי רמון** - מנופים איכותיים עם אמינות ושירות מקצועי 🏗️