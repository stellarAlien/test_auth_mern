import "./styles.scss";

const Logout = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className='main_container'>
				<button className='black_btn' onClick={handleLogout}>
					Logout
				</button>
		</div>
	);
};

export default Logout;
