import { StoreShell } from '@/components/shared/StoreShell';
import type { BlogPost } from '@/lib/store-data';
import { BlogDetailHero } from './sections/BlogDetailHero';
import { BlogArticle } from './sections/BlogArticle';
import PageShell from '../shared/PageShell';

export function BlogDetailPage({ post }: { post: BlogPost }) {
  return (

     <PageShell>
    <StoreShell accent="from-emerald-950 via-emerald-800 to-amber-400">
      <BlogDetailHero post={post} />
      <BlogArticle post={post} />
    </StoreShell>
    </PageShell>
  );
}
