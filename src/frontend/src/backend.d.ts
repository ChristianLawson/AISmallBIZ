import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<HttpHeader>;
}
export interface HttpRequestResult {
    status: bigint;
    body: Uint8Array;
    headers: Array<HttpHeader>;
}
export interface OutageRecord {
    id: OutageId;
    provider: string;
    date: string;
    durationHours: number;
    nycImpactDescription: string;
    regionScope: string;
    incidentType: string;
}
export interface ProviderHealthStatus {
    provider: string;
    errorMessage?: string;
    isHealthy?: boolean;
    statusUrl: string;
    lastCheckedAt?: string;
}
export interface Course {
    id: CourseId;
    title: string;
    expiresAt: Timestamp;
    endDate: string;
    isExpired: boolean;
    fetchedAt: Timestamp;
    borough: string;
    description: string;
    language: string;
    addedAt: Timestamp;
    category: string;
    isNew: boolean;
    registrationUrl: string;
    courseType: string;
    location: string;
    contactPhone: string;
    startDate: string;
}
export interface GuideFilter {
    topic?: Topic;
    keyword?: string;
    businessTypeTag?: string;
}
export interface TransformationInput {
    context: Uint8Array;
    response: HttpRequestResult;
}
export interface Cell {
    value: Value;
    name: string;
}
export type CourseId = bigint;
export interface Contribution {
    id: ContributionId;
    status: ContributionStatus;
    title: string;
    topic: Topic;
    content: string;
    authorName: string;
    rejectionReason?: string;
    submittedAt: Timestamp;
    reviewedAt?: Timestamp;
    businessContext: string;
    authorPrincipal: Principal;
}
export type Value = {
    __kind__: "int";
    int: bigint;
} | {
    __kind__: "nat";
    nat: bigint;
} | {
    __kind__: "float";
    float: number;
} | {
    __kind__: "bool";
    bool: boolean;
} | {
    __kind__: "null";
    null: null;
} | {
    __kind__: "text";
    text: string;
};
export type ContributionId = bigint;
export interface ContributionInput {
    title: string;
    topic: Topic;
    content: string;
    authorName: string;
    businessContext: string;
}
export interface ProviderStats {
    provider: string;
    totalOutages: bigint;
    averageDurationHours: number;
    mostCommonIncidentType: string;
}
export interface Guide {
    id: GuideId;
    title: string;
    topic: Topic;
    content: string;
    isPublished: boolean;
    businessTypeTags: Array<string>;
    authorName: string;
    authorType: AuthorType;
    publishedAt?: Timestamp;
    recommendedNext: Array<GuideId>;
    excerpt: string;
    readTimeMinutes: bigint;
}
export interface HttpHeader {
    value: string;
    name: string;
}
export interface GuideInput {
    title: string;
    topic: Topic;
    content: string;
    businessTypeTags: Array<string>;
    authorName: string;
    recommendedNext: Array<GuideId>;
    excerpt: string;
    readTimeMinutes: bigint;
}
export interface UserApprovalInfo {
    status: ApprovalStatus;
    principal: Principal;
}
export interface Result {
    hasMore: boolean;
    rows: Array<Array<Cell>>;
}
export interface OutageFilter {
    provider?: string;
    endDate?: string;
    incidentType?: string;
    startDate?: string;
}
export interface AdminStats {
    totalPublished: bigint;
    recentGuides: Array<Guide>;
    pendingContributions: bigint;
}
export type OutageId = bigint;
export type GuideId = bigint;
export interface BusinessProfile {
    teamSize: TeamSize;
    signupDate?: bigint;
    name?: string;
    subscriptionTier?: SubscriptionTier;
    businessName: string;
    email?: string;
    goals: Array<Goal>;
    industryType: IndustryType;
    location: string;
}
export enum AuthorType {
    admin = "admin",
    community = "community"
}
export enum ContributionStatus {
    pending = "pending",
    approved = "approved",
    rejected = "rejected"
}
export enum Goal {
    businessPlanning = "businessPlanning",
    socialAds = "socialAds",
    googleMaps = "googleMaps"
}
export enum IndustryType {
    retail = "retail",
    other = "other",
    deli = "deli",
    consulting = "consulting",
    salon = "salon",
    onlineServices = "onlineServices",
    newBusiness = "newBusiness",
    poolHall = "poolHall",
    restaurant = "restaurant"
}
export enum SubscriptionTier {
    free = "free",
    paid = "paid"
}
export enum TeamSize {
    solo = "solo",
    small = "small",
    medium = "medium"
}
export enum Topic {
    businessPlanning = "businessPlanning",
    socialAds = "socialAds",
    branding = "branding",
    googleMaps = "googleMaps",
    techUpgrades = "techUpgrades"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    approveContribution(id: ContributionId): Promise<boolean>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createGuide(input: GuideInput): Promise<Guide>;
    deleteGuide(id: GuideId): Promise<boolean>;
    execute(qJson: string): Promise<Result>;
    fetchCourses(): Promise<void>;
    fetchProviderHealthStatus(): Promise<Array<ProviderHealthStatus>>;
    getAdminStats(): Promise<AdminStats>;
    getBusinessProfile(): Promise<BusinessProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCourses(): Promise<Array<Course>>;
    getExpiredCourses(): Promise<Array<Course>>;
    getFeaturedGuides(): Promise<Array<Guide>>;
    getGuide(id: GuideId): Promise<Guide | null>;
    getLastUpdated(): Promise<Timestamp>;
    getMyContributions(): Promise<Array<Contribution>>;
    getPersonalizedRecommendations(): Promise<Array<Guide>>;
    getProviderHealthStatus(): Promise<Array<ProviderHealthStatus>>;
    getProviderStats(): Promise<Array<ProviderStats>>;
    getUpcomingCourses(): Promise<Array<Course>>;
    isCallerAdmin(): Promise<boolean>;
    isCallerApproved(): Promise<boolean>;
    listApprovals(): Promise<Array<UserApprovalInfo>>;
    listGuides(filter: GuideFilter): Promise<Array<Guide>>;
    listOutages(filter: OutageFilter): Promise<Array<OutageRecord>>;
    listPendingContributions(): Promise<Array<Contribution>>;
    rejectContribution(id: ContributionId, reason: string | null): Promise<boolean>;
    requestApproval(): Promise<void>;
    saveBusinessProfile(profile: BusinessProfile): Promise<void>;
    schema(): Promise<string>;
    setApproval(user: Principal, status: ApprovalStatus): Promise<void>;
    setGuidePublished(id: GuideId, published: boolean): Promise<boolean>;
    submitContribution(input: ContributionInput): Promise<Contribution>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
    updateGuide(id: GuideId, input: GuideInput): Promise<boolean>;
}
