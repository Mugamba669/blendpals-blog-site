"use client";

import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeaturedPostProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    slug: string;
  };
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative h-64 lg:h-full min-h-[300px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              {post.title}
            </h2>
            <p className="text-muted-foreground">{post.excerpt}</p>
            <Button asChild>
              <Link href={`/blog/${post.slug}`}>Read More</Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}