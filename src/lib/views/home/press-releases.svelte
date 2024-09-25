<script>
  import Carousel from 'svelte-carousel';

  const blogs = [
    {
      image: '/blogs/blog-1.jpg',
      author: 'Anne',
      date: 'Jun 14 2023',
      title: "A Beginner's guide to Data Consulting",
      description: 'From understanding the significance of quality data to implementing data-driven decision-making, we unravel the complexities of managing and optimizing your data.'
    },
    {
      image: '/blogs/blog-2.png',
      author: 'Alloys',
      date: 'Dec 16 2023',
      title: 'Advanced Techniques in Data Analysis',
      description: 'Explore advanced techniques and methodologies to extract meaningful insights from complex data sets.'
    },
    {
      image: '/blogs/blog-3.png',
      author: 'Anne',
      date: 'Aug 05 2023',
      title: 'Data Security and Privacy Best Practices',
      description: 'Learn about the best practices in data security and privacy to protect your business and client information.'
    },
  ];
</script>

<div id="blog" class="inline-container">
  <div class="heading-section">
    <div>
      <div class="title">Press Releases</div>
    </div>
  </div>
  <div class="blog-section grid-gallery">
    {#each blogs as blog, index}
      <div class="grid-item" key={index}>
        <a href="/resources/press-releases/one">
          <img src={blog.image} alt={'Case Study ' + (index + 1)} />
          <div class="overlay"></div>
          <div class="overlay-text">
            <div class="blog-heading-section">
              <div>
                <span class="author">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_291_17563)">
                    <path d="M4.5 22.2197C4.5 20.098 5.34285 18.0632 6.84315 16.5629C8.34344 15.0626 10.3783 14.2197 12.5 14.2197C14.6217 14.2197 16.6566 15.0626 18.1569 16.5629C19.6571 18.0632 20.5 20.098 20.5 22.2197H18.5C18.5 20.6284 17.8679 19.1023 16.7426 17.9771C15.6174 16.8519 14.0913 16.2197 12.5 16.2197C10.9087 16.2197 9.38258 16.8519 8.25736 17.9771C7.13214 19.1023 6.5 20.6284 6.5 22.2197H4.5ZM12.5 13.2197C9.185 13.2197 6.5 10.5347 6.5 7.21973C6.5 3.90473 9.185 1.21973 12.5 1.21973C15.815 1.21973 18.5 3.90473 18.5 7.21973C18.5 10.5347 15.815 13.2197 12.5 13.2197ZM12.5 11.2197C14.71 11.2197 16.5 9.42973 16.5 7.21973C16.5 5.00973 14.71 3.21973 12.5 3.21973C10.29 3.21973 8.5 5.00973 8.5 7.21973C8.5 9.42973 10.29 11.2197 12.5 11.2197Z" fill="#8A8A88"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_291_17563">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.219727)"/>
                    </clipPath>
                    </defs>
                    </svg>
                  {blog.author} | {blog.date}</span>
              </div>
              <div class="blog-title">
                <h6>{blog.title}</h6>
              </div>
            </div>
            <div class="blog-desc">
              {blog.description}
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
  <div class="blog-section grid-carousel">
    <div
    >
      {#each blogs as blog, index}
        <div class="grid-item" key={index}>
          <a href='/resources/press-releases/one'>
            <img src={blog} alt={'Case Study ' + (index + 1)} />
            <div class="overlay"></div>
            <div class="overlay-text">
              <div class="blog-heading-section">
                <div>
                  <span class="author">Anne | Jun 14 2023</span>
                </div>
                <div class="blog-title">
                  <h6>A Beginner's guide to Data Consulting</h6>
                </div>
              </div>
              <div class="blog-desc">
                From understanding the significance of quality data to
                implementing data-driven decision-making, we unravel the
                complexities of managing and optimizing your data.
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>

#blog {
  margin-top: 8em;
}

.heading-section {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  /* border: 1px solid red; */
}


.title {
  font-family: var(--font-family-secondary), "Source Sans 3", sans-serif;
  font-size: 2.5em;
  font-weight: 600;
  /* margin-left: -20%; */
}


.blog-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
}

.grid-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 2em;
  /* border: 1px solid red; */
  margin-left: -2%;
}

.grid-gallery .grid-item {
  position: relative;
  /* background-color: #efefef; */
  overflow: hidden;
  border: inherit;
  border-radius: 5px;
  max-width: 500px;
  /* border: 1px solid red; */
  /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6); */
}

