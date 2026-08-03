import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { NycCourse } from "@/hooks/useNycCourses";
import {
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
  RefreshCw,
} from "lucide-react";

interface NycCourseSectionProps {
  courses: NycCourse[];
  lastUpdated: string | null;
  onRefresh: () => void;
  isRefreshing: boolean;
  searchQuery: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTimestamp(iso: string | null): string {
  if (!iso) return "Never";
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function CourseCard({
  course,
  index,
}: {
  course: NycCourse;
  index: number;
}) {
  return (
    <div
      data-ocid={`nyc_resources.courses.item.${index + 1}`}
      className={`card-course flex flex-col gap-3 ${course.isExpired ? "expired" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            {course.isExpired && (
              <span
                className="badge-expired"
                data-ocid={`nyc_resources.courses.item.${index + 1}.expired_badge`}
              >
                <Clock size={11} />
                Expired
              </span>
            )}
            {course.isNew && !course.isExpired && (
              <span
                className="badge-new"
                data-ocid={`nyc_resources.courses.item.${index + 1}.new_badge`}
              >
                New
              </span>
            )}
            <Badge
              variant="outline"
              className="text-xs border-primary/30 text-primary"
            >
              {course.courseType}
            </Badge>
          </div>
          <h3 className="font-display font-semibold text-base text-foreground leading-snug">
            {course.title}
          </h3>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {course.description}
      </p>

      <div className="space-y-1.5 text-sm text-muted-foreground">
        <p className="flex items-center gap-1.5">
          <Calendar size={13} className="text-primary/60 shrink-0" />
          {formatDate(course.startDate)}: {formatDate(course.endDate)}
        </p>
        <p className="flex items-start gap-1.5">
          <MapPin size={13} className="text-primary/60 shrink-0 mt-0.5" />
          <span className="break-words">{course.location}</span>
        </p>
        <p className="flex items-center gap-1.5">
          <Phone size={13} className="text-primary/60 shrink-0" />
          {course.contactPhone}
        </p>
      </div>

      <a
        href={course.registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid={`nyc_resources.courses.item.${index + 1}.link`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200 pt-2 border-t border-border/60"
      >
        Register on Eventbrite
        <ExternalLink size={13} />
      </a>
    </div>
  );
}

export function NycCourseSection({
  courses,
  lastUpdated,
  onRefresh,
  isRefreshing,
  searchQuery,
}: NycCourseSectionProps) {
  const filtered = searchQuery.trim()
    ? courses.filter((c) => {
        const q = searchQuery.toLowerCase();
        return (
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.courseType.toLowerCase().includes(q) ||
          c.borough.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q)
        );
      })
    : courses;

  return (
    <section data-ocid="nyc_resources.courses.section">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Calendar size={22} className="text-primary" />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-foreground mb-1">
              NYC SBS Business Courses
            </h2>
            <p className="text-sm text-muted-foreground">
              Free business courses from NYC Small Business Services: updated
              weekly from the official NYC Open Data catalog.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-last-updated hidden sm:inline">
            Last updated: {formatTimestamp(lastUpdated)}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={onRefresh}
            disabled={isRefreshing}
            data-ocid="nyc_resources.courses.refresh_button"
            className="gap-2"
          >
            <RefreshCw
              size={14}
              className={isRefreshing ? "animate-spin-slow" : ""}
            />
            {isRefreshing ? "Refreshing…" : "Refresh Now"}
          </Button>
        </div>
      </div>

      <span className="text-last-updated sm:hidden block mb-4">
        Last updated: {formatTimestamp(lastUpdated)}
      </span>

      {filtered.length === 0 ? (
        <div
          data-ocid="nyc_resources.courses.empty_state"
          className="text-center py-12 text-muted-foreground text-sm bg-muted/30 rounded-2xl border border-border"
        >
          <Calendar
            size={32}
            className="mx-auto mb-3 text-muted-foreground/40"
          />
          <p className="font-medium text-foreground mb-1">No courses found</p>
          <p>
            Try adjusting your search or check back after the next weekly
            update.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
