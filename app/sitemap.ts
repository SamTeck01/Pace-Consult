import type { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paceconsult.ng";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/properties`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/properties/land`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/properties/homes`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/properties/apartments`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/properties/townhomes`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${baseUrl}/properties/commercial`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
  ];

  try {
    const supabase = await createClient();
    const { data: properties } = await supabase
      .from("properties")
      .select("type, slug, updated_at");

    const propertyUrls: MetadataRoute.Sitemap = (properties ?? []).map((p) => ({
      url: `${baseUrl}/properties/${p.type}/${p.slug}`,
      lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    return [...staticPages, ...propertyUrls];
  } catch {
    return staticPages;
  }
}
