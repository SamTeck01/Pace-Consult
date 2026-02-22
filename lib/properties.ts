import { createClient } from "./supabase/server";
import type { Property } from "./types";

export async function getFeaturedProperties(limit = 6): Promise<Property[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) return [];
  return (data as Property[]) ?? [];
  } catch {
    return [];
  }
}

export async function getProperties(filters: {
  type?: string;
  city?: string;
  bedrooms?: string;
  transaction?: string;
}): Promise<Property[]> {
  try {
    const supabase = await createClient();
    let query = supabase.from("properties").select("*").order("created_at", { ascending: false });

  if (filters.type) query = query.eq("type", filters.type);
  if (filters.transaction) query = query.eq("transaction", filters.transaction);
  if (filters.city) query = query.ilike("city", `%${filters.city}%`);
  if (filters.bedrooms) {
    const min = parseInt(filters.bedrooms, 10);
    if (!Number.isNaN(min)) query = query.gte("bedrooms", min);
  }

  const { data, error } = await query;
  if (error) return [];
  return (data as Property[]) ?? [];
  } catch {
    return [];
  }
}

export async function getPropertyBySlug(
  type: string,
  slug: string
): Promise<Property | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("type", type)
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return data as Property;
  } catch {
    return null;
  }
}
