import { Rating } from "@/interfaces";

export function ratingScore(rating: Rating): number {
  return rating?.average ? Math.floor(rating?.average / 2) : 0;
}

export function formatDurationFromMinutes(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const formattedHours = hours > 0 ? `${hours}h` : "";
  const formattedMinutes = minutes > 0 ? `${minutes}m` : "";

  return formattedHours + formattedMinutes;
}

export function sanitizeHtml(htmlString: string) {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
}
export const stars = Array.from({ length: 5 }, (_, i) => i + 1);
