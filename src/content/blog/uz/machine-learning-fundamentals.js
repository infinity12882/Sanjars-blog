export default `
<p>Mashinali o'qitish bitta modelni boshidan oxirigacha qurmaguningizcha mavhum tuyuladi. Bu qo'llanma boshlash uchun aslida muhim bo'lgan tushunchalarni qamrab oladi — va keyin haqiqiy, ishlaydigan misol orqali o'tadi.</p>

<h2>"O'qitish" aslida nimani anglatadi</h2>
<p>Mashinali o'qitish modeli inson kabi o'rganmaydi. U misol ma'lumotlardagi xatoni minimallashtirish orqali kiritmalarni chiqishlarga bog'laydigan matematik funksiyani topadi. "O'qitish" — bu aslida optimallashtirish jarayoni: bashoratlar ma'lum to'g'ri javoblarga imkon qadar yaqin bo'lguncha ichki parametrlarni sozlash.</p>

<h2>Nazoratli va nazoratsiz o'qitish</h2>
<p>Boshlovchi sifatida duch keladigan deyarli hamma narsa ikki toifaga bo'linadi:</p>
<ul>
  <li><strong>Nazoratli o'qitish (Supervised learning)</strong> — sizda belgilangan misollar (kiritma + to'g'ri javob) bor va modelni yangi, ko'rilmagan kiritmalar uchun belgini bashorat qilishga o'qitasiz. Spam aniqlash va narx bashorati klassik misollardir.</li>
  <li><strong>Nazoratsiz o'qitish (Unsupervised learning)</strong> — belgilar yo'q; model strukturani o'zi topadi, masalan, o'xshash mijozlarni guruhlash (klasterlash).</li>
</ul>

<h2>Train/test bo'linishi</h2>
<p>Erta shakllantirish kerak bo'lgan eng muhim odat: modelni hech qachon u o'qitilgan ma'lumotlar bilan baholamang. Ma'lumotlar to'plamingizni shunday bo'lingki, model o'qitish davomida test qismini hech qachon ko'rmasin:</p>
<pre><code>from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)</code></pre>
<p>Agar bu qadamni o'tkazib yuborsangiz, modelingiz qog'ozda mukammal ko'rinishi mumkin, lekin real ma'lumotlarda butunlay muvaffaqiyatsizlikka uchraydi — bu muammo overfitting (haddan tashqari moslashish) deb ataladi.</p>

<h2>Birinchi modelni qurish</h2>
<p>Mana scikit-learn yordamida to'liq, minimal klassifikator:</p>
<pre><code>from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

model = LogisticRegression()
model.fit(X_train, y_train)

predictions = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, predictions))</code></pre>
<p>Aslida modelni uch qator o'qitadi: yarating, <code>.fit()</code> chaqiring, <code>.predict()</code> chaqiring. Mashinali o'qitishdagi qolgan hamma narsa — xususiyat muhandisligi, sozlash, validatsiya — ushbu uch qatorni ishonish mumkin bo'lgan modelni ishlab chiqarishga majburlash uchun mavjud.</p>

<h2>Nega faqat aniqlik (accuracy) yetarli emas</h2>
<p>Agar ma'lumotlaringizning 95% bitta sinfga tegishli bo'lsa, har doim shu sinfni bashorat qiluvchi model 95% aniqlikka ega bo'ladi, lekin foydasiz bo'ladi. Nomutanosib muammolar uchun faqat aniqlik o'rniga precision, recall va F1 ko'rsatkichiga qarang.</p>

<h2>Scikit-learn'dan chuqur o'qitishga</h2>
<p>Logistik regressiya va qaror daraxtlari kabi klassik modellar chuqur o'qitish talab qilgan ma'lumot va hisoblash quvvatidan ancha kamroq bilan ko'plab real biznes muammolarini hal qiladi. Neyron tarmoqlarga — va PyTorch yoki TensorFlow kabi freymvorklarga — strukturalanmagan ma'lumotlar bilan ishlayotganda murojaat qiling: rasmlar, audio yoki xom matn, bu yerda chuqur arxitekturalar klassik usullardan doimo ustun keladi.</p>

<h2>Amaliy keyingi qadamlar</h2>
<p>Bitta kichik, haqiqiy ma'lumotlar to'plamini tanlang — yuzlab marta ko'rgan o'yinchoq misol emas — va to'liq pipeline quring: ma'lumotni yuklash, tozalash, bo'lish, asosiy modelni o'qitish, uni halol baholash va faqat shundan keyin yaxshilashga harakat qilish. Bu to'liq sikl, bir marta haqiqatan amalga oshirilsa, yana o'nta darslik o'qishdan ko'proq narsa o'rgatadi.</p>
`;
