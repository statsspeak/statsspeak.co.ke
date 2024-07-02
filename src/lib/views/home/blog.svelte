<script>
  import Carousel from 'svelte-carousel';

  const blogs = [
    '/blogs/blog-1.jpg',
    '/blogs/blog-2.png',
    '/blogs/blog-3.png',
  ];
</script>

<div id="blog" class="inline-container">
  <div class="heading-section">
    <div>
      <div class="title">Our Blog</div>
      <h4>Your guide to Software and Data Consulting Excellence</h4>
    </div>
    <div class="description">
      <p>Our Resources center is a gateway to a world of insights, innovations and strategies
        that will empower your business to harness full potential of data. We transcend the boundaries
        of conventional data and software solutions.
      </p>
    </div>
  </div>
  <div class="blog-section grid-gallery">
    {#each blogs as blog, index}
      <div class="grid-item" key={index}>
        <a href={blog}>
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
  <div class="blog-section grid-carousel">
    <Carousel
      autoplay
      itemsToShow={1}
      loop={true}
      arrows={false}
      pagination={true}
      infinite={true}
    >
      {#each blogs as blog, index}
        <div class="grid-item" key={index}>
          <a href={blog}>
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
    </Carousel>
  </div>
</div>

<style>
.heading-section {
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title {
  font-family: var(--font-family-secondary), "Source Sans 3", sans-serif;
  color: var(--secondary-500);
  margin-bottom: 24px;
}

.description {
  margin-top: 1em;
}

.blog-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1em;
  padding: 50px 20px;
}

.grid-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 2em;
}

.grid-gallery .grid-item {
  position: relative;
  /* background-color: #efefef; */
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
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
  background: rgba(0, 0, 0, 0.6);
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

.blog-desc {
  color: #575756;
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
    max-width: 600px;
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
    text-align: center;
  }

  .description {
    margin-left: 0;
    margin-top: 1em;
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
    max-width: 600px;
    margin-bottom: 2em;
    padding: 1em;
    background-color: #efefef;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
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
  .title {
    font-size: 1.2em;
  }

  .description {
    font-size: 1em;
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
    max-width: 400px;
    margin-bottom: 2em;
    padding: 1em;
    background-color: #efefef;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
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
