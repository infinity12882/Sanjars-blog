import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LangLayout from "./layouts/LangLayout";
import { useLangSync } from "./hooks/useLangSync";
import { DEFAULT_LANGUAGE } from "./data/siteConfig";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500/30 border-t-cyan-500" />
    </div>
  );
}

// Thin wrappers so each page receives the validated `lang` from the URL
// without every page needing to call useLangSync itself.
function Page({ Component }) {
  const { lang } = useLangSync();
  return (
    <Suspense fallback={<PageFallback />}>
      <Component lang={lang} />
    </Suspense>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />

      <Route path="/:lang" element={<LangLayout />}>
        <Route index element={<Page Component={Home} />} />
        <Route path="about" element={<Page Component={About} />} />
        <Route path="blog" element={<Page Component={Blog} />} />
        <Route path="blog/:slug" element={<Page Component={BlogPost} />} />
        <Route path="projects" element={<Page Component={Projects} />} />
        <Route path="projects/:slug" element={<Page Component={ProjectDetail} />} />
        <Route path="contact" element={<Page Component={Contact} />} />
        <Route path="*" element={<Page Component={NotFound} />} />
      </Route>

      <Route path="*" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
    </Routes>
  );
}
