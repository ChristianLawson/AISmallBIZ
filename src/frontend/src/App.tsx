import { Layout } from "@/components/Layout";
import SeoMeta from "@/components/SeoMeta";
import { Toaster } from "@/components/ui/sonner";
import AIJobGuidesHub from "@/pages/AIJobGuidesHub";
import AISearchPrepPage from "@/pages/AISearchPrepPage";
import AITrainingPage from "@/pages/AITrainingPage";
import About from "@/pages/About";
import Admin from "@/pages/Admin";
import AskAQuestion from "@/pages/AskAQuestion";
import BakeryGuide from "@/pages/BakeryGuide";
import BoutiqueGuide from "@/pages/BoutiqueGuide";
import BrandingBestPractices from "@/pages/BrandingBestPractices";
import CleaningServiceGuide from "@/pages/CleaningServiceGuide";
import Contribute from "@/pages/Contribute";
import Dashboard from "@/pages/Dashboard";
import FAQ from "@/pages/FAQ";
import FitnessStudioGuide from "@/pages/FitnessStudioGuide";
import GuideDetail from "@/pages/GuideDetail";
import Guides from "@/pages/Guides";
import HiringPage from "@/pages/HiringPage";
import Home from "@/pages/Home";
import HomeServicesPage from "@/pages/HomeServicesPage";
import LearnPage from "@/pages/LearnPage";
import NYCCloudOutageTracker from "@/pages/NYCCloudOutageTracker";
import NYCDeliGuide from "@/pages/NYCDeliGuide";
import NYCRestaurantGuide from "@/pages/NYCRestaurantGuide";
import NYCRetailGuide from "@/pages/NYCRetailGuide";
import NYCSalonGuide from "@/pages/NYCSalonGuide";
import NycResourcesPage from "@/pages/NycResourcesPage";
import Onboarding from "@/pages/Onboarding";
import OnlineSchoolingPage from "@/pages/OnlineSchoolingPage";
import OnlineServicesGuide from "@/pages/OnlineServicesGuide";
import PersonasPage from "@/pages/PersonasPage";
import PizzaShopGuide from "@/pages/PizzaShopGuide";
import PoolHallGuide from "@/pages/PoolHallGuide";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import SocialMediaGuide from "@/pages/SocialMediaGuide";
import StartHerePage from "@/pages/StartHerePage";
import StartYourBusinessGuide from "@/pages/StartYourBusinessGuide";
import TafferAdvice from "@/pages/TafferAdvice";
import TermsOfUse from "@/pages/TermsOfUse";
import UXScenarios from "@/pages/UXScenarios";
import AccountantsGuide from "@/pages/ai-job-guides/AccountantsGuide";
import ContractorsGuide from "@/pages/ai-job-guides/ContractorsGuide";
import DentistsGuide from "@/pages/ai-job-guides/DentistsGuide";
import InsuranceAgentsGuide from "@/pages/ai-job-guides/InsuranceAgentsGuide";
import LawFirmsGuide from "@/pages/ai-job-guides/LawFirmsGuide";
import PlumbersGuide from "@/pages/ai-job-guides/PlumbersGuide";
import RealEstateGuide from "@/pages/ai-job-guides/RealEstateGuide";
import RestaurantsGuide from "@/pages/ai-job-guides/RestaurantsGuide";
import CanvaGuide from "@/pages/tool-guides/CanvaGuide";
import DocuSignGuide from "@/pages/tool-guides/DocuSignGuide";
import GoogleWorkspaceGuide from "@/pages/tool-guides/GoogleWorkspaceGuide";
import HubSpotGuide from "@/pages/tool-guides/HubSpotGuide";
import Microsoft365Guide from "@/pages/tool-guides/Microsoft365Guide";
import PayPalGuide from "@/pages/tool-guides/PayPalGuide";
import QuickBooksGuide from "@/pages/tool-guides/QuickBooksGuide";
import SlackGuide from "@/pages/tool-guides/SlackGuide";
import SquareGuide from "@/pages/tool-guides/SquareGuide";
import StripeGuide from "@/pages/tool-guides/StripeGuide";
import WorkflowDetailPage from "@/pages/workflows/WorkflowDetailPage";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <SeoMeta />
      <Outlet />
      <Toaster richColors position="bottom-right" />
    </>
  ),
});

const aiJobGuidesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-job-guides",
  component: AIJobGuidesHub,
});

const lawFirmsGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-job-guides/law-firms",
  component: LawFirmsGuide,
});

const realEstateGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-job-guides/real-estate",
  component: RealEstateGuide,
});

const plumbersGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-job-guides/plumbers",
  component: PlumbersGuide,
});

const restaurantsGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-job-guides/restaurants",
  component: RestaurantsGuide,
});

const accountantsGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-job-guides/accountants",
  component: AccountantsGuide,
});

const dentistsGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-job-guides/dentists",
  component: DentistsGuide,
});

const contractorsGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-job-guides/contractors",
  component: ContractorsGuide,
});

const insuranceAgentsGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-job-guides/insurance-agents",
  component: InsuranceAgentsGuide,
});

const aiTrainingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-training",
  component: AITrainingPage,
});

const learnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/learn",
  component: LearnPage,
});

const aiSearchPrepRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-search-prep",
  component: AISearchPrepPage,
});

const onlineSchoolingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/online-schooling",
  component: OnlineSchoolingPage,
});

const homeServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home-services",
  component: HomeServicesPage,
});

const hiringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hiring",
  component: HiringPage,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Layout>
      <Home />
    </Layout>
  ),
});

const guidesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/guides",
  component: Guides,
  validateSearch: (
    search: Record<string, unknown>,
  ): {
    topic: string | undefined;
    businessType: string | undefined;
    keyword: string | undefined;
  } => ({
    topic: (search.topic as string | undefined) ?? undefined,
    businessType: (search.businessType as string | undefined) ?? undefined,
    keyword: (search.keyword as string | undefined) ?? undefined,
  }),
});

const guideDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/guides/$id",
  component: GuideDetail,
});

const workflowDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/workflows/$slug",
  component: WorkflowDetailPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const onboardingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/onboarding",
  component: Onboarding,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: Admin,
});

const contributeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contribute",
  component: Contribute,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQ,
});

const tafferAdviceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/taffer-advice",
  component: TafferAdvice,
});

const brandingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/branding",
  component: BrandingBestPractices,
});

const askAQuestionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ask-a-question",
  component: AskAQuestion,
});

const deliGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/deli-guide",
  component: NYCDeliGuide,
});

const retailGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/retail-guide",
  component: NYCRetailGuide,
});

const restaurantGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/restaurant-guide",
  component: NYCRestaurantGuide,
});

const onlineServicesGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/online-services-guide",
  component: OnlineServicesGuide,
});

const salonGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/salon-guide",
  component: NYCSalonGuide,
});

const poolHallGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pool-hall-guide",
  component: PoolHallGuide,
});

const pizzaShopGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pizza-shop-guide",
  component: PizzaShopGuide,
});
const fitnessStudioGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fitness-studio-guide",
  component: FitnessStudioGuide,
});
const bakeryGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bakery-guide",
  component: BakeryGuide,
});

const cleaningServiceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cleaning-service",
  component: CleaningServiceGuide,
});

const boutiqueGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/boutique-guide",
  component: BoutiqueGuide,
});

const startYourBusinessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/start-your-business",
  component: StartYourBusinessGuide,
});

const startHereRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/start-here",
  component: StartHerePage,
});

const uxScenariosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ux-scenarios",
  component: UXScenarios,
});

const personasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/personas",
  component: () => (
    <Layout>
      <PersonasPage />
    </Layout>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicy,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: TermsOfUse,
});

const socialMediaGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/social-media-guide",
  component: SocialMediaGuide,
});

const cloudOutageTrackerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cloud-outage-tracker",
  component: () => (
    <Layout>
      <NYCCloudOutageTracker />
    </Layout>
  ),
});

const cloudMonitoringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cloud-monitoring",
  component: () => (
    <Layout>
      <NYCCloudOutageTracker />
    </Layout>
  ),
});

const nycResourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/nyc-resources",
  component: NycResourcesPage,
});

const quickBooksGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tool-guides/quickbooks",
  component: QuickBooksGuide,
});

const payPalGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tool-guides/paypal",
  component: PayPalGuide,
});

const hubSpotGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tool-guides/hubspot",
  component: HubSpotGuide,
});

const canvaGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tool-guides/canva",
  component: CanvaGuide,
});

const docuSignGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tool-guides/docusign",
  component: DocuSignGuide,
});

const googleWorkspaceGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tool-guides/google-workspace",
  component: GoogleWorkspaceGuide,
});

const microsoft365GuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tool-guides/microsoft-365",
  component: Microsoft365Guide,
});

const slackGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tool-guides/slack",
  component: SlackGuide,
});

const squareGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tool-guides/square",
  component: SquareGuide,
});

const stripeGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tool-guides/stripe",
  component: StripeGuide,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  guidesRoute,
  guideDetailRoute,
  workflowDetailRoute,
  dashboardRoute,
  onboardingRoute,
  adminRoute,
  contributeRoute,
  faqRoute,
  tafferAdviceRoute,
  brandingRoute,
  askAQuestionRoute,
  deliGuideRoute,
  onlineServicesGuideRoute,
  salonGuideRoute,
  restaurantGuideRoute,
  retailGuideRoute,
  poolHallGuideRoute,
  pizzaShopGuideRoute,
  fitnessStudioGuideRoute,
  bakeryGuideRoute,
  cleaningServiceRoute,
  boutiqueGuideRoute,
  startYourBusinessRoute,
  startHereRoute,
  uxScenariosRoute,
  personasRoute,
  aboutRoute,
  privacyPolicyRoute,
  termsRoute,
  socialMediaGuideRoute,
  aiJobGuidesRoute,
  plumbersGuideRoute,
  restaurantsGuideRoute,
  accountantsGuideRoute,
  dentistsGuideRoute,
  realEstateGuideRoute,
  contractorsGuideRoute,
  lawFirmsGuideRoute,
  insuranceAgentsGuideRoute,
  aiTrainingRoute,
  learnRoute,
  aiSearchPrepRoute,
  onlineSchoolingRoute,
  homeServicesRoute,
  hiringRoute,
  nycResourcesRoute,
  cloudOutageTrackerRoute,
  cloudMonitoringRoute,
  quickBooksGuideRoute,
  payPalGuideRoute,
  hubSpotGuideRoute,
  canvaGuideRoute,
  docuSignGuideRoute,
  googleWorkspaceGuideRoute,
  microsoft365GuideRoute,
  slackGuideRoute,
  squareGuideRoute,
  stripeGuideRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
