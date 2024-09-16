import React, { useState, useEffect, useCallback } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import axios from 'axios';
// import Images from '../components/images/Images';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import IndividualImage from '../components/images/IndividualImage';
import Box from '@mui/material/Box';

const PostForm = () => {
  // Unsplash image API
  const [image, setImage] = useState([]);
  const [imageAlt, setImageAlt] = useState('');
  const fetchAPI = async () => {
    const response = await axios.get(
      'https://api.unsplash.com/search/photos?query=travel&client_id=Ow4cBXa2ga24IZ6IaLXjoz7xTG35jsPyRhxzkl8xJ7E'
    );
    const data = await response.data;
    const randomIndex = Math.floor(Math.random() * data.results.length);
    const newImage = data.results[randomIndex];
    console.log(newImage);

    setImage(newImage.urls.small);
    setImageAlt(newImage.alt_description);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  // textinput  state  variables
  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [body, setBody] = useState('');

  const [addPost, { error }] = useMutation(ADD_POST);

  // form submit function
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addPost({
        variables: { title, country, city, body, image },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
    // alert('Your post has been submitted');
    setTitle('');
    setCountry('');
    setCity('');
    setBody('');
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <ImageList
          id="image-list"
          sx={{
            // width: 100,
            // height: 100,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ImageListItem>
            <div
              className="photos"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></div>
            {/* <Button onClick={fetchAPI} variant="contained" size="small">
              Click
            </Button> */}
            <div className="photos">
              <img src={image} alt={imageAlt}></img>
            </div>
          </ImageListItem>
        </ImageList>
      </Container>
      {/* Input Form */}
      <FormControl
        sx={{
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextField sx={{ input: { color: 'white' } }}
          input={title}
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter A Title..."
          id="standard-basic"
          variant="standard"
        />
        <TextField sx={{ input: { color: 'white' } }}
          input={country}
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          type="text"
          placeholder="Provide A Country"
          id="standard-basic"
          variant="standard"
        />
        <TextField sx={{ input: { color: 'white' } }}
          input={city}
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Provide A City"
          id="standard-basic"
          variant="standard"
        />

        <TextField 
          input={body}
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Enter a post"
          sx={{ p: 0.5,  }}
          id="outlined-multiline-static"
          multiline
          rows={4}
        />
      <Button variant="contained" size="small" onClick={handleFormSubmit}>
        Submit
      </Button>
      </FormControl>
    </>
  );
};

export default PostForm;
