# 🧪 Data Alchemist – Smart Data Validator & Rule Engine

> 🚀 Built with Next.js 15 + AG Grid + Zod + Tailwind  
> 🔧 Role: **AI/ML Product Engineer** | 🧠 Bonus: Natural-Language Rule Builder (No API Key Needed)

---

## 🔍 Overview

**Data Alchemist** is a no-code web app to clean, validate, and rule-check CSV/XLSX datasets.  
It lets users:

- Upload datasets  
- Highlight and remove invalid rows  
- Define rules (manually or with text input)  
- Prioritize rules  
- Export clean data + rule logic as `.csv`, `.json`, or `.zip`  

> 💡 Designed as a technical showcase for SDE, Data, or AI/ML engineering roles.

---

## 🎯 Features

✅ Upload `.csv` / `.xlsx` files  
✅ Schema-based row validation using **Zod**  
✅ Visual data grid using **AG Grid v34**  
✅ **Manual rule builder** with:
- Rule types: `no-collab`, `must-follow`, `skill-match`  
- Weight slider (1–10)

✅ **Natural Language Rule Generator**
- Example: `John must follow Alice with priority 8`  
- Generates structured JSON rule **without OpenAI**

✅ Exports:
- 🧼 `clean.csv` – valid rows only  
- 📋 `rules.json` – all rules with priorities  
- 📦 `bundle.zip` – includes both above  

✅ Legacy AG Grid theming (no Quartz conflict)  
✅ Fully offline – no `.env` or API key needed  

---

## 🧠 NLP Rule Generator Example

**Input:**

```text
Alice must follow Bob with priority 9
src/
├── app/                 # Main page.tsx + layout
├── components/
│   ├── FileUploader.tsx  # Upload + parse + validate
│   ├── GridView.tsx      # AG Grid setup
│   └── RuleBuilder.tsx   # Manual + NLP rule UI
├── lib/
│   ├── schema.ts         # Zod schema for row validation
│   └── download.ts       # CSV, JSON, and ZIP exporters
└── pages/api/
    └── nl-rule.ts        # Fake NLP parser (no OpenAI needed)
# 1. Clone
git clone https://github.com/<your-username>/data-alchemist.git
cd data-alchemist

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# Open http://localhost:3000

---

### ✅ What To Do Now:

1. Replace `README.md` in your project root with the file above  
2. Commit changes:

```bash
git add README.md
git commit -m "📝 Updated README with full feature list + role info"
git push
