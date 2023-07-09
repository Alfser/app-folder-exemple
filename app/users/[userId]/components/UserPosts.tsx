import { use } from "react";

type Props = {
    promise: Promise<Posts[]>
}

export default function UserPosts({ promise }: Props) {
    const posts = use(promise);
    const content = posts.map((post) => {
        return (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <br />
            </article>
        );
    })
    return (
    <>
        {content}
    </>
    )
}
