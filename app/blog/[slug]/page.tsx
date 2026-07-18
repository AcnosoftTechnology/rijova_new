import { notFound } from 'next/navigation';
import { BlogDetailPage } from '@/components/blog-detail/BlogDetailPage';
import { blogPosts } from '@/lib/store-data';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailPage post={post} />;
}
