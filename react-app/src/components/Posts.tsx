import { useQuery } from "@tanstack/react-query";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );
  return res.json();
}

function QueryExample() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <div className="section">
      <h2>1. Intro and Setup</h2>
      <p>This is the manual version without TanStack Query.</p>

      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}

      {posts &&
        posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.body}</p>
            </CardContent>
            <CardFooter>
              <p>Post #{post.id}</p>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}

export default QueryExample;
