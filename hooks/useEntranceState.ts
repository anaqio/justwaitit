"use client";

import { useState, useEffect } from "react";

export type EntranceState = "loading" | "intro" | "morphing" | "complete" | "skipped";

const COOKIE_NAME = "entrance_seen";
const COOKIE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

function setCookie(name: string, value: string, maxAge: number) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${value}; max-age=${maxAge / 1000}; path=/; SameSite=Lax`;
}

export function useEntranceState() {
  const [state, setState] = useState<EntranceState>("loading");

  useEffect(() => {
    const seen = getCookie(COOKIE_NAME);
    if (seen === "true") {
      setState("complete");
    } else {
      setState("intro");
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && (state === "intro" || state === "morphing")) {
        skip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state]);

  const skip = () => {
    setState("skipped");
    setCookie(COOKIE_NAME, "true", COOKIE_DURATION);
  };

  const complete = () => {
    setState("complete");
    setCookie(COOKIE_NAME, "true", COOKIE_DURATION);
  };

  const startMorphing = () => setState("morphing");

  return { state, skip, complete, startMorphing };
}
