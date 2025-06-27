"use client";
import { useState } from "react";
import FileUploader from "@/components/FileUploader";
import RuleBuilder, { Rule } from "@/components/RuleBuilder";
import { downloadCSV, downloadJSON, downloadZIP } from "@/lib/download";

export default function Home() {
  const [rows, setRows] = useState<any[]>([]);
  const [rules, setRules] = useState<Rule[]>([]);

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">📂 Data Alchemist</h1>

      <FileUploader onData={(parsed) => setRows(parsed)} />

      <fieldset disabled={rows.length === 0} className="disabled:opacity-50">
        <RuleBuilder
          onAddRule={(rule) => setRules((prev) => [...prev, rule])}
        />
      </fieldset>

      <div className="border p-4 bg-gray-50 rounded">
        <h2 className="font-semibold mb-2">📋 Current Rules</h2>
        <ul className="space-y-1">
          {rules.map((r, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="flex-1">
                [{r.type}] {r.entity1} – {r.entity2}
              </span>
              <input
                type="range"
                min={1}
                max={10}
                value={r.weight}
                onChange={(e) => {
                  const w = Number(e.target.value);
                  setRules((prev) =>
                    prev.map((rule, idx) =>
                      idx === i ? { ...rule, weight: w } : rule
                    )
                  );
                }}
              />
              <span className="w-6 text-right">{r.weight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3">
        <button
          className="bg-emerald-600 text-white px-3 py-1 rounded disabled:opacity-40"
          onClick={() => downloadCSV("clean.csv", rows)}
          disabled={rows.length === 0}
        >
          ⬇️ Download clean.csv
        </button>
        <button
          className="bg-indigo-600 text-white px-3 py-1 rounded disabled:opacity-40"
          onClick={() => downloadJSON("rules.json", rules)}
          disabled={rules.length === 0}
        >
          ⬇️ Download rules.json
        </button>
        <button
          className="bg-orange-600 text-white px-3 py-1 rounded disabled:opacity-40"
          onClick={() => downloadZIP(rows, rules)}
          disabled={rows.length === 0 || rules.length === 0}
        >
          📦 Bundle ZIP
        </button>
      </div>
    </main>
  );
}
