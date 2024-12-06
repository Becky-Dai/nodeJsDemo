const posts = [
    {id:1,tittle:'Post one'},
    {id:2,tittle:'Post two'},
];

const getPosts = () => posts;
export default getPosts ;//用df引入

export const getPostsLength = () => posts.length;//直接引入