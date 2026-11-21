# Feature-based Clean Architecture

Setiap fitur memiliki tiga layer sendiri:

```text
src/features/<feature>/
├── data/          # Datasource, DTO/model, dan implementasi repository
├── domain/        # Entity, kontrak repository, dan use case murni
└── presentation/  # Screen, komponen fitur, dan store
```

Fitur yang disiapkan:

- `welcome`
- `auth`
- `quiz`
- `budget`
- `transactions`
- `goals`
- `gold`
- `insight`

`app/(onboarding)` adalah route group untuk mengelompokkan navigasi, bukan feature bisnis. Screen di dalamnya mengarah ke feature `welcome`, `auth`, dan `quiz`.

Aturan dependensi:

1. `domain` tidak mengimpor `data`, `presentation`, React Native, atau Expo.
2. `data` boleh mengimpor `domain` untuk mengimplementasikan kontrak repository.
3. `presentation` boleh mengimpor `domain` dan komponen shared, tetapi tidak mengakses datasource secara langsung.
4. `app/` hanya berisi route Expo Router dan adapter menuju screen fitur.
