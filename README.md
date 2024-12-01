# next-prisma-sample

### 1. Setup
```bash
cp .env.example .env

npm install
```

### 2. Start Database
```bash
docker compose up -d
```

### 3. Prepare Data
```bash
npx prisma db seed
```

### 4. Start Server
```bash
npm run dev
```