import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

export default function Posts({posts}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="container ms-auto p-4">
                <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Posts</h1>
                <Link href='/posts/create' className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600">Create</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto shadow-lg bg-white dark:bg-neutral-800 rounded-lg">
                        <thead>
                            <tr className="text-left text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800">
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Content</th>
                                <th className="px-4 py-3">Created at</th>
                                <th className="px-4 py-3">Updated at</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.data.map((post) => (
                                <tr key={post.id} className="border-b border-neutral-100 dark:border-neutral-800">
                                    <td className="border px-4 py-2">{post.id}</td>
                                    <td className="border px-4 py-2">{post.title}</td>
                                    <td className="border px-4 py-2">{post.content}</td> {/* Corrected property name */}
                                    <td className="border px-4 py-2">{post.created_at}</td>
                                    <td className="border px-4 py-2">{post.updated_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
                    </AppLayout>
    );
}
