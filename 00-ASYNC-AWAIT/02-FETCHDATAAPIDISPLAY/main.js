async function getPosts(){
  try {
    const resp = await fetch('https:jsonplaceholder.typicode.com/todos');
    const posts = await resp.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
};

async function renderPosts() {
  const posts = await getPosts();
  const firstFivePosts = posts.slice(0, 5);
  const postsList = document.getElementById('posts');
  firstFivePosts.forEach((post) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.textContent = `${post.id} - ${post.title}`;
    postsList.appendChild(listItem);
  });
}

renderPosts();
