# 🪙 Arthana — Smart Budget & Gold Planner

> *"Budgeting Sesuai Persona Kamu — Kenali Gaya Cuanmu, Rancang Masa Depanmu."*

**Arthana** (*Artha* + *Persona*) adalah aplikasi *financial planner* mobile-first (iOS & Android) yang dirancang khusus untuk Gen Z dan Milenial muda. Arthana menggabungkan psikologi keuangan melalui **Budgeting Method Recommendation Engine**, pencatatan *cashflow* yang *frictionless*, serta fitur lokalisasi unik berupa pelacak investasi emas (**Arthana Vault**) dengan pendekatan komunikasi Gen Z yang kasual, *relatable*, dan jauh dari kesan kaku (*no spreadsheet vibes*).

## ✨ Fitur Utama

### 1. 🧠 Budgeting Method Recommendation Engine (*Arthana Quiz*)

Kuis interaktif saat *onboarding* untuk menganalisis gaya *spending*, tingkat impulsivitas, tujuan finansial pengguna guna merekomendasikan metode *budgeting* paling tepat lengkap dengan **Financial Profile Badge**:

* **Okane Kakeibo** — *The Zen Accountant*

* **50/30/20 Rule** — *The Balanced Harmonist*

* **Zero-Based Budgeting** — *The Money Architect*

* **Sinking Fund Strategy** — *The Goal Crusher*

* **FIRE Mode (Advanced)** — *The Freedom Fighter*

### 2. ⚡ Auto-Budget Setup (*Smart Templates*)

Menghilangkan *"blank state hell"*. Begitu kuis selesai, sistem secara otomatis membuatkan kategori dan proporsi limit pengeluaran berdasarkan metode terpilih dan pemasukan bulanan pengguna.

### 3. 💸 Core Cashflow Tracker & Impulse Detector

* Pencatatan pemasukan & pengeluaran super cepat menggunakan *Modal Bottom Sheets*.

* Dashboard visual untuk memantau sisa limit harian, mingguan, dan bulanan.

* **Toggle "Pengeluaran Impulsif"**: Menandai transaksi impulsif untuk bahan evaluasi perilaku finansial.

### 4. 🎯 Goals & Sinking Funds

Pelacakan tabungan berbasis tujuan spesifik (Dana Darurat, Liburan, Nikah, dll.) lengkap dengan *progress tracker* visual dan perhitungan kontribusi rutin otomatis.

### 5. 🧈 Gold Tracker (*Arthana Vault*)

Fitur lokalisasi unik untuk mencatat kepemilikan aset emas fisik maupun digital (Antam, UBS, Perhiasan):

* Kalkulasi otomatis total gram, *average cost*, dan estimasi nilai portofolio terkini.

* **Gold Goals Integration**: Menghubungkan target gram emas dengan tujuan spesifik (misal: *Target 20g untuk Nikah, sisa 13g*).

* Grafik tren harga emas harian & notifikasi *alert*.

### 6. 💬 Weekly Financial Insight (*Arthana Pulse*)

Ringkasan evaluasi mingguan dengan *copywriting* bergaya Gen Z yang santai dan tidak menghakimi (contoh: *"Bestie... jajan kamu minggu ini udah kayak cicilan motor 😭"*).

## 🛠️ Tech Stack

