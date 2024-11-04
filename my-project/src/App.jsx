import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Todo from "./Todo";

function App() {
	return (
		<div className="flex flex-row">
			<div className="w-fit">
				<button
					data-drawer-target="default-sidebar"
					data-drawer-toggle="default-sidebar"
					aria-controls="default-sidebar"
					type="button"
					className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				>
					<span className="sr-only">Open sidebar</span>
					<svg
						className="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
					</svg>
				</button>

				<aside
					id="default-sidebar"
					className="top-0 left-0 z-40 w-fit h-screen  transition-transform -translate-x-full sm:translate-x-0"
					aria-label="Sidebar"
				>
					<div className="h-full px-4 py-4 overflow-y-auto flex items-center bg-gray-50 dark:bg-gray-800">
						<ul className="space-y-10 font-medium">
							<li>
								<a
									href="/"
									className="flex flex-col gap-2 items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
								>
									<svg
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
											stroke="#fff"
										/>
										<path d="M15 18H9" stroke="#fff" />
									</svg>
									<span className="">Home</span>
								</a>
							</li>
							<li>
								<a
									href="/todo"
									className="flex flex-col gap-2 items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
								>
									<svg
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12.37 8.87988H17.62" stroke="#FFF" />
										<path
											d="M6.38 8.87988L7.13 9.62988L9.38 7.37988"
											stroke="#FFF"
										/>
										<path d="M12.37 15.8799H17.62" stroke="#FFF" />
										<path
											d="M6.38 15.8799L7.13 16.6299L9.38 14.3799"
											stroke="#FFF"
										/>
										<path
											d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
											stroke="#FFF"
										/>
									</svg>
									<span className="">View Todo</span>
								</a>
							</li>
						</ul>
					</div>
				</aside>
			</div>

			<div className="flex-1">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/todo" element={<Todo />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
