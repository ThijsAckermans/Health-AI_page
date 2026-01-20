import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import {
  SiteSettings,
  Navigation,
  HomeContent,
  AboutContent,
  NewsPost,
  Publication,
  OutreachContent,
  Partner,
  WorkPackage,
  ContactContent,
  PatientsContent,
  LegalPage,
} from "@/interfaces/content";

const contentDirectory = join(process.cwd(), "_content");

// Helper to read JSON files
function readJsonFile<T>(filePath: string): T {
  const fullPath = join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents) as T;
}

// Helper to read markdown files with frontmatter
function readMarkdownFile(filePath: string): { data: Record<string, unknown>; content: string } {
  const fullPath = join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}

// Helper to get all files in a directory
function getFilesInDirectory(dirPath: string): string[] {
  const fullPath = join(contentDirectory, dirPath);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath).filter((file) => file.endsWith(".md"));
}

// Site Settings
export function getSettings(): SiteSettings {
  return readJsonFile<SiteSettings>("settings.json");
}

// Navigation
export function getNavigation(): Navigation {
  const nav = readJsonFile<Navigation>("navigation.json");
  nav.mainMenu.sort((a, b) => a.order - b.order);
  return nav;
}

// Home Page
export function getHomeContent(): HomeContent {
  return readJsonFile<HomeContent>("home.json");
}

// About Page
export function getAboutContent(): AboutContent {
  return readJsonFile<AboutContent>("about.json");
}

// News
export function getNewsPostSlugs(): string[] {
  return getFilesInDirectory("news");
}

export function getNewsPostBySlug(slug: string): NewsPost {
  const realSlug = slug.replace(/\.md$/, "");
  const { data, content } = readMarkdownFile(`news/${realSlug}.md`);
  return { ...data, slug: realSlug, content } as NewsPost;
}

export function getAllNewsPosts(): NewsPost[] {
  const slugs = getNewsPostSlugs();
  const posts = slugs
    .map((slug) => getNewsPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

// Publications
export function getPublicationSlugs(): string[] {
  return getFilesInDirectory("publications");
}

export function getPublicationBySlug(slug: string): Publication {
  const realSlug = slug.replace(/\.md$/, "");
  const { data, content } = readMarkdownFile(`publications/${realSlug}.md`);
  return { ...data, slug: realSlug, abstract: data.abstract || content } as Publication;
}

export function getAllPublications(): Publication[] {
  const slugs = getPublicationSlugs();
  const publications = slugs
    .map((slug) => getPublicationBySlug(slug))
    .sort((pub1, pub2) => (pub1.year > pub2.year ? -1 : 1));
  return publications;
}

// Outreach
export function getOutreachContent(): OutreachContent {
  return readJsonFile<OutreachContent>("outreach.json");
}

// Partners
export function getPartnerSlugs(): string[] {
  return getFilesInDirectory("partners");
}

export function getPartnerBySlug(slug: string): Partner {
  const realSlug = slug.replace(/\.md$/, "");
  const { data } = readMarkdownFile(`partners/${realSlug}.md`);
  return { ...data, slug: realSlug } as Partner;
}

export function getAllPartners(): Partner[] {
  const slugs = getPartnerSlugs();
  const partners = slugs
    .map((slug) => getPartnerBySlug(slug))
    .sort((p1, p2) => p1.order - p2.order);
  return partners;
}

// Work Packages
export function getWorkPackageSlugs(): string[] {
  return getFilesInDirectory("workpackages");
}

export function getWorkPackageBySlug(slug: string): WorkPackage {
  const realSlug = slug.replace(/\.md$/, "");
  const { data } = readMarkdownFile(`workpackages/${realSlug}.md`);
  return { ...data, slug: realSlug } as WorkPackage;
}

export function getAllWorkPackages(): WorkPackage[] {
  const slugs = getWorkPackageSlugs();
  const workPackages = slugs
    .map((slug) => getWorkPackageBySlug(slug))
    .sort((wp1, wp2) => wp1.number - wp2.number);
  return workPackages;
}

// Contact
export function getContactContent(): ContactContent {
  return readJsonFile<ContactContent>("contact.json");
}

// Patients
export function getPatientsContent(): PatientsContent {
  return readJsonFile<PatientsContent>("patients.json");
}

// Legal Pages
export function getLegalPage(page: "privacy" | "disclaimer" | "cookies"): LegalPage {
  const { data, content } = readMarkdownFile(`${page}.md`);
  return {
    title: data.title as string,
    lastUpdated: data.lastUpdated as string,
    content,
  };
}