* **Framework & Navigation:** React Native with [Expo](https://expo.dev/) & [Expo Router](https://docs.expo.dev/router/introduction/)

* **Language:** TypeScript (Strict Mode)

* **UI Component Library:** [HeroUI Native](https://heroui.com/docs/native)

* **Styling:** Tailwind CSS via [Uniwind](https://docs.uniwind.dev/) (Dark Mode First)

* **State Management & DI:** [Zustand](https://zustand-demo.pmnd.rs/)

* **Local Database:** [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/) (`expo-sqlite`)

* **Secure Local Storage:** [Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore/) (`expo-secure-store`)

* **Networking:** [Axios](https://axios-http.com/)

* **Image Loading:** [Expo Image](https://docs.expo.dev/versions/latest/sdk/image/) (`expo-image`)

* **Logging:** [react-native-logs](https://github.com/onubo/react-native-logs)

* **Overlays & Gestures:** `react-native-screens`, `@lodev09/react-native-true-sheet`, `react-native-gesture-handler`, `react-native-reanimated`

* **Architecture:** Clean Architecture (3 Layers: Domain, Data, Presentation)

## 🏗️ Arsitektur Proyek (Clean Architecture)

Proyek ini menerapkan pemisahan tanggung jawab (*Separation of Concerns*) menggunakan **Clean Architecture 3 Layer** agar kode mudah diuji, skalabel, dan terbebas dari ketergantungan framework pada logika bisnis inti.

```
arthana/
├── app/                                # Expo Router (Entry point navigasi saja)
│   ├── _layout.tsx                     # Root Provider (HeroUINativeProvider, GestureHandler)
│   ├── index.tsx                       # Redirect handler (cek status onboarding)
│   ├── (onboarding)/                   # Route Onboarding (Welcome -> Auth -> Quiz -> Reveal -> Preview)
│   └── (tabs)/                         # Route Main Bottom Tabs (Dashboard, Transactions, Goals, Gold Vault)
│
├── src/
│   ├── core/                           # Shared infrastructure lintas fitur
│   │   ├── di/                         # Manual Dependency Injection container
│   │   ├── errors/                     # Custom Failure & Exception classes
│   │   ├── logger/                     # Konfigurasi react-native-logs
│   │   ├── network/                    # Axios client & interceptors
│   │   ├── storage/                    # Singleton SQLite (expo-sqlite) & SecureStore wrapper
│   │   ├── theme/                      # Konfigurasi warna Dark Mode Arthana
│   │   └── utils/                      # Formatter Rupiah, tanggal, kalkulator gram
│   │
│   ├── shared/                         # Komponen UI & hooks global yang dipakai banyak fitur
│   │   ├── components/                 # Reusable HeroUI Native components (EmptyState, AppCard, dll.)
│   │   └── hooks/                      # Custom hooks lintas modul
│   │
│   └── features/                       # MODULAR FEATURES (Setiap fitur punya 3 layer mandiri)
│       ├── welcome/                    # Modul entry screen dan CTA awal
│       │   ├── domain/                 # Kontrak dan aturan bisnis welcome
│       │   ├── data/                   # Datasource dan model welcome bila diperlukan
│       │   └── presentation/           # WelcomeScreen dan ilustrasi
│       │
│       ├── auth/                       # Modul autentikasi pengguna
│       │   ├── domain/                 # User/session entities, repo interfaces, use cases
│       │   ├── data/                   # SecureStore, datasource, models, repo implementations
│       │   └── presentation/           # AuthScreen, components, Zustand store
│       │
│       ├── quiz/                       # Modul kuis rekomendasi metode budgeting
│       │   ├── domain/                 # QuizAnswer, persona entities, dan use cases
│       │   ├── data/                   # Datasource dan model quiz
│       │   └── presentation/           # QuizScreen, components, Zustand store
│       │
│       ├── budget/                     # Modul Auto-Budget Setup & Dashboard Limit
│       │   ├── domain/                 # Entities (Budget, CategoryLimit), Repo Interfaces, UseCases (GenerateAutoBudget)
│       │   ├── data/                   # DataSources (SQLite), Models, Repo Implementations
│       │   └── presentation/           # Screens (DashboardScreen, BudgetPreviewScreen), Components, Zustand Store
│       │
│       ├── transactions/               # Modul Core Cashflow Tracker & Impulse Detector
│       │   ├── domain/                 # Entities (Transaction + isImpulsive), Repo Interfaces, UseCases
│       │   ├── data/                   # DataSources (SQLite), Models, Repo Implementations
│       │   └── presentation/           # Screens (TransactionsScreen), BottomSheets (AddTransactionSheet), Zustand Store
│       │
│       ├── goals/                      # Modul Sinking Funds & Financial Targets
│       │   ├── domain/                 # Entities (Goal), Repo Interfaces, UseCases (CalculateRoutineContribution)
│       │   ├── data/                   # DataSources (SQLite), Models, Repo Implementations
│       │   └── presentation/           # Screens (GoalsScreen), BottomSheets (CreateGoalSheet), Zustand Store
│       │
│       ├── gold/                       # Modul Arthana Vault (Gold Tracker & Price Chart)
│       │   ├── domain/                 # Entities (GoldAsset, GoldPrice), Repo Interfaces, UseCases (CalculateGoldPortfolio)
│       │   ├── data/                   # DataSources (SQLite & Axios Gold Price API), Models, Repo Implementations
│       │   └── presentation/           # Screens (GoldVaultScreen), BottomSheets (AddGoldSheet), Zustand Store
│       │
│       └── insight/                    # Modul Weekly Financial Insight (Arthana Pulse)
│           ├── domain/                 # Entities (WeeklyInsight), Repo Interfaces, UseCases (GenerateWeeklyInsight)
│           ├── data/                   # DataSources, Models, Repo Implementations
│           └── presentation/           # Components (PulseInsightCard), Zustand Store
│
├── global.css                          # Konfigurasi Tailwind CSS, Uniwind, & HeroUI Native
└── tsconfig.json                       # Konfigurasi Path Aliases (@core, @shared, @features)
```

### Aturan Ketergantungan (*Dependency Rule*)

1. **`domain`** tidak boleh mengimpor apa pun dari `data`, `presentation`, `react-native`, atau `heroui-native`.

2. **`data`** hanya bergantung pada `domain` untuk mengimplementasikan kontrak *repository* menggunakan `expo-sqlite`, `expo-secure-store`, dan `axios`.

3. **`presentation`** berinteraksi dengan `domain` melalui *Use Cases* yang di-inject menggunakan **Zustand**.

## 🚀 Cara Menjalankan Proyek

### Prasyarat

* Node.js (v18 atau lebih baru)

* Aplikasi **Expo Go** di perangkat iOS/Android atau Android Studio / Xcode Simulator

### Langkah Instalasi

1. **Clone repositori ini**

   ```bash
   git clone https://github.com/username/arthana.git
   cd arthana
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   *(Jika menginstal pustaka inti secara terpisah, gunakan perintah berikut)*:

   ```bash
   npx expo install expo-sqlite expo-secure-store expo-image react-native-screens @lodev09/react-native-true-sheet
   npm install zustand axios react-native-logs
   ```

3. **Jalankan server pengembangan Expo**

   ```bash
   npm run start
   ```

4. **Buka aplikasi**

   * Scan QR code yang muncul di terminal menggunakan aplikasi **Expo Go** (Android/iOS).

   * Atau tekan `a` untuk membuka di Android Emulator / `i` untuk iOS Simulator.

> **Catatan:** HeroUI Native difokuskan untuk platform mobile (**iOS & Android**) dan tidak direkomendasikan dijalankan pada target Expo Web.

## 🗺️ Roadmap (V2)

* [ ] Integrasi baca mutasi rekening otomatis (Open Banking API)

* [ ] Sistem *gamification* lanjutan (*points & rewards* saat berhasil menahan pengeluaran impulsif)

* [ ] Ekspor laporan keuangan bulanan ke PDF/CSV

## 🔒 Lisensi

**Proprietary & Confidential — All Rights Reserved.**  
© 2026 Arthana. Seluruh kode sumber, desain, dan aset di dalam repositori ini bersifat tertutup dan rahasia. Dilarang menyalin, memodifikasi, mendistribusikan, atau menggunakan bagian mana pun dari proyek ini tanpa izin tertulis resmi dari pemilik proyek.
