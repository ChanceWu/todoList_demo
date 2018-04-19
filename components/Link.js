const Link = ({active, children, onClick}) => {
	if(active){
		return <span>{children}</span>
	}
	render(
		<a href="#"
			onClick={e=>{
				e.preventDefault()
				onClick()
			}}>
		</a>
	)
}