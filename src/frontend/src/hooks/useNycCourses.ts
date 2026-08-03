import { createActor } from "@/backend";
import type { Course } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NycCourse {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  borough: string;
  location: string;
  registrationUrl: string;
  contactPhone: string;
  courseType: string;
  isExpired: boolean;
  isNew: boolean;
  addedAt: string;
}

// ─── Mapping: backend Course → frontend NycCourse ──────────────────────────

export function mapBackendCourseToNycCourse(course: Course): NycCourse {
  return {
    id: String(course.id),
    title: course.title,
    description: course.description,
    startDate: course.startDate,
    endDate: course.endDate,
    borough: course.borough,
    location: course.location,
    registrationUrl: course.registrationUrl,
    contactPhone: course.contactPhone,
    courseType: course.courseType,
    isExpired: course.isExpired,
    isNew: course.isNew,
    addedAt: new Date(Number(course.addedAt)).toISOString(),
  };
}

// ─── Seed data: mirrors what backend will return so UI renders immediately ──

const SEED_COURSES: NycCourse[] = [
  {
    id: "seed-1",
    title: "Launch Your Online Business",
    description:
      "A 15-hour course covering digital marketing, branding, website development, SEO, e-commerce, and key performance indicators. Perfect for owners ready to build or grow an online presence.",
    startDate: "2026-07-15",
    endDate: "2026-07-29",
    borough: "Manhattan",
    location: "110 William Street, 7th Floor, New York, NY 10038",
    registrationUrl:
      "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    contactPhone: "888-SBS-4NYC",
    courseType: "Digital Marketing",
    isExpired: false,
    isNew: false,
    addedAt: "2026-06-01T00:00:00Z",
  },
  {
    id: "seed-2",
    title: "FastTrac Business Planning",
    description:
      "A structured program that takes you from initial business concept to a working business plan. Ideal for aspiring entrepreneurs who need structured guidance before launch.",
    startDate: "2026-08-01",
    endDate: "2026-08-15",
    borough: "Brooklyn",
    location: "9 Bond Street, Suite 702, Brooklyn, NY 11201",
    registrationUrl:
      "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    contactPhone: "888-SBS-4NYC",
    courseType: "Business Planning",
    isExpired: false,
    isNew: false,
    addedAt: "2026-06-01T00:00:00Z",
  },
  {
    id: "seed-3",
    title: "Free Live Online Business Courses",
    description:
      "Frequently offered free online courses across all aspects of running a small business. Sessions are live and interactive: not pre-recorded.",
    startDate: "2026-07-10",
    endDate: "2026-07-24",
    borough: "Online",
    location: "Live Online",
    registrationUrl:
      "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    contactPhone: "888-SBS-4NYC",
    courseType: "Online",
    isExpired: false,
    isNew: true,
    addedAt: "2026-06-20T00:00:00Z",
  },
  {
    id: "seed-4",
    title: "NITE School: Evening Business Education",
    description:
      "Evening business education designed for working owners who cannot attend daytime sessions. Covers core business skills including finance, operations, and customer acquisition.",
    startDate: "2026-06-01",
    endDate: "2026-06-15",
    borough: "Queens",
    location: "120-55 Queens Blvd, Suite 309, Kew Gardens, NY 11424",
    registrationUrl:
      "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    contactPhone: "888-SBS-4NYC",
    courseType: "Evening Classes",
    isExpired: true,
    isNew: false,
    addedAt: "2026-05-15T00:00:00Z",
  },
  {
    id: "seed-5",
    title: "Courses in Spanish: Emprendimiento",
    description:
      "NYC SBS offers select courses in Spanish so that language is never a barrier to learning. Covers business planning, financing, and marketing en espanol.",
    startDate: "2026-08-05",
    endDate: "2026-08-19",
    borough: "Bronx",
    location: "1 Fordham Plaza, Suite 901, Bronx, NY 10458",
    registrationUrl:
      "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    contactPhone: "888-SBS-4NYC",
    courseType: "Multilingual",
    isExpired: false,
    isNew: true,
    addedAt: "2026-06-22T00:00:00Z",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getCourseBackend(actor: unknown) {
  return actor as {
    fetchCourses(): Promise<void>;
    getCourses(): Promise<Course[]>;
    getUpcomingCourses(): Promise<Course[]>;
    getExpiredCourses(): Promise<Course[]>;
    getLastUpdated(): Promise<bigint>;
  };
}

// ─── Hooks ───────────────────────────────────────────────────────────────────

export function useNycCourses() {
  const { actor, isFetching } = useActor(createActor);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const query = useQuery<NycCourse[]>({
    queryKey: ["nyc-courses"],
    queryFn: async () => {
      if (!actor) return SEED_COURSES;
      try {
        const backend = getCourseBackend(actor);
        const [result, ts] = await Promise.all([
          backend.getCourses(),
          backend.getLastUpdated(),
        ]);
        setLastUpdated(new Date(Number(ts)).toISOString());
        return result.length > 0
          ? result.map(mapBackendCourseToNycCourse)
          : SEED_COURSES;
      } catch {
        return SEED_COURSES;
      }
    },
    enabled: !isFetching,
    initialData: SEED_COURSES,
    staleTime: 60_000,
  });

  return { ...query, lastUpdated };
}

export function useUpcomingNycCourses() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<NycCourse[]>({
    queryKey: ["nyc-courses", "upcoming"],
    queryFn: async () => {
      if (!actor) return SEED_COURSES.filter((c) => !c.isExpired);
      try {
        const backend = getCourseBackend(actor);
        const result = await backend.getUpcomingCourses();
        return result.length > 0
          ? result.map(mapBackendCourseToNycCourse)
          : SEED_COURSES.filter((c) => !c.isExpired);
      } catch {
        return SEED_COURSES.filter((c) => !c.isExpired);
      }
    },
    enabled: !isFetching,
    initialData: SEED_COURSES.filter((c) => !c.isExpired),
    staleTime: 60_000,
  });
}

export function useExpiredNycCourses() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<NycCourse[]>({
    queryKey: ["nyc-courses", "expired"],
    queryFn: async () => {
      if (!actor) return SEED_COURSES.filter((c) => c.isExpired);
      try {
        const backend = getCourseBackend(actor);
        const result = await backend.getExpiredCourses();
        return result.length > 0
          ? result.map(mapBackendCourseToNycCourse)
          : SEED_COURSES.filter((c) => c.isExpired);
      } catch {
        return SEED_COURSES.filter((c) => c.isExpired);
      }
    },
    enabled: !isFetching,
    initialData: SEED_COURSES.filter((c) => c.isExpired),
    staleTime: 60_000,
  });
}

export function useFetchCourses() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();

  return useMutation({
    mutationKey: ["nyc-courses", "fetch"],
    mutationFn: async () => {
      if (!actor) throw new Error("Backend actor not available");
      const backend = getCourseBackend(actor);
      await backend.fetchCourses();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["nyc-courses"] });
    },
  });
}
