const BlogList = ({ blogs, titulo, handleEliminarBlog }) => {



	return (
		<div className="blog-list">
			<h2>{titulo}</h2>
			{blogs.map((blog) =>

				<div className="blog-preview" key={blog.id}>

					<h2>{blog.titulo}</h2>
					<p>Escrito por {blog.autor}</p>
					<button onClick={ () => handleEliminarBlog(blog.id)}>Eliminar blog</button>
				</div>
			)}
		</div>
	);
}

export default BlogList;