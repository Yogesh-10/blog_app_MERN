import './Post.css'

const Post = ({ img }) => {
	return (
		<div className='post'>
			<img className='postImg' src={img} alt='' />
			<div className='postInfo'>
				<div className='postCats'>
					<span className='postCat'>
						<li className='link' to='/posts?cat=Music'>
							Music
						</li>
					</span>
					<span className='postCat'>
						<li className='link' to='/posts?cat=Music'>
							Life
						</li>
					</span>
				</div>
				<span className='postTitle'>
					<li to='/post/abc' className='link'>
						Lorem ipsum dolor sit amet
					</li>
				</span>
				<hr />
				<span className='postDate'>1 hour ago</span>
			</div>
			<p className='postDesc'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
				officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
				fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
				atque, exercitationem quibusdam, reiciendis odio laboriosam?
			</p>
		</div>
	)
}
export default Post