import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import FeaturedPost from "@/components/FeaturedPost";
import { Button } from "@/components/ui/button";

export default function Home() {
  const featuredPost = {
    title: "Building Modern Web Applications with Next.js 14",
    excerpt: "Explore the latest features and best practices in Next.js 14 for building scalable web applications.",
    date: "2024-03-25",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    slug: "building-modern-web-applications"
  };

  const recentPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Discover emerging trends and technologies shaping the future of web development.",
      date: "2024-03-24",
      author: "Jane Smith",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      slug: "future-of-web-development"
    },
    {
      title: "Mastering TypeScript in 2024",
      excerpt: "Learn advanced TypeScript concepts and patterns for better code quality.",
      date: "2024-03-23",
      author: "Mike Johnson",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      slug: "mastering-typescript"
    },
    {
      title: "Responsive Design Best Practices",
      excerpt: "Essential guidelines for creating truly responsive web experiences.",
      date: "2024-03-22",
      author: "Sarah Wilson",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      slug: "responsive-design-best-practices"
    }
  ];

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-tight">Latest Posts</h1>
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              View all posts <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <FeaturedPost post={featuredPost} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}