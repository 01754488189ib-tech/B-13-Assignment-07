import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), 'public', 'data.json');

    try {
        const jsonData = fs.readFileSync(filePath, 'utf8');
        const friends = JSON.parse(jsonData);

        return friends.map((friend) => ({
            blog: friend.id.toString(),
        }));
    } catch (error) {
        console.error("Error reading data.json for static params:", error);
        return [];
    }
}

export default function BlogLayout({ children }) {
    return <>{children}</>;
}