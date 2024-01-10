// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";
// const Inicio = () => {

// 	const [nombre, setNombre] = useState("Adria");
// 	const [edad, setEdad] = useState(20);

// 	const handleClick = () => {

// 		setNombre("Pedro");
// 		setEdad(25);
// 	}

// 	const handleReset = () => {
// 		setNombre("Adria");
// 		setEdad(20);
// 	}


// 	return (
// 		<div className="home">
// 			<h2>Página de inicio</h2>
// 			<p>{ nombre } tiene { edad } años</p>
// 			<button onClick={handleClick }>Dale!</button>
// 			<button onClick={handleReset }>Reset!</button>
// 		</div>
// 	);
// }

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Inicio = () => {

	const [blogs, setBlogs] = useState([
		{ titulo: "Mi nueva web", body: "Lorem ipsum,,,", autor: "Antonio", id: 1 },
		{ titulo: "Fiesta del Ramis", body: "Mucha paella,,,", autor: "Enrique", id: 2 },
		{ titulo: "GP de belgica", body: "Round 15,,,", autor: "Lobato", id: 3 },
		{ titulo: "GP de belgica", body: "Round 22", autor: "Jorge", id: 4 },
	])

	const [nombre, setNombre] = useState("Adrià");

	const handleEliminarBlog = (id) => {
		const nuevoBlog = blogs.filter(blog => blog.id !== id);
		setBlogs(nuevoBlog);
	}

	useEffect(() => {
		console.log("Using effect en marxando");
		console.log(blogs);
	}, [handleEliminarBlog]);

	return (
		<div className="home">
			<BlogList blogs = { blogs } titulo = "Listado completo de blogs" handleEliminarBlog = { handleEliminarBlog }/>
			{/* <BlogList blogs = { blogs.filter(blog => blog.titulo === 'GP de belgica') } titulo = "Blog F1" /> */}
			{/* <BlogList blogs = { blogs.filter(blog => blog.autor === 'Enrique') } titulo = "Blogs de Enrique" /> */}
			<p>{ nombre }</p>
			<button onClick={() => setNombre("Jose") }>Cambio de nombre</button>
		</div>
	);
}

export default Inicio;


// useEffect