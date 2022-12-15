import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Post.css'
import Modal from 'react-bootstrap/Modal';
import Comment from '../comment/Comment.component';
import { ADD_REACTION, ADD_COMMENT } from '../../utils/mutations';
import { useMutation } from "@apollo/client";

// Component for rendering individual posts
const Post = ({ post }) => {
	// destructure post object into component varibles
	const { 
		_id,
		title, 
		body,
		userId,
		username, 
		city,
		image, 
		country, 
		comments, 
		reactions, 
		createdAt 
	} = post

	
	// local stateful variables
	const [likeCount, setLikeCount] = useState(0);
	const [dislikeCount, setDislikeCount] = useState(0);
	const [likeClicked, setLikeClicked] = useState(false);
	const [disikeClicked, setDisikeClicked] = useState(false);
	const [commentCount, setCommentCount] = useState(0);
	const [show, setShow] = useState(false);
	
	// use mutations
	const [addReaction] = useMutation(ADD_REACTION);
	const [addComment] = useMutation(ADD_COMMENT);
	// sets the likeCount dislikeCount and commentCount variables on mount
	useEffect(() => {
		// get like count from length of filtered array
		const likes = reactions.filter(reaction => reaction.reactionType === 'like').length;
		const dislikes = reactions.filter(reaction => reaction.reactionType === 'dislike').length;
		
		// set counts
		setCommentCount(comments.length);
		setLikeCount(likes);
		setDislikeCount(dislikes);
		}, [likeCount, dislikeCount, commentCount]);

	// event handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	const handleIncrement = async (e) => {
		if (e.target.classList.contains("like") && !likeClicked) {
			setLikeClicked(true);
			const mutationResponse = await addReaction({
				variables: {
					postId: _id,
					reactionType: 'like',
				}
			});
			setLikeCount(0);
		} else if (e.target.classList.contains("dislike") && !disikeClicked) {
			console.log('dislike')
			setDisikeClicked(true);
			const mutationResponse = await addReaction({
				variables: {
					postId: _id,
					reactionType: 'dislike',
				}
			});
			setDislikeCount(0);
		}
	}

	return (
		<>
			<Card id="post-card">
				<Link to={`/profiles/${username}`} id="username">{username}</Link>
				<div className="post-image">
					<Card.Img variant="top" src={image} />
				</div>
				<Card.Body>
					<Card.Title id="card-title">{title}</Card.Title>
					<Card.Text id="card-location">
						<span>{city}, {country}</span>		
					</Card.Text>
					<Card.Text id="card-text">
						<span>{body}</span>
					</Card.Text>
					<Card.Text id="card-date">
						<span>{createdAt}</span>
					</Card.Text>
					<div id='btn-container' className='d-flex justify-content-evenly'>
						<Button variant="primary container-fluid" onClick={handleShow}>
							{commentCount} Comments
						</Button>
						<Button className="like" variant="primary" onClick={handleIncrement}>
							{likeCount} Likes
						</Button>
						<Button className="dislike" variant="primary" onClick={handleIncrement}>
							{dislikeCount} Dislikes
						</Button>
					</div>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header className="bg-primary" closeButton>
					<Modal.Title className='text-light'>Comments</Modal.Title>
				</Modal.Header>
				<Modal.Body className='bg-secondary'>
					{comments 
						? comments.map(comment => <Comment key={comment._id} comment={comment} />)
						: <p>No Comments yet</p>}
				</Modal.Body>
				<Modal.Footer className='bg-primary'>
					<Button variant="lighta" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
};

export default Post;