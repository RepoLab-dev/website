import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PRODUCT_NAME = "RepoLab";
export const ORG_NAME = "RepoLabs";
export const SITE_NAME = PRODUCT_NAME;
export const SITE_URL = "https://repolab.dev";
export const ORG_HOME = "https://repolabs.com";
export const DOCS_URL = "https://docs.repolab.dev";
export const GITHUB_ORG = "https://github.com/repolab-dev";
export const SUPPORT_EMAIL = "hello@repolab.dev";
