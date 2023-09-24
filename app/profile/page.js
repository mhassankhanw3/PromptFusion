"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
export default function MyProfile() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user?.id}/posts`);
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };
    if (session?.user.id) fetchPost();
  }, []);

  const handleDelete = () => {};

  const handleEdit = async () => {};
  return (
    <Profile
      name="My"
      desc="Welcome to personalized profile Page!"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      loading={loading}
      setLoading={setLoading}
    />
  );
}
