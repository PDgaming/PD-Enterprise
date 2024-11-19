type Post = {
    post_id: number;
    title: string;
    slug: string;
    content: string;
    author_id: number | null;
    created_at: string;
  };

export type { Post };