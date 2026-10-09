'use client';

import { useState } from 'react';

interface FoodItem {
  id: number;
  titleUz: string;
  titleEn: string;
  titleRu: string;
  restaurant: string;
  addressUz: string;
  addressEn: string;
  addressRu: string;
  oldPrice: string;
  newPrice: string;
  category: string;
  leftCount: number;
  imageEmoji: string;
  discount: string;
  rating: number;
}

export default function Home() {
  const [lang, setLang] = useState<'uz' | 'en' | 'ru'>('uz');
  const [darkMode, setDarkMode] = useState(true);

  const [foods, setFoods] = useState<FoodItem[]>([
    {
      id: 1,
      titleUz: 'Tovuqli Set (Lavash + Fri + Pepsi)',
      titleEn: 'Chicken Set (Lavash + Fries + Pepsi)',
      titleRu: 'Куриный сет (Лаваш + Фри + Пепси)',
      restaurant: 'Oqtepa Lavash',
      addressUz: 'Amir Temur ko‘chasi, 15-uy (Mo‘ljal: Alloy Mall)',
      addressEn: '15 Amir Temur Street (Near Alloy Mall)',
      addressRu: 'ул. Амира Темура, 15 (Ориентир: Alloy Mall)',
      oldPrice: '55,000 so‘m',
      newPrice: '25,000 so‘m',
      category: 'Fast-Food',
      leftCount: 4,
      imageEmoji: '🌯',
      discount: '-55%',
      rating: 4.8
    },
    {
      id: 2,
      titleUz: 'Pepperoni Pitsa (Katta - 36 sm)',
      titleEn: 'Pepperoni Pizza (Large - 36 cm)',
      titleRu: 'Пицца Пепперони (Большая - 36 см)',
      restaurant: 'Bellissimo Pizza',
      addressUz: 'Bunyodkor shoh ko‘chasi, 52 (Mo‘ljal: Chilonzor metro)',
      addressEn: '52 Bunyodkor Avenue (Near Chilanzar Metro)',
      addressRu: 'пр. Бунёдкор, 52 (Ориентир: метро Чиланзар)',
      oldPrice: '110,000 so‘m',
      newPrice: '55,000 so‘m',
      category: 'Pitsa',
      leftCount: 2,
      imageEmoji: '🍕',
      discount: '-50%',
      rating: 4.9
    },
    {
      id: 3,
      titleUz: 'Asalli Tort bo‘lagi va Cappuccino',
      titleEn: 'Honey Cake Slice & Cappuccino',
      titleRu: 'Кусок медового торта и капучино',
      restaurant: 'Safia Café & Bakery',
      addressUz: 'Fidokor ko‘chasi, 12-uy (Mo‘ljal: Shahrisabz ko‘chasi)',
      addressEn: '12 Fidokor Street (Near Shahrisabz Street)',
      addressRu: 'ул. Фидокор, 12 (Ориентир: ул. Шахрисабз)',
      oldPrice: '45,000 so‘m',
      newPrice: '20,000 so‘m',
      category: 'Shirinlik',
      leftCount: 6,
      imageEmoji: '🍰',
      discount: '-55%',
      rating: 4.7
    },
    {
      id: 4,
      titleUz: 'Set Sushi "Tokyo" (24 dona)',
      titleEn: 'Sushi Set "Tokyo" (24 pcs)',
      titleRu: 'Суши сет "Токио" (24 шт)',
      restaurant: 'Yaponamama',
      addressUz: 'Taras Shevchenko ko‘chasi, 21-uy',
      addressEn: '21 Taras Shevchenko Street',
      addressRu: 'ул. Тараса Шевченко, 21',
      oldPrice: '160,000 so‘m',
      newPrice: '80,000 so‘m',
      category: 'Sushi',
      leftCount: 3,
      imageEmoji: '🍱',
      discount: '-50%',
      rating: 4.9
    },
    {
      id: 5,
      titleUz: 'An’anaviy Toshkent Oshi (1 porsiya)',
      titleEn: 'Traditional Tashkent Plov (1 portion)',
      titleRu: 'Традиционный ташкентский плов (1 порция)',
      restaurant: 'Besh Qozon (Markaziy Osh)',
      addressUz: 'Iftixor ko‘chasi, 1-uy (Mo‘ljal: TV Tower)',
      addressEn: '1 Iftixor Street (Near TV Tower)',
      addressRu: 'ул. Ифтихор, 1 (Ориентир: Телебашня)',
      oldPrice: '45,000 so‘m',
      newPrice: '20,000 so‘m',
      category: 'Milliy',
      leftCount: 10,
      imageEmoji: '🍛',
      discount: '-55%',
      rating: 5.0
    },
    {
      id: 6,
      titleUz: 'Burger "Double Mega" + Fri',
      titleEn: 'Burger "Double Mega" + Fries',
      titleRu: 'Бургер "Дабл Мега" + Фри',
      restaurant: 'Les Ailes',
      addressUz: 'Yunusobod tumani, 4-mavze (Mo‘ljal: Mega Planet)',
      addressEn: 'Yunusabad district, 4th quarter (Near Mega Planet)',
      addressRu: 'Юнусабадский район, 4-й квартал (Ориентир: Mega Planet)',
      oldPrice: '65,000 so‘m',
      newPrice: '32,000 so‘m',
      category: 'Fast-Food',
      leftCount: 5,
      imageEmoji: '🍔',
      discount: '-50%',
      rating: 4.6
    },
    {
      id: 7,
      titleUz: 'Qo‘yliq Manti (4 dona + Qatiq)',
      titleEn: 'Qoyliq Manti (4 pcs + Sour cream)',
      titleRu: 'Манты Куйлюк (4 шт + Сметана)',
      restaurant: 'Milliy Taomlar Express',
      addressUz: 'Qo‘yliq 4-dahasi, 18-uy',
      addressEn: 'Qoyliq 4 district, 18',
      addressRu: 'Куйлюк 4-й массив, 18',
      oldPrice: '36,000 so‘m',
      newPrice: '15,000 so‘m',
      category: 'Milliy',
      leftCount: 7,
      imageEmoji: '🥟',
      discount: '-58%',
      rating: 4.5
    },
    {
      id: 8,
      titleUz: 'Klassik Chorsu Norin (1 porsiya)',
      titleEn: 'Classic Chorsu Narin (1 portion)',
      titleRu: 'Классический чорсуйский норин',
      restaurant: 'Chorsu Milliy Taomlar',
      addressUz: 'Chorsu bozori, Gumbaz osti majmuasi',
      addressEn: 'Chorsu Bazaar, Dome Complex',
      addressRu: 'Базар Чорсу, Купольный комплекс',
      oldPrice: '40,000 so‘m',
      newPrice: '18,000 so‘m',
      category: 'Milliy',
      leftCount: 4,
      imageEmoji: '🍜',
      discount: '-55%',
      rating: 4.8
    }
  ]);

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<FoodItem[]>([]);
  const [ecoPoints, setEcoPoints] = useState(420);
  const [toast, setToast] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Form state
  const [newTitle, setNewTitle] = useState('');
  const [newRestaurant, setNewRestaurant] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newCategory, setNewCategory] = useState('Fast-Food');

  const t = {
    uz: {
      tagline: "Toshkent shahri bo‘ylab isrofni to'xtating!",
      badge: "📍 Toshkent maxsus: Kun oxiri -50% dan -60% gacha chegirmalar",
      title: "Toshkent kafelaridagi sifatli taomlar isrof bo‘lmasin!",
      desc: "Poytaxtimizning eng sara restoran va fast-fudlaridan qolgan yangi taomlarni arzon narxda band qiling va o'zingizga yaqin manzildan olib keting.",
      searchPlaceholder: "🔍 Toshkentdagi taom yoki restoran nomini yozing...",
      categories: { Barchasi: 'Barchasi', 'Fast-Food': 'Fast-Food', Pitsa: 'Pitsa', Milliy: 'Milliy', Sushi: 'Sushi', Shirinlik: 'Shirinlik' },
      left: "ta qoldi",
      bookBtn: "Band qilish 🛒",
      pointsText: "Eco-Ballar",
      savedAlert: "savatchaga qo'shildi!",
      addBtn: "+ Toshkent restorani qo'shish",
      cartTitle: "Sizning buyurtmalaringiz",
      checkout: "Buyurtmani tasdiqlash",
      emptyCart: "Savatcha hozircha bo'sh",
      cityBadge: "🏙️ Toshkent shahri",
      successTitle: "Muvaffaqiyatli buyurtma! 🎉",
      successDesc: "Toshkent bo'yicha buyurtma qabul qilindi! Restorandan o'z vaqtida olib keting.",
      closeBtn: "Tushunarli"
    },
    en: {
      tagline: "Stop food waste across Tashkent!",
      badge: "📍 Tashkent Special: End of day 50% - 60% discounts",
      title: "Quality food in Tashkent shouldn't go to waste!",
      desc: "Reserve fresh surplus meals from Tashkent's top restaurants at affordable prices and pick them up nearby.",
      searchPlaceholder: "🔍 Search Tashkent food or restaurant...",
      categories: { Barchasi: 'All', 'Fast-Food': 'Fast-Food', Pitsa: 'Pizza', Milliy: 'National', Sushi: 'Sushi', Shirinlik: 'Dessert' },
      left: "left",
      bookBtn: "Reserve 🛒",
      pointsText: "Eco-Points",
      savedAlert: "added to cart!",
      addBtn: "+ Add Tashkent Restaurant",
      cartTitle: "Your Orders",
      checkout: "Confirm Order",
      emptyCart: "Cart is currently empty",
      cityBadge: "🏙️ Tashkent City",
      successTitle: "Order Successful! 🎉",
      successDesc: "Your order in Tashkent has been accepted! Please pick it up on time.",
      closeBtn: "Got it"
    },
    ru: {
      tagline: "Остановим пищевые отходы по Ташкенту!",
      badge: "📍 Ташкент Спецпредложение: Скидки 50% - 60%",
      title: "Качественная еда в Ташкенте не должна пропадать!",
      desc: "Бронируйте свежие блюда из лучших ресторанов Ташкента по доступным ценам и забирайте самовывозом.",
      searchPlaceholder: "🔍 Поиск блюда или ресторана в Ташкенте...",
      categories: { Barchasi: 'Все', 'Fast-Food': 'Фаст-Фуд', Pitsa: 'Пицца', Milliy: 'Национальные', Sushi: 'Суши', Shirinlik: 'Десерты' },
      left: "осталось",
      bookBtn: "Забронировать 🛒",
      pointsText: "Эко-баллы",
      savedAlert: "добавлено в корзину!",
      addBtn: "+ Добавить ресторан Ташкента",
      cartTitle: "Ваши заказы",
      checkout: "Подтвердить заказ",
      emptyCart: "Корзина пока пуста",
      cityBadge: "🏙️ Город Ташкент",
      successTitle: "Заказ успешно оформлен! 🎉",
      successDesc: "Ваш заказ по Ташкенту принят! Заберите его вовремя из ресторана.",
      closeBtn: "Понятно"
    }
  };

  const currentText = t[lang];

  const showNotification = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 4000);
  };

  const addToCart = (item: FoodItem) => {
    setCart([...cart, item]);
    setEcoPoints(prev => prev + 15);
    showNotification(`🎉 "${item.titleUz}" ${currentText.savedAlert}`);
  };

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const handleAddFood = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newRestaurant || !newAddress || !newPrice) return;

    const newItem: FoodItem = {
      id: Date.now(),
      titleUz: newTitle,
      titleEn: newTitle,
      titleRu: newTitle,
      restaurant: newRestaurant,
      addressUz: newAddress,
      addressEn: newAddress,
      addressRu: newAddress,
      oldPrice: '60,000 so‘m',
      newPrice: newPrice,
      category: newCategory,
      leftCount: 4,
      imageEmoji: '🍲',
      discount: '-50%',
      rating: 5.0
    };

    setFoods([newItem, ...foods]);
    setNewTitle('');
    setNewRestaurant('');
    setNewAddress('');
    setNewPrice('');
    setShowAddModal(false);
    showNotification('✨ Toshkent restorani muvaffaqiyatli qo‘shildi!');
  };

  const filteredFoods = foods.filter(item => {
    const title = lang === 'en' ? item.titleEn : lang === 'ru' ? item.titleRu : item.titleUz;
    const address = lang === 'en' ? item.addressEn : lang === 'ru' ? item.addressRu : item.addressUz;
    const matchesSearch = title.toLowerCase().includes(search.toLowerCase()) ||
      item.restaurant.toLowerCase().includes(search.toLowerCase()) ||
      address.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'Barchasi' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans relative overflow-hidden ${darkMode ? 'bg-[#030712] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>

      {/* Background Glows */}
      <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all ${darkMode ? 'bg-emerald-600/10' : 'bg-emerald-500/10'}`}></div>

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 border px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-bounce ${darkMode ? 'bg-slate-900/95 border-emerald-500/50 text-emerald-200' : 'bg-white border-emerald-300 text-emerald-800'}`}>
          <span className="text-xl">🌿</span>
          <span className="font-semibold text-sm">{toast}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">

        {/* Navigation Bar */}
        <nav className={`flex flex-col md:flex-row justify-between items-center gap-4 backdrop-blur-2xl border p-5 rounded-3xl shadow-2xl mb-8 ${darkMode ? 'bg-slate-900/50 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 text-2xl font-black text-white">
              🌍
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  EcoBite
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-md">
                  {currentText.cityBadge}
                </span>
              </div>
              <p className={`text-xs font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>{currentText.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-end">
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md transition"
            >
              {currentText.addBtn}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setShowCartModal(true)}
              className={`relative flex items-center gap-2 border px-4 py-2 rounded-xl font-bold text-xs transition ${darkMode ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-slate-200 border-slate-300 text-slate-800'}`}
            >
              <span>🛒 Savatcha</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-slate-950 font-black w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
                  {cart.length}
                </span>
              )}
            </button>

            <div className={`flex items-center gap-2 border px-3 py-2 rounded-xl ${darkMode ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
              <span>🌱</span>
              <span className="font-bold text-xs">{ecoPoints} {currentText.pointsText}</span>
            </div>

            <div className={`flex border p-1 rounded-xl ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-200 border-slate-300'}`}>
              {(['uz', 'en', 'ru'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase transition ${lang === l ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition shadow ${darkMode ? 'bg-slate-800 border-slate-700 text-yellow-400' : 'bg-slate-200 border-slate-300 text-slate-800'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>

        {/* Hero Banner */}
        <div className={`relative rounded-3xl overflow-hidden border p-8 md:p-12 mb-10 shadow-2xl backdrop-blur-xl ${darkMode ? 'bg-gradient-to-r from-emerald-950/80 via-slate-900/90 to-teal-950/80 border-emerald-500/30 text-white' : 'bg-gradient-to-r from-emerald-100 via-white to-teal-100 border-emerald-200 text-slate-900'}`}>
          <div className="max-w-2xl relative z-10">
            <span className={`px-3.5 py-1.5 rounded-full border text-xs font-bold mb-4 inline-block shadow-sm ${darkMode ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' : 'bg-emerald-200 border-emerald-300 text-emerald-800'}`}>
              {currentText.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              {currentText.title}
            </h2>
            <p className={`text-sm md:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {currentText.desc}
            </p>
          </div>
        </div>

        {/* Search & Categories */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder={currentText.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full p-4 pl-12 border rounded-2xl focus:outline-none focus:border-emerald-500 backdrop-blur-md shadow-xl transition ${darkMode ? 'bg-slate-900/60 border-slate-800 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
            />
            <span className="absolute left-4 top-4 text-slate-400 text-lg">🔍</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {Object.entries(currentText.categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-5 py-3.5 rounded-2xl font-bold text-xs whitespace-nowrap transition-all duration-300 ${selectedCategory === key
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : darkMode ? 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoods.map((item) => {
            const isWishlisted = wishlist.includes(item.id);
            const title = lang === 'en' ? item.titleEn : lang === 'ru' ? item.titleRu : item.titleUz;
            const address = lang === 'en' ? item.addressEn : lang === 'ru' ? item.addressRu : item.addressUz;

            return (
              <div
                key={item.id}
                className={`p-6 rounded-3xl border transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden ${darkMode ? 'bg-slate-900/50 hover:bg-slate-900/90 border-slate-800/80 hover:border-emerald-500/50' : 'bg-white hover:shadow-2xl border-slate-200'}`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-4xl p-3.5 rounded-2xl border shadow-inner ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-slate-100 border-slate-200'}`}>{item.imageEmoji}</span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleWishlist(item.id)}
                        className={`p-2.5 rounded-xl border transition ${isWishlisted ? 'bg-red-500/20 border-red-500/40 text-red-500' : darkMode ? 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-500'}`}
                      >
                        {isWishlisted ? '❤️' : '🤍'}
                      </button>
                      <span className="text-xs font-black px-2.5 py-1 bg-emerald-500 text-slate-950 rounded-xl shadow-md">
                        {item.discount}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-lg border ${darkMode ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-lg border border-red-500/20">
                      ⚠️ {item.leftCount} {currentText.left}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-xs font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>🏢 {item.restaurant}</span>
                    <span className="text-[11px] font-bold text-yellow-400">⭐ {item.rating}</span>
                  </div>

                  <p className={`text-xs mb-3 flex items-start gap-1 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <span>📍</span> {address}
                  </p>

                  <h3 className={`text-base font-bold transition-colors mb-4 line-clamp-2 ${darkMode ? 'text-white group-hover:text-emerald-300' : 'text-slate-900 group-hover:text-emerald-600'}`}>
                    {title}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/20 mt-2">
                  <div>
                    <span className="text-xs text-slate-400 line-through block font-medium">{item.oldPrice}</span>
                    <span className="text-emerald-500 font-black text-base tracking-tight">
                      {item.newPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 shadow-lg shadow-emerald-600/25 transform active:scale-95"
                  >
                    {currentText.bookBtn}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Savatcha (Cart) Modal */}
        {showCartModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
            <div className={`p-6 md:p-8 rounded-3xl w-full max-w-lg shadow-2xl relative border ${darkMode ? 'bg-slate-900 border-emerald-500/30 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
              <button
                onClick={() => setShowCartModal(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white font-bold text-lg"
              >
                ✕
              </button>

              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>🛒</span> {currentText.cartTitle}
              </h3>

              {cart.length === 0 ? (
                <p className="text-slate-400 text-center py-8">{currentText.emptyCart}</p>
              ) : (
                <div className="space-y-4 max-h-60 overflow-y-auto mb-6">
                  {cart.map((c, idx) => {
                    const cTitle = lang === 'en' ? c.titleEn : lang === 'ru' ? c.titleRu : c.titleUz;
                    const cAddress = lang === 'en' ? c.addressEn : lang === 'ru' ? c.addressRu : c.addressUz;
                    return (
                      <div key={idx} className={`flex justify-between items-center p-3 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
                        <div>
                          <p className="font-bold text-sm">{cTitle}</p>
                          <p className="text-xs text-slate-400">📍 {cAddress}</p>
                        </div>
                        <span className="font-black text-emerald-500">{c.newPrice}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <button
                onClick={() => {
                  setCart([]);
                  setShowCartModal(false);
                  setShowSuccessModal(true); // Zamonaviy modalni ochish
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold shadow-lg transition"
              >
                {currentText.checkout} 🚀
              </button>
            </div>
          </div>
        )}

        {/* 🌟 Toshkentga mos Zamonaviy Success Modal (localhost yozuvi yo'q) */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
            <div className={`p-8 rounded-3xl w-full max-w-md shadow-2xl text-center relative border ${darkMode ? 'bg-slate-900 border-emerald-500/40 text-white' : 'bg-white border-emerald-300 text-slate-900'}`}>
              <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🎉
              </div>
              <h3 className="text-2xl font-black mb-2">{currentText.successTitle}</h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {currentText.successDesc}
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-emerald-600/30 transition"
              >
                {currentText.closeBtn}
              </button>
            </div>
          </div>
        )}

        {/* Modal for Adding Tashkent Restaurant */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
            <div className={`p-6 md:p-8 rounded-3xl w-full max-w-lg shadow-2xl relative border ${darkMode ? 'bg-slate-900 border-emerald-500/30 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white font-bold text-lg"
              >
                ✕
              </button>

              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>📝</span> Toshkentdagi yangi restoran va manzilini qo'shish
              </h3>

              <form onSubmit={handleAddFood} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Taom nomi</label>
                  <input
                    type="text"
                    placeholder="Masalan: Set Burger"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className={`w-full p-3.5 border rounded-xl focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300'}`}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Restoran nomi</label>
                  <input
                    type="text"
                    placeholder="Masalan: Safia"
                    value={newRestaurant}
                    onChange={(e) => setNewRestaurant(e.target.value)}
                    className={`w-full p-3.5 border rounded-xl focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300'}`}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Toshkentdagi to'liq manzil va mo'ljal</label>
                  <input
                    type="text"
                    placeholder="Masalan: Chilonzor ko'chasi, 12-uy (Mo'ljal: Metro)"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    className={`w-full p-3.5 border rounded-xl focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300'}`}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Chegirmadagi narx</label>
                  <input
                    type="text"
                    placeholder="25,000 so'm"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className={`w-full p-3.5 border rounded-xl focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300'}`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold shadow-lg transition"
                >
                  Platformaga qo'shish 🚀
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}