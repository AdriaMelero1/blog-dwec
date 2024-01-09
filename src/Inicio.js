
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

import { useState } from "react";

const Inicio = () => {

	const [blogs, setBlogs] = useState([
		{ titulo: "Mi nueva web", body: "Lorem ipsum,,,", autor: "Antonio", id: 1 },
		{ titulo: "Fiesta del Ramis", body: "Mucha paella,,,", autor: "Enrique", id: 2 },
		{ titulo: "GP de belgica", body: "Round 15,,,", autor: "Lobato", id: 3 },

	])

	return (
		<div className="home">
			{blogs.map((blog) =>
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.titulo}</h2>
					<p>Escrito por {blog.autor}</p>
				</div>
			)}
		</div>
	);
}

export default Inicio;
