import { useState, useEffect } from "react";

const ACCESS_CODE = "SKTEAM2026";
const AUTHORIZED_EMAILS = [];
const STORAGE_KEY = "sk_team_access";

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkAccess(email, code) {
  if (code.trim().toUpperCase() !== ACCESS_CODE.toUpperCase()) {
    return { ok: false, error: "Code d'acces incorrect." };
  }
  if (!isEmailValid(email)) {
    return { ok: false, error: "Email invalide." };
  }
  if (AUTHORIZED_EMAILS.length > 0 && !AUTHORIZED_EMAILS.includes(email.toLowerCase())) {
    return { ok: false, error: "Cet email n'est pas autorise. Contactez le coach." };
  }
  return { ok: true };
}

export function useAccess() {
  const [granted, setGranted] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const { email, code, expires } = JSON.parse(saved);
        if (expires > Date.now()) {
          const result = checkAccess(email, code);
          if (result.ok) { setGranted(true); setUserEmail(email); }
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch (e) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const login = (email, code) => {
    const result = checkAccess(email, code);
    if (result.ok) {
      const expires = Date.now() + 30 * 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, code, expires }));
      setGranted(true);
      setUserEmail(email);
    }
    return result;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setGranted(false);
    setUserEmail("");
  };

  return { granted, userEmail, login, logout };
}
