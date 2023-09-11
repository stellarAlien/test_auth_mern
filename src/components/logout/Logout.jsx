import "./styles.scss";

const Logout = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className='main_container'>
				<button className='white_btn' onClick={handleLogout}>
					Logout
				</button>
		</div>
	);
};

export default Logout;