.grid-gallery .grid-item:hover {
  border: 1px solid var(--gray-500);
}

.grid-gallery .grid-item img {
  width: 100%;
  height: 45%;
  object-fit: fill;
  transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.grid-gallery .grid-item:hover img {
  transform: scale(1.1);
}

.grid-gallery .grid-item a {
  cursor: pointer;
}

.grid-gallery .grid-item .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 47%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.5s;
}

.grid-gallery .grid-item:hover .overlay {
  opacity: 1;
}

.grid-gallery .grid-item .overlay-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55%;
  color: white;
  padding: 1em;
}

.author {
  color: #8A8A88;
  font-size: 1em;
  font-weight: bold;
  display: inline-flex; /* Add this */
  align-items: center; /* Add this */
  gap: 0.5em; /* Optional: Add some space between the SVG and text */
}

.blog-heading-section {
  margin-top: 1em;
}

.grid-gallery .grid-item:nth-child(1) {
  grid-column: 1 / 2;
  grid-row: 1 / span 2;
}

.grid-gallery .grid-item:nth-child(2) {
  grid-column: 2 / 3;
  grid-row: 1 / span 2;
}

.grid-gallery .grid-item:nth-child(3) {
  grid-column: 3 / 4;
  grid-row: 1 / span 2;
}

.blog-title {
  margin-block: 1em;
}

.blog-title h6 {
  font-size: 1.3em;
  font-weight: 400;
  color: var(--blog-heading);
}

.blog-desc {
  color: var(--paragraph-text)
}

.grid-carousel {
  display: none;
}

.grid-gallery .grid-item img, .grid-carousel .grid-item img {
  object-fit: cover; /* Change from fill to cover */
  max-height: 250px; /* Example max-height, adjust as needed */
}

.grid-gallery .grid-item, .grid-carousel .grid-item {
  min-height: 400px; /* Ensure there's enough space for text, adjust as needed */
}

/* Media Queries */
@media (max-width: 1024px) {
  .grid-gallery {
    display: none;
  }

  .grid-carousel {
    display: block;
  }

  .grid-carousel .grid-item {
    width: 100%;
    min-width: 400px;
    max-height: 400px;
    margin-bottom: 2em;
    padding: 1em;
    background-color: #efefef;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
  }

  .grid-carousel .grid-item img {
    width: 100%;
    height: 50%;
    object-fit: fill;
    border-radius: 10px;
  }

  .grid-carousel a {
    text-decoration: none;
  }

}

@media (max-width: 768px) {

  .heading-section {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .grid-gallery {
    display: none;
  }

  .grid-carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
  }

  .grid-carousel a {
    text-decoration: none;
  }

  .grid-carousel .grid-item {
    width: 100%;
    /* max-width: 600px; */
    margin-bottom: 2em;
    padding: 1em;
    background-color: #efefef;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
    /* border: 1px solid red; */
  }

  .grid-carousel .grid-item img {
    width: 100%;
    height: auto;
    object-fit: fill;
    border-radius: 10px;
  }

  .grid-gallery .grid-item img, .grid-carousel .grid-item img {
    max-height: 200px; /* Smaller screens, smaller images */
  }
  .grid-gallery .grid-item, .grid-carousel .grid-item {
    min-height: 350px; /* Adjust container size accordingly */
  }
}

@media (max-width: 480px) {

  .heading-section {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 1.2em;
  }


  .grid-gallery {
    display: none;
  }

  .grid-carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
  }

  .grid-carousel a {
    text-decoration: none;
  }

  .grid-carousel .grid-item {
    width: 100%;
    /* max-width: 400px; */
    margin-bottom: 2em;
    padding: 1em;
    background-color: #efefef;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
    /* border: 1px solid red; */
  }

  .grid-carousel .grid-item img {
    width: 100%;
    height: auto;
    object-fit: fill;
    border-radius: 10px;
  }

  .grid-carousel .grid-item .overlay-text {
    font-size: 1em;
  }

  .grid-gallery .grid-item img, .grid-carousel .grid-item img {
    max-height: 150px; /* Even smaller screens, even smaller images */
  }
  .grid-gallery .grid-item, .grid-carousel .grid-item {
    min-height: 300px; /* Adjust container size accordingly */
  }

}
</style>
