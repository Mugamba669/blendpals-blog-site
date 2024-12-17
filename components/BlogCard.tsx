"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    slug: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="p-0">
          <div className="relative w-full h-48">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
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
        </CardFooter>
      </Card>
    </Link>
  );
}