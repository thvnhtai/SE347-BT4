import React, { useState, useEffect } from "react";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [newTodoTitle, setNewTodoTitle] = useState("");

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => {
		setIsModalOpen(false);
		setNewTodoTitle("");
	};

	const addTodo = () => {
		if (newTodoTitle.trim()) {
			setTodos([...todos, { title: newTodoTitle, completed: false }]);
			closeModal();
		}
	};

	useEffect(() => {
		if (isModalOpen) {
			const modal = document.querySelector(".opacity-0");
			if (modal) {
				setTimeout(() => modal.classList.add("opacity-100"), 50);
			}
		}
	}, [isModalOpen]);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await fetch("https://dummyjson.com/todos");
				const data = await response.json();
				const formattedTodos = data.todos.map((todo) => ({
					title: todo.todo,
					completed: todo.completed,
				}));
				setTodos(formattedTodos);
			} catch (error) {
				console.error("Failed to fetch todos:", error);
			}
		};

		fetchTodos();
	}, []);

	return (
		<div className="min-h-screen bg-gray-100 flex justify-center p-6">
			<div className="w-full bg-white p-4 rounded-lg shadow-lg">
				<div className="flex flex-row justify-between mb-2">
					<h1 className="flex-1 text-2xl font-bold text-gray-800">Todo List</h1>
					<button
						onClick={openModal}
						className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition duration-300 ease-in-out hover:bg-blue-700"
					>
						Add Todo
					</button>
				</div>
				<table className="w-full border-collapse border border-gray-200">
					<thead className="bg-gray-100">
						<tr>
							<th className="border border-gray-300 p-2 text-center">Title</th>
							<th className="border border-gray-300 p-2 text-center">
								Completed
							</th>
							<th className="border border-gray-300 p-2 text-center">Delete</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo, index) => (
							<tr key={index} className="border-t border-gray-200">
								<td
									className={`p-2 border border-gray-300 text-left ${
										todo.completed ? "line-through text-gray-500" : ""
									}`}
								>
									{todo.title}
								</td>
								<td className="p-2 border border-gray-300 text-center">
									<input
										type="checkbox"
										checked={todo.completed}
										onChange={() =>
											setTodos(
												todos.map((item, i) =>
													i === index
														? { ...item, completed: !item.completed }
														: item
												)
											)
										}
										className="form-checkbox h-5 w-5 text-blue-600"
									/>
								</td>
								<td className="p-2 border border-gray-300 text-center">
									<button
										onClick={() =>
											setTodos(todos.filter((_, i) => i !== index))
										}
										className="p-2 hover:bg-gray-100 rounded-md transition-all duration-300 ease-in-out"
									>
										<svg
											width="24px"
											height="24px"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20.5001 6H3.5"
												stroke="#000000"
												strokeWidth={2}
											/>
											<path
												d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
												stroke="#000000"
												strokeWidth={2}
											/>
											<path
												d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
												stroke="#000000"
												strokeWidth={2}
											/>
										</svg>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				{isModalOpen && (
					<div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
						<div className="bg-white p-6 rounded-lg shadow-lg w-96 opacity-0 transition-opacity duration-300 ease-in-out">
							<h2 className="text-xl font-bold mb-4">Add New Todo</h2>
							<input
								type="text"
								value={newTodoTitle}
								onChange={(e) => setNewTodoTitle(e.target.value)}
								placeholder="Todo title"
								className="w-full p-2 border border-gray-300 rounded mb-4"
							/>
							<div className="flex justify-end">
								<button
									onClick={closeModal}
									className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
								>
									Cancel
								</button>
								<button
									onClick={addTodo}
									className="bg-blue-600 text-white px-4 py-2 rounded"
								>
									Add
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Todo;
